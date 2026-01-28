/* empiric_abx_regimen_links.js
   Purpose:
   - Turn antibiotic names inside regimen text into hyperlinks to antibiotic.html?name=...
   - Works across ALL pages (BSI + SSTI + IAI), not just #bsi-recommended-text / #bsi-alternative-text
   - Automatically re-runs when content changes (tabs, accordions, marker clicks)
*/

(function () {
  // ---------- Helpers ----------
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function buildAntibioticMap() {
    // Pull names/detailsPage links from bacteriaData if present.
    // bacteriaData is defined in bacteria-script.js (global lexical binding), and contains detailsPage like:
    // antibiotic.html?name=Levofloxacin, etc.
    const map = new Map();

    try {
      if (typeof bacteriaData !== "undefined" && Array.isArray(bacteriaData)) {
        bacteriaData.forEach((bug) => {
          const lists = []
            .concat(bug?.preferredAntibiotics || [])
            .concat(bug?.allAntibiotics || []);
          lists.forEach((abx) => {
            if (!abx?.name) return;
            const name = String(abx.name).trim();
            if (!name) return;

            // Prefer the explicit detailsPage if provided
            const href =
              abx.detailsPage && String(abx.detailsPage).trim()
                ? String(abx.detailsPage).trim()
                : `antibiotic.html?name=${encodeURIComponent(name)}`;

            if (!map.has(name)) map.set(name, href);
          });
        });
      }
    } catch (e) {
      // ignore
    }

    // Also add keys from antibioticDosingData if present (covers antibiotics even if not in bacteriaData lists)
    try {
      if (typeof antibioticDosingData !== "undefined" && antibioticDosingData) {
        Object.keys(antibioticDosingData).forEach((name) => {
          const clean = String(name).trim();
          if (!clean) return;
          if (!map.has(clean)) {
            map.set(clean, `antibiotic.html?name=${encodeURIComponent(clean)}`);
          }
        });
      }
    } catch (e) {
      // ignore
    }

    return map;
  }

  const abxMap = buildAntibioticMap();

  // If we can’t build any map, do nothing
  if (!abxMap || abxMap.size === 0) return;

  // Build a single regex that matches any antibiotic name (case-insensitive)
  // Sort longest-first so "Amoxicillin-Clavulanate" matches before "Amoxicillin"
  const names = Array.from(abxMap.keys()).sort((a, b) => b.length - a.length);
  const alt = names.map(escapeRegExp).join("|");
  const anyNameRe = new RegExp(`(${alt})`, "gi");

  function isAlphaNum(ch) {
    return /[A-Za-z0-9]/.test(ch || "");
  }

  function shouldAcceptBoundary(text, start, end) {
    const before = start > 0 ? text[start - 1] : "";
    const after = end < text.length ? text[end] : "";
    // Accept if not embedded inside a larger word/number
    return !isAlphaNum(before) && !isAlphaNum(after);
  }

  function linkifyPlainTextToHTML(text) {
    if (!text) return "";

    let out = "";
    let lastIndex = 0;

    anyNameRe.lastIndex = 0;
    let match;

    while ((match = anyNameRe.exec(text)) !== null) {
      const matchedText = match[0];
      const start = match.index;
      const end = start + matchedText.length;

      // boundary check (prevents weird partial matches inside words)
      if (!shouldAcceptBoundary(text, start, end)) continue;

      out += escapeHTML(text.slice(lastIndex, start));

      // Find canonical name from map (case-insensitive match)
      const canonical = findCanonicalName(matchedText);
      const href = abxMap.get(canonical) || `antibiotic.html?name=${encodeURIComponent(canonical)}`;

      out += `<a class="abx-link" href="${href}">${escapeHTML(matchedText)}</a>`;
      lastIndex = end;
    }

    out += escapeHTML(text.slice(lastIndex));
    return out;
  }

  function findCanonicalName(matched) {
    const lower = String(matched).toLowerCase();
    for (const k of abxMap.keys()) {
      if (k.toLowerCase() === lower) return k;
    }
    // fallback
    return String(matched).trim();
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function linkifyElement(el) {
    // Only linkify "plain text" elements (no nested HTML structure),
    // because rebuilding HTML would delete child elements.
    if (!el) return;
    if (el.children && el.children.length > 0) return;

    const currentText = el.textContent || "";
    const prevText = el.dataset.linkifiedText || "";

    // If nothing changed, skip
    if (currentText === prevText) return;

    // Save snapshot BEFORE we convert
    el.dataset.linkifiedText = currentText;

    // Convert
    el.innerHTML = linkifyPlainTextToHTML(currentText);
  }

  function linkifyAll() {
    // Apply to any regimen-ish text on these pages:
    // - all <p> and <li> inside .bsi-page (covers BSI + SSTI + IAI pages you built)
    document.querySelectorAll(".bsi-page p, .bsi-page li").forEach(linkifyElement);
  }

  // Run once on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", linkifyAll);
  } else {
    linkifyAll();
  }

  // Re-run automatically whenever the page changes (tab clicks, accordions, etc.)
  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      linkifyAll();
    });
  };

  const obs = new MutationObserver(schedule);
  obs.observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
  });

  // Optional: basic styling (won’t break your theme)
  const style = document.createElement("style");
  style.textContent = `
    .abx-link { text-decoration: underline; }
    .abx-link:hover { opacity: 0.85; }
  `;
  document.head.appendChild(style);
})();

