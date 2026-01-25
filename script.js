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
            "Ceftriaxone 2 g Q24H ",
          alt:
            "Piperacillin/Tazobactam 4.5 g Q8H"
        },
        ctxm: {
          id_consult: true,
          rec:`
            Ertapenem 1 g Q24H  
            OR 
            Meropenem 1 g Q8H`,
          alt:
            "ID consult"
        },
        carbapenem_resistance: {
          id_consult: true,
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
          id_consult: true,
          rec:
            "Ertapenem 1 gram every 24 hours OR Meropenem 1 gram every 8 hours",
          alt:
            "ID consult"
        },
        carbapenem_resistance: {
          id_consult: true,
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
          id_consult: true,
          rec:
            "Cefazolin 2 g Q8H + ID consult",
          alt:
            "Nafcillin 12 grams/day + ID consult"
        },
        meca: {
          id_consult: true,
          rec:
            "Pharmacy to dose Vancomycin + ID consult",
          alt:
            "Daptomycin 8-10 mg/kg Q24H + ID consult"
        }
      },

      staph_lugdunensis: {
        na: {
          id_consult: true,
          rec:
            "Cefazolin 2 g Q8H + ID consult",
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

      enterobacteriaceae: {
        negative: {
          rec:
            "Cefepime 2 grams IV Q8H",
          alt:`
      Ertapenem 1 gram IV Q24H 
      OR
      Meropenem 1 gram IV Q8H`
        }, 

        ctxm: {
          rec: "Ertapenem 1 gram IV Q24H", 
          alt: "Meropenem 1 gram IV Q8H"
        }, 

        carbapenem_resistance: {
          id_consult: true, 
          restricted_for_id_only: true,
          rec: "Meropenem-vaborbactam 4 grams IV Q8H infused over 3 hours",
          alt: "Ceftazidime-avibactam 2.5 grams IV Q8H infused over 3 hours"
        },
      },

      morganellaceae: {
        negative: {
          rec:`
      Cefepime 2 grams IV Q8H 
      OR
      Piperacillin-Tazobactam 4.5 grams IV Q6H`,
          alt:`
      Ertapenem 1 gram IV Q24H 
      OR
      Meropenem 1 gram IV Q8H`
        }, 

        ctxm: {
          rec: "Ertapenem 1 gram IV Q24H", 
          alt: "Meropenem 1 gram IV Q8H"
        }, 
      },

      salmonella: {
        na: {
          rec:
            "Ceftriaxone 2 grams IV Q24H",
          alt:`
      Ciprofloxacin 400 mg IV Q12H 
      OR
      Ciprofloxacin 750 mg PO BID`
        }
      },

      serratia: {
        na: {
          rec:`
      Ceftriaxone 2 grams IV Q24H  
      OR
      Cefepime 1-2 grams IV Q8H
      OR
      Piperacillin-tazobactam 4.5 grams IV Q6H`,
          alt:`
      Ciprofloxacin 400 mg IV Q12H 
      OR
      Ertapenem 1 gram IV Q24H
      OR
      Meropenem 1 gram IV Q8H`
        }, 

        ctxm:{
          rec: "Ertapenem 1 gram IV Q24H",
          alt: "Meropenem 1 gram IV Q8H"
        }
      },

      haemophilus_influenzae: {
        na: {
          rec:
            "Ceftriaxone 1-2 grams IV Q12-24H",
          alt:
            "Ciprofloxacin 400 mg IV Q8H"
        }
      },

      neisseria_meningitidis: {
        na: {
          rec:
            "Ceftriaxone 2 grams IV Q12H",
          alt:
            "Meropenem 1 gram IV Q8H"
        }
      },

      stenotrophomonas_maltophilia: {
        na: {
          id_consult: true, 
          rec:`
            Sulfamethoxazole-Trimethoprim 8-12 mg/kg/day (trimethoprim component) in 2-3 divided doses 
            +
            Minocycline 200 mg IV Q12H`,
          alt:
            `Sulfamethoxazole-Trimethoprim 8-12 mg/kg/day (trimethoprim component) in 2-3 divided doses

            Minocycline 200 mg IV Q12H
             
            Cefiderocol 2 grams IV Q8H

            Levofloxacin 750 mg IV Q24H`
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
      Liposomal amphotericin B 3–5 mg/kg IV Q24H
      OR
      Fluconazole 12 mg/kg IV x 1, then 6 mg/kg IV Q24H`
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
              "Amphotericin B deoxycholate 0.7–1 mg/kg IV Q24H + Flucytosine 25 mg/kg PO QID\n" +
              "OR\n"+
              "Liposomal amphotericin B 3–4 mg/kg IV Q24H + Fluconazole 800 mg IV/PO Q24H\n" +
              "OR\n"+
              "Amphotericin B deoxycholate 0.7–1 mg/kg IV Q24H + Fluconazole 800 mg IV/PO Q24H\n" +
              "OR\n"+
              "Fluconazole 400–800 mg IV/PO Q24H + Flucytosine 25 mg/kg PO QID\n" +
              "OR\n"+
              "Fluconazole 1200 mg IV/PO Q24H\n" +
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
              "Amphotericin B deoxycholate 0.7–1 mg/kg IV Q24H + Flucytosine 25 mg/kg PO QID\n" +
              "OR\n"+
              "Liposomal amphotericin B 3–4 mg/kg IV Q24H + Fluconazole 800 mg IV/PO Q24H\n" +
              "OR\n"+
              "Amphotericin B deoxycholate 0.7–1 mg/kg IV Q24H + Fluconazole 800 mg IV/PO Q24H\n" +
              "OR\n"+
              "Fluconazole 400–800 mg IV/PO Q24H + Flucytosine 25 mg/kg PO QID\n" +
              "OR\n"+
              "Fluconazole 1200 mg IV/PO Q24H\n" +
              "\nDuration: 2 weeks (or until sufficient response)",

            consolidation:
              "Itraconazole 200 mg PO BID\nDuration: 8 weeks minimum"
          }
        }
      },


      cellulitis: {
        nonpurulent: {
          oral: {
            no_mrsa: "Cephalexin 500 mg PO Q6H",          
            mrsa: 
            `
            Trimethoprim-Sulfamethoxazole two 800/160 mg tabs BID
            OR 
            Amoxicillin 875 mg PO BID + Doxycycline 100 mg PO BID 
            OR 
            Linezolid 600 mg PO BID`              
          },
          parenteral: {
            no_mrsa: `Cefazolin 1-2 g IV Q8H
            OR
            Ampicillin-sulbactam 1.5 g IV Q6H`,
            mrsa: `Pharmacy to dose Vancomycin
            OR
            Daptomycin 4-6 mg/kg IV Q24H 
            OR
            Linezolid 600 mg IV BID
            OR
            Oritavancin 1200 mg IV x 1 dose (Restricted to ER)`              
            },
            septic: {
              recommended: "Cefepime 2 g IV Q8H + Pharmacy to dose Vancomycin",
              hx_esbl: "Meropenem 1 g IV Q8H + Pharmacy to dose Vancomycin",           
              severe_pcn_allergy: 
              `
              Levofloxacin 750 mg IV Q24H + Pharmacy to dose Vancomycin
              OR 
              Aztreonam 2 g IV Q8H + Pharmacy to dose Vancomycin` 
            },
          },

        purulent_abscess: {
          oral:`Trimethopreim-Sulfamethoxazole two 800/160 mg tabs BID
          OR
          Amoxicillin 875 mg PO BID + Doxycycline 100 mg PO BID
          OR 
          Linezolid 600 mg PO BID` ,
          parenteral:`Pharmacy to dose Vancomycin 
          OR
          Daptomycin 6 mg/kg IV Q24H 
          OR 
          Linezolid 600 mg IV BID`
          },

          necrotizing_fascitis: {
          rec: `
          Piperacillin-Tazobactam 3.375 g IV Q6H
          +
          Pharmacy to Dose Vancomycin
          +
          Clindamycin 900 mg IV Q8H 
          `,
          alt: `
          Meropenem 1 g IV Q8H
          +
          Pharmacy to Dose Vancomycin
          +
          Clindamycin 900 mg IV Q8H 
          `,
          },
      }
        

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




function renderNonpurulentCellulitisUI(data, withRestricted) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const specialWrap = document.getElementById("bsi-nonpurulent-regimens");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (specialWrap) specialWrap.style.display = "block";

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data.restricted_for_id_only);
  };

  set("np-oral-no-mrsa", data?.oral?.no_mrsa);
  set("np-oral-mrsa", data?.oral?.mrsa);

  set("np-parenteral-no-mrsa", data?.parenteral?.no_mrsa);
  set("np-parenteral-mrsa", data?.parenteral?.mrsa);

  set("np-septic-recommended", data?.septic?.recommended);
  set("np-septic-esbl", data?.septic?.hx_esbl);
  set("np-septic-pcn", data?.septic?.severe_pcn_allergy);
}

function renderPurulentAbscessUI(data, withRestricted) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const npWrap = document.getElementById("bsi-nonpurulent-regimens");
  const paWrap = document.getElementById("bsi-purulent-regimens");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (npWrap) npWrap.style.display = "none";
  if (paWrap) paWrap.style.display = "block";

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data?.restricted_for_id_only);
  };

  set("pa-oral", data?.oral);
  set("pa-parenteral", data?.parenteral);
}


function renderDefaultBsiUI() {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const npWrap = document.getElementById("bsi-nonpurulent-regimens");
  const paWrap = document.getElementById("bsi-purulent-regimens");

  if (defaultWrap) defaultWrap.style.display = "block";
  if (npWrap) npWrap.style.display = "none";
  if (paWrap) paWrap.style.display = "none";
}


    // Set up click handlers for each resistance marker button
    markerButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.bsiMarker;
        const data = clusterData[key];
        // If the page doesn't already have a note container, create one under the marker label.
        // NOTE banner (ID consult / restricted meds)
        // This creates the note area automatically on any BSI page (so you don't have to edit every HTML file).
        let noteBox = document.getElementById("bsi-note");

        if (!noteBox) {
          const summary = document.querySelector(".bsi-summary"); // "Resistance marker: ..."
          if (summary) {
            noteBox = document.createElement("div");
            noteBox.id = "bsi-note";
            noteBox.style.display = "none";
            noteBox.style.marginTop = "10px";
            noteBox.style.padding = "12px 14px";
            noteBox.style.border = "1px solid #fde68a";
            noteBox.style.borderLeft = "5px solid #f59e0b";
            noteBox.style.background = "#fffbeb";
            noteBox.style.borderRadius = "10px";
            noteBox.style.color = "#111827";
            noteBox.style.fontSize = "0.95rem";
            noteBox.style.lineHeight = "1.35";
            summary.insertAdjacentElement("afterend", noteBox);
          }
        }


        function renderBsiNote(data) {
          if (!noteBox) return;

          const parts = [];
          if (data?.note) parts.push(data.note);
          if (data?.id_consult) parts.push("ID consult required.");
          if (Array.isArray(data?.restricted) && data.restricted.length) {
            parts.push(`Restricted: ${data.restricted.join(", ")}.`);
          }

          if (parts.length) {
            noteBox.textContent = parts.join(" ");
            noteBox.style.display = "block";
          } else {
            noteBox.textContent = "";
            noteBox.style.display = "none";
          }
        }

        

        // Highlight active button
        markerButtons.forEach((b) =>
          b.classList.remove("active-resistance")
        );
        btn.classList.add("active-resistance");

        // Update marker label text
        markerLabelSpan.textContent = btn.textContent.trim();

        const isPlainObject = (v) => v && typeof v === "object" && !Array.isArray(v);

        const RESTRICTED_FOOTNOTE = "\n\n* Restricted for ID use only";
        const withRestricted = (text, restricted) =>
          restricted ? `${text}${RESTRICTED_FOOTNOTE}` : text;

        // Special case: Non-purulent cellulitis needs Oral/Parenteral/Septic + sub-buttons
if (
  clusterId === "cellulitis" &&
  key === "nonpurulent" &&
  document.getElementById("bsi-nonpurulent-regimens")
) {
  renderNonpurulentCellulitisUI(data, withRestricted);

  // re-linkify if you use it
  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();

  // reset accordions (same behavior you already do at end)
  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));

  return; // IMPORTANT: skip the default rec/alt rendering below
} else {
  // For purulent/nec fasc (and any other marker), show your normal recommended/alternative UI
  renderDefaultBsiUI();
}



// Special case: Purulent/Abscess needs Oral + Parenteral only
if (
  clusterId === "cellulitis" &&
  key === "purulent_abscess" &&
  document.getElementById("bsi-purulent-regimens")
) {
  renderPurulentAbscessUI(data, withRestricted);

  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();

  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));

  return;
}



        const closeInnerAccordions = (root) => {
          if (!root) return;
          root.querySelectorAll(".accordion-content.open").forEach((el) => el.classList.remove("open"));
        };

        if (data) {
            // ---------- NOTE (optional) ----------
          if (noteBox) {
            const parts = [];

            if (data.id_consult) parts.push("Order ID Consult");

            if (Array.isArray(data.restricted) && data.restricted.length) {
              parts.push("Restricted: " + data.restricted.join(", ") + ".");
            }

            const noteText = parts.join(" ");

            if (noteText) {
              noteBox.textContent = noteText;
              noteBox.style.display = "block";
            } else {
              noteBox.textContent = "";
              noteBox.style.display = "none";
            }
          }

          // ---------- Recommended ----------
          const recIsPhased =
            isPlainObject(data.rec) &&
            ("induction" in data.rec || "consolidation" in data.rec || "maintenance" in data.rec) &&
            recPhasesWrap && recInduction && recConsolidation && recMaintenance;

          if (recIsPhased) {
            recText.style.display = "none";
            recPhasesWrap.style.display = "block";

            recInduction.textContent = withRestricted(data.rec.induction || "—", data.restricted_for_id_only);
            recConsolidation.textContent = withRestricted(data.rec.consolidation || "—", data.restricted_for_id_only);
            recMaintenance.textContent = withRestricted(data.rec.maintenance || "—", data.restricted_for_id_only);


            closeInnerAccordions(recPhasesWrap);
          } else {
            if (recPhasesWrap) recPhasesWrap.style.display = "none";
            recText.style.display = "block";
            recText.textContent = withRestricted(data.rec || "—", data.restricted_for_id_only);
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
            altInduction.textContent = withRestricted(data.alt.induction || "—", data.restricted_for_id_only);
            altConsolidation.textContent = withRestricted(data.alt.consolidation || "—", data.restricted_for_id_only);



            closeInnerAccordions(altPhasesWrap);
          } else if (isPlainObject(data.alt) && altOptionsWrap && altLowRisk && altIntolerance) {
            // Existing Candida Albicans/Dubliniensis behavior
            altText.style.display = "none";
            if (altPhasesWrap) altPhasesWrap.style.display = "none";

            altOptionsWrap.style.display = "block";
            altLowRisk.textContent = withRestricted(data.alt.low_risk || "—", data.restricted_for_id_only);
            altIntolerance.textContent = withRestricted(data.alt.intolerance || "—", data.restricted_for_id_only);


            closeInnerAccordions(altOptionsWrap);
          } else {
            if (altPhasesWrap) altPhasesWrap.style.display = "none";
            if (altOptionsWrap) altOptionsWrap.style.display = "none";

            altText.style.display = "block";
            altText.textContent = withRestricted(data.alt || "—", data.restricted_for_id_only);

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

  
  
