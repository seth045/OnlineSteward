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
      },


      diabetic_foot_infections:{
        mild: {
            no_mrsa: `Cephalexin 500 mg PO QID
            OR
            Amoxicillin-clavulanate 875 mg PO BID
            OR 
            Clindamycin 300 mg PO TID`,
            mrsa: `Sulfamethoxazole/Trimethoprim two 800/160 mg tabs BID
            OR 
            Amoxicillin 875 mg PO BID + Doxycycline 100 mg PO BID`
          },

          moderate_severe: {
            no_mdro: {
              recommended: "Ceftriaxone 1-2 g IV Q24H",
              alternative: "Levofloxacin 500-750 mg IV Q24H"
            },
            pseudomonal: {
              recommended: "Cefepime 2 g IV Q8H",
              alternative: "Piperacillin-Tazobactam 4.5 g IV Q6H"
            },
            mrsa: {
              recommended: "Add Pharmacy to dose Vancomycin",
              alternative: `Add one of the following: 
              
              Daptomycin 6 mg/kg IV Q24H 
              OR 
              Linezolid 600 mg IV Q12H
              `
            }
          }
      },

      animal_bites: {
        oral: {
          preferred: "Amoxicillin-clavulanate 875 mg PO BID",
          alternative: `Metronidazole 500 mg PO Q8H 
          OR
          Clindamycin 300-400 mg PO Q8H + Cefuroxime 500 mg PO BID 
          OR 
          Doxycycline 100 mg PO BID 
          OR 
          Sulfamethoxazole-trimethoprim one 800/160 mg tablet PO BID
          OR 
          Levofloxacin 750 mg PO Q24H `,
          mrsa: `Amoxicillin-clavulanate 875 mg PO BID + Sulfamethoxazole-trimethoprim one 800/160 mg tablet PO BID
          OR 
          Doxycycline 100 mg PO BID`,
          duration: ""
        },
        parenteral: {
          // This is the note that should appear ONLY when Parenteral is selected
          note:
            "Parenteral criteria (examples): sepsis, rapidly progressing erythema, progression after 48 hours of oral antibiotics, deep infection/abscess.",
          preferred: `Ampicillin-sulbactam 3 g IV Q6H 
          OR
          Ceftriaxone 2 g Q24H + Metronidazole 500 mg IV Q8H `,
          severe_mrsa: "ADD Pharmacy to Dose Vancomycin",
          duration: "Total duration 5-14 days (1-2 days after symptoms resolution)"
        }
      },

      iai_colitis_enteritis: {
        general: {
          note:"Generally antibiotics are not indicated unless any of the following sections above apply",
          text: "Antibiotics not indicated"
        },
        severe_infections: {
          note:"Example criteria for severe infection: fever, hypovolemia, >6 loose stools within 24 hours, bloody stools, high risk patient)",
          text: `Ciprofloxacin 500 mg PO BID x 3 days
          OR
          Azithromycin 500 mg PO Q24H x 3 days (Preferred in those with fever or dysentery)`
        },
        travel_related: {
          general: "Ciprofloxacin 500 mg PO x 1-3 days",
          south_se_asia: `Azithromycin 500 mg PO x 3 days 
          OR
          Azithromycin 1000 mg PO x 1`
        },
        symptoms_gt_7_days: {
          text: `Metronidazole 500 mg PO TID x 7-10 days 
          OR
          Rifaximin 200 mg PO TID x 3 days`
        },
        suspected_cdiffe: {
          note:"Consider initiating empiric therapy if there is an anticipated delay in labratory confirmation or in fulminant infections",
          initial_episode: {
            preferred: "Vancomycin 125 mg PO QID x 10 days",
            alternative: `Fidaxomicin 200 mg PO BID x 10 days
            OR
            Metronidazole 500 mg PO TID x 10-14 days (use if vancomycin and fidaxomicin are not available)`
          },
          first_recurrence: {
            preferred: `Fidaxomicin 200 mg PO BID x 10 days 
            OR
            Fidaxomicin 200 mg PO BID x 5 days, then 200 mg PO every other day x 20 days `,
            alternative: `Vancomycin 125 mg PO QID x 10 days 
            OR 
            Vancomycin 125 mg PO QID x 10-14 days, then BID x 7 days, then daily x 7 days, then every 2-3 days for 2-8 weeks`,
            adjunctive: "Bezlotoxumab 10 mg/kg IV x 1 during administration of PO antibiotics "
          },
          subsequent_recurrence: {
            preferred: `Fidaxomicin 200 mg PO QID x 10 days 
            OR 
            Fidaxomicin 200 mg PO BID x 5 days, then 200 mg PO every other day x 20 days 
            OR Vancomycin 125 mg PO QID x 10 days, then Rifaximin 400 mg PO TID x 20 days
            OR 
            Fecal microbiota transplantation`,
            adjunctive: "Bezlotoxumab 10 mg/kg IV x 1 during administration of PO antibiotics"
          },
          fulminant: {
            text: "Vancomycin 500 mg PO QID + Metronidazole 500 mg IV Q8H"
          }
        }
      },

      iai_cholecystitis_cholangitis: {
        community_acquired: {
          low_risk: {
            single_agent: `Piperacillin-Tazobactam 3.375 g IV Q6H `,
            combination: `Metronidazole 500 mg IV/PO Q8H PLUS one of the following: 
            
            Cefazolin 1-2 g IV Q8H 
            OR
            Cefuroxime 1.5 g IV Q8H
            OR
            Ceftriaxone 2 g IV Q24H 
            OR
            Ciprofloxacin 400 mg IV Q12H
            OR
            Ciprofloxacin 500 mg PO Q12H
            OR
            Levofloxacin 750 mg IV/PO Q24H`,
          },
          high_risk: {
            single_agent: `Piperacillin-tazobactam 4.5 g IV Q6H 
            OR 
            Meropenem 1 g IV Q8H `,
            combination: `Metronidazole 500 mg IV/PO Q8H PLUS one of the following:
            
            Cefepime 2 g IV Q8H 
            OR 
            Ceftazidime 2 g IV Q8H `,
          }
        },

        healthcare_associated: {
          note:"Provide Enterococcal Coverage in Post-Op infections, Immunocompromising conditions, valvular heart disease, or prosthetic intravascular materials",
          single_agent: `Piperacillin-tazobactam 4.5 g IV Q6H 
            OR 
            Meropenem 1 g IV Q8H `,
          combination: `Cefepime 2 g IV Q8H OR Ceftazidime 2 g IV Q8H
           + 
           Metronidazole 500 mg IV Q8H
          + 
           Ampicillin 2 g IV Q4H OR Pharmacy to Dose Vancomycin`,
        }
      },

      iai_sbp: {
        primary: {
          preferred: `Ceftriaxone 2 g IV Q24H 
          OR 
          Cefotaxime 2 g IV Q8H (*Non-formulary) `,
          critically_ill_mdr: `Meropenem 1 g IV Q8H`,
          add_on_mrsa: `Pharmacy to Dose Vancomycin 
          OR
          Daptomycin 4-6 mg/kg IV Q24H (Use if known colonization or previous infection by VRE)`
        },

        secondary: {
          mild_moderate: {
            preferred: `Ceftriaxone 2 g IV Q24H
            + 
            Metronidazole 500 mg IV Q8H `,
            alternative: `Metronidazole 500 mg IV Q8H PLUS one of the following: 
            
            3rd or 4th generation cephalosporin
            OR
            Levofloxacin 750 mg IV/PO Q24H 
            Or 
            Ciprofloaxcin 400 mg IV Q12H 
            OR 
            Aztreonam 2 g IV Q8H 
            OR 
            Ertapenem 1 g IV Q24H`
          },
          severe: {
            preferred: `Piperacillin-tazobactam 3.375 g IV Q6H OR 4.5 g IV Q8H `
          }
        }
      },

      iai_diverticulitis: {
        community_acquired: {
          low_risk: {
            single_agent: `Piperacillin-Tazobactam 3.375 g IV Q6H`,
            combination: `
            Metronidazole 500 mg IV/PO Q8H PLUS one of the following: 
            
            Cefazolin 1-2 g IV Q8H 
            OR
            Cefuroxime 1.5 g IV Q8H 
            OR
            Ceftriaxone 2 g IV Q24H
            OR 
            Cefotaxime 2 g IV Q8H 
            OR 
            Ciprofloxacin 400 mg IV Q12H 
            OR 
            Ciprofloxacin 500 mg PO Q12H 
            OR
            Levofloxacin 750 mg IV/PO Q24H`
          },
          high_risk: {
            single_agent: `Piperacillin-tazobactam 4.5 g IV Q6H
            OR 
            Meropenem 1 g IV Q8H `,
            combination: `Metronidazole 500 mg IV/PO Q8H PLUS one of the following: 
            
            Cefepime 2 g IV Q8H 
            OR 
            Ceftazidime 2 g IV Q8H 
            `
          }
        },

        hospital_acquired: {
          single_agent: `Piperacillin-tazobactam 4.5 g IV Q6H
            OR 
            Meropenem 1 g IV Q8H `,
          combination: `Metronidazole 500 mg IV/PO Q8H PLUS one of the following: 
            
            Cefepime 2 g IV Q8H OR Ceftazidime 2 g IV Q8H 
            PLUS
            Ampicillin 2 g IV Q4H OR Pharmacy to Dose Vancomycin`
        },

        oral_regimens: {
          note:"3-5 days after initiation of parenteral antibiotics",
          single_agent: `Amoxicillin-clavulanate 875 mg PO TID
          OR
          Amoxicillin-clavulanate extened release 1 g PO BID`,
          combination: `Metronidazole 500 mg PO TID PLUS one of the following:
          
          Ciprofloxacin 500 mg PO BID
          OR 
          Levofloxacin 500-750 mg PO Q24H
          OR 
          Sulfamethoxazole-trimethoprim one 800/160 mg tablet BID`
        },

        duration: {
          immunocompetent: `4-7 days`,
          undrained_abscess: `7-10 days`,
          immunocompromised: `10-14 days`
        }
      },

      iai_intraabdominal_abscess: {
        mild_moderate: {
          single_agent: `Ertapenem 1 g IV Q24H `,
          combination: `Metronidazole 500 mg IV/PO Q8H PLUS one of the following: 
          
          Cefazolin 2 g IV Q8H 
          OR
          Ceftriaxone 2 g IV Q24H 
          OR 
          Cefotaxime 2 g IV Q8H 
          OR 
          Cefuroxime 1.5 g IV Q8H 
          OR 
          Ciprofloxacin 400 mg IV Q12H 
          OR 
          Ciprofloxacin 500 mg PO BID
          OR 
          Levofloxacin 500-750 mg IV/PO Q24H`,
        },

        severe_healthcare: {
          single_agent: `Piperacillin-tazobactam 3.375 g IV Q6H OR 4.5 g IV Q8H
          OR
          Meropenem 1 g IV Q8H`,
          combination: `Metronidazole 500 mg IV/PO Q8H PLUS one of the following:
          
          Cefepime 1-2 g IV Q8H 
          OR 
          Ceftazidime 2 g IV Q8H 
          OR 
          Ciprofloxacin 400 mg IV Q12H 
          OR 
          Levofloxacin 500-750 mg IV Q24H 
          
          PLUS 
          
          Pharmacy to Dose Vancomycin`,
        },

        duration: {
          text: `4-7 days after adequate source control `
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


function renderAnimalBitesUI(data, withRestricted, activeKey) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const specialWrap = document.getElementById("bsi-animalbites-regimens");
  const oralWrap = document.getElementById("ab-oral-wrap");
  const parWrap = document.getElementById("ab-par-wrap");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (specialWrap) specialWrap.style.display = "block";

  if (oralWrap) oralWrap.style.display = activeKey === "oral" ? "block" : "none";
  if (parWrap) parWrap.style.display = activeKey === "parenteral" ? "block" : "none";

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data?.restricted_for_id_only);
  };

  if (activeKey === "oral") {
    set("ab-oral-preferred", data?.preferred);
    set("ab-oral-alternative", data?.alternative);
    set("ab-oral-mrsa", data?.mrsa);
    set("ab-oral-duration", data?.duration);
  }

  if (activeKey === "parenteral") {
    set("ab-par-preferred", data?.preferred);
    set("ab-par-severe-mrsa", data?.severe_mrsa);
    set("ab-par-duration", data?.duration);
  }
}



function renderIaiColitisUI(data, withRestricted, key) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const specialWrap = document.getElementById("bsi-iai-colitis");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (specialWrap) specialWrap.style.display = "block";

  // show/hide each section
  const show = (id, on) => {
    const el = document.getElementById(id);
    if (el) el.style.display = on ? "block" : "none";
  };

  show("iai-general-wrap", key === "general");
  show("iai-severe-wrap", key === "severe_infections");
  show("iai-travel-wrap", key === "travel_related");
  show("iai-sx7-wrap", key === "symptoms_gt_7_days");
  show("iai-cdiff-wrap", key === "suspected_cdiffe");

  // helper to fill <p> text
  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data?.restricted_for_id_only);
  };

  if (key === "general") {
    set("iai-general-text", data?.text);
  }

  if (key === "severe_infections") {
    set("iai-severe-text", data?.text);
  }

  if (key === "travel_related") {
    set("iai-travel-general", data?.general);
    set("iai-travel-asia", data?.south_se_asia);
  }

  if (key === "symptoms_gt_7_days") {
    set("iai-sx7-text", data?.text);
  }

  if (key === "suspected_cdiffe") {
    set("iai-cdiff-initial-preferred", data?.initial_episode?.preferred);
    set("iai-cdiff-initial-alternative", data?.initial_episode?.alternative);

    set("iai-cdiff-first-preferred", data?.first_recurrence?.preferred);
    set("iai-cdiff-first-alternative", data?.first_recurrence?.alternative);
    set("iai-cdiff-first-adjunctive", data?.first_recurrence?.adjunctive);

    set("iai-cdiff-sub-preferred", data?.subsequent_recurrence?.preferred);
    set("iai-cdiff-sub-adjunctive", data?.subsequent_recurrence?.adjunctive);

    set("iai-cdiff-fulminant", data?.fulminant?.text);
  }
}


function renderIaiAbscessUI(data, withRestricted, key) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const specialWrap = document.getElementById("bsi-iai-abscess");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (specialWrap) specialWrap.style.display = "block";

  const show = (id, on) => {
    const el = document.getElementById(id);
    if (el) el.style.display = on ? "block" : "none";
  };

  // show/hide the three sections
  show("abs-mm-wrap", key === "mild_moderate");
  show("abs-severe-wrap", key === "severe_healthcare");
  show("abs-duration-wrap", key === "duration");

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data?.restricted_for_id_only);
  };

  if (key === "mild_moderate") {
    set("abs-mm-single", data?.single_agent);
    set("abs-mm-combo", data?.combination);
  }

  if (key === "severe_healthcare") {
    set("abs-sev-single", data?.single_agent);
    set("abs-sev-combo", data?.combination);
  }

  if (key === "duration") {
    set("abs-duration-text", data?.text);
  }
}



function renderIaiDiverticulitisUI(data, withRestricted, key) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const specialWrap = document.getElementById("bsi-iai-diverticulitis");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (specialWrap) specialWrap.style.display = "block";

  const show = (id, on) => {
    const el = document.getElementById(id);
    if (el) el.style.display = on ? "block" : "none";
  };

  show("div-ca-wrap", key === "community_acquired");
  show("div-ha-wrap", key === "hospital_acquired");
  show("div-oral-wrap", key === "oral_regimens");
  show("div-duration-wrap", key === "duration");

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data?.restricted_for_id_only);
  };

  if (key === "community_acquired") {
    set("div-ca-low-single", data?.low_risk?.single_agent);
    set("div-ca-low-combo", data?.low_risk?.combination);

    set("div-ca-high-single", data?.high_risk?.single_agent);
    set("div-ca-high-combo", data?.high_risk?.combination);
  }

  if (key === "hospital_acquired") {
    set("div-ha-single", data?.single_agent);
    set("div-ha-combo", data?.combination);
  }

  if (key === "oral_regimens") {
    set("div-oral-single", data?.single_agent);
    set("div-oral-combo", data?.combination);
  }

  if (key === "duration") {
    set("div-dur-immunocompetent", data?.immunocompetent);
    set("div-dur-undrained", data?.undrained_abscess);
    set("div-dur-immunocompromised", data?.immunocompromised);
  }
}



function renderIaiSbpUI(data, withRestricted, key) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const specialWrap = document.getElementById("bsi-iai-sbp");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (specialWrap) specialWrap.style.display = "block";

  const show = (id, on) => {
    const el = document.getElementById(id);
    if (el) el.style.display = on ? "block" : "none";
  };

  show("sbp-primary-wrap", key === "primary");
  show("sbp-secondary-wrap", key === "secondary");

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data?.restricted_for_id_only);
  };

  if (key === "primary") {
    set("sbp-primary-preferred", data?.preferred);
    set("sbp-primary-mdr", data?.critically_ill_mdr);
    set("sbp-primary-mrsa", data?.add_on_mrsa);
  }

  if (key === "secondary") {
    set("sbp-secondary-mm-preferred", data?.mild_moderate?.preferred);
    set("sbp-secondary-mm-alternative", data?.mild_moderate?.alternative);
    set("sbp-secondary-severe-preferred", data?.severe?.preferred);
  }
}


function renderIaiColitisCholangitisUI(data, withRestricted, key) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const specialWrap = document.getElementById("bsi-iai-colangitis");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (specialWrap) specialWrap.style.display = "block";

  // show/hide the 2 main sections
  const show = (id, on) => {
    const el = document.getElementById(id);
    if (el) el.style.display = on ? "block" : "none";
  };

  show("cc-ca-wrap", key === "community_acquired");
  show("cc-ha-wrap", key === "healthcare_associated");

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data?.restricted_for_id_only);
  };

  if (key === "community_acquired") {
    set("cc-ca-low-single", data?.low_risk?.single_agent);
    set("cc-ca-low-combo", data?.low_risk?.combination);

    set("cc-ca-high-single", data?.high_risk?.single_agent);
    set("cc-ca-high-combo", data?.high_risk?.combination);
  }

  if (key === "healthcare_associated") {
    set("cc-ha-single", data?.single_agent);
    set("cc-ha-combo", data?.combination);
  }
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

function renderDfiMildUI(data, withRestricted) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const mildWrap = document.getElementById("bsi-dfi-mild-regimens");
  const modsevWrap = document.getElementById("bsi-dfi-modsev-regimens");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (mildWrap) mildWrap.style.display = "block";
  if (modsevWrap) modsevWrap.style.display = "none";

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data?.restricted_for_id_only);
  };

  set("dfi-mild-no-mrsa", data?.no_mrsa);
  set("dfi-mild-mrsa", data?.mrsa);
}

function renderDfiModSevUI(data, withRestricted) {
  const defaultWrap = document.getElementById("bsi-default-regimens");
  const mildWrap = document.getElementById("bsi-dfi-mild-regimens");
  const modsevWrap = document.getElementById("bsi-dfi-modsev-regimens");

  if (defaultWrap) defaultWrap.style.display = "none";
  if (mildWrap) mildWrap.style.display = "none";
  if (modsevWrap) modsevWrap.style.display = "block";

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = withRestricted(text || "—", data?.restricted_for_id_only);
  };

  set("dfi-modsev-no-mdro-rec", data?.no_mdro?.recommended);
  set("dfi-modsev-no-mdro-alt", data?.no_mdro?.alternative);

  set("dfi-modsev-pseudo-rec", data?.pseudomonal?.recommended);
  set("dfi-modsev-pseudo-alt", data?.pseudomonal?.alternative);

  set("dfi-modsev-mrsa-rec", data?.mrsa?.recommended);
  set("dfi-modsev-mrsa-alt", data?.mrsa?.alternative);
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
        // ✅ Nested-note support (for accordion buttons with data-note="...")
        // This lets nested accordions (like SBP -> Add-on MRSA Coverage) show a note banner too.
        if (!window.__bsiNestedNoteListenerInstalled) {
          window.__bsiNestedNoteListenerInstalled = true;

          document.addEventListener("click", (e) => {
          const btn = e.target.closest(".accordion-header[data-note]");
          if (!btn) return;

          const nb = document.getElementById("bsi-note");
          if (!nb) return;

          // If this click is CLOSING the accordion, hide the note.
          // (Your accordion logic toggles .open on btn.nextElementSibling)
          const panel = btn.nextElementSibling;
          const isOpenAfterClick = panel && panel.classList.contains("open");

          if (!isOpenAfterClick) {
            nb.textContent = "";
            nb.style.display = "none";
            return;
          }

            nb.textContent = btn.dataset.note || "";
            nb.style.display = nb.textContent.trim() ? "block" : "none";
          });
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
        renderBsiNote(data);






// Special case: Diabetic Foot Infections (DFI)
if (
  clusterId === "diabetic_foot_infections" &&
  key === "mild" &&
  document.getElementById("bsi-dfi-mild-regimens")
) {
  renderDfiMildUI(data, withRestricted);

  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();
  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));
  return;
}

if (
  clusterId === "diabetic_foot_infections" &&
  key === "moderate_severe" &&
  document.getElementById("bsi-dfi-modsev-regimens")
) {
  renderDfiModSevUI(data, withRestricted);

  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();
  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));
  return;
}

// Special case: IAI - Intraabdominal Abscess
if (clusterId === "iai_intraabdominal_abscess" && document.getElementById("bsi-iai-abscess")) {
  renderIaiAbscessUI(data, withRestricted, key);
  renderBsiNote(data);

  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();
  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));
  return;
}



// Special case: IAI - Diverticulitis
if (
  clusterId === "iai_diverticulitis" &&
  document.getElementById("bsi-iai-diverticulitis")
) {
  renderIaiDiverticulitisUI(data, withRestricted, key);
  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();


  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));
  return;
}


// Special case: IAI - Spontaneous Bacterial Peritonitis (SBP)
if (
  clusterId === "iai_sbp" &&
  document.getElementById("bsi-iai-sbp")
) {
  renderIaiSbpUI(data, withRestricted, key);
  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();


  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));
  return;
}



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


// Special case: IAI - infectious colitis/enteritis (nested tabs)
if (
  clusterId === "iai_colitis_enteritis" &&
  document.getElementById("bsi-iai-colitis")
) {
  renderIaiColitisUI(data, withRestricted, key);
  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();


  // close any open accordion panels after switching tabs
  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));

  return;
}

if (
  clusterId === "iai_cholecystitis_cholangitis" &&
  document.getElementById("bsi-iai-colangitis")
) {
  renderIaiColitisCholangitisUI(data, withRestricted, key);
  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();


  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));
  return;
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


// Special case: Animal bites needs Oral/Parenteral + custom sub-accordions
if (
  clusterId === "animal_bites" &&
  document.getElementById("bsi-animalbites-regimens")
) {
  renderAnimalBitesUI(data, withRestricted, key);

  if (window.linkifyBsiRegimens) window.linkifyBsiRegimens();

  document.querySelectorAll(".accordion-content").forEach((panel) => panel.classList.remove("open"));
  document.querySelectorAll(".accordion-header[aria-expanded]").forEach((h) => h.setAttribute("aria-expanded", "false"));

  return; // IMPORTANT: skip default rec/alt rendering
}




        const closeInnerAccordions = (root) => {
          if (!root) return;
          root.querySelectorAll(".accordion-content.open").forEach((el) => el.classList.remove("open"));
        };

        if (data) {
            // ---------- NOTE (optional) ----------
          renderBsiNote(data);


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






  
  
