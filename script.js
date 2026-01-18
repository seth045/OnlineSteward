// Simple navigation helpers used across the app
function goTo(page) {
  window.location.href = page;
}

function goHome() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // ========= ACCORDION BEHAVIOR (all pages) =========
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      if (!content) return;

      content.classList.toggle("open");

      const expanded = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", (!expanded).toString());
    });
  });

  // ========= BLOODSTREAM INFECTION CLUSTER PAGES =========
  const clusterId = document.body.dataset.bsiCluster;
  const markerButtons = document.querySelectorAll("[data-bsi-marker]");

  if (clusterId && markerButtons.length) {
    const markerLabelSpan = document.getElementById("bsi-marker-label");
    const recText = document.getElementById("bsi-recommended-text");
    const altText = document.getElementById("bsi-alternative-text");
    const altOptionsWrap = document.getElementById("bsi-alt-options");
    const altLowRisk = document.getElementById("bsi-alt-lowrisk");
    const altIntolerance = document.getElementById("bsi-alt-intolerance");
    // NEW: phased regimen blocks (Induction / Consolidation / Maintenance)
    const recPhasesWrap = document.getElementById("bsi-rec-phases");
    const recInduction = document.getElementById("bsi-rec-induction");
    const recConsolidation = document.getElementById("bsi-rec-consolidation");
    const recMaintenance = document.getElementById("bsi-rec-maintenance");

    const altPhasesWrap = document.getElementById("bsi-alt-phases");
    const altInduction = document.getElementById("bsi-alt-induction");
    const altConsolidation = document.getElementById("bsi-alt-consolidation");
  



    // Master regimen table – EDIT these strings to match your INTEGRIS pathway
    const BSI_DATA = {
      // --- Gram-negative bacilli ---
      ecoli_klebsiella_proteus: {
        negative: {
          rec:
            "Ceftriaxone 2 grams every 24 hours ",
          alt:
            "Piperacillin/Tazobactam 4.5 grams every 8 hours"
        },
        ctxm: {
          rec:
            "Ertapenem 1 gram every 24 hours OR Meropenem 1 gram every 8 hours",
          alt:
            "ID consult"
        },
        carbapenem_resistance: {
          rec:
            "ID consult",
          alt:
            "ID consult"
        }
      },

      enterobacter_citrobacter: {
        negative: {
          rec:
            "Cefepime 2 grams every 8 hours ",
          alt:
            "Ertapenem 1 gram every 24 hours OR Meropenem 1 gram every 8 hours"
        },
        ctxm: {
          rec:
            "Ertapenem 1 gram every 24 hours OR Meropenem 1 gram every 8 hours",
          alt:
            "ID consult"
        },
        carbapenem_resistance: {
          rec:
            "ID consult",
          alt:
            "ID consult"
        }
      },

      pseudomonas_aeruginosa: {
        negative: {
          rec:
            "Cefepime 2 grams every 8 hours OR Ceftazidime 2 grams every 8 hours",
          alt:
            "Piperacillin/Tazobactam 4.5 grams every 8 hours OR Meropenem 1 gram every 8 hours"
        }
      },

      // --- Gram-positive cocci ---
      staph_aureus: {
        negative: {
          note: "ID Consult Required",
          rec:
            "Cefazolin 2 grams every 8 hours + ID consult",
          alt:
            "Nafcillin 12 grams/day + ID consult"
        },
        meca: {
          note: "ID Consult Required",
          rec:
            "Vancomycin + ID consult",
          alt:
            "Daptomycin 8-10 mg/kg every 24 hours + ID consult"
        }
      },

      staph_lugdunensis: {
        na: {
          rec:
            "Cefazolin 2 grams every 8 hours + ID consult",
          alt:
            "Nafcillin 12 grams/day + ID consult"
        }
      },

      staph_epidermidis: {
        negative_or_meca: {
          rec:
            "1 to 2 sets of positve cultures without risk factors for bacteremia -- No antibiotics",
          alt:
            "Both sites with positive cultures and/or risk factors for bacteremia -- ID consult"
        }
      },

      strep_agalactiae_anginosus_pyogenes: {
        na: {
          rec:
            "Ceftriaxone 2 grams every 24 hours",
          alt:
            "Ampicillin 2 grams every 6 hours"
        }
      },


      strep_pneumoniae: {
        na: {
          rec:
            "Ceftriaxone 2 grams every 24 hours",
          alt:
            "Vancomycin"
        }
      },

      enterococcus_faecalis: {
        negative: {
          rec:
            "Ampicillin 2 grams every 6 hours",
          alt:
            "Vancomycin"
        },
        vana_or_vanb: {
          rec:
            "Ampicillin 2 grams every 6 hours",
          alt:
            "Daptomycin 8-10 mg/kg every 24 hours"
        }
      },

      enterococcus_faecium: {
        negative: {
          rec:
            "Vancomycin",
          alt:
            "Daptomycin 10-12 mg/kg every 24 hours"
        },
        vana_or_vanb: {
          rec:
            "Daptomycin 10-12 mg/kg every 24 hours",
          alt:
            "Linezolid 600 mg every 12 hours"
        }
      },

      listeria: {
        na: {
          rec:
            "Ampicillin 2 grams every 6 hours",
          alt:
            "Sulfamethoxazole/trimethoprim 20 mg/kg/day"
        }
      }, 

      bacillus: {
        na: {
          rec:
            "Information being updated",
          alt:
            "Information being updated"
        }
      },

      acinetobacter_calcoaceticus_baumannii_complex: {
        na: {
          rec:
            "Information being updated",
          alt:
            "Information being updated"
        }
      },

      enterobacteriaceae_morganellaceae: {
        na: {
          rec:
            "Information being updated",
          alt:
            "Information being updated"
        }
      },

      salmonella: {
        na: {
          rec:
            "Information being updated",
          alt:
            "Information being updated"
        }
      },

      serratia: {
        na: {
          rec:
            "Information being updated",
          alt:
            "Information being updated"
        }
      },

      haemophilus_influenzae: {
        na: {
          rec:
            "Information being updated",
          alt:
            "Information being updated"
        }
      },

      neisseria_meningitidis: {
        na: {
          rec:
            "Information being updated",
          alt:
            "Information being updated"
        }
      },

      stenotrophomonas_maltophilia: {
        na: {
          rec:
            "Information being updated ",
          alt:
            "Information being updated "
        }
      },

      candida_albicans: {
         na: {
          rec: "Micafungin 100 mg IV Q24H",
          alt: {
            low_risk: "Fluconazole 12 mg/kg IV x 1, then 6 mg/kg IV Q24H",
            intolerance: "Liposomal amphotericin B 3–5 mg/kg IV Q24H"
      }
    }
  },



      candida_auris: {
        na: {
          note: "Order Contact Precautions",
          rec: "Micafungin 100 mg IV Q24H",
          alt: "Liposomal amphotericin B 5 mg/kg IV Q24H"
        }
      },


      candida_dubliniensis: {
        na: {
          rec:
            "Micafungin 100 mg IV Q24H",
          alt:{
            low_risk: "Fluconazole 12 mg/kg IV x 1, then 6 mg/kg IV Q24H",
            intolerance: "Liposomal amphotericin B 3-5 mg/kg IV Q24H"
          }
        }
      },

      candida_famata: {
        na: {
          rec: "Micafungin 100 mg IV Q24H",
          alt: `
      • Liposomal amphotericin B 3–5 mg/kg IV Q24H
      OR
      • Fluconazole 12 mg/kg IV x 1, then 6 mg/kg IV Q24H`
        }
      },


      candida_glabrata: {
        na: {
          rec:
            "Micafungin 100 mg IV Q24H",
          alt:{
            low_risk:"Fluconazole 12 mg/kg IV Q24H", 
            intolerance: "Liposomal amphotericin B 3-5 mg/kg IV Q24H"
          }
        }
      },

      candida_guilliermondii: {
        na: {
          rec:
            "Micafungin 100 mg IV Q24H",
          alt:{
            low_risk:"Fluconazole 12 mg/kg IV Q24H then 6 mg/kg IV Q24H", 
            intolerance: "Liposomal amphotericin B 3-5 mg/kg IV Q24H"
          }
        }
      },

      candida_kefyr: {
        na: {
          rec:
            "Micafungin 100 mg IV Q24H",
          alt:{
            low_risk:"Fluconazole 12 mg/kg IV Q24H then 6 mg/kg IV Q24H", 
            intolerance: "Liposomal amphotericin B 3-5 mg/kg IV Q24H"
          }
        }
      },

      candida_krusei: {
        na: {
          rec:
            "Micafungin 100 mg IV Q24H",
          alt:
            "Liposomal amphotericin B 5 mg/kg IV Q24H"
        }
      },

      candida_lipytica: {
        na: {
          rec:
            "Micafungin 100 mg IV Q24H",
          alt:
            "Liposomal amphotericin B 3-5 mg/kg IV Q24H"
        }
      },

      candida_lusitaniae: {
        na: {
          rec:
            "Micafungin 100 mg IV Q24H",
          alt:
            "Fluconazole 12 mg/kg IV x 1 then 6 mg/kg IV Q24H"
        }
      },

      candida_parapsilosis: {
        na: {
          rec:
            "Micafungin 100 mg IV Q24H",
          alt:{
            low_risk: "Fluconazole 12 mg/kg IV x 1 then 6 mg/kg IV Q24H", 
            intolerance: "Liposomal amphotericin B 3-5 mg/kg IV Q24H"
          }
        }
      },

      candida_tropicalis: {
        na: {
          rec:
            "Micafungin 100 mg IV Q24H",
          alt:{
            low_risk: "Fluconazole 12 mg/kg IV x 1 then 6 mg/kg IV Q24H", 
            intolerance: "Liposomal amphotericin B 3-5 mg/kg IV Q24H"
          }
        }
      },

      cryptococcus_neoformans: {
         na: {
          rec: {
            induction:
              "Liposomal amphotericin B 3 mg/kg IV Q24H + Flucytosine 25 mg/kg PO QID\nDuration: 2 weeks (or until sufficient response)",

            consolidation:
              "Fluconazole 800 mg IV/PO Q24H\nDuration: 8 weeks minimum",

            maintenance:
              "Fluconazole 200 mg PO Q24H\nDuration: 1 year minimum"
          },

          alt: {
            induction:
              "• Amphotericin B deoxycholate 0.7–1 mg/kg IV Q24H + Flucytosine 25 mg/kg PO QID\n" +
              "OR\n"+
              "• Liposomal amphotericin B 3–4 mg/kg IV Q24H + Fluconazole 800 mg IV/PO Q24H\n" +
              "OR\n"+
              "• Amphotericin B deoxycholate 0.7–1 mg/kg IV Q24H + Fluconazole 800 mg IV/PO Q24H\n" +
              "OR\n"+
              "• Fluconazole 400–800 mg IV/PO Q24H + Flucytosine 25 mg/kg PO QID\n" +
              "OR\n"+
              "• Fluconazole 1200 mg IV/PO Q24H\n" +
              "\nDuration: 2 weeks (or until sufficient response)",

            consolidation:
              "Itraconazole 200 mg PO BID\nDuration: 8 weeks minimum"
          }
        }
      },

      cryptococcus_gattii: {
        na: {
          rec: {
            induction:
              "Liposomal amphotericin B 3 mg/kg IV Q24H + Flucytosine 25 mg/kg PO QID\nDuration: 2 weeks (or until sufficient response)",

            consolidation:
              "Fluconazole 800 mg IV/PO Q24H\nDuration: 8 weeks minimum",

            maintenance:
              "Fluconazole 200 mg PO Q24H\nDuration: 1 year minimum"
          },

          alt: {
            induction:
              "• Amphotericin B deoxycholate 0.7–1 mg/kg IV Q24H + Flucytosine 25 mg/kg PO QID\n" +
              "OR\n"+
              "• Liposomal amphotericin B 3–4 mg/kg IV Q24H + Fluconazole 800 mg IV/PO Q24H\n" +
              "OR\n"+
              "• Amphotericin B deoxycholate 0.7–1 mg/kg IV Q24H + Fluconazole 800 mg IV/PO Q24H\n" +
              "OR\n"+
              "• Fluconazole 400–800 mg IV/PO Q24H + Flucytosine 25 mg/kg PO QID\n" +
              "OR\n"+
              "• Fluconazole 1200 mg IV/PO Q24H\n" +
              "\nDuration: 2 weeks (or until sufficient response)",

            consolidation:
              "Itraconazole 200 mg PO BID\nDuration: 8 weeks minimum"
          }
        }
      },

    };

    const clusterData = BSI_DATA[clusterId] || {};


    // Hide marker UI if this bug has no selectable resistance markers
    // (i.e., only "na" OR only "negative")
    const markerKeys = Object.keys(clusterData);
    const onlyNoMarkerKey =
      markerKeys.length === 1 && (markerKeys[0] === "na" || markerKeys[0] === "negative");

    // extra safety: if the page only renders one button and it’s na/negative
    const onlyOneButtonNoMarker =
      markerButtons.length === 1 &&
      (markerButtons[0].dataset.bsiMarker === "na" || markerButtons[0].dataset.bsiMarker === "negative");

    if (onlyNoMarkerKey || onlyOneButtonNoMarker) {
      const tabs = document.querySelector(".resistance-tabs");
      if (tabs) tabs.style.display = "none";

      const summary = document.querySelector(".bsi-summary");
      if (summary) summary.style.display = "none";

      const subtitle = document.querySelector(".page-subtitle");
      if (subtitle) subtitle.style.display = "none";
    }



    function ensureWrapAfter(el, id) {
  if (!el) return null;
  let wrap = document.getElementById(id);
  if (wrap) return wrap;

  wrap = document.createElement("div");
  wrap.id = id;
  wrap.style.display = "none";
  el.insertAdjacentElement("afterend", wrap);
  return wrap;
}

function renderPhaseAccordions(wrap, phases, prefix) {
  if (!wrap) return;

  const pretty = (k) => k.charAt(0).toUpperCase() + k.slice(1);

  const keys = Object.keys(phases || {});
  wrap.innerHTML = keys
    .map((k) => {
      const phase = phases[k] || {};
      const regimen = phase.regimen || "—";
      const duration = phase.duration ? `\n\nDuration: ${phase.duration}` : "";

      // Each phase becomes its own nested accordion
      return `
        <button class="accordion-header" type="button" aria-expanded="false">
          ${pretty(k)}
        </button>
        <div class="accordion-content">
          <p id="bsi-${prefix}-${k}-text" style="white-space: pre-line;"></p>
        </div>
      `;
    })
    .join("");

  // Fill text after DOM created
  keys.forEach((k) => {
    const phase = phases[k] || {};
    const regimen = phase.regimen || "—";
    const duration = phase.duration ? `\n\nDuration: ${phase.duration}` : "";
    const p = document.getElementById(`bsi-${prefix}-${k}-text`);
    if (p) p.textContent = `${regimen}${duration}`;
  });

  wrap.style.display = "block";
}





    // Set up click handlers for each resistance marker button
    markerButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.bsiMarker;
        const data = clusterData[key];
        const noteBox = document.getElementById("bsi-note");

        // Highlight active button
        markerButtons.forEach((b) =>
          b.classList.remove("active-resistance")
        );
        btn.classList.add("active-resistance");

        // Update marker label text
        markerLabelSpan.textContent = btn.textContent.trim();

        const isPlainObject = (v) => v && typeof v === "object" && !Array.isArray(v);

        const closeInnerAccordions = (root) => {
          if (!root) return;
          root.querySelectorAll(".accordion-content.open").forEach((el) => el.classList.remove("open"));
        };

        if (data) {
          // ---------- Recommended ----------
          const recIsPhased =
            isPlainObject(data.rec) &&
            ("induction" in data.rec || "consolidation" in data.rec || "maintenance" in data.rec) &&
            recPhasesWrap && recInduction && recConsolidation && recMaintenance;

          if (recIsPhased) {
            recText.style.display = "none";
            recPhasesWrap.style.display = "block";

            recInduction.textContent = data.rec.induction || "—";
            recConsolidation.textContent = data.rec.consolidation || "—";
            recMaintenance.textContent = data.rec.maintenance || "—";

            closeInnerAccordions(recPhasesWrap);
          } else {
            if (recPhasesWrap) recPhasesWrap.style.display = "none";
            recText.style.display = "block";
            recText.textContent = data.rec || "—";
          }

          // ---------- Alternative ----------
          const altIsPhased =
          isPlainObject(data.alt) &&
          ("induction" in data.alt || "consolidation" in data.alt) &&
          altPhasesWrap && altInduction && altConsolidation;


          if (altIsPhased) {
            altText.style.display = "none";
            if (altOptionsWrap) altOptionsWrap.style.display = "none";

            altPhasesWrap.style.display = "block";
            altInduction.textContent = data.alt.induction || "—";
            altConsolidation.textContent = data.alt.consolidation || "—";


            closeInnerAccordions(altPhasesWrap);
          } else if (isPlainObject(data.alt) && altOptionsWrap && altLowRisk && altIntolerance) {
            // Existing Candida Albicans/Dubliniensis behavior
            altText.style.display = "none";
            if (altPhasesWrap) altPhasesWrap.style.display = "none";

            altOptionsWrap.style.display = "block";
            altLowRisk.textContent = data.alt.low_risk || "—";
            altIntolerance.textContent = data.alt.intolerance || "—";

            closeInnerAccordions(altOptionsWrap);
          } else {
            if (altPhasesWrap) altPhasesWrap.style.display = "none";
            if (altOptionsWrap) altOptionsWrap.style.display = "none";

            altText.style.display = "block";
            altText.textContent = data.alt || "—";
          }
        } else {
          if (recPhasesWrap) recPhasesWrap.style.display = "none";
          if (altPhasesWrap) altPhasesWrap.style.display = "none";
          if (altOptionsWrap) altOptionsWrap.style.display = "none";

          recText.style.display = "block";
          altText.style.display = "block";

          recText.textContent =
            "No regimen configured yet for this resistance marker. Refer to local guidelines.";
          altText.textContent = "--";
        }



        // ✅ ADD THIS: re-linkify the regimen text after it changes
        if (window.linkifyBsiRegimens) {
          window.linkifyBsiRegimens();
        }


        // Optional: close accordions so user can re-open if they want
        document
          .querySelectorAll(".accordion-content")
          .forEach((panel) => panel.classList.remove("open"));
        document
          .querySelectorAll(".accordion-header[aria-expanded]")
          .forEach((h) => h.setAttribute("aria-expanded", "false"));
      });
    });

    // Auto-apply the default active marker on load (usually 'Negative' or 'N/A')
    const initial = document.querySelector(".resistance-button.active-resistance");
    if (initial) {
      initial.click();
    }
  }
});


  
  
