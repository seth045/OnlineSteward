// Bacteria and Antibiotic data
const bacteriaData = [

    {
        name: "Enterococcus Faecalis (VS)",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin G" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin" }
        ],
        allAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"}, 
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"}, 
            { name: "Televancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Televancin"}, 
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"}, 
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"}, 
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
        ]
    },

    {
        name: "Enterococcus Faecium (VS)",
        preferredAntibiotics: [
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics: [
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"}

        ]
    },

    {
        name: "Enterococcus Faecalis (VRE)",
        preferredAntibiotics: [
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics: [
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},

        ]
    },

    {
        name: "Enterococcus Faecium (VRE)",
        preferredAntibiotics: [
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics: [
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"}

        ]
    },

    {
        name: "Staphylococcus Aureus (MSSA)",
        preferredAntibiotics: [
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"}, 
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"}, 
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"}, 
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"}, 
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]  

    },

    {
        name: "Staphylococcus Aureus (MRSA)",
        preferredAntibiotics: [
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"}, 
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
           { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
           { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
           { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
           { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
        ]
    },

    {
        name: "Staphylococcus Coagulase-negative (MS)",
        preferredAntibiotics: [
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"}, 
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Staphylococcus Coagulase-negative (MR)",
        preferredAntibiotics: [
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"} 

        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},

        ]
    },

    {
        name: "Staphylococcus Epidermidis (MR)",
        preferredAntibiotics: [
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"} 
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"}, 
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
        ]
    },

    {
        name: "Staphylococcus Epidermidis (MS)",
        preferredAntibiotics: [
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}

        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Staphylococcus Lugdunensis",
        preferredAntibiotics: [
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"}
        ],
        allAntibiotics:[ 
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Fusidic Acid", class: "Other", detailsPage: "antibiotic.html?name=Fusidic Acid"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"},  
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            
        ]
    },

    {
        name: "Staphylococcus Saprophyticus",
        preferredAntibiotics: [
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}
        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam" },
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin" },
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Streptococcus Anginosus gp",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}

        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},

        ]
    },

    {
        name: "Streptococcus Pyogenes (Group A)",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Streptococcus Agalactiae (Group B)",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Streptococcus gp C, F, G",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Streptococcus Pneumoniae",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Nafcillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Nafcillin"},
            { name: "Oxacillin", class: "Penicillins", detailsPage: "antibiotic.html?name=Oxacillin"},
            { name: "Cloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Cloxacillin"},
            { name: "Flucloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Flucloxacillin"},
            { name: "Dicloxacillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Dicloxacillin"},
        ]
    },

    {
        name: "Virdans Streptococcus",
        preferredAntibiotics: [
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"}
        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
           { name: "Tedizolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Tedizolid"},  
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
           { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
           { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
           { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Arcanobacter sp.",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"}, 
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"}, 


        ],
        allAntibiotics:[
            { name: "Pristinamycin", class: "Other", detailsPage: "antibiotic.html?name=Pristinamycin"},
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ]
    },

    {
        name: "Corynebacterium Diphtheriae",
        preferredAntibiotics: [
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"}, 
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ]
    },

    {
        name: "Corynebacterium Jeikeium",
        preferredAntibiotics: [
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"}

        ],
        allAntibiotics:[
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}

        ]
    },

    {
        name: "Listeria Monocytogenes",
        preferredAntibiotics: [
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"}

        ]
    },

    {
        name: "Nocardia sp.",
        preferredAntibiotics: [
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
        ],
        allAntibiotics:[
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 

        ]
    },

    {
        name: "Aeromonas sp.",
        preferredAntibiotics: [
            //none in sanford guide that have preferred coverage 
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Citrobacter Freundii",
        preferredAntibiotics: [
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

        ],
        allAntibiotics:[
            { name: "Fosfomycin (oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Citrobacter Koseri",
        preferredAntibiotics: [
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Enterobacter Cloacae",
        preferredAntibiotics: [
            //none in sanford guide that have preferred coverage 
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Escherichia Coli (S)",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins", detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Escherichia Coli (ESBL)",
        preferredAntibiotics: [
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            
        ]
    },

    {
        name: "Escherichia Coli (KPC)",
        preferredAntibiotics: [
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},

        ],
        allAntibiotics:[
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 

        ]
    },

    {
        name: "Escherichia Coli (MBL)",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            
        ]
    },

    {
        name: "Klebsiella Pneumoniae (S)",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Klebsiella Oxytoca (S)",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
        ],
        allAntibiotics:[
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Nitrofurantoin", class: "Other", detailsPage: "antibiotic.html?name=Nitrofurantoin"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Klebsiella sp. (ESBL)",
        preferredAntibiotics: [
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 

        ],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Klebsiella sp. (KPC)",
        preferredAntibiotics: [
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
        ],
        allAntibiotics:[
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
        ]
    },

    {
        name: "Klebsiella sp. (MBL)",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
        ]
    },

    {
        name: "Klebsiella Aerogenes",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Pivmecillinam", class: "Other", detailsPage: "antibiotic.html?name=Pivmecillinam"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Morganella Morganii",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins", detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Proteus Mirabilis",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"}, 
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ]
    },

    {
        name: "Proteus Vulgaris",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Providencia sp.",
        preferredAntibiotics: [
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ],
        allAntibiotics:[
            { name: "Fosfomycin (Oral)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (Oral)"},
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Norfloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Norfloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Salmonella sp.",
        preferredAntibiotics: [

        ],
        allAntibiotics:[
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
        ]
    },

    {
        name: "Serratia Marcescens",
        preferredAntibiotics: [

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Plazomicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Plazomicin"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 

        ]
    },

    {
        name: "Shigella sp.",
        preferredAntibiotics: [
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Yersinia Enterocolitica",
        preferredAntibiotics: [
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Bartonella sp.",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
        ],
        allAntibiotics:[
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
        ]
    },

    {
        name: "Bordetella Pertussis",
        preferredAntibiotics: [
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"}
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}
        ]
    },

    {
        name: "Borrelia Burgdoferi",
        preferredAntibiotics: [
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

        ],
        allAntibiotics:[
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"}, 
        ]
    },

    {
        name: "Brucella sp.",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Campylobacter Jejuni",
        preferredAntibiotics: [ 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
        ],
        allAntibiotics:[
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Amikacin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Amikacin"},
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Capnocytophaga sp.",
        preferredAntibiotics: [
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"}, 
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
        ]
    },

    {
        name: "Coxiella Burnetii",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
        ]
    },

    {
        name: "Ehrlichia, Anaplas",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

        ],
        allAntibiotics:[
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
        ]
    },

    {
        name: "Eikenella sp.",
        preferredAntibiotics: [

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Francisella Tularensis",
        preferredAntibiotics: [
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},

        ]
    },

    {
        name: "Haemophilus Ducreyi",
        preferredAntibiotics: [
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
        ],
        allAntibiotics:[
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
        ]
    },

    {
        name: "Haemophilus Influenzae",
        preferredAntibiotics: [
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Kingella sp.",
        preferredAntibiotics: [
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"}, 
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },

        ]
    },

    {
        name: "Klebsiella Granulomatis",
        preferredAntibiotics: [
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
 

        ]
    },

    {
        name: "Legionella sp.",
        preferredAntibiotics: [
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
        ]
    },

    {
        name: "Leptospira sp.",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ]
    },

    {
        name: "Moraxella Catarrhalis",
        preferredAntibiotics: [
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },

        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Cefditoren", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefditoren"},  
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
        ]
    },

    {
        name: "Neisseria Meningitidis",
        preferredAntibiotics: [
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Pasturella Multocida",
        preferredAntibiotics: [
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Cefdinir", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefdinir"},  
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"}, 
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
        ]
    },

    {
        name: "Rickettsia Rickettsii",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  

        ]
    },

    {
        name: "Vibrio Cholera",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Vibrio Parahemolyticus",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Vibrio Vulnificus",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
        ]
    },

    {
        name: "Yersinia Pestis",
        preferredAntibiotics: [            
            { name: "Gentamicin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Gentamicin"},
        ],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Acinetobacter Baumannii",
        preferredAntibiotics: [            
            {name: "None"}

        ],
        allAntibiotics:[
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},

        ]
    },

    {
        name: "Burkholderia cepacia complex",
        preferredAntibiotics: [],
        allAntibiotics:[
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
        ]
    },
    {
        name: "Pseudomonas Aeruginosa",
        preferredAntibiotics: [
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},

        ],
        allAntibiotics:[
            { name: "Tobramycin", class: "Aminoglycosides", detailsPage: "antibiotic.html?name=Tobramycin"},
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
            { name: "Aztreonam", class: "Monobactams", detailsPage: "antibiotic.html?name=Aztreonam"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
        ]
    },

    {
        name: "Stenotrophomonas Maltophilia",
        preferredAntibiotics: [
            { name: "Trimethoprim-Sulfamethoxazole", class: "Other", detailsPage: "antibiotic.html?name=Trimethoprim-Sulfamethoxazole"},

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Cefiderocol", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefiderocol"},
        ]
    },

    {
        name: "Chlamydia Trachomatis",
        preferredAntibiotics: [
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
        ],
        allAntibiotics:[
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"}, 
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ]
    },

    {
        name: "Chlamydophila sp.",
        preferredAntibiotics: [
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Telithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Telithromycin"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 
        ]
    },

    {
        name: "Mycoplasma Pneumoniae",
        preferredAntibiotics: [
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  

        ],
        allAntibiotics:[
            { name: "Lefamulin", class: "Pleuromutilins", detailsPage: "antibiotic.html?name=Lefamulin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Gemifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gemifloxacin"}, 
            { name: "Prulifloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Prulifloxacin"}, 
            { name: "Ofloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Ofloxacin"}, 
            { name: "Ciprofloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Ciprofloxacin"}, 

        ]
    },

    {
        name: "Bacteroides Fragilis",
        preferredAntibiotics: [
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 

        ]
    },

    {
        name: "Fusobacterium Necrophorum",
        preferredAntibiotics: [
            { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Prevotella sp.",
        preferredAntibiotics: [
            { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },

    {
        name: "Actinomyces sp.",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"},
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"},  

        ],
        allAntibiotics:[
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"},  
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },

        ]
    },

    {
        name: "Clostridium sp.",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},

        ],
        allAntibiotics:[
            { name: "Metronidazole", class: "Other", detailsPage: "antibiotic.html?name=Metronidazole"}, 
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
            { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
            { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
            { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
            { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clarithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Clarithromycin"},
            { name: "Azithromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Azithromycin"},
            { name: "Erythromycin", class: "Macrolides", detailsPage: "antibiotic.html?name=Erythromycin"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"}, 
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"}, 
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Delafloxacin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}

        ]
    },

    {
        name: "Cutibacterium acnes",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},

        ],
        allAntibiotics:[
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
           { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
           { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
           { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"}, 
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"},  
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"}
        ]
    },

    {
        name: "Peptostreptococci",
        preferredAntibiotics: [
            { name: "Penicillin G", class: "Penicillins",detailsPage: "antibiotic.html?name=Penicillin G"},
            { name: "Penicillin VK", class: "Penicillins", detailsPage: "antibiotic.html?name=Penicillin VK"},
            { name: "Amoxicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin" },
            { name: "Ampicillin", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin" },
        ],
        allAntibiotics:[
            { name: "Fosfomycin (IV)", class: "Other", detailsPage: "antibiotic.html?name=Fosfomycin (IV)"},
            { name: "Chloramphenicol", class: "Other", detailsPage: "antibiotic.html?name=Chloramphenicol"},
           { name: "Linezolid", class: "Oxazolids", detailsPage: "antibiotic.html?name=Linezolid"}, 
           { name: "Dalbavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Dalbavancin"},  
           { name: "Oritavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Oritavancin"},  
           { name: "Telavancin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Telavancin"},  
            { name: "Teicoplanin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Teicoplanin"},
            { name: "Vancomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Vancomycin"},
            { name: "Daptomycin", class: "Glyc/Lipo", detailsPage: "antibiotic.html?name=Daptomycin" },
            { name: "Tigecycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tigecycline"},  
            { name: "Tetracycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Tetracycline"},  
            { name: "Omadacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Omadacycline"},  
            { name: "Minocycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Minocycline"},  
            { name: "Eravacycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Eravacycline"},  
            { name: "Doxycycline", class: "Tetracyclines", detailsPage: "antibiotic.html?name=Doxycycline"}, 
            { name: "Clindamycin", class: "Lincosamides", detailsPage: "antibiotic.html?name=Clindamycin"}, 
            { name: "Cefpodoxime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefpodoxime"},  
            { name: "Ceftibuten", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Ceftibuten"},  
            { name: "Cefixime", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefixime"},  
            { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefuroxime-Axetil"},  
            { name: "Cefprozil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefprozil"},
            { name: "Cefaclor", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefaclor"},  
            { name: "Cephalexin", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cephalexin"},  
            { name: "Cefadroxil", class: "Cephalosporins (Oral)", detailsPage: "antibiotic.html?name=Cefadroxil"}, 
            { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftolazone-Tazobactam"},
            { name: "Ceftobiprole", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftobiprole"},  
            { name: "Ceftaroline", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftaroline"}, 
            { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Ceftazidime-Avibactam"},
            { name: "Cefepime-Enmetazobactam", class:"Cephalosporins (IV)",detailsPage: "antibiotic.html?name=Cefepime-Enmetazobactam"},  
            { name: "Cefepime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefepime"}, 
            { name: "Ceftazidime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftazidime"},
            { name: "Ceftriaxone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftriaxone"}, 
            { name: "Cefoperazone", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoperazone"},  
            { name: "Ceftizoxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Ceftizoxime"},  
            { name: "Cefotaxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotaxime"},  
            { name: "Cefuroxime", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefuroxime"},  
            { name: "Cefoxitin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefoxitin"}, 
            { name: "Cefotetan", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefotetan"}, 
            { name: "Cefazolin", class: "Cephalosporins (IV)", detailsPage: "antibiotic.html?name=Cefazolin"},
            { name: "Gatifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Gatifloxacin"}, 
            { name: "Delafloxacin", class: "Fluoroquinolones",detailsPage: "antibiotic.html?name=Delafloxacin"}, 
            { name: "Levofloxacin",  class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Levofloxacin"}, 
            { name: "Moxifloxacin", class: "Fluoroquinolones", detailsPage: "antibiotic.html?name=Moxifloxacin"}, 
            { name: "Meropenem-Vaborbactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem-Vaborbactam"}, 
            { name: "Meropenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Meropenem"}, 
            { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin-Relebactam"}, 
            { name: "Imipenem-Cilastatin", class: "Carbapenems",detailsPage: "antibiotic.html?name=Imipenem-Cilastatin"}, 
            { name: "Ertapenem", class: "Carbapenems",detailsPage: "antibiotic.html?name=Ertapenem"}, 
            { name: "Doripenem",  class: "Carbapenems", detailsPage: "antibiotic.html?name=Doripenem"}, 
            { name: "Piperacillin-Tazobactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Piperacillin-Tazobactam"}, 
            { name: "Ampicillin-Sulbactam", class: "Penicillins",detailsPage: "antibiotic.html?name=Ampicillin-Sulbactam"}, 
            { name: "Amoxicillin-Clavulanate", class: "Penicillins",detailsPage: "antibiotic.html?name=Amoxicillin-Clavulanate" },
        ]
    },
];
















//abx dosing
const antibioticDosingData = {

    "Penicillin G": {
        indications: [
            {
                name:"Actinomycosis, severe or extensive",
                dose: "IV: 10 - 20 million units/day as a continuous infusion or divided doses every 4-6 hours", 
                description: "Duration of 4-6 weeks followed by appropriate oral therapy long term "
            }, 

            {
                name: "Anthrax, systemic, including meningitis, treatment", 
                dose: "IV: 4 million units every 4 hours, in combination with other appropriate agents ≥ 2 weeks",
                description: ""
            }, 

            {
                name: "Meningitis, bacterial", 
                dose: "IV: 4 million units every 4 hours", 
                description: "Duration duration is 7-21 days depending on pathogen and clinical response"
            }, 

            {
                name: "Neurosyphilis", 
                dose: "IV: 18-24 million units/day as a continuous infusion or in divided doses every 4 hours for 10-14 days. ", 
                description: "Penicillin desensitization and treatment is recommended in patients with a history of severe penicillin allergy "
            }, 

            {
                name: "Osteomyelitis and/or discitis", 
                dose: "IV: 20-24 million units/day as a continuous infusion or in divided doses every 4 hours. ", 
                description: "Generally treat for ≥ 6 weeks depending on clinical response"
            }, 

            {
                name: "Prosthetic joint infection", 
                dose: "IV: 20-24 million units/day as a continuous infusion or in divided doses every 4 hours. ", 
                description: "Generally treat for 4-6 weeks depending on clinical response"
            }, 

            {
                name: "Toxic shock syndrome", 
                dose: "IV: 4 million units every 4 hours in combination with clindamycin. ", 
                description: "Treat patients who are bacteremic for ≥ 2 weeks"
            }, 

        ],
        renalAdjustments: {
            "≥ 50": "No adjustment needed",
            "> 30-49": "Administer 50-75% of usual indication specific dose",
            "10-29": "Administer 25-50% of usual indication specific dose",
            "< 10":"Administer 20-25% of the usual indication specific dose",
            "HD": "Administer 100% of the usual indication specific dose for the first dose, then administer 25-50% of the usual indication specific dose as a continuous infusion or in divided doses every 4-6 hours thereafter", 
            "Peritoneal dialysis": "Dose as for CrCl < 10 mL/min",
            "CRRT": "Clearance dependent on effluent flow rate: Administer 100% of the usual indication specific dose for the first dose, then administer 50-75% of the usual indication specific dose as a continuous infusion or in divided doses every 4-6 hours thereafter"
        }
    },

    "Penicillin VK": {
        indications: [
            {
                name: "Actinomycosis", 
                dose: "Oral: 500 - 1000 mg every 6 hours",
                description: "Duartion is uncertain: experts suggest 2-6 months for mild infection and 6-12 months for severe extensive infection",
            },
            {
                name: "Anthrax", 
                dose: "Oral: 500 mg every 6 hours",
                description: "",
            },
            {
                name: "Meningococcal prophylaxis in patients with complement deficiency", 
                dose: "Oral: 500 mg twice daily in addition to meningococcal vaccination",
                description: "",
            },
            {
                name: "Pneumococcal prophylaxis in patients at high risk ", 
                dose: "Oral: 250 - 500 mg twice daily",
                description: "",
            },
            {
                name: "Prosthetic Joint Infection", 
                dose: "Oral: 500 mg 2-4 times daily",
                description: "",
            },
            {
                name: "Skin and soft tissue infection", 
                dose: "Cellulitis: 250 - 500 mg twice daily ---- Erysipelas: 500 mg every 6 hours ---- Erysipeloid: 500 mg every 6 hours " ,
                description: "Duartion is uncertain: experts suggest 2-6 months for mild infection and 6-12 months for severe extensive infection",
            },
            {
                name: "Streptococcus, Group A", 
                dose: "Pharyngitis: 500 mg orally 2-3 times daily  ---- Secondary prophylaxis: 250 mg orally twice daily ---- Chronic carriage: 500 mg orally 4 times daily " ,
                description: "Duartion is uncertain: experts suggest 2-6 months for mild infection and 6-12 months for severe extensive infection",
            },
        ],
        renalAdjustments: {
            "≥ 50": "No dosage adjustment necessary",
            "> 30-49": "No dosage adjustment necessary",
            "10-29": "No dosage adjustment necessary",
            "< 10":"No dosage adjustment necessary",
            "HD": "Oral: no dose adjustment necessary. On dialysis days administer at least 1 dose after HD", 
            "Peritoneal dialysis": "No dosage adjustment necessary",
            "CRRT": "No dosage adjustment necessary",
        }
    },

    "Nafcillin": {
        indications: [
            {
                name: "Bloodstream Infection", 
                dose: "IV: 2 grams every 4 hours",
                description: "Treat uncomplicated bacteremia for ≥ 14 days starting from day of first negative blood culture",
            },
            {
                name: "Endocarditis",
                dose: "12 grams/day in 4-6 divided doses for 6 weeks",
                description: "",
            },
            {
                name: "Meningitis", 
                dose: "IV 2 grams every 4 hours", 
                description: "Duration is 10-14 days, depending on causative pathogens and clinical response",
            },

            {
                name: "Osteomyelitis", 
                dose: "IV: 1.5 - 2 grams every 4-6 hours or via continuous infusion ≥ 6 weeks depending on extent of infection, debridemnet, and clinical response", 
                description: "",
            },

            {
                name: "Pneumonia", 
                dose: "IV: 2 grams every 4 hours", 
                description: "",
            },

            {
                name: "Prosthetic Joint Infection", 
                dose: "IV: 1.5 - 2 grams every 4-6 hours", 
                description: "Duration ranges from 2 - 6 weeks depending on prosthesis management, use of rifampin, and other patient specific factors",
            },
            {
                name: "Skin and Soft Tissue Infection", 
                dose: "1-2 grams every 4-6 hours depending on type of infection (Cellulitis, Necrotizing infection, Surgical site infection)", 
                description: "",
            },
        ],
        renalAdjustments: {
            "≥ 50": "No dosage adjustment necessary",
            "> 30-49": "No dosage adjustment necessary",
            "10-29": "No dosage adjustment necessary",
            "< 10":"No dosage adjustment necessary",
            "HD": "No dosage adjustment necessary", 
            "Peritoneal dialysis": "No dosage adjustment necessary",
            "CRRT": "No dosage adjustment necessary",
        }
    },
    "Oxacillin": {
        indications: [
            {
                name: "Bloodstream Infection", 
                dose: "IV: 2 grams every 4 hours",
                description: "Treat uncomplicated bacteremia for ≥ 14 days starting from day of first negative blood culture",
            },
            {
                name: "Endocarditis, treatment (Native Valve)",
                dose: "12 grams/day in 4-6 divided doses for 6 weeks",
                description: "",
            },
            {
                name: "Endocarditis, treatment (Prosthetic Valve)",
                dose: "12 grams/day in 6 divided doses for ≥ 6 weeks",
                description: "Use with rifampin for duration of therapy and gentamicin for first 2 weeks",
            },
            {
                name: "Meningitis, bacterial", 
                dose: "IV 2 grams every 4 hours", 
                description: "Duration is 10-14 days, depending on causative pathogens and clinical response",
            },

            {
                name: "Osteomyelitis or discitis", 
                dose: "IV: 1.5 - 2 grams every 4-6 hours or via continuous infusion ≥ 6 weeks depending on extent of infection, debridemnet, and clinical response", 
                description: "",
            },

            {
                name: "Pneumonia", 
                dose: "IV: 2 grams every 4 hours", 
                description: "",
            },

            {
                name: "Prosthetic Joint Infection", 
                dose: "IV: 1.5 - 2 grams every 4-6 hours", 
                description: "Duration ranges from 2 - 6 weeks depending on prosthesis management, use of rifampin, and other patient specific factors",
            },
            {
                name: "Skin and Soft Tissue Infection", 
                dose: "1-2 grams every 4-6 hours depending on type of infection (Cellulitis, Necrotizing infection, Surgical site infection)", 
                description: "",
            },
        ],
        renalAdjustments: {
            "≥ 10": "No dosage adjustment necessary",
            "< 10":"No dosage adjustment necessary, but max dose of 8 grams per day may be considered",
            "HD": "No dosage adjustment necessary, but max dose of 8 grams per day may be considered", 
            "Peritoneal dialysis": "5% dialyzed. No dosage adjustment necessary, but max dose of 8 grams per day may be considered",
            "CRRT": "No dosage adjustment necessary",
            "PIRRT": "No dosage adjustment necessary",
        }
    },

    "Cloxacillin": {
        indications: [
            {
                name: "Bloodstream Infection: MSSA", 
                dose: "IV: 2 grams every 4-6 hours",
                description: "Treat uncomplicated bacteremia for ≥ 14 days starting from day of first negative blood culture",
            },
            {
                name: "Endocarditis, treatment (Native Valve)",
                dose: "12 grams/day in 4-6 divided doses for 6 weeks",
                description: "",
            },
            {
                name: "Endocarditis, treatment (Prosthetic Valve)",
                dose: "12 grams/day in 6 divided doses for ≥ 6 weeks",
                description: "Use with rifampin for duration of therapy and gentamicin for first 2 weeks",
            },
            {
                name: "Osteomyelitis: MSSA", 
                dose: "IV: 2 grams every 4 hours for ≥ 6 weeks", 
                description: "",
            },
            {
                name: "Skin and Soft Tissue Infection, Impetigo", 
                dose: "Oral: 250-500 mg every 6 hours for 5-7 days", 
                description: "",
            },
        ],
        renalAdjustments: {
            "≥ 10": "No dosage adjustment necessary",
            "< 10":"No dosage adjustment necessary, but monitoring recommended",
            "HD": "Not significantly dialyzed, dose as CrCl < 10 mL/min. ", 
            "Peritoneal dialysis": "Not significantly dialyzed, dose as CrCl < 10 mL/min." ,
            "CRRT": "No dosage adjustment necessary",
            "PIRRT": "No dosage adjustment necessary",
        }
    },

    "Flucloxacillin": {
        indications: [
            {
                name: "Limited Data", 
                dose: "",
                description: "",
            },
            
        ],
        renalAdjustments: {
            "≥ 10": "",
            "< 10":"",
            "HD": "", 
            "Peritoneal dialysis": "",
            "CRRT": "",
            "PIRRT": "",
        }
    },

    "Dicloxacillin": {
        indications: [
            {
                name: "Endocarditis, treatment: Oral step-down therapy",
                dose: "Oral: 1 gram in 4 times daily divided doses for 6 weeks",
                description: "Total duration should include initial IV therapy and should be in combination with rifampin",
            },
            {
                name: "Mastitis, lactational",
                dose: "Oral: 500 mg 4 times daily for 10-14 days",
                description: "",
            },
            {
                name: "Prosthetic Joint Infection", 
                dose: "Oral: 500 mg 3-4 times daily", 
                description: "Duration ranges from minimum of 3 months to indefinitely. First 3-6 months should be in combination with rifampin.",
            },
            {
                name: "Skin and Soft Tissue Infection (Cellulitis - non-purulent/erysipelas)", 
                dose: "Oral: 250 to 500 mg 4 times daily for 5 days", 
                description: "",
            },
            {
                name: "Skin and Soft Tissue Infection (Impetigo or Ecthyma)", 
                dose: "Oral: 250 to 500 mg 4 times daily for 7 days", 
                description: "",
            },
        ],
        renalAdjustments: {
            "≥ 10": "No dosage adjustment necessary",
            "< 10":"No dosage adjustment necessary",
            "HD": "No dosage adjustment necessary", 
            "Peritoneal dialysis": "No dosage adjustment necessary",
            "CRRT": "No dosage adjustment necessary",
            "PIRRT": "No dosage adjustment necessary",
        }
    },

    "Ampicillin": {
        indications: [
            {
                name: "Acinomycosis, severe or extensive",
                dose: "IV: 2 grams every 4-6 hours.",
                description: "Duration of 2-6 weeks followed by long term oral therapy",
            },
            {
                name: "Anthrax (inhalational - post exposure prophylaxis)",
                dose: "Oral: 500 mg every 6 hours. ",
                description: "Duration depends on vaccine status and may be up to 3-4 months for immunocompromised or unvaccinated patients ",
            },
            {
                name: "Anthrax (Cutaneous, without meningitis)",
                dose: "Oral: 500 mg every 6 hours. ",
                description: "Duration is 7-10 days after infection.",
            },
            {
                name: "Anthrax (Systemic, including meningitis)",
                dose: "IV: 2 grams every 4 hours.",
                description: "Use in combination with other appropriate agents for > 2 weeks",
            },
            {
                name: "Bloodstream infection (Enterococcus)",
                dose: "IV: 2 grams every 4 hours.",
                description: "Use in combination with other appropriate agents for 7-14 days",
            },
            {
                name: "Bloodstream infection (Listeria monocytogenes)",
                dose: "IV: 2 grams every 4 hours.",
                description: "Use in combination with gentamicin for nonpregnant patients. Usual duration is 14-21 days",
            },
            {
                name: "Endocarditis, Prophylaxis - dental or invasive respiratory tract procedure",
                dose: "IV/IM: 2 grams as a single dose 30-60 minutes before procedure.",
                description: "",
            },
            {
                name: "Endocarditis, Treatment (Enterococcus faecalis, native or prosthetic valve)",
                dose: "IV: 2 grams every 4 hours as part of a combination regimen (with ceftriaxone or gentamicin)",
                description: "Duration is usually 6 weeks",
            },
            {
                name: "Endocarditis, Treatment (HACEK organisms, native or prosthetic valve)",
                dose: "IV: 2 grams every 4 hours for 4 weeks (native valve) or 6 weeks (prosthetic valve)",
                description: "",
            },
            {
                name: "Endocarditis, Treatment (Viridans group streptococci and streptococcus gallolyticus)",
                dose: "IV: 2 grams every 4 hours for 4-6 weeks",
                description: "Specific dosing is greatly dependent on valve type and MIC.",
            },
            {
                name: "Intra-abdominal infection, health-care associated",
                dose: "IV: 2 grams every 4 hours as part of an appropriate combination regimen",
                description: "",
            },
            {
                name: "Meningitis, bacterial",
                dose: "IV: 2 grams every 4 hours as part of an appropriate combination regimen",
                description: "Usual duration is 7-21 days",
            },
            {
                name: "Osteomyelitis/Discitis, treatment",
                dose: "IV: 2 grams every 4 hours or 12 grams as a continuous infusion every 24 hours",
                description: "Usual duration is > 6 weeks ",
            },
            {
                name: "Pelvic infections, Chorioamnionitis",
                dose: "IV: 2 grams every 6 hours in combination with gentamicin",
                description: "In patients undergoing C-section, add anaerobic coverage",
            },
            {
                name: "Pelvic infections, Postpartum endometritis",
                dose: "IV: 2 grams every 6 hours in combination with clindamycin and gentamicin",
                description: "Treat until afebrile for 24-48 hours",
            },
            {
                name: "Pelvic infections, Tubo-ovarian abscess",
                dose: "IV: 2 grams every 6 hours in combination with clindamycin and gentamicin",
                description: "After 24-48 hours of improvement, may switch to oral therapy for 14 days of treatment.",
            },
            {
                name: "Peritonitis, treatment, peritoneal dialysis",
                dose: "Intraperitoneal: 4 grams added to the dialysate solution once daily (dwell time of >6 hours)",
                description: "",
            },
            {
                name: "Preterm prelabor rupture of membranes (patients < 34 weeks gestation)",
                dose: "IV: 2 grams every 6 hours for 48 hours followed by oral amoxicillinin combination with azithromycin or erythromycin",
                description: "In patients undergoing C-section, add anaerobic coverage",
            },
            {
                name: "Prosthetic Joint Infection", 
                dose: "IV: 2 grams every 4 hours or 12 grams continuous infusion every 24 hours.", 
                description: "Duration ranges from 4 to 6 weeks",
            },
            {
                name: "Streptococcus (Group B), maternal prophylaxis for prevention of neonatal disease", 
                dose: "IV: 2 grams as a single dose at onset of labor or prelabor rupture of membranes, then 1 gram every 4 hours until delivery", 
                description: "",
            },
            {
                name: "Urinary tract infection (Cystitis - acute uncomplicated or acute simple cystitis)", 
                dose: "Oral: 500 mg every 6 hours for 7 days", 
                description: "",
            },
            {
                name: "Urinary tract infection (Pyelonephritis - due to Enterococcus)", 
                dose: "IV: 1-2 grams every 4-6 hours", 
                description: "",
            },
        ],
        renalAdjustments: {
            "50 to < 130": "500 mg to 2 grams every 4-6 hours depending on usual recommended dose",
            "30 < 50": "500 mg to 2 grams every 6-8 hours depending on usual recommended dose",
            "15 < 30": "500 mg to 2 grams every 8-12 hours depending on usual recommended dose",
            "< 15": "500 mg to 2 grams every 12-24 hours depending on usual recommended dose",
            "HD": "500 mg to 2 grams every 12-24 hours depending on usual recommended dose", 
            "Peritoneal dialysis": "500 mg to 2 grams every 12-24 hours depending on usual recommended dose",
            "CRRT": "2 grams every 6 to 12 hours",
            "PIRRT": "2 grams every 8 to 12 hours",
        }
    },

    "Amoxicillin": {
        indications: [
            {
                name: "Acinomycosis",
                dose: "Oral: 500 mg 3 to 4 times daily or 1 gram three times daily",
                description: "Duration of therapy can be up to 12 months depending on severity of infection.",
            },
            {
                name: "Anthrax (inhalational - post exposure prophylaxis)",
                dose: "Oral: 1 gram every 8 hours. ",
                description: "Duration depends on vaccine status and may be up to 3-4 months for immunocompromised or unvaccinated patients ",
            },
            {
                name: "Anthrax (Cutaneous, without meningitis)",
                dose: "Oral: 1 gram every 8 hours. ",
                description: "Duration is 7-10 days after infection.",
            },
            {
                name: "Anthrax (Systemic, including meningitis)",
                dose: "IV: 2 grams every 4 hours.",
                description: "Use in combination with other appropriate agents for > 2 weeks",
            },
            {
                name: "Bronchiectasis (Treatment of pulmonary exacerbations) without B-lactamase positive H.Flu or Pseudomonas Aeruginosa.",
                dose: "Oral: 500 mg three times daily or 1 gram 3 times daily",
                description: "Duration for up to 14 days.",
            },
            {
                name: "Bronchiectasis (Prevention of pulmonary exacerbations)",
                dose: "Oral: 500 mg twice daily",
                description: "Reserve for patients with >3 exacerbations per year who are not colonized with Pseudomonas Aeruginosa.",
            },

            {
                name: "Cervical infection in pregnancy due to Chlamydia trachomatis",
                dose: "Oral: 500 mg three times daily",
                description: "Duration of 7 days with test of cure >4 weeks after treatment. Reserve for patients who are pregnant who cannot use preferred agents.",
            },

            {
                name: "Endocarditis, Prophylaxis - dental tract procedure",
                dose: "Oral: 2 grams as a single dose 30-60 minutes before procedure.",
                description: "",
            },
            {
                name: "Heliobacter pylori eradication",
                dose: "Oral: 1 gram two to three times daily in combination with specified alternative agents.",
                description: "Duration for up to 14 days.",
            },

            {
                name: "Lyme disease (Erythema migrans)",
                dose: "Oral: 500 mg three times daily",
                description: "Duration of 14 days.",
            },
            {
                name: "Lyme disease (Carditis) - for mild disease 1st degree AV block with PR interval < 300 msec or step down for severe disease once PR interval < 300 msec",
                dose: "Oral: 500 mg three times daily",
                description: "Duration of 14 to 21 days.",
            },
            {
                name: "Lyme disease (Arthritis without neurological involvement)",
                dose: "Oral: 500 mg three times daily",
                description: "Duration of 28 days.",
            },
            {
                name: "Otitis media (Acute)",
                dose: "Oral: 500 mg every 8 hours or 875 mg every 12 hours",
                description: "Duration of 5 to 10 days depending on severity.",
            },
            {
                name: "Periodontitis (Severe - plaque associated)",
                dose: "Oral: 500 mg every 8 hours in combination with metronidazole",
                description: "Duration of 14 days or clinical resolution - whichever is longer.",
            },
            {
                name: "Peritonitis, treatment, peritoneal dialysis",
                dose: "Oral: 500 mg three times daily for 3 weeks ",
                description: "If no improvement treat with systemic antibiotics",
            },
            {
                name: "Pneumococcal prophylaxis in high risk patients.",
                dose: "Oral: 500 mg twice daily",
                description: "Duration varies based on patient-specific factors ",
            },
            {
                name: "Community acquired pneumonia",
                dose: "Oral: 1 gram three times daily",
                description: "Duration of at least 5 days. ",
            },
            {
                name: "Preterm prelabor rupture of membranes (patients < 34 weeks gestation)",
                dose: "Oral: 250 mg every 8 hours",
                description: "Administered for 5 days following initial treatment with IV ampicillin as part of a combination regimen with azithromycin or erythromycin",
            },
            {
                name: "Prosthetic Joint Infection - chronic suppression", 
                dose: "Oral: 500 mg three times daily", 
                description: "Duration depends on patient specific factors. Should follow IV therapy in patients undergoing 1-stage exchange or debrediment with retention prosthesis",
            },
            {
                name: "Rhinosinusitis - Acute Bacterial", 
                dose: "Oral: 500 mg every 8 hours or 875 mg every 12 hours", 
                description: "Duration of 5 to 7 days. Reserve antibiotic treatment for patients with risk factors for severe infection.",
            },
            {
                name: "Skin and Soft Tissue Infection - Cellulitis, long term suppression of recurrent infection", 
                dose: "Oral: 500 mg twice daily after completion of treatment.", 
                description: "",
            },
            {
                name: "Skin and Soft Tissue Infection - Erysipelas, treatment of mild infection or step-down therapy", 
                dose: "Oral: 500 mg three times daily or 875 mg twice daily", 
                description: "Duration of 5 days",
            },
            {
                name: "Skin and Soft Tissue Infection - Erysipeloid (localized cutaneous Erysipelothrix rhusiopathiae infection)", 
                dose: "Oral: 500 mg three times daily", 
                description: "Duration for 5 to 10 days",
            },
            {
                name: "Streptococcal pharyngitis (group A)", 
                dose: "Oral: 500 mg twice daily or 1 gram once daily", 
                description: "Duration of 10 days",
            },

            {
                name: "Urinary tract infection (Cystitis - acute uncomplicated or acute simple cystitis)", 
                dose: "Oral: 500 mg every 8 hours or 875 mg every 12 hours", 
                description: "Duration of 5 days",
            },
            {
                name: "Urinary tract infection (Asymptomatic bacteriuria)", 
                dose: "Oral: 500 mg every 8 hours or 875 mg every 12 hours ", 
                description: "Duration 5 to 7 days. ",
            },
        ],
        renalAdjustments: {
            "> 30": "No dosage adjustment necessary",
            "10 to 30": "250 mg to 1 gram every 12 hours depending on usual recommended dose",
            "< 10": "250 mg to 500 mg every 12 to 24 hours depending on usual recommended dose",
            "HD": "250 mg to 500 mg every 12 to 24 hours depending on usual recommended dose", 
            "Peritoneal dialysis": "250 mg to 500 mg every 12 to 24 hours depending on usual recommended dose",
            "CRRT": "N/A",
            "PIRRT": "N/A",
        }
    },

    "Amoxicillin-Clavulanate": {
        indications: [
            {
                name: "Bite wound infection (Prophylaxis or Treatment)",
                dose: "Oral: 875 mg every 12 hours",
                description: "For prophylaxis treatment, duration is 3 to 5 days. For active infection, duration is 5 to 14 days.",
            },
            {
                name: "Bronchiectasis - Acute Exacerbation",
                dose: "Oral: 500 mg every 8 hours or 875 mg every 12 hours",
                description: "Duration for up to 14 days.",
            },
            {
                name: "Chronic Obstructive Pulmonary Disease - Acute Exacerbation",
                dose: "Oral: 500 mg every 8 hours or 875 mg every 12 hours",
                description: "Duration of 5 to 7 days.",
            },
            {
                name: "Diabetic Foot Infection (mild to moderate)",
                dose: "Oral: 875 mg every 12 hours.",
                description: "Duration for up to 4 weeks depending on severity of infection and should be used as part of an appropriate combination regimen",
            },
            {
                name: "Intra-abdominal Infection (mild to moderate - community acquired)",
                dose: "Oral: 875 mg every 8 to 12 hours",
                description: "Duration depends on site of infection.",
            },
            {
                name: "Neutropenic fever (low risk patinets with cancer)",
                dose: "Oral: 500 mg every 8 hours or 875 mg every 12 hours",
                description: "Should be used in comination with ciprofloxacin",
            },
            {
                name: "Odontogenic infection - Acute simple gingivitis (plaque associated)",
                dose: "Oral: 875 mg every 12 hours or 500 mg every 8 hours",
                description: "Duration for 5 to 7 days.",
            },
            {
                name: "Periodontitis - Periodontitis (severe plaque associated)",
                dose: "Oral: 875 mg every 12 hours or 500 mg every 8 hours",
                description: "Duration for 14 days.",
            },
            {
                name: "Pyogenic Odontogenic Soft Tissue Infection",
                dose: "Oral: 875 mg every 12 hours",
                description: "Duration for 7 to 14 days.",
            },
            {
                name: "Otitis media (Acute)",
                dose: "<br> Immediate release: 875 mg twice daily or 500 mg every 8 hours <br> Extended release: 2 grams twice daily",
                description: "Duration of 5 to 7 days depending on severity.",
            },
            {
                name: "Pneumonia (Aspiration pneumonia - community acquired)",
                dose: "Oral: 875 mg twice daily",
                description: "Duration of 5 days",
            },
            {
                name: "Pneumonia (community acquired)",
                dose: "<br> Immediate Release: 500 mg three times daily or 875 mg twice daily as part of an appropriate combination regimen <br> Extended Release: 2 grams twice daily as part of an appropriate combination regimen",
                description: "Duration of 5 days minimum",
            },
            {
                name: "Rhinosinusitis - Acute Bacterial", 
                dose: "<br>Standard dose - Immediate release: 500 mg every 8 hours or 875 mg every 12 hours <br> High Dose - Extended Release: 2 grams every 12 hours", 
                description: "Duration of 5 to 7 days. Reserve antibiotic treatment for patients with risk factors for severe infection.",
            },
            {
                name: "Streptococcus, chronic carriage", 
                dose: "Oral: 40 mg/kg/day in divided doses", 
                description: "",
            },

            {
                name: "Urinary tract infection (Cystitis - acute uncomplicated or acute simple cystitis)", 
                dose: "Oral: 500 mg twice daily", 
                description: "Duration of 5 to 7 days",
            },
            {
                name: "Urinary tract infection (Complicated - pyelonephritis)", 
                dose: "Oral: 875 mg two or three times daily", 
                description: "Duration of 5 to 7 days",
            },
            {
                name: "Urinary tract infection (Asymptomatic bacteriuria)", 
                dose: "Oral: 500 mg every 8 hours or 875 mg every 12 hours ", 
                description: "Duration 5 to 7 days. ",
            },
        ],
        renalAdjustments: {
            "> 30": "No dosage adjustment necessary",
            "10 to 30": "250 mg to 500 mg every 12 hours",
            "< 10": "250 mg to 500 mg every 12 to 24 hours",
            "HD": "250 mg to 500 mg every 12 to 24 hours", 
            "Peritoneal dialysis": "250 mg to 500 mg every 12 hours",
            "CRRT": "N/A",
            "PIRRT": "N/A",
        }
    },

    "Ampicillin-Sulbactam": {
        indications: [
            {
                name: "Acinetobacter baumannii infection",
                dose: "IV: 9 grams every 8 hours over 4 hours or 27 grams per day over 24 hours as a continuous infusion",
                description: "Use as part of an appropriate combination regimen whenever possible",
            },
            {
                name: "Anthrax, systemic treatment",
                dose: "IV: 3 grams every 6 hours in combination with other appropriate agents.",
                description: "Duration for 14 days. Administer antitoxin in addition to antibiotics for systemic anthrax",
            },
            {
                name: "Bite wound infection",
                dose: "IV: 1.5 to 3 grams every 6 hours",
                description: "Continue treatment for 1 to 2 days after resolution of infection. ",
            },
            {
                name: "Bloodstream infection",
                dose: "IV: 3 grams every 6 hours",
                description: "Duration for 7 to 14 days",
            },
            {
                name: "Diabetic foot infection, moderate to severe",
                dose: "IV: 3 grams every 6 hours.",
                description: "Duration for 2 to 4 weeks. ",
            },
            {
                name: "Endocarditis, treatment",
                dose: "IV: 3 grams every 6 hours in combination with gentamicin. ",
                description: "Duration for 6 weeks.",
            },
            {
                name: "Odontogenic soft tissue infection, pyogenic",
                dose: "IV: 3 grams every 6 hours. Transition to oral step-down therapy once clinical improvement is seen.",
                description: "Duration usually 7 to 14 days",
            },
            {
                name: "Pelvic infections - Pelvic inflammatory disease (including tubo-ovarian abscess",
                dose: "IV: 3 grams every 6 hours in combination with doxycycline.",
                description: "",
            },
            {
                name: "Pelvic infections - Postpartum endometritis",
                dose: "IV: 3 grams every 6 hours.",
                description: "",
            },
            {
                name: "Peritonitis, treatment (peritoneal dialysis)",
                dose: "Intraperitoneal: <br> Loading dose: 1.5 grams per liter of dialysate. <br> Maintenance dose: 200 mg per liter of dialysate with each subsequent dialysis exchange.",
                description: "Duration of therapy is 2 to 3 weeks depending on organism.",
            },
            {
                name: "Pneumonia (Aspiration pneumonia - community acquired)",
                dose: "IV: 1.5 to 3 grams every 6 hours.",
                description: "Duration of 5 days",
            },
            {
                name: "Pneumonia (community acquired)",
                dose: "IV: 3 grams every 6 hours in combination with other agents when appropriate.",
                description: "Duration of 5 days.",
            },
            {
                name: "Pneumonia (Hospital acquired or Ventilator associated)",
                dose: "IV: 3 grams every 6 hours in combination with other agents when appropriate.",
                description: "Duration of 7 days.",
            },
            {
                name: "Surgical prophylaxis",
                dose: "IV: 3 grams within 60 minutes prior to surgical incision",
                description: "",
            },
            {
                name: "Surgical site infection",
                dose: "IV: 3 grams every 6 hours",
                description: "Duration depends on severity of infection",
            },
        ],
        renalAdjustments: {
            "> 30": "No dosage adjustment necessary",
            "15 to 30": "1.5 to 3 grams every 12 hours depending on usual recommended dose",
            "< 15": "1.5 to 3 grams every 24 hours depending on usual recommended dose",
            "HD": "1.5 to 3 grams every 12 to 24 hours", 
            "Peritoneal dialysis": "1.5 grams every 12 hours or 3 grams every 24 hours",
            "CRRT": "3 grams every 8 to 12 hours",
            "PIRRT": "3 grams followed by 1.5 to 3 grams every 8 to 12 hours.",
        }
    },
    "Piperacillin-Tazobactam": {
        indications: [
            {
                name: "Bite wound infection",
                dose: "IV: 3.375 grams every 6 to 8 hours.",
                description: "Duration is usually 5 to 14 days.",
            },
            {
                name: "Bloodstream infection - Community Acquired Infection",
                dose: "IV: 3.375 grams every 6 hours",
                description: "",
            },
            {
                name: "Bloodstream infection - Health care-associated infection",
                dose: "IV: 4.5 grams every 6 hours",
                description: "",
            },
            {
                name: "Cystic fibrosis, severe acute pulmonary exacerbation or failure of oral therapy",
                dose: "IV: 4.5 grams every 6 hours",
                description: "",
            },
            {
                name: "Diabetic foot infection, moderate to severe",
                dose: "IV: 3.375 grams every 6 hours or 4.5 grams every 8 hours.",
                description: "Duration for 2 to 4 weeks. ",
            },
            {
                name: "Intra-abdominal infection - Acute Cholecystitis",
                dose: "IV: 3.375 grams or 4.5 grams every 6 hours",
                description: "Continue for 1 day after gallbladder removal or clinical resolution in nonoperative patients.",
            },
            {
                name: "Intra-abdominal infection - Cholangitis, perforated appendix, diverticulitis, abscess",
                dose: "IV: 3.375 grams or 4.5 grams every 6 hours",
                description: "",
            },
            {
                name: "Neutropenic fever, high risk patients with cancer",
                dose: "IV: 4.5 grams every 6 to 8 hours until afebrile for > 48 hours",
                description: "Continue for 1 day after gallbladder removal or clinical resolution in nonoperative patients.",
            },
            {
                name: "Pneumonia (Community acquired)",
                dose: "IV: 4.5 grams every 6 hours as part of an appropriate combination regimen",
                description: "",
            },
            {
                name: "Pneumonia (Hospital acquired or Ventilator associated)",
                dose: "IV: 4.5 grams every 6 hours.",
                description: ".",
            },
            {
                name: "Sepsis and septic shock",
                dose: "IV: 4.5 grams every 6 hours.",
                description: "",
            },
            {
                name: "Skin and soft tissue infection, moderate to severe",
                dose: "IV: 3.375 grams every 6 hours or 4.5 grams every 8 hours.",
                description: "",
            },
            {
                name: "Urinary tract infection, complicated (pyelonephritis)",
                dose: "IV: 3.375 grams every 6 hours or 4.5 grams every 8 hours",
                description: "",
            },
        ],
        renalAdjustments: {
            "100 to < 130": "Extended infusion preferred if recommended dose is 3.375 grams or 4.5 grams every 6 hours. If usual recommended dose is 3.375 grams as extended infusion then 3.375 grams or 4.5 grams infused over 4 hours every 6 hours",
            "40 to < 100": "3.375 or 4.5 grams every 6 hours or extended infusion depending on usual recommended dose.",
            "20 to < 40": "Variable depending on usual recommended dose",
            "< 20": "Variable depending on usual recommended dose", 
            "HD": "4.5 grams every 12 hours or 2.25 grams every 8 hours",
            "Peritoneal dialysis": "4.5 grams every 12 hours of 2.25 grams every 8 hours",
            "CRRT": "4.5 grams every 8 hours",
            "PIRRT": "3.375 or 4.5 grams every 8 hours ",
        }
    },

    "Doripenem": {
        indications: [
            {
                name: "Limited Data", 
                dose: "",
                description: "",
            },
            
        ],
        renalAdjustments: {
            "≥ 10": "",
            "< 10":"",
            "HD": "", 
            "Peritoneal dialysis": "",
            "CRRT": "",
            "PIRRT": "",
        }
    },

    "Ertapenem": {
        indications: [
            {
                name: "Bite wound infection",
                dose: "IV: 1 gram once daily",
                description: "Duration is typically 5 - 14 days (may include oral step down therapy) ",
            },
            {
                name: "Bloodstream infection",
                dose: "IV: 1 gram once daily",
                description: "Duration for 7 to 14 days",
            },
            {
                name: "Diabetic foot infection, moderate to severe",
                dose: "IV: 1 gram once daily",
                description: "Duration for 2 to 4 weeks. ",
            },
            {
                name: "Intra-abdominal infection - Cholecystitis",
                dose: "IV: 1 gram once daily",
                description: "Continue for 1 day after gallbladder removal or clinical resolution.",
            },
            {
                name: "Intra-abdominal infection - (perforated appendix, appendiceal abscess, cholangitis, diverticulitis)",
                dose: "IV: 1 gram once daily",
                description: "Duration depends on type of infection and adequate source control",
            },
            {
                name: "Osteomyelitis +/- Discitis",
                dose: "IV: 1 gram once daily",
                description: "Duration is usually 6 weeks ",
            },
            {
                name: "Pelvic infections - Acute",
                dose: "IV: 1 gram once daily",
                description: "",
            },
            {
                name: "Pneumonia (Community acquired)",
                dose: "IV: 1 gram once daily",
                description: "Use as part of an appropriate combination regimen",
            },
            {
                name: "Pneumonia (Hospital acquired or Ventilator associated)",
                dose: "IV: 1 gram once daily.",
                description: "Duration of 7 days.",
            },
            {
                name: "Prosthetic Joint Infection",
                dose: "IV: 1 gram every 24 hours",
                description: "Duration generally 4 to 6 weeks",
            },
            {
                name: "Skin and Soft Tissue Infections",
                dose: "IV: 1 gram once daily",
                description: "Use as part of an appropriate combination regimen",
            },
            {
                name: "Surgical prophylaxis (colorectal surgery)",
                dose: "IV: 1 gram within 60 minutes prior to surgery",
                description: "",
            },
            {
                name: "Urinary Tract Infection - Complicated",
                dose: "IV: 1 gram once daily",
                description: "Duration depends on severity of infection",
            },
        ],
        renalAdjustments: {
            "> 30": "No dosage adjustment necessary",
            "< 30": "500 mg once daily",
            "HD": "500 mg once daily", 
            "Peritoneal dialysis": "500 mg once daily",
            "CRRT": "1 gram once daily",
            "PIRRT": "1 gram once daily",
        }
    },

    "Imipenem-Cilastatin": {
        indications: [
            {
                name: "Anthrax - Systemic (including meningitis)",
                dose: "IV: 1 gram every 6 hours",
                description: "Use in combination with other appropriate agents for > 2 weeks",
            },
            {
                name: "Bloodstream infection",
                dose: "IV: 500 mg every 6 hours",
                description: "Duration is usually 7 - 14 days depending on source and extent of infection",
            },
            {
                name: "Cystic fibrosis, severe acute pulmonary exacerbation",
                dose: "IV: 500 mg - 1 gram every 6 hours",
                description: "Duration is usually 10 - 14 days. ",
            },
            {
                name: "Diabetic foot infection, moderate to severe",
                dose: "IV: 500 mg every 6 hours",
                description: "Duration for 2 to 4 weeks. ",
            },
            {
                name: "Endocarditis - treatment ",
                dose: "IV: 500 mg every 6 hours OR 1 gram every 8 hours",
                description: "Use as part of an appropriate combination regimen for 6 weeks",
            },
            {
                name: "Intra-abdominal infection - Healthcare associated cholecystitis",
                dose: "IV: 500 mg every 6 hours or 1 gram every 8 hours",
                description: "Continue for 1 day after gallbladder removal or clinical resolution in nonoperative patients. Reserve for patients who cannot tolerate a beta-lactam or are at risk for infection with ESBL organism. ",
            },
            {
                name: "Intra-abdominal infection - Healthcare associated Cholangitis, perforated appendix, diverticulitis, abscess",
                dose: "IV: 500 mg every 6 hours or 1 gram every 8 hours",
                description: "Duration usually 4 - 5 days following adequate source control",
            },
            {
                name: "Melioidosis or glanders",
                dose: "IV: 25 mg/kg up to 1 gram every 6 - 8 hours",
                description: "Duration usually 14 days",
            },
            {
                name: "Mycobacterial infection (nontuberculosis)",
                dose: "IV: 500 mg - 1 gram twice daily",
                description: "Use as part of an appropriate combination regimen for 2 - 12 weeks. ",
            },
            {
                name: "Neutropenic fever, high risk patients with cancer",
                dose: "IV: 500 mg every 6 hours",
                description: "Use until afebrile for > 48 hours and neutropenia has resolved (ANC ? 500 cells/mm^3)",
            },
            {
                name: "Nocardiosis - Severe",
                dose: "IV: 500 mg every 6 hours. ",
                description: "Use as part of an appropriate combination regimen. ID consult strongly recommended. Duration usually 6 - 12 months",
            },
            {
                name: "Peritonitis - Treatment",
                dose: "<br><br>Intermittent Intraperitoneal: 500 mg added to dialysate with every other exchange. Allow to dwell > 6 hours <br><br> Continuous Intraperitoneal: Loading dose of 250 mg/L with first exchange; maintenance dose 50 mg/L with each subsequate exchange",
                description: "<br>Duration usually > 3 weeks",
            },
            {
                name: "Pneumonia (Community acquired)",
                dose: "IV: 500 mg every 6 hours",
                description: "Use as part of an appropriate combination regimen",
            },
            {
                name: "Pneumonia (Hospital acquired or Ventilator associated)",
                dose: "IV: 500 mg every 6 hours",
                description: "Use as part of an appropriate combination regimen",
            },
            {
                name: "Sepsis and septic shock",
                dose: "IV: 500 mg every 6 hours or 1 gram every 8 hours",
                description: "Use as part of an appropriate combination regimen",
            },
            {
                name: "Skin and soft tissue infection - Necrotizing",
                dose: "IV: 1 gram every 6 - 8 hours",
                description: "Continue until further debrediment is no longer necessary and patient has been afebrile for > 48 hours",
            },
            {
                name: "Skin and soft tissue infection - Non-necrotizing",
                dose: "IV: 500 mg every 6 hours",
                description: "",
            },
            {
                name: "Urinary tract infection, complicated (pyelonephritis)",
                dose: "IV: 500 mg every 6 hours or 1 gram every 8 hours",
                description: "Reserve for critically ill patients or for patients with risk factors for MDR pathogens",
            },
        ],
        renalAdjustments: {
            "> 60 to < 130": "No dose adjustment necessary",
            "30 to < 60": "250 - 500 mg every 6 - 8 hours depending on usual recommended dose",
            "15 to < 30": "Variable depending on usual recommended dose",
            "< 15": "Do not administer unless hemodialysis is instituted within 48 hours", 
            "HD": "250 - 500 mg every 12 hours",
            "Peritoneal dialysis": "250 - 500 mg every 12 hours",
            "CRRT": "1 gram as a single dose, followed by 250 mg every 6 hours or 500 mg every 6 to 8 hours",
            "PIRRT": "500 mg - 1 gram as a single dose, followed by 250 mg every 6 hours or 500 mg every 8 hours",
        }
    },

    "Imipenem-Cilastatin-Relebactam": {
        indications: [
            {
                name: "Intra-Abdominal - Complicated",
                dose: "IV: 1.25 grams every 6 hours",
                description: "Duration is usually 4 - 5 days following adequate source control",
            },
            {
                name: "Pneumonia (Hospital acquired or Ventilator associated)",
                dose: "IV: 1.25 grams every 6 hours",
                description: "",
            },
            {
                name: "Urinary tract infection, complicated (pyelonephritis)",
                dose: "IV: 1.25 grams every 6 hours",
                description: "",
            },
        ],
        renalAdjustments: {
            "> 90": "No dose adjustment necessary",
            "60 - 89": "1 gram (imipenem 400 mg/cilastatin 400 mg/relebactam 200 mg) every 6 hours",
            "30 - 59": "750 mg (imipenem 300 mg/cilastatin 300 mg/relebactam 150 mg) every 6 hours",
            "15 - 29": "500 mg (imipenem 200 mg/cilastatin 200 mg/relebactam 100 mg) every 6 hours", 
            "< 15": "Do not use ",
            "HD": "500 mg (imipenem 200 mg/cilastatin 200 mg/relebactam 100 mg) every 6 hours",
            "Peritoneal dialysis": "Not recommended",
            "CRRT": "1.25 grams (imipenem 500 mg/cilastatin 500 mg/relebactam 250 mg) as a single dose followed by 750 mg (imipenem 300 mg/cilastatin 300 mg/relebactam 150 mg) every 6 hours ",
            "PIRRT": "1.25 grams (imipenem 500 mg/cilastatin 500 mg/relebactam 250 mg) as a single dose followed by <br><br> PIRRT days: 750 mg (imipenem 300 mg/cilastatin 300 mg/relebactam 150 mg) every 6 hours <br><br> Non-PIRRT days: 500 mg (imipenem 200 mg/cilastatin 200 mg/relebactam 100 mg) every 8 hours",
        }
    },



    "Meropenem": {
        indications: [
            {
                name:"Anthrax - Systemic (including meningitis)",
                dose: "IV: 2 grams every 8 hours", 
                description: "Use as part of an appropriate combination regimen for > 2 weeks"
            },

            {
                name: "Bloodstream Infection",
                dose: "IV: 1 gram every 8 hours",
                description: "Usual duration is 7 - 14 days depending on source, pathogen, and clinical response"
            },
            {
                name: "Cystic Fibrosis - Acute Pulmonary Exacerbation",
                dose: "IV: 2 grams every 8 hours",
                description:"Duration is usually 10 - 14 days"
            }, 

            {
                name: "Diabetic Foot Infection (moderate to severe)", 
                dose: "IV: 1 gram every 8 hours",
                description:""

            }, 

            {
                name: "Intra-abdominal infection - Healthcare associated cholecystitis", 
                dose: "IV: 1 gram every 8 hours", 
                description:"Continue for 1 day after gallbladder removal or clinical resolution"

            }, 

            {
                name: "Intra-abdominal infection - Healthcare associated cholangitis, appendicitis, diverticulitis, abscess", 
                dose: "IV: 1 gram every 8 hours", 
                description:"Duration depends on source of infection"

            }, 

            {
                name: "Intracranial Abscess and Spinal Epidural Abscess ", 
                dose: "IV: 2 grams every 8 hours", 
                description:"Use as part of an appropriate combination regimen for 4 - 8 weeks. "

            }, 
 

            {
                name: "Melioidosis or glanders", 
                dose: "IV: 1 gram every 8 hours", 
                description:""

            }, 

            {
                name: "Meningitis (bacterial)", 
                dose: "IV: 2 grams every 8 hours", 
                description:"Duration is 7 - 21 days depending on causative pathogen and clincial response "

            }, 

            {
                name: "Neutropenic fever - High risk cancer patients", 
                dose: "IV: 1 grams every 8 hours", 
                description:"Use until afebrile for > 48 hours and resolution of neutropenia (ANC > 500 cells/mm^3)"

            },

            {
                name: "Nocardiosis - Severe", 
                dose: "IV: 1 - 2 grams every 8 hours", 
                description:"Use as part of an appropriate combination regimen. ID consult recommended. Duration usually 6 - 12 months "

            }, 


            {
                name: "Osteomyelitis and/ or discitis", 
                dose: "IV: 1 gram every 8 hours",
                description: "Duration should be > 6 weeks"
            }, 

            {
                name: "Peritonitis - Treatment", 
                dose: "<br><br>Intermittent Intraperitoneal: 500 mg added to dialysate solution once daily. Allow to dwell > 6 hours <br><br> Continuous Intraperitoneal: 125 mg/L with each dialysate exchange<br><br>", 
                description:"Duration usually > 3 weeks"

            },

            {
                name: "Pneumonia - Community-acquired", 
                dose: "IV: 1 gram every 8 hours", 
                description:"Use as part of an appropriate combination regimen"

            },
            {
                name: "Pneumonia - Hospital-acquired or ventilator associated", 
                dose: "IV: 1 gram every 8 hours", 
                description:""

            }, 

            {
                name: "Prosthetic Joint Infection", 
                dose: "IV: 1 gram every 8 hours", 
                description:"Duration usually 4 - 6 weeks", 

            }, 

            {
                name: "Sepsis and Septic shock", 
                dose: "IV: 1 - 2 grams every 8 hours", 
                description:"Use as part of an appropriate combination regimen "

            }, 

            {
                name: "Skin and Soft Tissue Infection", 
                dose: "IV: 1 gram every 8 hours", 
                description:""

            }, 

            {
                name: "Urinary tract infection - Complicated", 
                dose: "IV: 1 - 2 grams every 8 hours", 
                description:"Reserve 2 gram dose for MDR pathogens"

            }
        ],
        renalAdjustments: {
            "≥ 50 - < 130": "No adjustment needed",
            "> 25-49": "1 - 2 grams IV every 12 hours",
            "10-24": "500 - 1000 mg IV every 12 hours",
            "< 10":" 500 - 1000 mg IV every 24 hours",
            "HD": "500 - 1000 mg IV every 24 hours", 
            "Peritoneal dialysis": "500 - 1000 mg IV every 24 hours",
            "CVVH/CVVHD/CVVHDF: Traditional intermittent infusion": "1 g load followed by 500 - 1000 mg every 8 hours",
            "CVVH/CVVHD/CVVHDF: Continuous infusion method": "1 g load followed by 1 g infused over 12 hours every 12 hours",
            "PIRRT: Traditional intermittent infusion": "1 g every 12 hours. (If urine output is > 300 mL/day may use 2 g every 8 hours)",
        }
    },

    "Meropenem-Vaborbactam": {
        indications: [
            {
                name:"Carbapenem-resistant Enterobacterales infection",
                dose: "IV: 4 grams every 8 hours", 
                description: ""
            },

            {
                name: "Urinary tract infection - Complicated", 
                dose: "IV: 4 grams every 8 hours", 
                description:"Reserve for patients with or at risk for extensively resistent pathogens"

            }
        ],
        renalAdjustments: {
            "≥ 50 - < 130": "No adjustment needed",
            "> 30 - 49": "2 grams every 8 hours",
            "> 15 - 29": "2 grams every 12 hours",
            "< 15":" 1 gram every 12 hours",
            "HD": "1 gram every 12 hours", 
            "Peritoneal dialysis": "1 gram every 12 hours",
            "CRRT": "2 grams every 8 hours",
            "PIRRT": "2 grams every 12 hours",
        }
    },

    "Aztreonam": {
        indications: [
            {
                name:"Bloodstream Infection",
                dose: "IV: 2 grams every 8 hours", 
                description: "Reserve for patients who cannot use other beta-lactams. Duration is usually 7 - 14 days. Use as part of appropriate combination regimen"
            },

            {
                name:"Diabetic Foot Infection",
                dose: "IV: 1 - 2 grams every 8 hours", 
                description: "Reserve for patients who cannot use other beta-lactams. Duration is usually 2 - 4 weeks."
            },

            {
                name:"Intra-abdominal Infection - Healthcare associated Cholecystitis",
                dose: "IV: 1 - 2 grams every 8 hours", 
                description: "Reserve for patients who cannot use other beta-lactams. Continue for 1 day after gallbladder removal or until clinical resolution."
            },

            {
                name:"Intra-abdominal Infection - Healthcare associated appendicitis, diverticulitis, intra-abdominal abscess",
                dose: "IV: 1 - 2 grams every 8 hours", 
                description: "Reserve for patients who cannot use other beta-lactams. Use as part of an appropriate combination regimen. Duration is 4 - 5 days following adequate source control."
            },

            {
                name:"Intracranial Abscess",
                dose: "IV: 2 grams every 6 - 8 hours", 
                description: "Reserve for patients who cannot use other beta-lactams. Use as part of an appropriate combination regimen. Duration is 6 - 8 weeks."
            },

            {
                name:"Meningitis - Bacterial",
                dose: "IV: 2 grams every 6 - 8 hours", 
                description: "Reserve for patients who cannot use other beta-lactams. Use in combination with vancomycin for empiric therapy. Duration is usually 10 - 14 days."
            },

            {
                name:"Metallo-beta-lactamse-producing Enterobacterales and multidrug resistant Stenotrophomonas maltophilia infections",
                dose: "IV: 2 grams every 8 hours infused over 3 hours in combination with ceftazidime/avibactam", 
                description: ""
            },

            {
                name:"Osteomyelitis",
                dose: "IV: 2 grams every 8", 
                description: "Reserve for patients who cannot use other beta-lactams. Duration is usually > 6 weeks. For empiric therapy use as part of an appropriate combination regimen."
            },

            {
                name:"Peritonitis - Treatment",
                dose: "<br> Intermittent Intraperitoneal: 2 grams added to the dialysate solution once daily, allow to dwell > 6 hours <br><br> Continuous Intraperitoneal: Loading dose 500 mg/L - 1 gram/L of dialysate added to first exchange; maintenance dose 250 mg/L of dialysate with each subsequent exchange ", 
                description: "Duration is usually > 3 weeks in patients with adequate clinical response"
            },

            {
                name: "Pneumonia - Community-acquired", 
                dose: "IV: 2 gram every 8 hours", 
                description:"Reserve for patients who cannot use other beta-lactams"

            },
            {
                name: "Pneumonia - Hospital-acquired or ventilator associated", 
                dose: "IV: 2 grams every 8 hours", 
                description:"Reserve for patients who cannot use other beta-lactams"

            }, 

            {
                name: "Skin and Soft Tissue Infection", 
                dose: "IV: 1 - 2 grams every 8 hours", 
                description:"Reserve for patients who cannot use other beta-lactams. Duration is usually 5 - 14 days"

            }, 

            {
                name: "Surgical Prophylaxis", 
                dose: "IV: 2 grams within 60 minutes prior to surgical incision. ", 
                description:"Reserve for patients who cannot use other beta-lactams."

            },

            {
                name: "Urinary tract infection - Complicated", 
                dose: "IV: 1 - 2 grams every 8 hours", 
                description:"Reserve for patients with or at risk for extensively resistent pathogens. Duration is usually 5 - 7 days"
            }
        ],
        renalAdjustments: {
            "30 - < 130": "No adjustment needed",
            "10 - < 30": " 1 - 2 grams every 12 hours depending on usual recommended dose",
            "< 10": "1 - 2 grams every 24 hours depending on usual recommended dose",
            "HD": "1 - 2 grams every 24 hours depending on usual recommended dose", 
            "Peritoneal dialysis": "1 - 2 grams every 24 hours depending on usual recommended dose",
            "CRRT": "2 grams as a single dose followed by 1 gram every 8 hours or 2 grams every 12 hours",
            "PIRRT": "2 grams as a single dose followed by 1 - 2 grams every 12 hours. Ensure at least 1 dose is infused after PIRRT session ends on PIRRT days",
        }
    },

    "Ciprofloxacin": {
        indications: [
            {
                name:"Anthrax - Inhalational (Postexposure prophylaxis)",
                dose: "<br> <br> Oral: 500 mg every 12 hours <br> IV: 400 mg every 12 hours", 
                description: "<br>Duration is usually 42 - 60 days"
            },

            {
                name:"Anthrax - Cutaneous (Without meningitis)",
                dose: "Oral: 500 mg every 12 hours", 
                description: "Duration is usually 42 - 60 days"
            },

            {
                name:"Anthrax - Systemic (Including meningitis)",
                dose: "IV: 400 mg every 8 hours", 
                description: "Use in combination with an appropriate combination regimen for > 2 weeks. "
            },

            {
                name:"Bite Wound Infection - Prophylaxis and Treatment",
                dose: "<br> <br> Oral: 500 - 750 mg twice daily <br> IV: 400 mg every 12 hours", 
                description: "<br>Duration is usually 3 - 5 days for prophylaxis and 5 - 14 days for treatment"
            },

            {
                name:"Bronchiectasis - Acute Exacerbation",
                dose: "Oral: 500 - 750 mg twice daily", 
                description: "Duration is usually up to 14 days"
            },

            {
                name:"Cat Scratch Disease",
                dose: "Oral: 500 mg twice daily", 
                description: "Duration is usually 7 - 10 days"
            },

            {
                name:"Cholera",
                dose: "Oral: 1000 mg as a single dose", 
                description: ""
            },

            {
                name:"COPD Acute Exacerbation",
                dose: "Oral: 750 mg twice daily", 
                description: "Duration is usually 5 - 7 days"
            },

            {
                name:"Crohns Disease - Perianal Fistulas",
                dose: "Oral: 500 mg twice daily", 
                description: "Use with or without metronidazole for up to 8 weeks"
            },

            {
                name:"Diabetic Foot Infection",
                dose: "<br><br> Mild to Moderate: Oral: 500 mg every 12 hours or 750 mg twice daily if pseudomonas is suspected <br> Moderate to Severe: IV: 400 mg every 12 hours or 400 mg every 8 hours if pseudomonas is expectecd", 
                description: ""
            },

            {
                name:"Infectious Diarrhea",
                dose: "<br><br>Oral: 500 - 750 mg every 12 hours <br> IV: 400 mg every 12 hours", 
                description: "<br> Streamline based on specific pathogen"
            },

            {
                name:"Endocarditis treatment - HACEK organisms",
                dose: "<br><br> Oral: 500 - 750 mg every 12 hours for 4 - 6 weeks depending on valve type (native vs prosthetic) <br> IV: 400 mg eveyr 8 - 12 hours for 4 - 6 weeks depending on valve type (native vs prosthetic)", 
                description: ""
            },

            {
                name:"Endocarditis treatment - MSSA step down therapy",
                dose: "<br><br> Oral: 750 mg every 12 hours in combination with rifampin for total of 6 weeks including IV therapy", 
                description: ""
            },

            {
                name:"Intra-abdominal Infection - Cholecystitis",
                dose: "<br><br> Oral: 500 mg every 12 hours <br> IV: 400 mg every 12 hours", 
                description: "Continue for 1 day after gallbladder removal or until clinical resolution."
            },

            {
                name:"Intra-abdominal Infection - Appendicitis, diverticulitis, intra-abdominal abscess",
                dose: "<br><br> Oral: 500 mg every 12 hours in combination with metronidazole <br> IV: 400 mg every 12 hours in combination with metronidazole", 
                description: "Duration is 4 - 5 days following adequate source control."
            },

            {
                name:"Meningitis - Bacterial",
                dose: "IV: 400 mg every 8 - 12 hours", 
                description: "Must be used in combination with other appropriate agents"
            },

            {
                name:"Meningococcal meningitis prophylaxis",
                dose: "Oral: 500 mg as a single dose", 
                description: ""
            },

            {
                name:"Neutropenia, antibacterial prophylaxis",
                dose: "Oral: 500 - 750 mg twice daily", 
                description: ""
            },

            {
                name:"Neutropenic fever - low risk cancer patients",
                dose: "Oral: 750 mg every 12 hours in combination with amoxicillin/clavulanate", 
                description: "Continue therapy until fever and neutropenia have resolved. Administer first dose in health care setting and observe patient for 4 hours prior to discharge"
            },

            {
                name:"Osteomyelitis",
                dose: "<br><br> Oral treatment: 500 - 750 mg every 12 hours <br> Oral chronic suppression in presence of retained infected orthopedic hardware: 250 - 500 mg every 12 hours <br> IV 400 mg every 12 hours", 
                description: "Duration should be > 6 weeks if treating pseudomonas"
            },

            {
                name:"Plague - Post exposure prophylaxis",
                dose: "Oral: 500 - 750 mg every 12 hours for 7 days ", 
                description: ""
            },

            {
                name:"Plague - Treatment (exlcuding meningitis)",
                dose: "<br><br> Oral: 750 mg every 12 hours <br> IV: 400 mg every 8 hours ", 
                description: "Duration of therapy is usually 7 - 14 days"
            },

            {
                name: "Pneumonia", 
                dose: "<br><br> Oral: 750 mg every 12 hours <br> IV: 400 mg every 8 hours", 
                description:"Duration of therapy is usually 7 days"

            },

            {
                name: "Acute Pouchitis", 
                dose: "<br><br> Initial therapy: Oral: 500 mg every 12 hours for 14 days <br> Refractory disease: Oral: 500 mg every 12 hours for 28 days as part of a combination regimen", 
                description:""

            },

            {
                name: "Prostatits - Acute", 
                dose: "<br><br> Oral: 500 mg every 12 hours for 2 - 4 weeks <br> IV: 400 mg every 12 hours for 2 - 4 weeks", 
                description:""

            },

            {
                name: "Prostatits - Chronic ", 
                dose: "<br><br> Oral: 500 mg every 12 hours for 4 - 6 weeks <br> IV: 400 mg every 12 hours for 4 - 6 weeks", 
                description:""

            },

            {
                name: "Prosthetic Joint Infection - Treatment ", 
                dose: "<br><br> <strong>Gram negative Bacilli:</strong> <br> Oral: 750 mg twice daily <br> IV: 400 mg every 12 hours <br><br> <strong>S.aureus oral continuation therapy:</strong><br> Oral: 500 - 750 mg twice daily in combination with rifampin for minimum of 3 months", 
                description:""

            },

            {
                name: "Prosthetic Joint Infection - Chronic Suppression for Pseudomonas ", 
                dose: "Oral: 250 - 500 mg twice daily", 
                description:""

            },

            {
                name: "Rhinosinusitis", 
                dose: "<br> Oral: 500 mg twice daily for 5 - 7 days <br> IV: 400 mg every 12 hours for 5 - 7 days", 
                description:""

            },

            {
                name: "Septic Arthritis", 
                dose: "<br> Oral: 750 mg every 12 hours <br> IV: 400 mg every 8 - 12 hours ", 
                description:"Duration is usually 3 - 4 weeks including oral stepdown therapy"

            },

            {
                name: "Sexually Transmitted Infections", 
                dose: "<br> <strong>Chanchroid: </strong> Oral: 500 mg twice daily for 3 days <br> <strong>Gonorrhea</strong> Oral: 500 mg as a single dose", 
                description:""

            },

            {
                name: "Skin and Soft Tissue Infection", 
                dose: "<br>Oral: 750 mg every 12 hours in combination with metronidazole<br> IV: 400 mg every 12 hours in combination with metronidazole", 
                description:""

            }, 

            {
                name: "Spontaneous bacterial peritonitis - Prophylaxis", 
                dose: "Oral: 500 mg once daily (for patients with cirrhosis and GI bleed may use 500 mg twice daily", 
                description:""

            }, 

            {
                name: "Surgical Prophylaxis", 
                dose: "<br> IV: 400 mg within 120 minutes prior to incision <br> Oral: 500 mg within 120 minutes prior to surgical incision ", 
                description:""

            },

            {
                name: "Tularemia - Treatment ", 
                dose: "<br> IV: 400 mg every 8 hours<br> Oral: 750 mg twice daily", 
                description:"Duration of therapy is usually 10 days"

            },

            {
                name: "Tularemia - Postexposure Prophylaxis", 
                dose: "Oral: 500 mg twice daily for 7 days", 
                description:""

            },

            {
                name: "Urinary tract infection - Cystitis (acute uncomplicated)", 
                dose: "Oral: 250 - 500 mg every 12 hours", 
                description:"Duration is 3 days for females and 5 days for males "
            },

            {
                name: "Urinary tract infection - Complicated", 
                dose: "<br><br>Oral: 500 - 750 mg every 12 hours<br> 400 mg every 8 - 12 hours", 
                description:"Duration is usually 5 days including oral stepdown therapy"
            }
        ],
        renalAdjustments: {
            "> 50 - < 130": "Oral: 500 - 750 mg every 12 hours | IV: 400 mg every 8 - 12 hours",
            "30 - 50": "Oral: 250 - 500 mg every 12 hours | IV: 400 mg every 8 - 12 hours",
            "< 30": "Oral: 500 mg every 24 hours | IV: 200 - 400 mg every 12 - 24 hours",
            "HD": "Oral: 250 - 500 mg every 24 hours | IV: 200 - 400 mg every 24 hours", 
            "Peritoneal dialysis": "Oral: 250 - 500 mg every 24 hours | IV: 200 - 400 mg every 24 hours",
            "CRRT": "Oral: 250 - 750 mg every 12 hours | IV: 200 - 400 mg every 8 - 12 hours",
            "PIRRT": "Oral: 500 mg every 12 hours | IV: 400 mg every 12 hours",
        }
    },

    "Delafloxacin": {
        indications: [

            {
                name: "Pneumonia - Community Acquired", 
                dose: "<br><br> Oral: 450 mg every 12 hours <br> IV: 300 mg every 12 hours", 
                description:"Duration of therapy is minimum 5 days"

            },

            {
                name: "Skin and skin structure infection", 
                dose: "<br><br> Oral: 450 mg every 12 hours for 5 - 14 days <br> IV: 300 mg every 12 hours for 5 - 14 days", 
                description:""

            }, 

        ],
        renalAdjustments: {
            " eGFR | > 30 - 89 ": "Oral and IV: No dose adjustment necessary",
            "eGFR | 15 - 29": "Oral: No dose adjustment necessary | IV: 200 mg every 12 hours",
            "eGFR | < 15": "Use not recommended",
            "HD": "Use not recommended", 
        }
    },

    "Ofloxacin": {
        indications: [

            {
                name: "Epididymitis - Acute", 
                dose: "<br><br> <strong>Enteric Organisms:</strong><br> Oral: 200 mg twice daily for 14 days <br> <strong>Sexually Transmitted Chlamydia and Gonorrhea:</strong><br> Oral: 200 mg twice daily for 10 days in combination with ceftriaxone", 
                description:"Duration of therapy is minimum 5 days"

            },

            {
                name:"Plague - Post exposure prophylaxis",
                dose: "Oral: 400 mg every 12 hours for 7 days ", 
                description: ""
            },

            {
                name:"Plague - Treatment (exlcuding meningitis)",
                dose: "Oral: 400 mg every 12 hours ", 
                description: "Duration of therapy is usually 7 - 14 days"
            },

            {
                name:"Prostatitis",
                dose: "Oral: 300 mg every 12 hours for 6 weeks ", 
                description: ""
            },

            {
                name: "Pneumonia - Community Acquired", 
                dose: " Oral: 400 mg every 12 hours", 
                description:"Duration of therapy is minimum 5 days"

            },

            {
                name: "Sexually Transmitted Infections", 
                dose: "<br> <strong>Cervicitis/Urethritis: </strong><br> Oral: 300 mg every 12 hours for 7 days <br> <strong>Pelvic Inflammatory disease</strong><br> Oral: 400 mg every 12 hours for 10 - 14 days", 
                description:"Combinatioin with metronidazole is recommended"

            },

            {
                name: "Skin and skin structure infection", 
                dose: "Oral: 400 mg every 12 hours for 5 - 14 days", 
                description:""

            }, 

            {
                name: "Typhoid and Paratyphoid Fever - Uncomplicated Treatment", 
                dose: "Oral: 400 mg twice daily for 7 days", 
                description:""

            }, 

            {
                name: "Urinary tract infection - Cystitis (acute uncomplicated)", 
                dose: "Oral: 200 mg every 12 hours", 
                description:"Duration is 3 days for females and 5 days for males "
            },

            {
                name: "Urinary tract infection - Complicated", 
                dose: "Oral: 200 mg every 12 hours", 
                description:"Duration is usually 5 days "
            }

        ],
        renalAdjustments: {
            "> 50": "No dose adjustment necessary",
            "20 - 50": "Administer usual recommended dose every 24 hours",
            "< 20": "Administer half of the usual recommended dose every 24 hours",
            "Intermittent HD": "100 - 200 mg after dialysis", 
            "Peritoneal dialysis": "200 mg every 24 hours", 
            "CRRT": "300 mg every 24 hours", 

        }
    },

    "Levofloxacin": {
        indications: [

             {
                name:"Anthrax - Inhalational (Postexposure prophylaxis)",
                dose: "<br>Oral: 500 mg every 24 hours", 
                description: "Duration is usually 42 - 60 days"
            },

            {
                name:"Anthrax - Cutaneous (Without meningitis)",
                dose: "Oral: 750 mg every 24 hours for 7 - 10 days after naturally acquired infection", 
                description: "After aerosol exposure treatment - switch to postexposure prophylaxis for 42 - 60 days"
            },

            {
                name:"Anthrax - Systemic (Including meningitis)",
                dose: "IV: 500 mg every 12 hours", 
                description: "Use in combination with an appropriate combination regimen for > 2 weeks. "
            },

            {
                name:"Bite Wound Infection - Prophylaxis and Treatment",
                dose: "<br> <br> Oral: 500 - 750 mg twice daily <br> IV: 400 mg every 12 hours", 
                description: "<br>Duration is usually 3 - 5 days for prophylaxis and 5 - 14 days for treatment"
            },

            {
                name:"Bronchiectasis - Acute Exacerbation",
                dose: "Oral: 500 - 750 mg twice daily", 
                description: "Duration is usually up to 14 days"
            },

            {
                name:"Cat Scratch Disease",
                dose: "Oral: 500 mg twice daily", 
                description: "Duration is usually 7 - 10 days"
            },

            {
                name:"Cholera",
                dose: "Oral: 1000 mg as a single dose", 
                description: ""
            },

            {
                name:"COPD Acute Exacerbation",
                dose: "Oral: 750 mg twice daily", 
                description: "Duration is usually 5 - 7 days"
            },

            {
                name:"Crohns Disease - Perianal Fistulas",
                dose: "Oral: 500 mg twice daily", 
                description: "Use with or without metronidazole for up to 8 weeks"
            },

            {
                name:"Diabetic Foot Infection",
                dose: "<br><br> Mild to Moderate: Oral: 500 mg every 12 hours or 750 mg twice daily if pseudomonas is suspected <br> Moderate to Severe: IV: 400 mg every 12 hours or 400 mg every 8 hours if pseudomonas is expectecd", 
                description: ""
            },

            {
                name:"Infectious Diarrhea",
                dose: "<br><br>Oral: 500 - 750 mg every 12 hours <br> IV: 400 mg every 12 hours", 
                description: "<br> Streamline based on specific pathogen"
            },

            {
                name:"Endocarditis treatment - HACEK organisms",
                dose: "<br><br> Oral: 500 - 750 mg every 12 hours for 4 - 6 weeks depending on valve type (native vs prosthetic) <br> IV: 400 mg eveyr 8 - 12 hours for 4 - 6 weeks depending on valve type (native vs prosthetic)", 
                description: ""
            },

            {
                name:"Endocarditis treatment - MSSA step down therapy",
                dose: "<br><br> Oral: 750 mg every 12 hours in combination with rifampin for total of 6 weeks including IV therapy", 
                description: ""
            },

            {
                name:"Intra-abdominal Infection - Cholecystitis",
                dose: "<br><br> Oral: 500 mg every 12 hours <br> IV: 400 mg every 12 hours", 
                description: "Continue for 1 day after gallbladder removal or until clinical resolution."
            },

            {
                name:"Intra-abdominal Infection - Appendicitis, diverticulitis, intra-abdominal abscess",
                dose: "<br><br> Oral: 500 mg every 12 hours in combination with metronidazole <br> IV: 400 mg every 12 hours in combination with metronidazole", 
                description: "Duration is 4 - 5 days following adequate source control."
            },

            {
                name:"Meningitis - Bacterial",
                dose: "IV: 400 mg every 8 - 12 hours", 
                description: "Must be used in combination with other appropriate agents"
            },

            {
                name:"Meningococcal meningitis prophylaxis",
                dose: "Oral: 500 mg as a single dose", 
                description: ""
            },

            {
                name:"Neutropenia, antibacterial prophylaxis",
                dose: "Oral: 500 - 750 mg twice daily", 
                description: ""
            },

            {
                name:"Neutropenic fever - low risk cancer patients",
                dose: "Oral: 750 mg every 12 hours in combination with amoxicillin/clavulanate", 
                description: "Continue therapy until fever and neutropenia have resolved. Administer first dose in health care setting and observe patient for 4 hours prior to discharge"
            },

            {
                name:"Osteomyelitis",
                dose: "<br><br> Oral treatment: 500 - 750 mg every 12 hours <br> Oral chronic suppression in presence of retained infected orthopedic hardware: 250 - 500 mg every 12 hours <br> IV 400 mg every 12 hours", 
                description: "Duration should be > 6 weeks if treating pseudomonas"
            },

            {
                name:"Plague - Post exposure prophylaxis",
                dose: "Oral: 500 - 750 mg every 12 hours for 7 days ", 
                description: ""
            },

            {
                name:"Plague - Treatment (exlcuding meningitis)",
                dose: "<br><br> Oral: 750 mg every 12 hours <br> IV: 400 mg every 8 hours ", 
                description: "Duration of therapy is usually 7 - 14 days"
            },

            {
                name: "Pneumonia", 
                dose: "<br><br> Oral: 750 mg every 12 hours <br> IV: 400 mg every 8 hours", 
                description:"Duration of therapy is usually 7 days"

            },

            {
                name: "Acute Pouchitis", 
                dose: "<br><br> Initial therapy: Oral: 500 mg every 12 hours for 14 days <br> Refractory disease: Oral: 500 mg every 12 hours for 28 days as part of a combination regimen", 
                description:""

            },

            {
                name: "Prostatits - Acute", 
                dose: "<br><br> Oral: 500 mg every 12 hours for 2 - 4 weeks <br> IV: 400 mg every 12 hours for 2 - 4 weeks", 
                description:""

            },

            {
                name: "Prostatits - Chronic ", 
                dose: "<br><br> Oral: 500 mg every 12 hours for 4 - 6 weeks <br> IV: 400 mg every 12 hours for 4 - 6 weeks", 
                description:""

            },

            {
                name: "Prosthetic Joint Infection - Treatment ", 
                dose: "<br><br> <strong>Gram negative Bacilli:</strong> <br> Oral: 750 mg twice daily <br> IV: 400 mg every 12 hours <br><br> <strong>S.aureus oral continuation therapy:</strong><br> Oral: 500 - 750 mg twice daily in combination with rifampin for minimum of 3 months", 
                description:""

            },

            {
                name: "Prosthetic Joint Infection - Chronic Suppression for Pseudomonas ", 
                dose: "Oral: 250 - 500 mg twice daily", 
                description:""

            },

            {
                name: "Rhinosinusitis", 
                dose: "<br> Oral: 500 mg twice daily for 5 - 7 days <br> IV: 400 mg every 12 hours for 5 - 7 days", 
                description:""

            },

            {
                name: "Septic Arthritis", 
                dose: "<br> Oral: 750 mg every 12 hours <br> IV: 400 mg every 8 - 12 hours ", 
                description:"Duration is usually 3 - 4 weeks including oral stepdown therapy"

            },

            {
                name: "Sexually Transmitted Infections", 
                dose: "<br> <strong>Chanchroid: </strong> Oral: 500 mg twice daily for 3 days <br> <strong>Gonorrhea</strong> Oral: 500 mg as a single dose", 
                description:""

            },

            {
                name: "Skin and Soft Tissue Infection", 
                dose: "<br>Oral: 750 mg every 12 hours in combination with metronidazole<br> IV: 400 mg every 12 hours in combination with metronidazole", 
                description:""

            }, 

            {
                name: "Spontaneous bacterial peritonitis - Prophylaxis", 
                dose: "Oral: 500 mg once daily (for patients with cirrhosis and GI bleed may use 500 mg twice daily", 
                description:""

            }, 

            {
                name: "Surgical Prophylaxis", 
                dose: "<br> IV: 400 mg within 120 minutes prior to incision <br> Oral: 500 mg within 120 minutes prior to surgical incision ", 
                description:""

            },

            {
                name: "Tularemia - Treatment ", 
                dose: "<br> IV: 400 mg every 8 hours<br> Oral: 750 mg twice daily", 
                description:"Duration of therapy is usually 10 days"

            },

            {
                name: "Tularemia - Postexposure Prophylaxis", 
                dose: "Oral: 500 mg twice daily for 7 days", 
                description:""

            },

            {
                name: "Urinary tract infection - Cystitis (acute uncomplicated)", 
                dose: "Oral: 250 - 500 mg every 12 hours", 
                description:"Duration is 3 days for females and 5 days for males "
            },

            {
                name: "Urinary tract infection - Complicated", 
                dose: "<br><br>Oral: 500 - 750 mg every 12 hours<br> 400 mg every 8 - 12 hours", 
                description:"Duration is usually 5 days including oral stepdown therapy"
            }

        ],
        renalAdjustments: {
            "> 50": "No dose adjustment necessary",
            "20 - 50": "Administer usual recommended dose every 24 hours",
            "< 20": "Administer half of the usual recommended dose every 24 hours",
            "Intermittent HD": "100 - 200 mg after dialysis", 
            "Peritoneal dialysis": "200 mg every 24 hours", 
            "CRRT": "300 mg every 24 hours", 

        }
    },

    "Moxifloxacin": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Norfloxacin": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Prulifloxacin": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Gemifloxacin": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Gatifloxacin": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Cefazolin": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Cefotetan": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Cefoxitin": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Cefuroxime": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Cefotaxime": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Ceftizoxime": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Cefoperazone": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Ceftriaxone": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Ceftazidime": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Cefepime": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Cefepime-Enmetazobactam": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Ceftazidime-Avibactam": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Ceftaroline": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Ceftobiprole": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Ceftolazone-Tazobactam": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    "Cefiderocol": {
        indications: [

             {
                name:"Dosing Infromation Currently Being Updated ",
                dose: "", 
                description: ""
            },

        ],
        renalAdjustments: {
            "": "",

        }
    },

    


    



    
    // Add other antibiotics with detailed data here...
};

function loadAntibioticData() {
    const urlParams = new URLSearchParams(window.location.search);
    const antibioticName = urlParams.get('name');

    if (antibioticName) {
        document.getElementById('antibiotic-name').textContent = antibioticName;

        const antibioticData = antibioticDosingData[antibioticName];
        if (antibioticData) {
            const indicationsTabs = document.getElementById('indications-tabs');
            indicationsTabs.innerHTML = ''; // Clear previous tabs

            antibioticData.indications.forEach((indication, index) => {
                // Create tab button with toggle functionality
                const tab = document.createElement('button');
                tab.type = 'button';
                tab.classList.add('tab'); // keep your existing class name
                tab.onclick = () => toggleIndication(indication, tab);

                // pill icon + chevron (matches the newer UI vibe)
                const pillSVG = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M10 14l4-4" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M7.5 16.5l-1.6-1.6a5 5 0 0 1 0-7.1l2.7-2.7a5 5 0 0 1 7.1 0l1.6 1.6a5 5 0 0 1 0 7.1l-2.7 2.7a5 5 0 0 1-7.1 0Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                `;

                const chevronSVG = `
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                `;

                tab.innerHTML = `
                <span class="tab-left">
                    <span class="tab-icon">${pillSVG}</span>
                    <span class="tab-label">${indication.name}</span>
                </span>
                <span class="tab-chevron">${chevronSVG}</span>
                `;

                indicationsTabs.appendChild(tab);

                // Create initial content, hidden by default
                const indicationContent = document.createElement('div');
                indicationContent.classList.add('indication-content');
                indicationContent.style.display = 'none';
                indicationContent.innerHTML = `
                <div class="indication-body">
                    <p><strong>Dose:</strong> ${indication.dose}</p>
                    ${indication.description ? `<p>${indication.description}</p>` : ``}
                </div>
                `;

                indicationsTabs.appendChild(indicationContent);
            });

            // Populate the single renal adjustment table at the bottom
            const renalTableBody = document.getElementById('renal-adjustment-body');
            renalTableBody.innerHTML = ''; // Clear previous data

            Object.keys(antibioticData.renalAdjustments).forEach(range => {
                const row = document.createElement('tr');
                const rangeCell = document.createElement('td');
                const adjustmentCell = document.createElement('td');

                rangeCell.textContent = range;
                adjustmentCell.textContent = antibioticData.renalAdjustments[range];

                row.appendChild(rangeCell);
                row.appendChild(adjustmentCell);
                renalTableBody.appendChild(row);
            });
        }
    }
}

function toggleIndication(indication, tab) {
    const contentDiv = tab.nextElementSibling;

    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
        tab.classList.add('active');
    } else {
        contentDiv.style.display = 'none';
        tab.classList.remove('active');
    }
}

// Initialize the page
if (window.location.pathname.includes('antibiotic.html')) {
    window.onload = loadAntibioticData;
}
















// All antibioitcs listed by class 
const antibioticsByClass = [
    { name: "Penicillin G", class: "Penicillins"},
    { name: "Penicillin VK", class: "Penicillins"},
    { name: "Nafcillin", class: "Penicillins"},
    { name: "Oxacillin", class: "Penicillins"},
    { name: "Cloxacillin", class: "Penicillins"},
    { name: "Flucloxacillin", class: "Penicillins"},
    { name: "Dicloxacillin", class: "Penicillins"},
    { name: "Ampicillin", class: "Penicillins"},
    { name: "Amoxicillin", class: "Penicillins"},
    { name: "Amoxicillin-Clavulanate", class: "Penicillins"},
    { name: "Ampicillin-Sulbactam", class: "Penicillins"},
    { name: "Piperacillin-Tazobactam", class: "Penicillins"},
    { name: "Doripenem", class: "Carbapenems"},
    { name: "Ertapenem", class: "Carbapenems"},
    { name: "Imipenem-Cilastatin", class: "Carbapenems"},
    { name: "Imipenem-Cilastatin-Relebactam", class: "Carbapenems"},
    { name: "Meropenem", class: "Carbapenems"},
    { name: "Meropenem-Vaborbactam", class: "Carbapenems"},
    { name: "Aztreonam", class: "Monobactams"},
    { name: "Ciprofloxacin", class: "Fluoroquinolones"},
    { name: "Delafloxacin", class: "Fluoroquinolones"},
    { name: "Ofloxacin", class: "Fluoroquinolones"},
    { name: "Levofloxacin", class: "Fluoroquinolones"},
    { name: "Moxifloxacin", class: "Fluoroquinolones"},
    { name: "Norfloxacin", class: "Fluoroquinolones"},
    { name: "Prulifloxacin", class: "Fluoroquinolones"},
    { name: "Gemifloxacin", class: "Fluoroquinolones"},
    { name: "Gatifloxacin", class: "Fluoroquinolones"},
    { name: "Cefazolin", class: "Cephalosporins (IV)"},
    { name: "Cefotetan", class: "Cephalosporins (IV)"},
    { name: "Cefoxitin", class: "Cephalosporins (IV)"},
    { name: "Cefuroxime", class: "Cephalosporins (IV)"},
    { name: "Cefotaxime", class: "Cephalosporins (IV)"},
    { name: "Ceftizoxime", class: "Cephalosporins (IV)"},
    { name: "Cefoperazone", class: "Cephalosporins (IV)"},
    { name: "Ceftriaxone", class: "Cephalosporins (IV)"},
    { name: "Ceftazidime", class: "Cephalosporins (IV)"},
    { name: "Cefepime", class: "Cephalosporins (IV)"},
    { name: "Cefepime-Enmetazobactam", class: "Cephalosporins (IV)"},
    { name: "Ceftazidime-Avibactam", class: "Cephalosporins (IV)"},
    { name: "Ceftaroline", class: "Cephalosporins (IV)"},
    { name: "Ceftobiprole", class: "Cephalosporins (IV)"},
    { name: "Ceftolazone-Tazobactam", class: "Cephalosporins (IV)"},
    { name: "Cefiderocol", class: "Cephalosporins (IV)"},
    { name: "Cefadroxil", class: "Cephalosporins (Oral)"},
    { name: "Cephalexin", class: "Cephalosporins (Oral)"},
    { name: "Cefaclor", class: "Cephalosporins (Oral)"},
    { name: "Cefprozil", class: "Cephalosporins (Oral)"},
    { name: "Cefuroxime-Axetil", class: "Cephalosporins (Oral)"},
    { name: "Cefixime", class: "Cephalosporins (Oral)"},
    { name: "Ceftibuten", class: "Cephalosporins (Oral)"},
    { name: "Cefpodoxime", class: "Cephalosporins (Oral)"},
    { name: "Cefdinir", class: "Cephalosporins (Oral)"},
    { name: "Cefditoren", class: "Cephalosporins (Oral)"},
    { name: "Gentamicin", class: "Aminoglycosides"},
    { name: "Tobramycin", class: "Aminoglycosides"},
    { name: "Amikacin", class: "Aminoglycosides"},
    { name: "Plazomicin", class: "Aminoglycosides"},
    { name: "Clindamycin", class: "Lincosamides"},
    { name: "Erythromycin", class: "Macrolides"},
    { name: "Azithromycin", class: "Macrolides"},
    { name: "Clarithromycin", class: "Macrolides"},
    { name: "Telithromycin", class: "Macrolides"},
    { name: "Doxycycline", class: "Tetracyclines"},
    { name: "Eravacycline", class: "Tetracyclines"},
    { name: "Minocycline", class: "Tetracyclines"},
    { name: "Omadacycline", class: "Tetracyclines"},
    { name: "Tetracycline", class: "Tetracyclines"},
    { name: "Tigecycline", class: "Tetracyclines"},
    { name: "Daptomycin", class: "Glyc/Lipo"},
    { name: "Vancomycin", class: "Glyc/Lipo"},
    { name: "Teicoplanin", class: "Glyc/Lipo"},
    { name: "Telavancin", class: "Glyc/Lipo"},
    { name: "Oritavancin", class: "Glyc/Lipo"},
    { name: "Dalbavancin", class: "Glyc/Lipo"},
    { name: "Linezolid", class: "Oxazolids"},
    { name: "Tedizolid", class: "Oxazolids"},
    { name: "Polymyxin B", class: "Polymyxins"},
    { name: "Colistin", class: "Polymyxins"},
    { name: "Lefamulin", class: "Pleuromutilins"},
    { name: "Chloramphenicol", class: "Other"},
    { name: "Fusidic Acid", class: "Other"},
    { name: "Rifampin", class: "Other"},
    { name: "Trimethoprim-Sulfamethoxazole", class: "Other"},
    { name: "Nitrofurantoin", class: "Other"},
    { name: "Fosfomycin (IV)", class: "Other"},
    { name: "Fosfomycin (Oral)", class: "Other"},
    { name: "Pivmecillinam", class: "Other"},
    { name: "Metronidazole", class: "Other"},
    { name: "Pristinamycin", class: "Other"},
    // Add more antibiotics and their classes here...
];

// Function to group antibiotics by their class
function groupAntibioticsByClass(antibiotics) {
    const grouped = {};
    antibiotics.forEach(antibiotic => {
        const antibioticClass = antibiotic.class || "Other";
        if (!grouped[antibioticClass]) {
            grouped[antibioticClass] = [];
        }
        grouped[antibioticClass].push(antibiotic.name);
    });
    return grouped;
}

// Function to render antibiotics organized by class in bacteria.html
function renderAntibioticsByClass(bacteria) {
    const preferredContainer = document.getElementById('preferred-antibiotic-list');
    const allContainer = document.getElementById('all-antibiotic-list');

    preferredContainer.innerHTML = '';
    allContainer.innerHTML = '';

    // Group and render Preferred Antibiotics
    const groupedPreferred = groupAntibioticsByClass(bacteria.preferredAntibiotics);
    renderGroupedAntibiotics(groupedPreferred, preferredContainer);

    // Group and render All Antibiotics
    const groupedAll = groupAntibioticsByClass(bacteria.allAntibiotics);
    renderGroupedAntibiotics(groupedAll, allContainer);
}

// Helper function to render grouped antibiotics in the specified container
function renderGroupedAntibiotics(groupedAntibiotics, container) {
    for (const [antibioticClass, antibiotics] of Object.entries(groupedAntibiotics)) {
        const classSection = document.createElement("div");
        const classHeader = document.createElement("h3");
        classHeader.textContent = antibioticClass;
        classSection.appendChild(classHeader);

        const list = document.createElement("ul");
        antibiotics.forEach(antibiotic => {
            const listItem = document.createElement("li");
            listItem.textContent = antibiotic;
            listItem.onclick = () => navigateToAntibiotic(antibiotic);
            list.appendChild(listItem);
        });

        classSection.appendChild(list);
        container.appendChild(classSection);
    }
}

// Function to dynamically set the bacteria name and load antibiotics based on URL parameter
function setBacteriaName() {
    const urlParams = new URLSearchParams(window.location.search);
    const bacteriaName = urlParams.get('name');
    
    if (bacteriaName) {
        document.getElementById('bacteria-name').textContent = bacteriaName;

        const bacteria = bacteriaData.find(b => b.name === bacteriaName);
        if (bacteria) {
            renderAntibioticsByClass(bacteria);
        }
    }
}

// Function to navigate to the antibiotic page
function navigateToAntibiotic(antibioticName) {
    window.location.href = `antibiotic.html?name=${encodeURIComponent(antibioticName)}`;
}

// Function to show Preferred Antibiotics
function showPreferredAntibiotics() {
    document.getElementById('preferred-antibiotics').classList.add('active');
    document.getElementById('all-antibiotics').classList.remove('active');
    document.getElementById('preferredTab').classList.add('active');
    document.getElementById('allTab').classList.remove('active');
}

// Function to show All Antibiotics
function showAllAntibiotics() {
    document.getElementById('all-antibiotics').classList.add('active');
    document.getElementById('preferred-antibiotics').classList.remove('active');
    document.getElementById('allTab').classList.add('active');
    document.getElementById('preferredTab').classList.remove('active');
}

// ================================
// NEW: Pathogen detail UI (bacteria.html)
// ================================
function initPathogenDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const bacteriaName = urlParams.get("name") || "Pathogen";

  // Set title
  const titleEl = document.getElementById("pathogen-title") || document.getElementById("bacteria-name");
  if (titleEl) titleEl.textContent = bacteriaName;

  const firstLineEl = document.getElementById("firstLineList");
  const altEl = document.getElementById("alternativeList");

  // If we’re on the OLD bacteria.html layout, keep your old behavior
  // (prevents breaking anything if you temporarily swap files)
  if (!firstLineEl || !altEl) {
    if (typeof setBacteriaName === "function") setBacteriaName();
    return;
  }

  const bacteria = (typeof bacteriaData !== "undefined")
    ? bacteriaData.find(b => b.name === bacteriaName)
    : null;

  const preferred = bacteria?.preferredAntibiotics || [];
  const all = bacteria?.allAntibiotics || [];

  const preferredNames = uniqNames(preferred);
  const altNames = uniqNames(all).filter(n => !preferredNames.includes(n));

  renderNameList(firstLineEl, preferredNames);
  renderNameList(altEl, altNames);

  // Accordion behavior
  setupAccordion();

  // Susceptibility row click (customize destination if you have a page for this)
  const susBtn = document.getElementById("susceptibilityLink");
  if (susBtn) {
    susBtn.addEventListener("click", () => {
      // Example if you add a susceptibilities page later:
      // window.location.href = `antibiogram.html?organism=${encodeURIComponent(bacteriaName)}`;
      alert("Susceptibility view coming soon.");
    });
  }
}

function uniqNames(items) {
  const out = [];
  const seen = new Set();
  (items || []).forEach(x => {
    const name = (typeof x === "string") ? x : x?.name;
    if (!name) return;
    if (seen.has(name)) return;
    seen.add(name);
    out.push(name);
  });
  return out;
}

function renderNameList(ul, names) {
  ul.innerHTML = "";
  if (!names.length) {
    const li = document.createElement("li");
    li.textContent = "No agents listed yet.";
    ul.appendChild(li);
    return;
  }

  names.forEach(name => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `antibiotic.html?name=${encodeURIComponent(name)}`;
    a.textContent = name;
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function setupAccordion() {
  const items = Array.from(document.querySelectorAll(".pd-acc-item"));
  const toggles = Array.from(document.querySelectorAll(".pd-acc-toggle"));

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".pd-acc-item");
      if (!item) return;

      // “Only one open at a time” behavior (matches your screenshot vibe)
      items.forEach(i => {
        if (i !== item) i.classList.remove("open");
      });

      item.classList.toggle("open");
    });
  });
}

// Call functions on page load (bacteria.html)
if (window.location.pathname.includes("bacteria.html")) {
  window.onload = initPathogenDetailPage;
}

