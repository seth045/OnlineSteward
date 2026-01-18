// empiric_abx_regimen_links.js
// Global: turns antibiotic names inside “First/Alternative treatment regimen” into links

(function () {
  function norm(s) {
    return (s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  function getDosingData() {
  // works when dosing data is declared as: const antibioticDosingData = {...}
  if (typeof antibioticDosingData !== "undefined") return antibioticDosingData;

  // fallback if you ever attach it to window later
  return window.antibioticDosingData || window.ANTIBIOTIC_DOSING_DATA || null;
}


  function resolveKey(displayName) {
    const data = getDosingData();
    if (!data) return displayName; // still link even if we can't map

    const target = norm(displayName);
    const keys = Object.keys(data);

    // exact normalized match
    let hit = keys.find((k) => norm(k) === target);
    if (hit) return hit;

    // fallback: partial containment
    hit = keys.find((k) => norm(k).includes(target) || target.includes(norm(k)));
    return hit || displayName;
  }

  function makeLink(displayText, keyForUrl) {
    const a = document.createElement("a");
    a.className = "abx-link";
    a.textContent = displayText;

    // Always provide a real href so it navigates even if JS click handler fails
    a.href = `antibiotic.html?name=${encodeURIComponent(keyForUrl)}`;
    a.dataset.abx = keyForUrl;

    return a;
  }

  function linkifyRegimenLists(root = document) {
    const items = Array.from(root.querySelectorAll(".acc-item"));
    if (!items.length) return;

    const regimenSections = items.filter((item) => {
      const label = item.querySelector(".acc-label")?.textContent || "";
      return /treatment regimen/i.test(label);
    });

    regimenSections.forEach((section) => {
      section.querySelectorAll(".acc-content li").forEach((li) => {
        const text = (li.textContent || "").trim();
        if (!text) return;

        // Split: prefix (e.g., "Mild infection:"), abxPart, suffix (" for ...")
        let prefix = "";
        let rest = text;

        const colonIdx = text.indexOf(":");
        if (colonIdx !== -1) {
          prefix = text.slice(0, colonIdx + 1) + " ";
          rest = text.slice(colonIdx + 1).trim();
        }

        let abxPart = rest;
        let suffix = "";

        const idx = rest.toLowerCase().indexOf(" for ");
        if (idx !== -1) {
          abxPart = rest.slice(0, idx).trim();
          suffix = rest.slice(idx); // includes " for ..."
        }

        // Split combos like "Ceftriaxone + Metronidazole"
        const tokens = abxPart.split(/\s*\+\s*/).map((t) => t.trim()).filter(Boolean);

        // Clear and rebuild the LI safely (no inline onclick)
        li.innerHTML = "";
        if (prefix) li.append(document.createTextNode(prefix));

        tokens.forEach((t, i) => {
          const key = resolveKey(t);
          li.append(makeLink(t, key));
          if (i < tokens.length - 1) li.append(document.createTextNode(" + "));
        });

        if (suffix) li.append(document.createTextNode(suffix));
      });
    });
  }

  // One click handler for all abx links (event delegation)
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.abx-link");
    if (!a) return;

    // If your navigateToAntibiotic() exists, use it (same behavior as pathogen pages)
    if (typeof window.navigateToAntibiotic === "function") {
      e.preventDefault();
      window.navigateToAntibiotic(a.dataset.abx || a.textContent.trim());
    }
    // otherwise, allow normal navigation via href
  });

  document.addEventListener("DOMContentLoaded", () => linkifyRegimenLists(document));
  window.linkifyRegimenLists = linkifyRegimenLists; // optional re-run hook
})();








// ==========================================
// BSI: linkify regimen text inside BSI accordions (CACHED + NO OBSERVER)
// ==========================================
(function () {
  // Cache so we don't rebuild a giant regex on every click
  let CACHE = null;

  function norm(s) {
    return (s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  function getDosingData() {
    // Your dosing data is defined as: const antibioticDosingData = {...}
    if (typeof antibioticDosingData !== "undefined") return antibioticDosingData;

    // fallback if you ever attach it to window
    return window.antibioticDosingData || window.ANTIBIOTIC_DOSING_DATA || null;
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function getCache() {
    if (CACHE) return CACHE;

    const data = getDosingData();
    if (!data) return null;

    const keys = Object.keys(data);

    // map normalized -> canonical key
    const keyMap = new Map(keys.map((k) => [norm(k), k]));

    // Build one regex that matches any key, tolerant of spaces/slashes/hyphens
    const patterns = keys
      .map((name) => {
        const tokens = name
          .split(/[\s\/-]+/)
          .filter(Boolean)
          .map(escapeRegExp);
        if (!tokens.length) return null;
        return tokens.join("[\\s\\/\\-]+");
      })
      .filter(Boolean)
      .sort((a, b) => b.length - a.length);

    if (!patterns.length) return null;

    const rx = new RegExp(`\\b(${patterns.join("|")})\\b`, "gi");

    CACHE = { rx, keyMap };
    return CACHE;
  }

  function linkifyParagraph(p) {
    if (!p) return;

    const raw = (p.textContent || "").trim();
    if (!raw) return;

    // If it's already linkified, don't touch it
    if (p.querySelector("a.abx-link")) return;

    const cached = getCache();
    if (!cached) return;

    const { rx, keyMap } = cached;

    const html = raw.replace(rx, (match) => {
      const canonical = keyMap.get(norm(match)) || match;
      return `<a class="abx-link" href="antibiotic.html?name=${encodeURIComponent(canonical)}">${match}</a>`;
    });

    p.innerHTML = html;
  }

  // This is what script.js calls after marker changes
  window.linkifyBsiRegimens = function () {
    if (!document.body.classList.contains("bsi-page")) return;
    linkifyParagraph(document.getElementById("bsi-recommended-text"));
    linkifyParagraph(document.getElementById("bsi-alternative-text"));
  };

  // Run once on load (marker click will re-run it)
  document.addEventListener("DOMContentLoaded", () => {
    window.linkifyBsiRegimens();
  });
})();
