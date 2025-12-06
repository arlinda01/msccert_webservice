"""
ISO Forms Data - All questionnaires for seeding
"""

# Standard answer options for all questions
ANSWER_OPTIONS = [
    {"value": "yes", "label": "Yes", "label_sq": "PO"},
    {"value": "no", "label": "No", "label_sq": "JO"},
    {"value": "in_progress", "label": "In Progress", "label_sq": "NË PROCES"},
    {"value": "not_applicable", "label": "Not Applicable", "label_sq": "NUK APLIKOHET"}
]

ISO_45001_DATA = {
    "name": "ISO 45001:2018 Self-Assessment Checklist",
    "name_sq": "Lista e Vetëvlerësimit ISO 45001:2018",
    "description": "Occupational Health & Safety Management System",
    "description_sq": "SISTEMI I MANAXHIMIT TË SIGURISË DHE SHËNDETIT NË PUNË",
    "sections": [
        {
            "title": "Context of the Organization",
            "title_sq": "1. Kuptimi i Organizatës dhe Kontekstit të Saj",
            "questions": [
                {"q": "Have you identified internal and external issues that affect your OHS objectives and outcomes?", "q_sq": "A keni identifikuar çështjet e brendshme dhe të jashtme (p.sh. ligjore, sociale, teknologjike dhe ekonomike) që ndikojnë në objektivat dhe rezultatet e OHS tuaj?"},
                {"q": "Is there a documented analysis showing how these issues may affect your OHSMS?", "q_sq": "A ka një analizë të dokumentuar që tregon si këto çështje mund të ndikojnë në OHSMS tuaj?"},
                {"q": "Have you identified all important interested parties?", "q_sq": "A keni identifikuar të gjitha palët e interesuara të rëndësishme (punonjësit, rregullatorët, klientët, furnizuesit, etj.)?"},
                {"q": "Are their needs and expectations documented and regularly reviewed?", "q_sq": "A janë nevojat dhe pritshmëritë e tyre të dokumentuara dhe shqyrtuara rregullisht?"},
                {"q": "Is the OHSMS boundary defined and documented?", "q_sq": "A është kufiri i OHSMS i përcaktuar dhe i dokumentuar, duke marrë parasysh çështjet e brendshme/eksterne dhe palët e interesuara?"},
                {"q": "Have you established processes required for OHSMS?", "q_sq": "A keni krijuar, zbatuar, mbajtur dhe përmirësuar vazhdimisht proceset që kërkohen për OHSMS?"},
            ]
        },
        {
            "title": "Leadership and Worker Participation",
            "title_sq": "2. Lidershipi dhe Pjesëmarrja e Punonjësve",
            "questions": [
                {"q": "Is top management actively involved in the OHSMS?", "q_sq": "A është manaxhimi i lartë aktivisht i përfshirë në OHSMS dhe tregon angazhim të dukshëm?"},
                {"q": "Are OHS roles, responsibilities and authorities defined and communicated?", "q_sq": "A janë rolet, përgjegjësitë dhe të drejtat për OHS të përcaktuara, të komunikura dhe të dokumentuara?"},
                {"q": "Has an OHS policy been established?", "q_sq": "A është krijuar një politikë OHS që është e përshtatshme për qëllimin dhe kontekstin e organizatës dhe përfshin angazhimin për eliminimin e rrezikshmërive, reduktimin e rrezikut dhe përmirësimin e vazhdueshëm?"},
                {"q": "Is the policy communicated to all workers?", "q_sq": "A është politika e komunikuar me të gjithë punonjësit dhe a është e disponueshme për palët e tjera interesuara?"},
                {"q": "Are processes established for worker consultation and participation?", "q_sq": "A janë proceset e vendosura për konsultimin, komunikimin dhe pjesëmarrjen e rregullt të punonjësve?"},
                {"q": "Are mechanisms implemented to involve workers in risk assessments?", "q_sq": "A janë implementuar mekanizma (p.sh. komitete sigurie, skema sugjerimesh) për të përfshirë punonjësit në vlerësimet e rrezikut dhe vendimmarrje?"},
            ]
        },
        {
            "title": "Planning",
            "title_sq": "3. Planifikimi",
            "questions": [
                {"q": "Have OHS risks and opportunities been identified and documented?", "q_sq": "A janë identifikuar, vlerësuar dhe dokumentuar risqet dhe mundësitë lidhur me OHS (përfshirë risqet në të gjitha nivelet e operacioneve)?"},
                {"q": "Are documented actions in place to address these risks?", "q_sq": "A janë veprimet e dokumentuara (si preventive ashtu edhe proaktive) për t'i adresuar këto rreziqe dhe mundësi?"},
                {"q": "Is there a systematic procedure for hazard identification and risk assessment?", "q_sq": "A ka një procedurë të sistematizuar për identifikimin e ndotjeve dhe vlerësimin e rreziqeve të lidhura (përfshirë operacionet e zakonshme, emergjencat dhe aktivitetet jo të zakonshme)?"},
                {"q": "Are risk assessments updated regularly?", "q_sq": "A bëhen vlerësimet e rrezikut rregullisht dhe a përditësohen kur ndodhin ndryshime?"},
                {"q": "Have all applicable legal and regulatory requirements been identified?", "q_sq": "A janë identifikuar dhe dokumentuar të gjitha kërkesat ligjore dhe rregullatore që aplikohen?"},
                {"q": "Are measurable OHS objectives defined?", "q_sq": "A janë përcaktuar objektiva matës të OHS në funksionet dhe nivelet përkatëse?"},
                {"q": "Is there an action plan for achieving objectives?", "q_sq": "A ka një plan veprimi që përcakton individët përgjegjës, burimet, afatet dhe metodat për të monitoruar përparimin?"},
            ]
        },
        {
            "title": "Support",
            "title_sq": "4. Mbështetja",
            "questions": [
                {"q": "Are necessary resources allocated for OHSMS?", "q_sq": "A janë vendosur burimet e nevojshme (njerëzore, teknologjike, financiare, etj.) për të zbatuar, mbajtur dhe përmirësuar OHSMS?"},
                {"q": "Is resource adequacy reviewed periodically?", "q_sq": "A shqyrtohet periodikisht mjaftueshmëria e burimeve në përgjigje të ndryshimeve në organizatë ose mjedisin rregullator?"},
                {"q": "Have competence requirements been identified for OHS roles?", "q_sq": "A keni identifikuar kërkesat për kompetenca për rolet që ndikojnë në OHS?"},
                {"q": "Is there an effective training program?", "q_sq": "A ka një program efektiv trajnimi për të siguruar që të gjithë punonjësit (dhe kontraktorët) janë kompetentë në detyrat e tyre dhe të vetëdijshëm për rreziqet?"},
                {"q": "Are internal and external communication processes established?", "q_sq": "A janë vendosur procese të brendshme dhe të jashtme komunikimi për çështjet e OHS?"},
                {"q": "Are workers aware of the OHS policy and significant hazards?", "q_sq": "A janë punonjësit të vetëdijshëm për politikën e OHS, rreziqet e rëndësishme, procedurat emergjente dhe rolet e tyre në ruajtjen e shëndetit dhe sigurisë?"},
                {"q": "Is documented information identified and controlled?", "q_sq": "A identifikohet dhe kontrollohet informacioni i kërkuar i dokumentuar (politikat, procedurat, të dhënat, etj.)?"},
            ]
        },
        {
            "title": "Operation",
            "title_sq": "5. Operacionet",
            "questions": [
                {"q": "Are processes planned and controlled to meet OH&S requirements?", "q_sq": "A janë planifikuar, zbatuar dhe kontrolluar proceset e kërkuara për të përmbushur kërkesat e OH&S?"},
                {"q": "Are work procedures and safe work practices documented?", "q_sq": "A dokumentohen dhe komunikohen procedurat e punës, praktikat e sigurta të punës dhe kontrollet?"},
                {"q": "Are changes in operations assessed for OH&S impact?", "q_sq": "A vlerësohen ndryshimet në operacione (procese të reja, pajisje të reja, etj.) për ndikimin e tyre në SH&S?"},
                {"q": "Have potential emergency situations been identified?", "q_sq": "A janë identifikuar situatat dhe incidentet e mundshme të emergjencës?"},
                {"q": "Have emergency preparedness plans been developed and tested?", "q_sq": "A janë zhvilluar, komunikuar dhe testuar (përmes stërvitjeve ose ushtrimeve) planet për përgatitjen ndaj emergjencave?"},
                {"q": "If applicable, is contractor OH&S performance monitored?", "q_sq": "Nëse aplikohet, a monitorohet përzgjedhja, menaxhimi dhe performanca e kontraktorëve lidhur me kompetencën në fushën e shëndetit dhe sigurisë në punë (OH&S)?"},
            ]
        },
        {
            "title": "Performance Evaluation",
            "title_sq": "6. Vlerësimi i Performancës",
            "questions": [
                {"q": "Are key OHS performance indicators defined and monitored?", "q_sq": "A janë përcaktuar, monitoruar dhe analizuar rregullisht indikatorët kryesorë të performancës OHS?"},
                {"q": "Is there a systematic method for measuring OHS performance?", "q_sq": "A ka një metodë të sistematizuar për të matur rezultatet e performancës OHS (p.sh. auditime, inspektime, hetime incidentesh)?"},
                {"q": "Are internal audits planned and conducted?", "q_sq": "A planifikohen dhe realizohen auditime të brendshme për të vlerësuar efektivitetin e OHSMS?"},
                {"q": "Are procedures established for incident reporting and investigation?", "q_sq": "A janë vendosur procedura për raportimin e incidenteve, hetimin dhe analizën e jo-përputhshmërive?"},
                {"q": "Are corrective and preventive measures implemented and monitored?", "q_sq": "A janë implementuar, dokumentuar dhe monitoruar masat korrigjuese dhe preventive për efektivitetin?"},
                {"q": "Does top management conduct regular OHSMS reviews?", "q_sq": "A realizon manaxhimi i lartë rishikime të rregullta të OHSMS për të siguruar përshtatshmërinë, përputhshmërinë dhe efektivitetin e tij?"},
            ]
        },
        {
            "title": "Improvement",
            "title_sq": "7. Përmirësimi",
            "questions": [
                {"q": "Is there a documented process for continual improvement?", "q_sq": "A ka një proces të dokumentuar për përmirësimin e vazhdueshëm të OHSMS?"},
                {"q": "Are improvement initiatives evaluated for effectiveness?", "q_sq": "A janë vlerësuar iniciativat e përmirësimit (p.sh. rishikimet e proceseve, masat korrigjuese, përditësimet e trajnimit) për efektivitetin e tyre?"},
                {"q": "Are worker suggestions and feedback integrated into the improvement process?", "q_sq": "A janë integruar sugjerimet dhe feedback-u i punonjësve në procesin e përmirësimit të vazhdueshëm?"},
            ]
        },
    ]
}

ISO_22000_DATA = {
    "name": "ISO 22000:2018 Self-Assessment Checklist",
    "name_sq": "LISTA E VETËVLERËSIMIT ISO 22000:2018",
    "description": "Food Safety Management System",
    "description_sq": "SISTEMI I MANAXHIMIT TË SIGURISË USHQIMORE (SMSU)",
    "sections": [
        {
            "title": "Context of the Organization",
            "title_sq": "1. Konteksti i organizatës",
            "questions": [
                {"q": "Have you identified internal issues that may affect food safety?", "q_sq": "A i keni identifikuar çështjet e brendshme (proceset, teknologjia, kultura, kompetencat) që mund të ndikojnë në sigurinë ushqimore?"},
                {"q": "Have you identified external issues that affect the FSMS?", "q_sq": "A i keni identifikuar çështjet e jashtme (legjislacioni ushqimor, tregu, konsumatorët, trendet e sigurisë ushqimore, ndryshimet në zinxhirin furnizues) që ndikojnë në SMSU?"},
                {"q": "Have you analyzed how these issues affect your ability to ensure safe food products?", "q_sq": "A keni analizuar se si këto çështje ndikojnë në aftësinë për të siguruar produkte ushqimore të sigurta?"},
                {"q": "Have you identified relevant interested parties for food safety?", "q_sq": "A i keni identifikuar palët e interesuara relevante për sigurinë ushqimore (konsumatorët, autoritetet, furnitorët, klientët B2B, shoqatat, inspektoratet)?"},
                {"q": "Are their needs and expectations related to food safety determined?", "q_sq": "A janë përcaktuar nevojat dhe pritshmëritë e tyre në lidhje me sigurinë ushqimore (kërkesa ligjore, kontraktuale, standarde vullnetare)?"},
                {"q": "Is the scope of the FSMS clearly defined?", "q_sq": "A është përcaktuar qartë fusha e SMSU (aktivitetet, proceset, vendndodhjet, produktet/shërbimet ushqimore)?"},
                {"q": "Has the FSMS been established in accordance with ISO 22000:2018?", "q_sq": "A është ngritur, zbatuar, mirëmbajtur dhe përmirësuar vazhdimisht një SMSU në përputhje me ISO 22000:2018?"},
            ]
        },
        {
            "title": "Leadership",
            "title_sq": "2. Udhëheqja",
            "questions": [
                {"q": "Does top management demonstrate commitment to food safety?", "q_sq": "A demonstron manaxhimi i lartë angazhim ndaj sigurisë ushqimore (burime, politika, objektiva, pjesëmarrje në rishikime)?"},
                {"q": "Is food safety an integral part of strategic direction?", "q_sq": "A është siguria ushqimore pjesë integrale e drejtimit strategjik dhe vendimmarrjes?"},
                {"q": "Does a documented food safety policy exist?", "q_sq": "A ekziston një politikë e dokumentuar e sigurisë ushqimore, e përshtatur me kontekstin, produktet dhe rolin e organizatës në zinxhirin ushqimor?"},
                {"q": "Does the policy commit to meeting legal and other requirements?", "q_sq": "A angazhohet politika për përmbushjen e kërkesave ligjore dhe të tjera të zbatueshme, si dhe për përmirësim të vazhdueshëm?"},
                {"q": "Is the policy communicated and understood within the organization?", "q_sq": "A komunikohet, kuptohet dhe zbatohet politika brenda organizatës dhe, kur është e nevojshme, ndaj palëve të jashtme?"},
                {"q": "Are responsibilities and authorities for key FSMS roles defined?", "q_sq": "A janë përcaktuar dhe komunikuar qartë përgjegjësitë dhe autoritetet për rolet kyçe në SMSU (përfshirë ekipin e sigurisë ushqimore)?"},
                {"q": "Has a food safety team been formed with appropriate competencies?", "q_sq": "A është formuar ekip i sigurisë ushqimore me kompetenca të përshtatshme (teknologji, mikrobiologji, procese, legjislacion, HACCP)?"},
            ]
        },
        {
            "title": "Planning",
            "title_sq": "3. Planifikimi",
            "questions": [
                {"q": "Have risks and opportunities been identified at system level?", "q_sq": "A janë identifikuar risqet dhe mundësitë në nivel sistemi (jo vetëm HACCP) që ndikojnë në arritjen e rezultateve të SMSU?"},
                {"q": "Have actions been planned to manage risks and opportunities?", "q_sq": "A janë planifikuar veprime për të menaxhuar risqet dhe për të përfituar nga mundësitë (p.sh. teknologji më të sigurta, trajnime shtesë, furnitorë më të qëndrueshëm)?"},
                {"q": "Are measurable food safety objectives established?", "q_sq": "A janë vendosur objektiva të matshme të sigurisë ushqimore në nivele relevante (p.sh. % ankesave, rezultate analizash, konformitet me plane monitorimi, performanca e PRP-ve)?"},
                {"q": "Are there action plans for achieving objectives?", "q_sq": "A ka plane veprimi për arritjen e objektivave (përgjegjës, afate, burime, tregues matës)?"},
                {"q": "Is there a process for planning and assessing changes?", "q_sq": "A ekziston një proces për planifikimin dhe vlerësimin e ndikimit të ndryshimeve (produkte të reja, lëndë të para, teknologji, furnitorë, layout, metoda pastrimi) në sigurinë ushqimore?"},
            ]
        },
        {
            "title": "Support",
            "title_sq": "4. Mbështetja",
            "questions": [
                {"q": "Are necessary resources available for the FSMS?", "q_sq": "A janë vlerësuar dhe vënë në dispozicion burimet e nevojshme (personel, pajisje, infrastrukturë, laboratorë, shërbime të jashtme) për SMSU?"},
                {"q": "Is maintenance and calibration of equipment ensured?", "q_sq": "A sigurohet mirëmbajtja dhe kalibrimi i pajisjeve që ndikojnë në sigurinë ushqimore?"},
                {"q": "Are competence requirements defined for personnel?", "q_sq": "A janë përcaktuar kërkesat e kompetencës për personelin që kryen aktivitete që ndikojnë në sigurinë ushqimore (prodhim, magazinë, mirëmbajtje, pastrim, laborator, transport)?"},
                {"q": "Is regular training conducted on food safety?", "q_sq": "A realizohen trajnime të rregullta në temën e sigurisë ushqimore, higjienës personale, PRP-ve, HACCP?"},
                {"q": "Are employees aware of food safety policies and hazards?", "q_sq": "A janë punonjësit të ndërgjegjshëm për politikat, procedurat kryesore, rreziqet e sigurisë ushqimore dhe rolin e tyre në parandalimin e kontaminimit?"},
                {"q": "Are mechanisms for internal communication on food safety established?", "q_sq": "A ekzistojnë mekanizma për komunikim të brendshëm mbi çështjet e sigurisë ushqimore (mbledhje, njoftime, raporte deviacionesh)?"},
                {"q": "Is there a controlled system for FSMS documentation?", "q_sq": "A ekziston sistem i kontrolluar për procedurat, udhëzimet e punës, regjistrat e monitorimit, analizat laboratorike, raportet e auditimit, etj.?"},
            ]
        },
        {
            "title": "Operational Planning and Control",
            "title_sq": "5. Planifikimi dhe Kontrolli Operacional",
            "questions": [
                {"q": "Are PRPs identified and documented?", "q_sq": "A janë identifikuar dhe dokumentuar PRP-të që mbështesin kontrollin e sigurisë ushqimore (higjiena personale, pastrimi dhe dezinfektimi, kontrolli i dëmtuesve, mirëmbajtja, kontrolli i ujit, kontrolli i temperaturës, magazinimi, transporti)?"},
                {"q": "Are PRPs based on recognized standards?", "q_sq": "A bazohen PRP-të në standarde/referenca të njohura (p.sh. ISO/TS 22002-1 apo udhëzime kombëtare)?"},
                {"q": "Is a traceability system established?", "q_sq": "A është vendosur një sistem gjurmueshmërie 'nga lënda e parë te klienti' që siguron identifikimin e produkteve, loteve dhe furnitorëve?"},
                {"q": "Is there a procedure for emergency management?", "q_sq": "A ekziston një procedurë për menaxhimin e situatave emergjente që ndikojnë sigurinë ushqimore (ndotje, defekt teknologjik, ndërprerje energjie, rikthime produkti)?"},
                {"q": "Has a systematic hazard analysis been performed?", "q_sq": "A është kryer një analizë sistematike e rreziqeve biologjike, kimike dhe fizike për secilin produkt/proces?"},
                {"q": "Have control measures been identified and classified as CCP or OPRP?", "q_sq": "A janë identifikuar masat e kontrollit dhe është klasifikuar në CCP (Pika Kritike e Kontrollit) dhe/ose PRP operative (OPRP) sipas kërkesave të ISO 22000:2018?"},
                {"q": "Does a documented HACCP/OPRP plan exist?", "q_sq": "A ekziston plan HACCP/OPRP i dokumentuar që përfshin: rrezikun, masën e kontrollit, kufijtë kritikë/operativë, monitorimin, veprimet korrigjuese, verifikimin dhe regjistrat?"},
                {"q": "Are CCPs and OPRPs monitored at appropriate intervals?", "q_sq": "A monitorohen CCP-të dhe OPRP-të në intervale të përshtatshme dhe dokumentohen rezultatet?"},
                {"q": "Have control measures been validated?", "q_sq": "A janë validuar masat e kontrollit (CCP/OPRP) për të provuar se ato janë efektive për kontrollin e rreziqeve?"},
                {"q": "Are criteria established for supplier selection and evaluation?", "q_sq": "A janë vendosur kritere për përzgjedhjen, vlerësimin dhe rishikimin e furnitorëve të lëndëve të para, materialeve të kontaktit me ushqimin, shërbimeve të jashtme?"},
                {"q": "Is there a process for managing non-conforming products?", "q_sq": "A ekziston një proces për identifikimin dhe menaxhimin e prodhimeve/lotëve jo-konform (bllokim, etiketim, riklasifikim, riciklim, asgjësim)?"},
            ]
        },
        {
            "title": "Performance Evaluation",
            "title_sq": "6. Vlerësimi i performancës",
            "questions": [
                {"q": "Are performance indicators for food safety defined?", "q_sq": "A janë përcaktuar tregues performance për sigurinë ushqimore (rezultatet e analizave, deviacionet në CCP/OPRP, rezultatet e monitorimit të PRP-ve, ankesa të klientëve)?"},
                {"q": "Is data analyzed regularly to identify trends?", "q_sq": "A analizohen rregullisht të dhënat për të identifikuar trende dhe për të përcaktuar nevojën për veprime korrigjuese ose përmirësuese?"},
                {"q": "Does an internal audit program exist?", "q_sq": "A ekziston një program auditimi i brendshëm që mbulon të gjitha kërkesat e ISO 22000 dhe proceset kyçe të sigurisë ushqimore?"},
                {"q": "Are audit findings documented and actions taken?", "q_sq": "A dokumentohen gjetjet e auditimit dhe a merren veprime për mospërputhjet e identifikuara?"},
                {"q": "Does top management conduct periodic FSMS reviews?", "q_sq": "A realizon manaxhimi i lartë rishikime periodike të SMSU?"},
                {"q": "Do reviews include audit results and customer feedback?", "q_sq": "A përfshijnë rishikimet: rezultatet e auditimeve, feedback-un e klientëve, performancën e CCP/OPRP, rezultatet e analizave laboratorike, incidentet dhe rikthimet e mundshme të produktit?"},
            ]
        },
        {
            "title": "Improvement",
            "title_sq": "7. Përmirësimi",
            "questions": [
                {"q": "Is there a procedure for managing non-conformities?", "q_sq": "A ekziston procedurë për identifikimin, regjistrimin dhe trajtimin e mospërputhjeve (në proces, produkt, dokumentim, auditim, ankesa)?"},
                {"q": "Are root causes analyzed and corrective actions determined?", "q_sq": "A analizohen shkaqet rrënjësore dhe përcaktohen veprime korrigjuese që parandalojnë përsëritjen?"},
                {"q": "Is effectiveness of corrective actions verified?", "q_sq": "A verifikohet efektiviteti i veprimeve korrigjuese?"},
                {"q": "Are improvement opportunities identified systematically?", "q_sq": "A përdoren rezultatet e analizës së të dhënave, auditimeve, rishikimit të manaxhimit dhe feedback-ut të palëve për të identifikuar mundësi përmirësimi të SMSU?"},
                {"q": "Are there concrete projects to improve food safety level?", "q_sq": "A ka projekte ose iniciativa konkrete për të rritur nivelin e sigurisë ushqimore (investime në teknologji, përmirësim PRP, rishikim planesh HACCP, trajnime shtesë)?"},
            ]
        },
    ]
}

ISO_27001_DATA = {
    "name": "ISO 27001:2022 Self-Assessment Checklist",
    "name_sq": "Lista e Vetëvlerësimit për ISO 27001:2022",
    "description": "Information Security Management System",
    "description_sq": "SISTEMI I MANAXHIMIT TË SIGURISË SË INFORMACIONIT (SMSI)",
    "sections": [
        {
            "title": "Context of the Organization",
            "title_sq": "1. Konteksti i organizatës",
            "questions": [
                {"q": "Have you identified internal issues affecting information security?", "q_sq": "A janë identifikuar çështjet e brendshme (struktura, sisteme IT, procese, kultura, kompetenca) që ndikojnë në sigurinë e informacionit?"},
                {"q": "Have you identified external issues affecting the ISMS?", "q_sq": "A janë identifikuar çështjet e jashtme (legjislacioni, kërkesat e klientëve, rreziqet kibernetike, tregu, partnerët, furnitorët) që ndikojnë në SMSI?"},
                {"q": "Have you analyzed how these issues affect information security objectives?", "q_sq": "A analizohet se si këto çështje ndikojnë në arritjen e objektivave të sigurisë së informacionit?"},
                {"q": "Have relevant interested parties been identified?", "q_sq": "A janë identifikuar palët e interesuara relevante (klientët, punonjësit, pronarët, autoritetet, partnerët IT, ofruesit e shërbimeve cloud, auditorët)?"},
                {"q": "Are their requirements relevant to information security determined?", "q_sq": "A janë përcaktuar kërkesat e tyre relevante për sigurinë e informacionit (ligjore, kontraktuale, rregullatore, standarde)?"},
                {"q": "Is the scope of the ISMS clearly defined?", "q_sq": "A është përcaktuar qartë fusha e SMSI (vendndodhjet, shërbimet/proceset, sistemet, asetet e informacionit që mbulohen)?"},
            ]
        },
        {
            "title": "Leadership",
            "title_sq": "2. Udhëheqja",
            "questions": [
                {"q": "Does top management demonstrate real commitment to information security?", "q_sq": "A demonstron manaxhimi i lartë angazhim real ndaj sigurisë së informacionit (burime, mbështetje, pjesëmarrje në rishikime, vendimmarrje)?"},
                {"q": "Is information security integrated with strategic direction?", "q_sq": "A është siguria e informacionit e integruar me drejtimin strategjik dhe menaxhimin e rrezikut të biznesit?"},
                {"q": "Does a documented information security policy exist?", "q_sq": "A ekziston një politikë e dokumentuar e sigurisë së informacionit, e përshtatur me natyrën e biznesit dhe rreziqet?"},
                {"q": "Does the policy commit to meeting legal requirements and continual improvement?", "q_sq": "A angazhohet politika për përmbushjen e kërkesave ligjore dhe të tjera të zbatueshme, si dhe për përmirësim të vazhdueshëm?"},
                {"q": "Is the policy communicated and understood?", "q_sq": "A komunikohet politika dhe kuptohet nga punonjësit dhe, kur është e nevojshme, nga palët e jashtme?"},
                {"q": "Are responsibilities and authorities for key ISMS roles defined?", "q_sq": "A janë përcaktuar përgjegjësitë dhe autoritetet për rolet kyçe në SMSI (përfshirë përgjegjësin e sigurisë së informacionit / ISMS Manager)?"},
            ]
        },
        {
            "title": "Planning",
            "title_sq": "3. Planifikimi",
            "questions": [
                {"q": "Have risks and opportunities related to ISMS been identified?", "q_sq": "A janë identifikuar rreziqet dhe mundësitë që lidhen me SMSI në nivel sistemi (jo vetëm teknik)?"},
                {"q": "Have actions been planned to address risks?", "q_sq": "A janë planifikuar veprime për trajtimin e rreziqeve (reduktim, transferim, pranueshmëri) dhe shfrytëzimin e mundësive?"},
                {"q": "Does a documented risk assessment methodology exist?", "q_sq": "A ekziston një metodologji e dokumentuar për vlerësimin e rrezikut (kriteret për probabilitet, ndikim, pranim i rrezikut)?"},
                {"q": "Are information assets, owners, threats and vulnerabilities identified?", "q_sq": "A identifikohen asetet e informacionit, pronarët e tyre, kërcënimet, dobësitë dhe ndikimi i mundshëm?"},
                {"q": "Is risk assessment updated regularly or when significant changes occur?", "q_sq": "A përditësohet vlerësimi i rrezikut në mënyrë të rregullt ose kur ndodhin ndryshime të rëndësishme (projekte të reja, sisteme të reja, shërbime të reja)?"},
                {"q": "Are measurable information security objectives established?", "q_sq": "A janë vendosur objektiva të matshme të sigurisë së informacionit (p.sh. numri i incidenteve, koha e rikuperimit, % e sistemeve me backup të testuar, % e stafit të trajnuar)?"},
                {"q": "Is there a process for planning and assessing changes?", "q_sq": "A ka proces për të planifikuar dhe vlerësuar ndikimin e ndryshimeve (soft i ri, shërbime të reja cloud, rrjete të reja, ndryshim procesesh) në sigurinë e informacionit?"},
            ]
        },
        {
            "title": "Support",
            "title_sq": "4. Mbështetja",
            "questions": [
                {"q": "Are necessary resources assessed and allocated?", "q_sq": "A janë vlerësuar dhe caktuar burimet e nevojshme (personel IT, ekspertë të sigurisë, software, hardware, konsulentë, mjete monitorimi)?"},
                {"q": "Are competence requirements defined for roles affecting information security?", "q_sq": "A janë përcaktuar kërkesat e kompetencës për rolet që ndikojnë në sigurinë e informacionit (admin sistemesh, zhvillues, helpdesk, menaxherë procesesh)?"},
                {"q": "Is regular training conducted on information security?", "q_sq": "A kryhen trajnime të rregullta mbi sigurinë e informacionit, phishing, password, përdorim pajisjesh mobile, remote work?"},
                {"q": "Are employees aware of security policies and access rules?", "q_sq": "A janë punonjësit të ndërgjegjshëm për politikat e sigurisë, rregullat e aksesit, raportimin e incidenteve, përdorimin e email-it dhe internetit?"},
                {"q": "Do they understand consequences of security breaches?", "q_sq": "A kuptojnë pasojat e shkeljes së rregullave të sigurisë së informacionit?"},
                {"q": "Is the ISMS documented?", "q_sq": "A është dokumentuar SMSI (politika, procedurat, udhëzimet, regjistrat, rezultatet e vlerësimit të rrezikut)?"},
                {"q": "Is documented information controlled?", "q_sq": "A kontrollohet informacioni i dokumentuar (miratim, rishikim, shpërndarje, versionim)?"},
            ]
        },
        {
            "title": "Operation",
            "title_sq": "5. Operacioni",
            "questions": [
                {"q": "Are operational controls for information security defined and implemented?", "q_sq": "A janë përcaktuar dhe zbatuar kontrollet operative për sigurinë e informacionit në proceset ditore?"},
                {"q": "Are external IT services managed through defined contracts and controls?", "q_sq": "A menaxhohen shërbimet e jashtme IT, cloud, hosting, ISP, nëpërmjet kontratave dhe kontrolleve të përcaktuara?"},
                {"q": "Are risk treatment measures actually implemented?", "q_sq": "A zbatohen realisht masat e trajtimit të rrezikut të përcaktuara në plan?"},
                {"q": "Is implementation status and control effectiveness monitored?", "q_sq": "A monitorohet statusi i zbatimit dhe efektiviteti i kontrolleve?"},
                {"q": "Are risks assessed before changes in IT infrastructure?", "q_sq": "A vlerësohen rreziqet para se të bëhen ndryshime në infrastrukturën IT, aplikacione, rrjete, mënyra pune (remote, BYOD)?"},
                {"q": "Does an incident management procedure exist?", "q_sq": "A ekziston procedurë për menaxhimin e incidenteve (identifikim, raportim, regjistrim, analizë, veprime korrigjuese)?"},
                {"q": "Are roles and responsibilities for incident handling defined?", "q_sq": "A janë përcaktuar rolet dhe përgjegjësit për trajtimin e incidenteve?"},
                {"q": "Do business continuity and recovery plans exist?", "q_sq": "A ekzistojnë plane për vazhdimësinë e shërbimeve kritike dhe rikuperimin pas incidenteve (backup, DR, procedura rikthimi)?"},
                {"q": "Are backups and recovery plans regularly tested?", "q_sq": "A testohen rregullisht backup-et dhe planet e rikuperimit?"},
            ]
        },
        {
            "title": "Performance Evaluation",
            "title_sq": "6. Vlerësimi i performancës",
            "questions": [
                {"q": "Are ISMS performance indicators defined?", "q_sq": "A janë përcaktuar tregues të performancës së SMSI (incidente, ndërprerje, shkelje, response time, përputhshmëri me politikat)?"},
                {"q": "Are critical logs monitored?", "q_sq": "A monitorohen logjet kritike (akses, firewall, antivirus, IDS/IPS, aplikacione)?"},
                {"q": "Is data analyzed to identify trends and assess control effectiveness?", "q_sq": "A analizohen të dhënat për të identifikuar trende dhe për të vlerësuar efektivitetin e kontrolleve?"},
                {"q": "Are internal ISMS audits conducted?", "q_sq": "A realizohen auditime të brendshme të SMSI që mbulojnë kërkesat e ISO 27001 dhe kontrollet kryesore?"},
                {"q": "Are audit findings documented and actions taken?", "q_sq": "A dokumentohen gjetjet e auditimit dhe a merren veprime për mospërputhjet?"},
                {"q": "Does top management conduct periodic ISMS reviews?", "q_sq": "A kryhen rishikime periodike nga manaxhimi i lartë për SMSI?"},
                {"q": "Do reviews include audit results and risk trends?", "q_sq": "A përfshihen: rezultatet e auditimeve, statusi i veprimeve nga rishikimi i mëparshëm, ndryshimet në kontekst, feedback i palëve, performanca e kontrolleve, incidentet dhe trendet e rrezikut?"},
            ]
        },
        {
            "title": "Improvement",
            "title_sq": "7. Përmirësimi",
            "questions": [
                {"q": "Does a procedure for managing non-conformities and incidents exist?", "q_sq": "A ekziston procedurë për menaxhimin e mospërputhjeve dhe incidenteve në SMSI?"},
                {"q": "Are root causes analyzed and corrective actions determined?", "q_sq": "A analizohen shkaqet rrënjësore dhe përcaktohen veprime korrigjuese për të parandaluar përsëritjen?"},
                {"q": "Is effectiveness of corrective actions verified?", "q_sq": "A verifikohet efektiviteti i veprimeve korrigjuese?"},
                {"q": "Are ISMS improvement opportunities identified and implemented systematically?", "q_sq": "A identifikohen dhe zbatohen në mënyrë sistematike mundësi përmirësimi të SMSI (kontrolle të reja, përditësim politikash, automatizime, trajnime shtesë)?"},
            ]
        },
    ]
}

ISO_50001_DATA = {
    "name": "ISO 50001:2018 Self-Assessment Checklist",
    "name_sq": "Lista e Vetëvlerësimit për ISO 50001:2018",
    "description": "Energy Management System",
    "description_sq": "SISTEMI I MANAXHIMIT TË ENERGJISË (SME)",
    "sections": [
        {
            "title": "Context of the Organization",
            "title_sq": "1. Konteksti i organizatës",
            "questions": [
                {"q": "Have internal issues affecting energy performance been identified?", "q_sq": "A janë identifikuar çështjet e brendshme (proceset, teknologjia, pajisjet energji-konsumuese, kultura, kompetencat) që ndikojnë në performancën e energjisë?"},
                {"q": "Have external issues affecting the EnMS been identified?", "q_sq": "A janë identifikuar çështjet e jashtme (çmimet e energjisë, legjislacioni, kërkesat e klientëve, furnitorët e energjisë, politika shtetërore) që ndikojnë në SME?"},
                {"q": "Is the impact of these issues on energy performance improvement analyzed?", "q_sq": "A analizohet ndikimi i këtyre çështjeve në mundësinë për të përmirësuar performancën e energjisë?"},
                {"q": "Have relevant interested parties been identified?", "q_sq": "A janë identifikuar palët e interesuara relevante për menaxhimin e energjisë (pronarët, klientët, autoritetet, operatorët e rrjetit, furnitorët e energjisë)?"},
                {"q": "Have applicable legal requirements related to energy been determined?", "q_sq": "A janë përcaktuar kërkesat ligjore dhe të tjera të zbatueshme që lidhen me energjinë (kontrata, kushte furnizimi, norma ligjore, subvencione)?"},
                {"q": "Is the scope of the EnMS clearly defined?", "q_sq": "A është përcaktuar qartë fusha e SME (objektet, proceset, llojet e energjisë, aktivitetet e përfshira)?"},
                {"q": "Has the EnMS been established in accordance with ISO 50001:2018?", "q_sq": "A është ngritur, zbatuar dhe mirëmbajtur një SME në përputhje me ISO 50001:2018?"},
            ]
        },
        {
            "title": "Leadership",
            "title_sq": "2. Udhëheqja",
            "questions": [
                {"q": "Does top management demonstrate concrete commitment to energy performance?", "q_sq": "A demonstron manaxhimi i lartë angazhim konkret ndaj performancës së energjisë (burime, investime, politika, objektiva)?"},
                {"q": "Are EnMS requirements integrated into business processes?", "q_sq": "A integrohen kërkesat e SME në proceset e biznesit dhe në planifikimin strategjik?"},
                {"q": "Does a documented energy policy exist?", "q_sq": "A ekziston një politikë e energjisë e dokumentuar, e përshtatur me aktivitetet dhe ndikimin energjetik të organizatës?"},
                {"q": "Does the policy commit to continual improvement of energy performance?", "q_sq": "A angazhohet politika për përmirësim të vazhdueshëm të performancës së energjisë dhe të SME?"},
                {"q": "Does the policy commit to meeting applicable legal requirements?", "q_sq": "A angazhohet politika për përmbushjen e kërkesave ligjore dhe të tjera të zbatueshme që lidhen me energjinë?"},
                {"q": "Is the policy communicated and understood?", "q_sq": "A komunikohet, kuptohet dhe zbatohet politika brenda organizatës dhe, kur është e nevojshme, ndaj palëve të jashtme?"},
                {"q": "Are responsibilities and authorities for EnMS clearly defined?", "q_sq": "A janë përcaktuar dhe komunikuar qartë përgjegjësitë dhe autoritetet për SME (përfshirë përgjegjësin e menaxhimit të energjisë)?"},
            ]
        },
        {
            "title": "Planning",
            "title_sq": "3. Planifikimi",
            "questions": [
                {"q": "Have risks and opportunities affecting EnMS and energy performance been identified?", "q_sq": "A janë identifikuar risqet dhe mundësitë që ndikojnë në rezultatin e SME dhe performancën e energjisë (ndryshime çmimesh, politika, teknologji të reja, rreziqe furnizimi)?"},
                {"q": "Have actions been planned to manage risks and exploit opportunities?", "q_sq": "A janë planifikuar veprime për menaxhimin e risqeve dhe shfrytëzimin e mundësive?"},
                {"q": "Has a structured energy review been conducted?", "q_sq": "A është bërë një rishikim i energjisë i strukturuar?"},
                {"q": "Have main energy sources been identified?", "q_sq": "A janë identifikuar burimet kryesore të energjisë (energji elektrike, gaz, naftë, avull, etj.)?"},
                {"q": "Have significant energy users been identified?", "q_sq": "A janë identifikuar përdoruesit e rëndësishëm të energjisë (linja, makina, ndërtesa, sisteme ndriçimi, HVAC, furrat, kompresorët)?"},
                {"q": "Is energy consumption data collected along with influencing factors?", "q_sq": "A mblidhen të dhëna mbi konsumet e energjisë, faktorët ndikues (volum prodhimi, orë pune, temperatura e jashtme, etj.)?"},
                {"q": "Has an Energy Baseline (EnB) been established?", "q_sq": "A është përcaktuar Baseline e energjisë (EnB) për periudhat referuese (p.sh. mesatare e konsumit për një periudhë të caktuar)?"},
                {"q": "Have Energy Performance Indicators (EnPIs) been defined?", "q_sq": "A janë përcaktuar EnPI – Energy Performance Indicators (p.sh. kWh/ton produkt, kWh/m², l/100km, kWh/njësi prodhimi)?"},
                {"q": "Are measurable energy objectives established?", "q_sq": "A janë vendosur objektiva të matshme të energjisë (p.sh. ulje % e konsumit, rritje e efikasitetit, ulje e pikut të kërkesës)?"},
                {"q": "Are there action plans for energy improvements?", "q_sq": "A ekzistojnë plane veprimi për energjinë që përfshijnë: aktivitetet konkrete për kursimin e energjisë, përgjegjësit, afatet, burimet e nevojshme, mënyrën e monitorimit të rezultateve?"},
            ]
        },
        {
            "title": "Support",
            "title_sq": "4. Mbështetja",
            "questions": [
                {"q": "Are necessary resources available for the EnMS?", "q_sq": "A janë vlerësuar dhe vënë në dispozicion burimet e nevojshme për SME (personel, teknologji, software për menaxhimin e të dhënave, matës shtesë)?"},
                {"q": "Are competence requirements defined for personnel affecting energy performance?", "q_sq": "A janë përcaktuar kërkesat e kompetencës për personelin që ndikon në performancën e energjisë (operatorë, mirëmbajtje, inxhinierë, projektues)?"},
                {"q": "Is training conducted on energy efficiency?", "q_sq": "A realizohen trajnime për efikasitetin e energjisë, përdorimin racional të pajisjeve, leximin e matësve, interpretimin e EnPI-ve?"},
                {"q": "Are employees aware of energy policies and their role?", "q_sq": "A janë punonjësit të ndërgjegjshëm për politikat e energjisë, rolin e tyre në kursimin e energjisë dhe ndikimin e sjelljes së tyre?"},
                {"q": "Are internal communication routes for energy issues defined?", "q_sq": "A janë përcaktuar rrugët e komunikimit të brendshëm për çështjet e energjisë (raporte, takime, njoftime)?"},
                {"q": "Are policies, objectives, procedures and records documented?", "q_sq": "A janë dokumentuar politika, objektivat, procedurat, rishikimi i energjisë, EnPI, EnB, planet e veprimit dhe regjistrat kryesorë?"},
            ]
        },
        {
            "title": "Operation",
            "title_sq": "5. Operacioni",
            "questions": [
                {"q": "Are operational controls for energy use in key processes defined and applied?", "q_sq": "A janë përcaktuar dhe zbatohen kontrolle operative për përdorimin e energjisë në proceset kryesore (p.sh. oraret e furrave, temperaturat, presionet, skedarë konfigurimi, procedura start/stop)?"},
                {"q": "Are EnMS requirements integrated into daily operational procedures?", "q_sq": "A janë integruar kërkesat e SME në procedurat operative të përditshme?"},
                {"q": "Are energy performance criteria considered during design and modifications?", "q_sq": "A merren parasysh kriteret e performancës së energjisë gjatë dizajnit dhe modifikimeve të objekteve, pajisjeve, sistemeve?"},
                {"q": "Is energy performance considered as a criterion during procurement?", "q_sq": "A konsiderohet performanca e energjisë si kriter gjatë prokurimit të pajisjeve, shërbimeve dhe produkteve që kanë ndikim të rëndësishëm energjetik?"},
                {"q": "Are energy impacts assessed before significant changes?", "q_sq": "A vlerësohen ndikimet në energji përpara ndryshimeve të rëndësishme në proces, pajisje, layout, orare pune?"},
                {"q": "Are suppliers and contractors controlled based on energy performance criteria?", "q_sq": "A kontrollohen furnitorët dhe kontraktorët që kryejnë punime me ndikim në energji (instalime, mirëmbajtje, retrofit, etj.) mbi bazën e kritereve të performancës energjetike?"},
            ]
        },
        {
            "title": "Performance Evaluation",
            "title_sq": "6. Vlerësimi i performancës",
            "questions": [
                {"q": "Are total energy consumption and EnPIs regularly monitored?", "q_sq": "A monitorohen rregullisht konsumi total i energjisë dhe EnPI-të?"},
                {"q": "Is performance compared against EnB and established objectives?", "q_sq": "A kryhet krahasimi i performancës kundrejt EnB dhe objektivave të vendosura?"},
                {"q": "Are influencing factors analyzed to interpret energy results?", "q_sq": "A analizohen faktorët ndikues (volumi i prodhimit, moti, orët e punës) për të interpretuar rezultatet e energjisë?"},
                {"q": "Is compliance with legal and other requirements periodically evaluated?", "q_sq": "A vlerësohet periodikisht përmbushja e kërkesave ligjore dhe të tjera të zbatueshme për energjinë?"},
                {"q": "Does an internal audit program for EnMS exist?", "q_sq": "A ekziston një program auditimi i brendshëm për SME që mbulon kërkesat e ISO 50001 dhe proceset kryesore energji-konsumuese?"},
                {"q": "Are audit findings documented and actions taken?", "q_sq": "A dokumentohen gjetjet e auditimit dhe merren veprime për mospërputhjet?"},
                {"q": "Does top management conduct periodic EnMS reviews?", "q_sq": "A kryhen rishikime periodike nga manaxhimi i lartë për SME?"},
                {"q": "Do reviews result in decisions for improvement and additional resources?", "q_sq": "A dalin nga rishikimi vendime për përmirësim, projekte të reja kursimi dhe burime shtesë?"},
            ]
        },
        {
            "title": "Improvement",
            "title_sq": "7. Përmirësimi",
            "questions": [
                {"q": "Does a procedure for managing energy-related non-conformities exist?", "q_sq": "A ekziston procedurë për menaxhimin e mospërputhjeve që lidhen me SME dhe performancën e energjisë (p.sh. konsum i paparashikuar, dështim i planit të veprimit, mosrespektim procedure)?"},
                {"q": "Are root causes analyzed and corrective actions determined?", "q_sq": "A analizohen shkaqet rrënjësore dhe përcaktohen veprime korrigjuese për të parandaluar përsëritjen?"},
                {"q": "Is effectiveness of corrective actions verified?", "q_sq": "A verifikohet efektiviteti i veprimeve korrigjuese?"},
                {"q": "Are energy performance improvement opportunities systematically identified?", "q_sq": "A identifikohen në mënyrë sistematike mundësi për përmirësim të performancës së energjisë (projekte efikasiteti, automatizime, retrofit, ndërrim pajisjesh, optimizim i orareve)?"},
                {"q": "Are energy improvement projects documented and tracked to results?", "q_sq": "A dokumentohen dhe ndiqen projektet e përmirësimit energjetik deri në arritjen e rezultateve?"},
            ]
        },
    ]
}

# Additional forms data will be added here
ISO_22301_DATA = {
    "name": "ISO 22301 Self-Assessment Checklist",
    "name_sq": "LISTA E VETËVLERËSIMIT ISO 22301",
    "description": "Business Continuity Management System",
    "description_sq": "SISTEMI I MANAXHIMIT TË VAZHDUESHMĖSISË SË BIZNESIT (BCMS)",
    "sections": [
        {
            "title": "Context of the Organization",
            "title_sq": "1. Konteksti i organizatës",
            "questions": [
                {"q": "Have internal issues affecting business continuity been identified?", "q_sq": "A janë identifikuar çështjet e brendshme që ndikojnë në vazhdueshmërinë e biznesit (struktura, sistemi IT, proceset kritike, varësitë e brendshme)?"},
                {"q": "Have external issues affecting BCMS been identified?", "q_sq": "A janë identifikuar çështjet e jashtme (ligjet, tregu, furnitorët kritikë, partnerët, infrastruktura publike, rreziqet natyrore/sociale) që ndikojnë në BCMS?"},
                {"q": "Have critical interested parties and their requirements been identified?", "q_sq": "A janë identifikuar palët e interesuara kritike (klientë, punonjës, furnitorë, autoritete, partnerë, banka, etj.) dhe kërkesat e tyre në lidhje me vazhdueshmërinë e biznesit?"},
                {"q": "Is the scope of BCMS clearly defined?", "q_sq": "A është përcaktuar qartë fusha e BCMS (vendndodhjet, proceset, shërbimet dhe aktivitetet që mbulohen)?"},
            ]
        },
        {
            "title": "Leadership",
            "title_sq": "2. Udhëheqja",
            "questions": [
                {"q": "Does top management demonstrate real commitment to BCMS?", "q_sq": "A demonstron manaxhimi i lartë angazhim real për BCMS (burime, mbështetje, pjesëmarrje në rishikime)?"},
                {"q": "Does a documented business continuity policy exist?", "q_sq": "A ekziston një politikë e vazhdueshmërisë së biznesit e dokumentuar, e përshtatur me profilin e kompanisë dhe me pritshmëritë e palëve të interesuara?"},
                {"q": "Is this policy communicated and understood?", "q_sq": "A komunikohet dhe kuptohet kjo politikë brenda organizatës?"},
                {"q": "Are roles, responsibilities and authorities for BCMS defined?", "q_sq": "A janë përcaktuar rolet, përgjegjësitë dhe autoritetet për BCMS (p.sh. Koordinatori i BCMS, ekipi i krizës, ekipi i rikuperimit)?"},
            ]
        },
        {
            "title": "Planning",
            "title_sq": "3. Planifikimi",
            "questions": [
                {"q": "Have risks and opportunities affecting business continuity been identified?", "q_sq": "A janë identifikuar risqet dhe mundësitë që ndikojnë në aftësinë e organizatës për të ruajtur vazhdueshmërinë e biznesit?"},
                {"q": "Are business continuity objectives established?", "q_sq": "A janë vendosur objektiva për vazhdueshmërinë e biznesit (p.sh. koha maksimale e ndërprerjes, nivelet minimale të shërbimit, etj.)?"},
                {"q": "Are there action plans to achieve objectives?", "q_sq": "A ekzistojnë plane veprimi për të arritur objektivat (përgjegjës, afate, burime)?"},
                {"q": "Has a Business Impact Analysis (BIA) been performed?", "q_sq": "A është kryer BIA për proceset/shërbimet kryesore të organizatës?"},
                {"q": "Have critical processes and essential services been identified?", "q_sq": "A janë identifikuar proceset kritike dhe shërbimet esenciale që duhen rikthyer me përparësi?"},
                {"q": "Have RTO and MBCO been determined for each critical process?", "q_sq": "A janë përcaktuar për secilin proces kritik: ndikimet, RTO (Recovery Time Objective), MBCO (Minimum Business Continuity Objective)?"},
                {"q": "Have main threats been identified?", "q_sq": "A janë identifikuar kërcënimet kryesore (tërmet, përmbytje, zjarre, prishje IT, sulme kibernetike, mungesë energjie, mungesë personeli, greva, pandemi, etj.)?"},
                {"q": "Has risk been assessed for each threat?", "q_sq": "A është vlerësuar rreziku për secilin kërcënim (probabiliteti/ndikimi) në funksion të proceseve kritike?"},
            ]
        },
        {
            "title": "Support",
            "title_sq": "4. Mbështetja",
            "questions": [
                {"q": "Are necessary resources available for BCMS?", "q_sq": "A janë vlerësuar dhe vënë në dispozicion burimet e nevojshme për BCMS (personel, infrastrukturë alternative, pajisje rezervë, soft, komunikim)?"},
                {"q": "Has the incident/crisis management team been defined and trained?", "q_sq": "A është përcaktuar dhe trajnuar ekipi i menaxhimit të incidentit/krizës?"},
                {"q": "Are employees trained and aware of their role in emergency situations?", "q_sq": "A realizohen trajnime dhe ndërgjegjësim për punonjësit mbi rolin e tyre në situata emergjente dhe në skenarë ndërprerjeje?"},
                {"q": "Does documented information for BCMS exist?", "q_sq": "A ekzistojnë procedura dhe informacion i dokumentuar për BCMS (politika, BIA, vlerësimi i rrezikut, strategjitë dhe planet e vazhdueshmërisë, regjistrat e testimeve)?"},
            ]
        },
        {
            "title": "Operation",
            "title_sq": "5. Operacioni (BCMS në praktikë)",
            "questions": [
                {"q": "Have continuity strategies been defined?", "q_sq": "A janë përcaktuar strategjitë për vazhdimësinë (p.sh. punë nga lokacion alternativ, punë në distancë, transferim shërbimesh te partnerë, konfigurime rezervë IT, backup i dyfishtë)?"},
                {"q": "Have different options been evaluated and most suitable strategies selected?", "q_sq": "A janë vlerësuar opsionet e ndryshme (kosto, kohë rikuperimi, realizueshmëri) dhe janë zgjedhur strategjitë më të përshtatshme?"},
                {"q": "Do documented Business Continuity Plans exist?", "q_sq": "A ekzistojnë plane të dokumentuara për vazhdueshmërinë / rikuperimin për proceset kritike (Business Continuity Plans – BCP)?"},
                {"q": "Do plans include roles, detailed steps, critical contacts, alternative resources?", "q_sq": "A përfshijnë planet: rolet dhe përgjegjësitë në emergjencë, hapat e detajuar për reagim dhe rikuperim, listën e kontakteve kritike, burimet alternative?"},
                {"q": "Do procedures exist for incident management and BC plan activation?", "q_sq": "A ekzistojnë procedura për menaxhimin e incidenteve dhe aktivizimin e planeve të BC (p.sh. kush shpall emergjencën, kush thërret ekipin e krizës)?"},
                {"q": "Is BCMS impact assessed when significant changes occur?", "q_sq": "A vlerësohet ndikimi në BCMS kur ka ndryshime të rëndësishme në biznes, IT, strukturë, vendndodhje apo procese?"},
            ]
        },
        {
            "title": "Testing, Exercises and Performance Evaluation",
            "title_sq": "6. Testimi, ushtrimet dhe vlerësimi i performancës",
            "questions": [
                {"q": "Are business continuity plan tests and exercises conducted regularly?", "q_sq": "A kryhen rregullisht testime dhe ushtrime të planeve të vazhdueshmërisë së biznesit (p.sh. simulim ndërprerjeje IT, mosdisponueshmëri objekti kryesor, test i punës në distancë)?"},
                {"q": "Are test results documented?", "q_sq": "A dokumentohen rezultatet e testimeve (çfarë funksionoi, çfarë nuk funksionoi, çfarë duhen përmirësuar)?"},
                {"q": "Is BCMS performance monitored and measured against objectives?", "q_sq": "A monitorohet dhe matet performanca e BCMS në bazë të objektivave (p.sh. numri i incidenteve, koha reale e rikuperimit vs RTO, disponueshmëria e shërbimeve)?"},
                {"q": "Are internal BCMS audits conducted?", "q_sq": "A kryhen auditime të brendshme të BCMS që mbulojnë kërkesat e ISO 22301 dhe proceset kritike?"},
                {"q": "Are findings documented and corrective actions taken?", "q_sq": "A dokumentohen gjetjet dhe merren veprime korrigjuese për mospërputhjet?"},
                {"q": "Does top management conduct periodic BCMS reviews?", "q_sq": "A realizohen rishikime periodike të BCMS nga manaxhimi i lartë?"},
                {"q": "Do reviews include audit results, test results, incidents and improvement proposals?", "q_sq": "A përfshijnë rishikimet: rezultatet e auditimeve, rezultatet e testimeve dhe ushtrimeve, incidentet reale dhe mësimet e nxjerra, ndryshimet në kontekst dhe kërkesat ligjore, propozimet për përmirësim?"},
            ]
        },
        {
            "title": "Improvement",
            "title_sq": "7. Përmirësimi",
            "questions": [
                {"q": "Does a formal process for managing BCMS non-conformities exist?", "q_sq": "A ekziston një proces formal për menaxhimin e mospërputhjeve dhe veprimeve korrigjuese që lidhen me BCMS (nga auditimet, testimet, incidentet)?"},
                {"q": "Are root causes analyzed and concrete actions determined?", "q_sq": "A analizohen shkaqet rrënjësore dhe përcaktohen veprime konkrete për të shmangur përsëritjen e problemeve?"},
                {"q": "Are improvement opportunities continuously identified?", "q_sq": "A identifikohen në mënyrë të vazhdueshme mundësi për përmirësim (strategji më të mira, procese më të thjeshta, teknologji mbështetëse)?"},
            ]
        },
    ]
}

ISO_37001_DATA = {
    "name": "ISO 37001 Self-Assessment Checklist",
    "name_sq": "LISTA E VETËVLERËSIMIT ISO 37001",
    "description": "Anti-Bribery Management System",
    "description_sq": "SISTEMI I MANAXHIMIT ANTI-RYSHFET (KUNDER KORRUPSIONIT)",
    "sections": [
        {
            "title": "Context of the Organization",
            "title_sq": "1. Konteksti i organizatës",
            "questions": [
                {"q": "Have internal issues affecting bribery risk been identified?", "q_sq": "A janë identifikuar çështjet e brendshme që ndikojnë në riskun e ryshfetit (struktura, kultura, lloji i transaksioneve, sektori i aktivitetit)?"},
                {"q": "Have external issues affecting bribery risk been identified?", "q_sq": "A janë identifikuar çështjet e jashtme (legjislacioni anti-korrupsion, praktikat në treg, marrëdhëniet me sektorin publik, vendet me risk të lartë) që ndikojnë në riskun e ryshfetit?"},
                {"q": "Have relevant interested parties and their integrity expectations been identified?", "q_sq": "A janë identifikuar dhe analizuar palët e interesuara relevante (klientë, furnitorë, ndërmjetës, autoritete, partnerë biznesi) dhe pritshmëritë e tyre për integritet dhe anti-ryshfet?"},
                {"q": "Is the scope of the anti-bribery system clearly defined?", "q_sq": "A është përcaktuar qartë fusha e sistemit anti-ryshfet (njësi, vende, aktivitete, lloje transaksionesh të mbuluara)?"},
            ]
        },
        {
            "title": "Leadership",
            "title_sq": "2. Udhëheqja",
            "questions": [
                {"q": "Does top management demonstrate real commitment against bribery?", "q_sq": "A demonstron manaxhimi i lartë angazhim real kundër ryshfetit (mesazhe, vendime, burime, tolerancë zero)?"},
                {"q": "Does a documented anti-bribery policy exist?", "q_sq": "A ekziston një politikë anti-ryshfet e dokumentuar, e komunikuar dhe e kuptuar nga punonjësit dhe, kur duhet, nga palët e jashtme?"},
                {"q": "Is it clear in the policy that giving, receiving, requesting or suggesting any form of bribery is prohibited?", "q_sq": "A është politika e qartë se ndalohet dhënia, pranimi, kërkimi apo sugjerimi i çdo forme ryshfeti, direkt ose indirekt?"},
                {"q": "Has an anti-bribery compliance function been appointed?", "q_sq": "A është caktuar një funksion/përgjegjës për përputhshmërinë anti-ryshfet (p.sh. Compliance Officer / Anti-Bribery Compliance Function)?"},
                {"q": "Does this function have sufficient authority and direct access to top management?", "q_sq": "A ka ky funksion mjaftueshëm autoritet, pavarësi dhe akses direkt te manaxhimi i lartë?"},
            ]
        },
        {
            "title": "Planning - Bribery Risk",
            "title_sq": "3. Planifikimi – risku i ryshfetit",
            "questions": [
                {"q": "Has a bribery risk assessment been conducted?", "q_sq": "A është bërë një vlerësim i riskut të ryshfetit në organizatë (sektor, vende, lloje klientësh, lloje kontratash, marrëdhënie me sektorin publik)?"},
                {"q": "Have high-risk areas, processes and roles been identified?", "q_sq": "A janë identifikuar zonat, proceset dhe rolet me risk të lartë (p.sh. shitjet, prokurimi, tenderat, marrëdhëniet me autoritete, ndërmjetës, konsulentë)?"},
                {"q": "Have control measures based on risk been planned?", "q_sq": "A janë planifikuar masa kontrolli në bazë të riskut (due diligence më i fortë, miratime shtesë, ndalim praktika të caktuara, monitorim shtesë)?"},
                {"q": "Are anti-bribery compliance objectives established?", "q_sq": "A janë vendosur objektiva për përputhshmërinë anti-ryshfet (p.sh. zero raste të konfirmuara, numri i trajnimeve, % e stafit të trajnuar, numri i raportimeve të sinjalizuara)?"},
                {"q": "Are there action plans to reduce risk in high-risk areas?", "q_sq": "A ka plane veprimi për të ulur riskun në zonat me risk të lartë?"},
            ]
        },
        {
            "title": "Support",
            "title_sq": "4. Mbështetja (burime, kompetenca, ndërgjegjësim)",
            "questions": [
                {"q": "Are necessary resources allocated for the anti-bribery system?", "q_sq": "A janë caktuar burimet e nevojshme (personel, kohë, buxhet, sisteme) për të zbatuar sistemin anti-ryshfet?"},
                {"q": "Are competence requirements defined for high-risk roles?", "q_sq": "A janë përcaktuar kërkesat e kompetencës për rolet me risk të lartë (shitje, prokurim, drejtues, persona që kontaktojnë autoritetet, ndërmjetës)?"},
                {"q": "Is periodic training conducted for employees on bribery?", "q_sq": "A kryhen trajnime periodike për punonjësit mbi: çfarë është ryshfeti, si të shmanget, si të reagosh dhe raportosh?"},
                {"q": "Are employees aware of anti-bribery policies and consequences?", "q_sq": "A janë punonjësit të ndërgjegjshëm për politikat anti-ryshfet dhe për pasojat disiplinore e ligjore në rast shkeljeje?"},
                {"q": "Do reporting channels exist for reporting suspicions without fear?", "q_sq": "A ekzistojnë kanale raportimi (hotline, email, kuti denoncimi, kontakt i drejtpërdrejtë me funksionin e përputhshmërisë) për të raportuar dyshime pa frikë ndëshkimi?"},
                {"q": "Is confidentiality and whistleblower protection ensured?", "q_sq": "A është siguruar konfidencialiteti dhe mbrojtja e sinjalizuesve (whistleblowers)?"},
            ]
        },
        {
            "title": "Operation - Anti-Bribery Controls",
            "title_sq": "5. Operacioni – kontrollet anti-ryshfet",
            "questions": [
                {"q": "Is proportional due diligence conducted for business partners?", "q_sq": "A kryhet due diligence proporcional me riskun për: partnerë biznesi, ndërmjetës, agjentë, konsulentë, furnitorë strategjikë, partnerë në joint-venture, përfaqësues tregtarë?"},
                {"q": "Are due diligence results and decisions documented?", "q_sq": "A dokumentohen rezultatet e due diligence dhe vendimi për të vazhduar / refuzuar marrëdhënien?"},
                {"q": "Are anti-bribery contractual clauses included in contracts?", "q_sq": "A përfshihen klauzola kontraktuale anti-ryshfet në kontrata me palët e jashtme (e drejta për auditim, e drejta për zgjidhje kontrate në rast ryshfeti)?"},
                {"q": "Is anti-bribery policy communicated to partners?", "q_sq": "A u komunikohet partnerëve politika anti-ryshfet dhe pritshmëritë e organizatës për integritet?"},
                {"q": "Is there control that no payment is made without proper documentation?", "q_sq": "A ekziston kontroll që asnjë pagesë të mos kryhet pa dokumentacion dhe autorizim të rregullt (no cash i pakontrolluar, no 'off-book payments')?"},
                {"q": "Are hidden payments, non-transparent commissions, facilitation payments clearly prohibited?", "q_sq": "A janë të ndaluara qartë: pagesat e fshehta, komisionet jo-transparente, 'facilitation payments'?"},
                {"q": "Are expenses for gifts, hospitality, sponsorships controlled?", "q_sq": "A kontrollohen shpenzimet për dhurata, pritje, mikpritje, sponsorizime në raport me politikat anti-ryshfet (limitet, miratime paraprake, raportim)?"},
                {"q": "Does a clear regulation for gifts and hospitality exist?", "q_sq": "A ekziston një rregullore e qartë për dhurata dhe mikpritje (çfarë lejohet, deri në çfarë vlere, kur kërkohet miratim)?"},
                {"q": "Are potential conflicts of interest controlled?", "q_sq": "A kontrollohen interesat konfliktuale të mundshme (p.sh. punonjës që kanë lidhje të afërta me klientë, furnitorë, autoritete)?"},
            ]
        },
        {
            "title": "Performance Evaluation",
            "title_sq": "6. Vlerësimi i performancës",
            "questions": [
                {"q": "Is anti-bribery system implementation monitored?", "q_sq": "A monitorohet zbatimi i sistemit anti-ryshfet (numri i raportimeve, rastet e hetuara, rezultatet)?"},
                {"q": "Is data analyzed to identify high-risk areas and negative trends?", "q_sq": "A analizohen të dhënat për të identifikuar zona me risk, trende negative apo mungesë raportimi (që mund të jetë shenjë frike ose mosbesimi në sistem)?"},
                {"q": "Are internal audits conducted for the anti-bribery system?", "q_sq": "A kryhen auditime të brendshme për sistemin anti-ryshfet (procedura, dokumentacion, transaksione të zgjedhura, due diligence të kryera)?"},
                {"q": "Are audit findings documented and measures taken?", "q_sq": "A dokumentohen gjetjet dhe a merren masa për mospërputhjet?"},
                {"q": "Does top management conduct periodic anti-bribery system reviews?", "q_sq": "A bën manaxhimi i lartë rishikim periodik të sistemit anti-ryshfet?"},
                {"q": "Do reviews include audit results, reported cases, legal changes, improvement proposals?", "q_sq": "A përfshihen në rishikim: rezultatet e auditimeve dhe monitorimit, rastet e raportuara, hetimet dhe masat disiplinore, ndryshimet ligjore, ndryshimet në risk, propozimet për përmirësim?"},
            ]
        },
        {
            "title": "Improvement",
            "title_sq": "7. Përmirësimi",
            "questions": [
                {"q": "Does a clear process for managing suspected or proven bribery incidents exist?", "q_sq": "A ekziston një proces i qartë për menaxhimin e mospërputhjeve dhe incidenteve të dyshuara ose të provuara të ryshfetit?"},
                {"q": "Are internal investigations conducted fairly, confidentially and documented?", "q_sq": "A kryhen hetimet e brendshme në mënyrë të drejtë, konfidenciale dhe të dokumentuar?"},
                {"q": "Are disciplinary and corrective measures taken when violations are confirmed?", "q_sq": "A merren masa disiplinore dhe korrigjuese kur konfirmohen shkelje?"},
                {"q": "Are root causes analyzed and policies/procedures/controls updated?", "q_sq": "A analizohen shkaqet rrënjësore dhe përditësohen politikat / procedurat / kontrollet për të parandaluar përsëritjen?"},
                {"q": "Does the organization promote a culture of continual improvement in integrity?", "q_sq": "A promovon organizata një kulturë të përmirësimit të vazhdueshëm në integritet dhe anti-ryshfet?"},
            ]
        },
    ]
}

ISO_39001_DATA = {
    "name": "ISO 39001 Self-Assessment Checklist",
    "name_sq": "LISTA E VETËVLERËSIMIT ISO 39001",
    "description": "Road Traffic Safety Management System",
    "description_sq": "SISTEMI I MANAXHIMIT TË SIGURISË SË TRAFIKUT RRUGOR (RTS)",
    "sections": [
        {
            "title": "Context of the Organization",
            "title_sq": "1. Konteksti i organizatës",
            "questions": [
                {"q": "Is the organization's role in road traffic clearly defined?", "q_sq": "A është përcaktuar qartë roli i organizatës në trafikun rrugor (p.sh. transport mallrash, transport pasagjerësh, flotë shërbimi, punonjës që udhëtojnë për punë, kontraktorë transporti)?"},
                {"q": "Have internal issues affecting road safety been identified?", "q_sq": "A janë identifikuar çështjet e brendshme që ndikojnë në sigurinë rrugore (flota, politikat, kultura e sigurisë, proceset, sjellja e shoferëve)?"},
                {"q": "Have external issues affecting RTS been identified?", "q_sq": "A janë identifikuar çështjet e jashtme (legjislacioni rrugor, infrastruktura rrugore, klientët, policia rrugore, klima, gjendja e rrugëve) që ndikojnë RTS?"},
                {"q": "Have relevant interested parties and their road safety expectations been identified?", "q_sq": "A janë identifikuar palët e interesuara relevante (shoferë, pasagjerë, klientë, komuniteti, autoritetet, siguruesit) dhe pritshmëritë e tyre për siguri rrugore?"},
                {"q": "Is the scope of the RTS system clearly defined?", "q_sq": "A është përcaktuar qartë fusha e sistemit RTS (aktivitetet, flotat, lokacionet, llojet e transportit të mbuluara)?"},
            ]
        },
        {
            "title": "Leadership",
            "title_sq": "2. Udhëheqja",
            "questions": [
                {"q": "Does top management demonstrate real commitment to road safety?", "q_sq": "A demonstron manaxhimi i lartë angazhim real për sigurinë rrugore (mesazhe, vendime, burime, prioritet i sigurisë ndaj shpejtësisë/fitimt)?"},
                {"q": "Does a documented road traffic safety policy exist?", "q_sq": "A ekziston një politikë e sigurisë së trafikut rrugor, e dokumentuar dhe e komunikuar brenda organizatës?"},
                {"q": "Does the policy include objective for accident reduction and zero tolerance for serious violations?", "q_sq": "A janë të përcaktuara në politikë: objektivi për uljen e aksidenteve, përputhshmëria me ligjin rrugor, mos tolerimi i drejtimit nën ndikimin e alkoolit/drogës, lodhjes, shkeljeve të rënda?"},
                {"q": "Are roles and responsibilities for RTS defined?", "q_sq": "A janë përcaktuar rolet dhe përgjegjësitë për RTS (p.sh. përgjegjës flote, koordinator i sigurisë rrugore, shefa sektori)?"},
            ]
        },
        {
            "title": "Planning",
            "title_sq": "3. Planifikimi",
            "questions": [
                {"q": "Are intended road safety results defined?", "q_sq": "A janë përcaktuar rezultatet e synuara për sigurinë rrugore (p.sh. ulja e numrit të aksidenteve, plagosjeve të rënda, dëmeve materiale)?"},
                {"q": "Do measurable RTS objectives exist?", "q_sq": "A ekzistojnë objektiva të matshme RTS (p.sh. nr. aksidenteve / 1 milion km, nr. shkeljeve të rënda, % përdorimit të rripit të sigurimit, etj.)?"},
                {"q": "Are performance indicators for RTS defined?", "q_sq": "A janë përcaktuar indikatorë të performancës për RTS (p.sh. raporti i shpejtësive mesatare, lodhja, inspektimet e automjeteve, trajnimi i shoferëve)?"},
                {"q": "Are there action plans for achieving objectives?", "q_sq": "A ka plane veprimi për arritjen e këtyre objektivave (përgjegjës, afate, burime, indikatorë matës)?"},
                {"q": "Have main road traffic risk factors been identified?", "q_sq": "A janë identifikuar faktorët kryesorë të rrezikut në trafikun rrugor për aktivitetin tuaj (p.sh.: shpejtësia, alkooli/droga, lodhja, përdorimi i celularit, mos-përdorimi i rripit, gjendja teknike e automjeteve)?"},
                {"q": "Has risk been assessed for each factor?", "q_sq": "A është vlerësuar rreziku për secilin faktor (sa shpesh ndodh, sa i rëndë është nëse ndodh)?"},
                {"q": "Have specific measures been planned to reduce these risks?", "q_sq": "A janë planifikuar masa specifike për uljen e këtyre risqeve (p.sh. kufizim shpejtësie, kontroll alkooli, menaxhim orari, pajisje telematike, trajnime)?"},
            ]
        },
        {
            "title": "Support",
            "title_sq": "4. Mbështetja",
            "questions": [
                {"q": "Are necessary resources for RTS ensured?", "q_sq": "A janë siguruar burimet e nevojshme për RTS (personel, buxhet, pajisje, sisteme monitorimi, telematikë, trajnime)?"},
                {"q": "Are clear requirements for driver competence defined?", "q_sq": "A janë përcaktuar kërkesa të qarta për kompetencën e shoferëve (leje drejtimi, kategori, eksperiencë, trajnim shtesë për llojin e mallit/pasagjerëve)?"},
                {"q": "Is regular training conducted for drivers on safe driving?", "q_sq": "A kryhen trajnime të rregullta për shoferët dhe personelin relevant mbi: rregullat e qarkullimit, drejtimin e sigurt, lodhjen dhe oraret, drejtimin në kushte të vështira, sjelljen në aksident?"},
                {"q": "Are employees aware of RTS policy, objectives and consequences of violations?", "q_sq": "A janë punonjësit të ndërgjegjshëm për politikën RTS, objektivat dhe pasojat e shkeljeve (disiplinore dhe ligjore)?"},
                {"q": "Do documented procedures and records exist for accidents, violations, inspections, training, maintenance?", "q_sq": "A ekzistojnë procedura të dokumentuara dhe regjistra për: aksidentet, shkeljet rrugore, kontrollet teknike, trajnimet, mirëmbajtjen e mjeteve?"},
            ]
        },
        {
            "title": "Operation",
            "title_sq": "5. Operacioni (planifikimi dhe kontrolli RTS)",
            "questions": [
                {"q": "Are trips planned considering time, distance, breaks, weather, alternative routes?", "q_sq": "A planifikohen udhëtimet duke marrë parasysh kohën, distancën, pushimet, motin, rrugët alternative?"},
                {"q": "Are rest and stop times respected to avoid fatigue?", "q_sq": "A respektohen kohët e pushimit dhe ndalimit për të shmangur lodhjen (p.sh. drejtim i zgjatur pa pushim)?"},
                {"q": "Are high-risk schedules avoided when possible?", "q_sq": "A evitohen oraret me risk të lartë kur është e mundur (natë vonë, kushte ekstreme atmosferike)?"},
                {"q": "Do clear procedures for preventive vehicle maintenance exist?", "q_sq": "A ka procedura të qarta për mirëmbajtjen preventive të automjeteve (servis, goma, frenat, dritat, sistemet e sigurisë)?"},
                {"q": "Are daily/pre-departure inspections conducted by drivers?", "q_sq": "A kryhen inspektime të përditshme / para nisjes nga shoferët (kontroll vizual, goma, drita, dokumentacion)?"},
                {"q": "Are vehicles equipped with appropriate safety systems?", "q_sq": "A janë automjetet të pajisura me sisteme sigurie të përshtatshme (rripa, airbag, frenim ABS/ESP, kufizues shpejtësie, tachograf, etj. sipas rastit)?"},
                {"q": "Do mandatory internal rules exist for seat belt use, phone use, alcohol/drugs, speed limits?", "q_sq": "A ka rregulla të brendshme të detyrueshme për: përdorimin e rripit, ndalimin e përdorimit të celularit gjatë drejtimit, ndalimin e alkoolit/drogës, respektimin e kufijve të shpejtësisë?"},
                {"q": "Is driving behavior monitored?", "q_sq": "A monitorohet sjellja në drejtim (p.sh. me telematikë, tachograf, raporte aksidentesh/shkeljesh)?"},
                {"q": "Are corrective measures taken when dangerous driving behavior is found?", "q_sq": "A ndërmerren masa korrigjuese (trajnim, paralajmërim, masa disiplinore) kur konstatohet sjellje e rrezikshme rrugore?"},
                {"q": "Does a procedure for immediate accident and incident reporting exist?", "q_sq": "A ekziston procedurë për raportimin e menjëhershëm të aksidenteve dhe incidenteve (edhe atyre pa dëme të mëdha)?"},
                {"q": "Are all accidents documented along with possible causes and measures taken?", "q_sq": "A dokumentohen të gjitha aksidentet, shkaqet e mundshme dhe masat e marra?"},
            ]
        },
        {
            "title": "Performance Evaluation",
            "title_sq": "6. Vlerësimi i performancës",
            "questions": [
                {"q": "Are RTS indicators monitored?", "q_sq": "A monitorohen indikatorët RTS (p.sh. nr. aksidenteve, nr. plagosjeve, nr. shkeljeve, km të përshkuar, mjete të dëmtuara)?"},
                {"q": "Are results reported regularly to management?", "q_sq": "A raportohen rregullisht rezultatet te manaxhimi (p.sh. raporte mujore/trimestriale)?"},
                {"q": "Are results compared with established objectives and previous periods?", "q_sq": "A krahasohen rezultatet me objektivat e vendosura dhe me periudhat e mëparshme?"},
                {"q": "Are internal RTS system audits conducted?", "q_sq": "A kryhen auditime të brendshme për sistemin RTS (procedura, dokumente, sjellje në praktikë)?"},
                {"q": "Are findings documented and corrective actions taken?", "q_sq": "A dokumentohen gjetjet dhe merren veprime korrigjuese për mospërputhjet?"},
            ]
        },
        {
            "title": "Improvement",
            "title_sq": "7. Përmirësimi",
            "questions": [
                {"q": "Does a process for managing non-conformities and accidents from RTS perspective exist?", "q_sq": "A ekziston një proces për menaxhimin e mospërputhjeve dhe aksidenteve nga ana e sistemit RTS?"},
                {"q": "Are root causes of accidents and serious violations analyzed?", "q_sq": "A analizohen shkaqet rrënjësore të aksidenteve dhe shkeljeve të rënda?"},
                {"q": "Are corrective and preventive actions determined and implemented?", "q_sq": "A përcaktohen dhe zbatohen veprime korrigjuese dhe parandaluese (ndryshime në procedura, trajnime shtesë, ndryshime në flotë, ndryshime në planifikim)?"},
                {"q": "Is a culture of continual road safety improvement promoted?", "q_sq": "A promovohet një kulturë e përmirësimit të vazhdueshëm të sigurisë rrugore në organizatë?"},
            ]
        },
    ]
}

HACCP_DATA = {
    "name": "HACCP Self-Assessment Checklist",
    "name_sq": "LISTA E VETËVLERËSIMIT HACCP",
    "description": "Hazard Analysis and Critical Control Points - Food Safety",
    "description_sq": "SIGURIA USHQIMORE",
    "sections": [
        {
            "title": "Organization and HACCP Team",
            "title_sq": "1. Organizimi dhe Ekipi HACCP",
            "questions": [
                {"q": "Has a HACCP Team been established with members from different functions?", "q_sq": "A është ngritur një Ekip HACCP me anëtarë nga funksione të ndryshme (prodhim, cilësi, mirëmbajtje, magazinë, etj.)?"},
                {"q": "Does the HACCP team have sufficient knowledge in food technology, microbiology, hygiene and food legislation?", "q_sq": "A ka ekipi HACCP njohuri të mjaftueshme në teknologji ushqimore, mikrobiologji, higjienë dhe legjislacion ushqimor?"},
                {"q": "Are names, roles and responsibilities of HACCP team members documented?", "q_sq": "A janë të dokumentuara emrat, rolet dhe përgjegjësitë e anëtarëve të ekipit HACCP?"},
                {"q": "Has a HACCP coordinator/manager been appointed?", "q_sq": "A është caktuar një koordinator/ përgjegjës HACCP?"},
                {"q": "Does the HACCP team meet periodically?", "q_sq": "A mblidhet ekipi HACCP periodikisht (p.sh. kur ka ndryshime, incidente, produkte të reja)?"},
            ]
        },
        {
            "title": "Product Description and Intended Use",
            "title_sq": "2. Përshkrimi i produktit dhe përdorimi i synuar",
            "questions": [
                {"q": "Is the product/products clearly described?", "q_sq": "A është përshkruar qartë produkti/produktet (përbërja, trajtimi termik, ambalazhimi, mënyra e ruajtjes)?"},
                {"q": "Are relevant safety characteristics determined?", "q_sq": "A janë përcaktuar karakteristikat relevante të sigurisë (pH, aktiviteti i ujit, prania e alergjenëve, lëndët e para kritike, etj.)?"},
                {"q": "Is the intended use of the product determined?", "q_sq": "A është përcaktuar përdorimi i synuar i produktit (gati për konsum, duhet gatim, grupi i konsumatorëve)?"},
                {"q": "Have possible misuses in use been taken into account?", "q_sq": "A janë marrë parasysh abuzimet e mundshme në përdorim (përdorim i gabuar nga konsumatori, ruajtje në temperatura jo të sakta)?"},
            ]
        },
        {
            "title": "Process Flow Diagram",
            "title_sq": "3. Diagrami i rrjedhës së procesit",
            "questions": [
                {"q": "Has a flow chart been drawn for each product/product family?", "q_sq": "A është hartuar një diagram rrjedhë (flow-chart) për secilin produkt / familje produktesh?"},
                {"q": "Does the diagram reflect all stages: receiving, storage, processing, packaging, storage, distribution?", "q_sq": "A pasqyron diagrami të gjitha fazat si: pranimi i lëndëve të para, magazinimi, përpunimi, ambalazhimi, ruajtja, shpërndarja?"},
                {"q": "Has the flow diagram been verified on-site?", "q_sq": "A është verifikuar diagrami i rrjedhës në terren për të siguruar që përputhet me realitetin?"},
            ]
        },
        {
            "title": "Hazard Analysis (HACCP Principle 1)",
            "title_sq": "4. Analiza e rrezikut (HACCP – parimi 1)",
            "questions": [
                {"q": "Have possible biological, chemical and physical hazards been identified for each process stage?", "q_sq": "A janë identifikuar për çdo fazë e procesit rreziqet e mundshme biologjike, kimike dhe fizike?"},
                {"q": "Have hazards been assessed according to probability and severity?", "q_sq": "A janë vlerësuar rreziqet sipas probabilitetit dhe ashpërsisë (p.sh. matrica rreziku)?"},
                {"q": "Have possible control measures been determined for each hazard?", "q_sq": "A janë përcaktuar për çdo rrezik masat e mundshme të kontrollit (PRP, OPRP, CCP)?"},
                {"q": "Has the methodology used for hazard analysis been documented?", "q_sq": "A është dokumentuar metodologjia e përdorur për analizën e rrezikut (p.sh. sipas Codex Alimentarius)?"},
            ]
        },
        {
            "title": "Prerequisite Programs (PRP)",
            "title_sq": "5. Programet Paraprake (PRP)",
            "questions": [
                {"q": "Do documented PRPs exist for personal hygiene, cleaning and disinfection, pest control, maintenance, water control, temperature control, storage, transport?", "q_sq": "A ekzistojnë PRP të dokumentuara për: higjienën personale, pastrimin dhe dezinfektimin, kontrollin e dëmtuesve, mirëmbajtjen e pajisjeve, kontrollin e ujit, magazinimin dhe transportin, menaxhimin e mbetjeve, lëndët e para dhe materialet në kontakt me ushqimin?"},
                {"q": "Are PRPs applied in practice and regularly monitored?", "q_sq": "A zbatohen PRP-të në praktikë dhe monitorohen rregullisht?"},
                {"q": "Are there records for cleaning, pest control, temperatures, etc.?", "q_sq": "A ka regjistra për pastrimin, kontrollin e dëmtuesve, temperaturat, etj.?"},
            ]
        },
        {
            "title": "CCP Identification (HACCP Principle 2)",
            "title_sq": "6. Identifikimi i CCP-ve (HACCP – parimi 2)",
            "questions": [
                {"q": "Has a decision tree or other clear methodology been used to distinguish CCPs?", "q_sq": "A është përdorur një diagrama vendimmarrjeje (decision tree) ose metodologji tjetër e qartë për të dalluar CCP-të nga pikat jo-kritike?"},
                {"q": "Have CCPs been identified in the process?", "q_sq": "A janë identifikuar CCP-të në proces (p.sh. trajtim termik, ftohje kritike, metal-detektor, filtrimi, etj.)?"},
                {"q": "Has it been justified why a point is classified as CCP?", "q_sq": "A është justifikuar përse një pikë është klasifikuar si CCP?"},
            ]
        },
        {
            "title": "Critical Limits (HACCP Principle 3)",
            "title_sq": "7. Kufijtë kritikë (HACCP – parimi 3)",
            "questions": [
                {"q": "Have critical limits been determined for each CCP?", "q_sq": "A janë përcaktuar kufijtë kritikë për çdo CCP (p.sh. temperatura minimale, koha minimale, vlera maksimale e pH, integriteti i sitës, funksionimi i detektorit të metaleve)?"},
                {"q": "Are critical limits based on scientific sources, legislation, standards or reliable guidelines?", "q_sq": "A bazohen kufijtë kritikë në burime shkencore, legjislacion, standarde apo udhëzime të besueshme?"},
                {"q": "Are critical limits clearly documented in the HACCP plan?", "q_sq": "A janë kufijtë kritikë të dokumentuar qartë në planin HACCP?"},
            ]
        },
        {
            "title": "CCP Monitoring (HACCP Principle 4)",
            "title_sq": "8. Monitorimi i CCP-ve (HACCP – parimi 4)",
            "questions": [
                {"q": "Does a monitoring plan exist for each CCP?", "q_sq": "A ekziston një plan monitorimi për secilin CCP (çfarë matet, si, kur, nga kush)?"},
                {"q": "Are monitoring results documented in preserved records?", "q_sq": "A dokumentohen rezultatet e monitorimit në regjistra të ruajtur?"},
                {"q": "Is monitoring frequency appropriate to ensure CCP is under control?", "q_sq": "A është frekuenca e monitorimit e përshtatshme për të siguruar që CCP është nën kontroll?"},
                {"q": "Are persons conducting monitoring trained?", "q_sq": "A janë të trajnuar personat që kryejnë monitorimin?"},
            ]
        },
        {
            "title": "Corrective Actions (HACCP Principle 5)",
            "title_sq": "9. Veprimet korrigjuese (HACCP – parimi 5)",
            "questions": [
                {"q": "Does a documented procedure exist for corrective actions when a CCP exceeds critical limits?", "q_sq": "A ekziston një procedurë e dokumentuar për veprimet korrigjuese kur një CCP del jashtë kufijve kritikë?"},
                {"q": "Is it clearly determined what happens with affected product and how to return process within critical limits?", "q_sq": "A përcaktohet qartë: çfarë bëhet me produktin e prekur (bllokim, analizë, asgjësim, ricertifikim), si kthehet procesi brenda kufijve kritikë?"},
                {"q": "Are corrective actions documented?", "q_sq": "A dokumentohen veprimet korrigjuese (shkaku, masa, personi përgjegjës, vendimi për produktin)?"},
            ]
        },
        {
            "title": "Verification and Validation (HACCP Principle 6)",
            "title_sq": "10. Verifikimi dhe validimi (HACCP – parimi 6)",
            "questions": [
                {"q": "Are periodic verifications of HACCP plan implementation conducted?", "q_sq": "A kryhen verifikime periodike të zbatimit të planit HACCP (audit të brendshëm, inspektime, analiza laboratorike, rishikim regjistrash)?"},
                {"q": "Has initial validation been done that control measures are effective?", "q_sq": "A është bërë validimi fillestar që masat e kontrollit (CCP, PRP kritike) janë efektive për uljen/ eliminin e rreziqeve?"},
                {"q": "Is the HACCP plan reviewed when product, process changes or serious incidents occur?", "q_sq": "A rishikohet plani HACCP kur: ndryshon produkti, ndryshon procesi, ndodhin incidente ose ankesa serioze, dalin kërkesa të reja ligjore?"},
            ]
        },
        {
            "title": "Documentation and Records (HACCP Principle 7)",
            "title_sq": "11. Dokumentimi dhe regjistrat (HACCP – parimi 7)",
            "questions": [
                {"q": "Does a documented HACCP plan exist that includes all 7 principles?", "q_sq": "A ekziston një plan HACCP i dokumentuar që përfshin të 7 parimet?"},
                {"q": "Are records kept for CCP monitoring, corrective actions, verifications, personnel training, raw material and supplier control?", "q_sq": "A ruhen regjistrat për: monitorimin e CCP-ve, veprimet korrigjuese, verifikimet, trajnimin e personelit, kontrollin e lëndëve të para dhe furnitorëve?"},
                {"q": "Are HACCP documents and records controlled?", "q_sq": "A janë dokumentet dhe regjistrat e HACCP të kontrolluar (versionim, miratim, ruajtje për një periudhë të përcaktuar)?"},
            ]
        },
        {
            "title": "Training and Awareness",
            "title_sq": "12. Trajnimi dhe ndërgjegjësimi",
            "questions": [
                {"q": "Are employees trained on basic food hygiene principles and their role in the HACCP plan?", "q_sq": "A janë trajnuar punonjësit për parimet bazë të higjienës ushqimore dhe rolin e tyre në planin HACCP?"},
                {"q": "Does personnel in practice understand what CCP is and what to do in case of deviation?", "q_sq": "A e kupton personeli në praktikë se çfarë është CCP dhe çfarë duhet të bëjë në rast devijimi?"},
                {"q": "Is there evidence of periodic training?", "q_sq": "A ka evidencë për trajnime periodike (lista pjesëmarrësish, temat, datat)?"},
            ]
        },
    ]
}

CE_MARKING_DATA = {
    "name": "CE Marking Self-Assessment Checklist",
    "name_sq": "Lista e Vetëvlerësimit Markimi CE",
    "description": "CE Marking Product Compliance Assessment",
    "description_sq": "Vlerësimi i Përputhshmërisë së Produktit me Markimin CE",
    "sections": [
        {
            "title": "Identification of Applicable Legal Requirements",
            "title_sq": "1. Identifikimi i kërkesave të zbatueshme ligjore",
            "questions": [
                {"q": "Is the product type and its intended use clearly identified?", "q_sq": "A është identifikuar qartë lloji i produktit dhe përdorimi i tij i synuar (qëllimi i përdorimit)?"},
                {"q": "Have all applicable EU Directives/Regulations been identified?", "q_sq": "A janë identifikuar të gjitha Direktivët / Rregulloret e BE-së që zbatohen për produktin (p.sh. makineri, pajisje të tensionit të ulët, EMC, lodra, pajisje mjekësore, etj.)?"},
                {"q": "Have applicable harmonized EN standards been identified?", "q_sq": "A janë identifikuar standardet e harmonizuara EN të zbatueshme për produktin?"},
                {"q": "Has it been verified whether a Notified Body is required?", "q_sq": "A është verifikuar nëse për produktin kërkohet organ i njoftuar (Notified Body) apo lejohet vetë-deklarimi i përputhshmërisë nga prodhuesi?"},
            ]
        },
        {
            "title": "Product Description and Categorization",
            "title_sq": "2. Përshkrimi i produktit dhe kategorizimi",
            "questions": [
                {"q": "Does a technical product description exist?", "q_sq": "A ekziston përshkrim teknik i produktit (funksionet kryesore, komponentët kryesorë, skema funksionale)?"},
                {"q": "Has the risk category been determined according to the relevant directive?", "q_sq": "A është përcaktuar kategoria e rrezikut (p.sh. makineri e rrezikshme, pajisje nën presion, lodra për fëmijë, pajisje zjarri, etj.) sipas direktivës përkatëse?"},
                {"q": "Has the variant/product range covered by the same technical documentation been determined?", "q_sq": "A është përcaktuar varianti/gama e produkteve që mbulon e njëjta dokumentacion teknik (modele, tipe, seri)?"},
            ]
        },
        {
            "title": "Risk Analysis and Essential Safety Requirements",
            "title_sq": "3. Analiza e rrezikut dhe kërkesat thelbësore të sigurisë",
            "questions": [
                {"q": "Have main risks related to the product been analyzed and documented?", "q_sq": "A janë analizuar dhe dokumentuar rreziqet kryesore që lidhen me produktin (mekanike, elektrike, termike, kimike, biologjike, ergonomike, etj.)?"},
                {"q": "Has a risk analysis/assessment been conducted according to directive or applicable standard requirements?", "q_sq": "A është kryer analiza/risk assessment sipas kërkesave të direktivës apo standardit të zbatueshëm?"},
                {"q": "Have Essential Health and Safety Requirements (EHSR) applicable to the product been identified?", "q_sq": "A janë identifikuar kërkesat thelbësore të shëndetit dhe sigurisë (EHSR) që aplikohen për produktin sipas direktivës?"},
                {"q": "Has it been documented how product design and construction meets these essential requirements?", "q_sq": "A është dokumentuar se si projektimi dhe ndërtimi i produktit i plotëson këto kërkesa thelbësore (p.sh. zgjidhjet konstruktive, mbrojtëset, izolimet, materialet, sistemet e kontrollit)?"},
            ]
        },
        {
            "title": "Harmonized Standards and Testing",
            "title_sq": "4. Standardet e harmonizuara dhe testimet",
            "questions": [
                {"q": "Have applicable harmonized EN standards been selected and listed?", "q_sq": "A janë zgjedhur dhe listuar standardet EN të harmonizuara që zbatohen për produktin?"},
                {"q": "Has product conformity with these standards been verified?", "q_sq": "A është verifikuar përputhshmëria e produktit me këto standarde (projektim, llogaritje, verifikime)?"},
                {"q": "Have required laboratory tests been conducted?", "q_sq": "A janë kryer testet laboratorike të kërkuara (p.sh. teste elektrike, EMC, mekanike, të qëndrueshmërisë, ndezshmërisë, sterilitetit, etj.)?"},
                {"q": "Are there complete and signed test reports?", "q_sq": "A ka raporte provash (test reports) të plota dhe të nënshkruara nga laboratorë të brendshëm ose të jashtëm?"},
                {"q": "If a Notified Body was used, does the type examination certificate exist?", "q_sq": "Nëse është përdorur organ i njoftuar (Notified Body): A ekziston certifikata e ekzaminimit të tipit ose dokumenti i vlerësimit të përputhshmërisë?"},
            ]
        },
        {
            "title": "Technical Documentation",
            "title_sq": "5. Dokumentacioni teknik",
            "questions": [
                {"q": "Does a complete Technical File exist?", "q_sq": "A ekziston një Dosje Teknike e plotë e produktit?"},
                {"q": "Does the Technical File include: general description, design drawings and schematics, calculations and analyses, component lists, test reports, risk analysis results, Declaration of Conformity copy, user instructions and labeling?", "q_sq": "A përfshin Dosja Teknike: përshkrimin e përgjithshëm të produktit, vizatime dhe skema të projektimit, llogaritje dhe analiza, lista e komponenteve/kabllove/pajisjeve kryesore, raportet e testimit, rezultatin e analizës së rrezikut, kopjen e Deklaratës së Përputhshmërisë, udhëzimet e përdorimit dhe etiketimet?"},
                {"q": "Are documents stored in an organized and traceable manner?", "q_sq": "A ruhen dokumentet në një mënyrë të organizuar dhe të gjurmueshme (versione, data, përgjegjës)?"},
                {"q": "Is the legal requirement for Technical File retention (usually 10 years) respected?", "q_sq": "A respektohet kërkesa ligjore për ruajtjen e Dosjes Teknike për një periudhë të caktuar (zakonisht 10 vjet) pas hedhjes në treg të produktit?"},
            ]
        },
        {
            "title": "User Instructions and Labeling",
            "title_sq": "6. Udhëzimet e përdorimit dhe etiketimi",
            "questions": [
                {"q": "Have User Instructions been prepared in the intended user's language?", "q_sq": "A janë hartuar Udhëzimet e përdorimit (manuali) në gjuhën e përdoruesit të synuar (p.sh. gjuhët zyrtare të vendeve ku tregtohet produkti)?"},
                {"q": "Do instructions include: product description, installation/use/maintenance/cleaning instructions, safety warnings, use limitations?", "q_sq": "A përmbajnë udhëzimet: përshkrimin e produktit dhe funksionimin, udhëzime instalimi, përdorimi, mirëmbajtje, pastrim, paralajmërime sigurie dhe masa paraprake, kufizimet e përdorimit?"},
                {"q": "Is product labeling correct and complete?", "q_sq": "A është e saktë dhe e plotë etiketimi i produktit (emri i prodhuesit, adresa, tipi/modeli, numri serial, tensioni, fuqia, klasat, simbolika e nevojshme)?"},
                {"q": "Are instructions and warnings clear, readable and understandable for the typical user?", "q_sq": "A është respektuar kërkesa që udhëzimet dhe paralajmërimet të jenë të qarta, të lexueshme dhe të kuptueshmepër përdoruesin tipik?"},
            ]
        },
        {
            "title": "EU Declaration of Conformity (DoC)",
            "title_sq": "7. Deklarata e Përputhshmërisë (EU Declaration of Conformity – DoC)",
            "questions": [
                {"q": "Has the EU Declaration of Conformity been prepared?", "q_sq": "A është përgatitur Deklarata e Përputhshmërisë së BE-së për produktin?"},
                {"q": "Does the Declaration contain at least: manufacturer identification, product identification, list of applicable EU Directives/Regulations, list of used harmonized standards, references to test documents/Notified Body certificates, declaration of conformity with applicable legislation, name/function/signature of authorized person, date and place of issue?", "q_sq": "A përmban Deklarata të paktën: identifikimin e prodhuesit (emër, adresë), identifikimin e produktit (emërtimi, tipi, modeli, nr. serie/lot), listën e Direktivave/Rregulloreve të BE-së të zbatueshme, listën e standardeve të harmonizuara të përdorura, referencat e dokumenteve të testimit / certifikatave të organit të njoftuar (kur aplikohet), deklarimin se produkti është në përputhje me legjislacionin e zbatueshëm, emrin, funksionin dhe nënshkrimin e personit të autorizuar, datën dhe vendin e lëshimit?"},
                {"q": "Has the Declaration of Conformity been translated when required?", "q_sq": "A është Deklarata e Përputhshmërisë e përkthyer, kur kërkohet, në gjuhët përkatëse?"},
            ]
        },
        {
            "title": "CE Marking Placement",
            "title_sq": "8. Vendosja e shenjës CE",
            "questions": [
                {"q": "Has it been verified that the product is fully compliant before CE marking placement?", "q_sq": "A është kontrolluar që produkti të jetë plotësisht në përputhje para vendosjes së shenjës CE?"},
                {"q": "Is the CE marking placed properly: visible, readable, indelible, with minimum dimensions?", "q_sq": "A është shenja CE e vendosur në mënyrën e duhur: e dukshme, e lexueshme, e pashlyeshme, me dimensionet minimale sipas kërkesave?"},
                {"q": "If a Notified Body participated, is the CE marking accompanied by its identification number?", "q_sq": "Nëse një organ i njoftuar ka marrë pjesë në vlerësimin e përputhshmërisë, a është shoqëruar shenja CE me numrin identifikues të organit (kur kjo kërkohet)?"},
                {"q": "Are responsible persons instructed that CE marking is not a 'quality mark' but a legal conformity mark?", "q_sq": "A janë instruktuar personat përgjegjës brenda kompanisë që shenja CE nuk është 'shenja cilësisë', por shenjë përputhshmërie ligjore me direktivat e BE-së?"},
            ]
        },
        {
            "title": "Serial Production and Continuous Control",
            "title_sq": "9. Prodhimi serik dhe kontrolli i vazhdueshëm",
            "questions": [
                {"q": "Does an internal procedure exist to ensure serially produced products continue to comply?", "q_sq": "A ekziston një procedurë e brendshme për të siguruar që produktet e prodhuara në seri vazhdojnë të jenë në përputhje me Dosjen Teknike dhe kërkesat ligjore?"},
                {"q": "Are regular quality and safety controls conducted in production?", "q_sq": "A kryhen kontrolle të rregullta të cilësisë dhe sigurisë në prodhim (inspektime, testime rutine, verifikime)?"},
                {"q": "Are changes in design, components or suppliers controlled and managed?", "q_sq": "A kontrollohen dhe menaxhohen ndryshimet në dizajn, komponentë apo furnitorë në mënyrë që të mos cenohet përputhshmëria CE?"},
                {"q": "Does a process exist for managing customer complaints related to product safety and conformity?", "q_sq": "A ekziston një proces për menaxhimin e ankesave nga klientët që lidhen me sigurinë dhe përputhshmërinë e produktit?"},
                {"q": "Does a procedure exist for product withdrawal/recall in case of serious safety issues?", "q_sq": "A ekziston një procedurë për tërheqjen/rikthimin e produktit nga tregu (recall) në rast problemi serioz sigurie?"},
            ]
        },
        {
            "title": "Evidence Retention and Cooperation with Authorities",
            "title_sq": "10. Ruajtja e provave dhe bashkëpunimi me autoritetet",
            "questions": [
                {"q": "Have responsible persons for communication with market surveillance authorities been designated?", "q_sq": "A janë përcaktuar personat përgjegjës për komunikimin me autoritetet mbikëqyrëse të tregut?"},
                {"q": "Are documents that may be requested by authorities retained?", "q_sq": "A ruhen dokumentet që mund të kërkohen nga autoritetet (Dosja Teknike, DoC, raporte provash, regjistrat e prodhimit dhe kontrollit)?"},
                {"q": "Is the address and contacts for official communication with authorities clear?", "q_sq": "A është e qartë adresën dhe kontaktet që autoritetet mund të përdorin për komunikim zyrtar me prodhuesin / përfaqësuesin e autorizuar?"},
            ]
        },
    ]
}

ISO_9001_DATA = {
    "name": "ISO 9001:2015 Self-Assessment Checklist",
    "name_sq": "Lista e Vetëvlerësimit ISO 9001:2015",
    "description": "Quality Management System self-assessment questionnaire",
    "description_sq": "SISTEMI I MANAXHIMIT TË CILËSISË",
    "sections": [
        {
            "title": "Context of the Organization",
            "title_sq": "1. Konteksti i organizatës",
            "questions": [
                {"q": "Have you identified internal issues (e.g., organizational structure, culture, competencies) that may affect your QMS?", "q_sq": "A i keni identifikuar çështjet e brendshme (p.sh., struktura organizative, kultura, kompetencat) që mund të ndikojnë në SMC-në tuaj?"},
                {"q": "Have you identified external issues (e.g., market trends, regulatory requirements, competitive market) related to your activities?", "q_sq": "A i keni identifikuar çështjet e jashtme (p.sh., tendencat e tregut, kërkesat rregullatore, tregu konkurrues) që lidhen me veprimtarinë tuaj?"},
                {"q": "Have you analyzed how these internal and external issues affect the strategic direction and effectiveness of the QMS?", "q_sq": "A keni analizuar se si këto çështje të brendshme dhe të jashtme ndikojnë në drejtimin strategjik dhe efektivitetin e SMC-së?"},
                {"q": "Have you determined the needs, expectations and requirements of interested parties (customers, suppliers, regulators, etc.)?", "q_sq": "A i keni përcaktuar nevojat, pritshmëritë dhe kërkesat e palëve të interesuara (klientë, furnitorë, rregullatorë, etj.)?"},
                {"q": "Is there evidence of regular communication or review of these interested party requirements?", "q_sq": "A ka evidencë të komunikimit ose rishikimit të rregullt të këtyre kërkesave të palëve të interesuara?"},
                {"q": "Has your organization clearly defined the boundaries and applicability of the QMS?", "q_sq": "A e ka përcaktuar organizata juaj qartë kufijtë dhe aplikueshmërinë e SMC-së?"},
                {"q": "Are exclusions (if any) justified and documented, in accordance with standard requirements?", "q_sq": "A janë përjashtimet (nëse ka) të justifikuara dhe të dokumentuara, në përputhje me kërkesat e standardit?"},
                {"q": "Have you mapped the key processes needed for the QMS and identified their interactions?", "q_sq": "A i keni hartuar proceset kyçe të nevojshme për SMC-në dhe a i keni identifikuar ndërveprimet e tyre?"},
                {"q": "Are responsibilities and interrelationships between these processes clearly described?", "q_sq": "A janë përshkruar qartë përgjegjësitë dhe ndërlidhjet ndërmjet këtyre proceseve?"},
            ]
        },
        {
            "title": "Leadership",
            "title_sq": "2. Udhëheqja",
            "questions": [
                {"q": "Does top management demonstrate leadership and commitment to the QMS?", "q_sq": "A demonstron manaxhimi i lartë lidership dhe përkushtim ndaj SMC-së?"},
                {"q": "Are quality objectives and goals aligned with the organization's strategic direction?", "q_sq": "A janë objektivat dhe synimet e cilësisë të harmonizuara me drejtimin strategjik të organizatës?"},
                {"q": "Is there a documented quality policy that reflects the organization's purpose and context?", "q_sq": "A ekziston një politikë cilësie e dokumentuar që pasqyron qëllimin dhe kontekstin e organizatës?"},
                {"q": "Is the quality policy communicated, understood and applied within the organization?", "q_sq": "A komunikohet, kuptohet dhe zbatohet politika e cilësisë brenda organizatës?"},
                {"q": "Are roles, responsibilities and authorities for quality clearly defined and communicated throughout the organization?", "q_sq": "A janë rolet, përgjegjësitë dhe aftësitë për cilësinë të përcaktuara qartë dhe të komunikuara në të gjithë organizatën?"},
                {"q": "Has top management ensured adequate resources and support for the QMS?", "q_sq": "A ka siguruar manaxhimi i lartë burime dhe mbështetje të mjaftueshme për SMC-në?"},
            ]
        },
        {
            "title": "Planning",
            "title_sq": "3. Planifikimi",
            "questions": [
                {"q": "Have you identified risks and opportunities that may affect the QMS?", "q_sq": "A i keni identifikuar rreziqet dhe mundësitë që mund të ndikojnë në SMC?"},
                {"q": "Are there documented processes for risk assessment and planning actions to mitigate them?", "q_sq": "A ka procese të dokumentuara për vlerësimin e risqeve dhe planifikimin e veprimeve për t'i zbutur ato?"},
                {"q": "Are measurable quality objectives set at relevant functions and levels?", "q_sq": "A janë vendosur objektiva të matshme të cilësisë në funksionet dhe nivelet përkatëse?"},
                {"q": "Is there a plan for achieving these objectives, including assignment of responsibilities and deadlines?", "q_sq": "A ekziston një plan për arritjen e këtyre objektivave, duke përfshirë caktimin e përgjegjësive dhe afateve?"},
                {"q": "Do you have a process for managing changes to the QMS, ensuring continuity of effectiveness?", "q_sq": "A keni një proces për menaxhimin e ndryshimeve në SMC, duke siguruar vazhdimësinë e efektivitetit?"},
            ]
        },
        {
            "title": "Support",
            "title_sq": "4. Mbështetja",
            "questions": [
                {"q": "Are necessary resources (human, technological, infrastructure) available and managed effectively for the QMS?", "q_sq": "A janë burimet e nevojshme (njerëzore, teknologjike, infrastrukturore) të disponueshme dhe të menaxhuara në mënyrë efektive për SMC-në?"},
                {"q": "Is the work environment managed to support the intended outcomes of the QMS?", "q_sq": "A manaxhohet mjedisi i punës për të mbështetur rezultatet e synuara të SMC-së?"},
                {"q": "Have you identified competence requirements for personnel involved in the QMS?", "q_sq": "A i keni identifikuar kërkesat e kompetencës për personelin e përfshirë në SMC?"},
                {"q": "Is there a documented process for training and ensuring ongoing competence?", "q_sq": "A ekziston një proces i dokumentuar për trajnimin dhe sigurimin e kompetencës së vazhdueshme?"},
                {"q": "Are employees aware of how their activities contribute to the QMS?", "q_sq": "A janë punonjësit të ndërgjegjshëm se si aktivitetet e tyre kontribuojnë në SMC?"},
                {"q": "Are internal and external communication processes clearly defined and effective?", "q_sq": "A janë proceset e brendshme dhe të jashtme të komunikimit të përcaktuara qartë dhe efektive?"},
                {"q": "Are QMS documents, procedures and records appropriately controlled, maintained and updated?", "q_sq": "A kontrollohen, mirëmbahen dhe përditësohen në mënyrë të përshtatshme dokumentat, procedurat dhe regjistrat e SMC-së?"},
            ]
        },
        {
            "title": "Operation",
            "title_sq": "5. Operacioni",
            "questions": [
                {"q": "Are processes for planning, implementing and controlling operations defined, documented and followed?", "q_sq": "A janë proceset për planifikimin, zbatimin dhe kontrollin e operacioneve të përcaktuara, të dokumentuara dhe të ndjekura?"},
                {"q": "Is there evidence of process monitoring and regular review to ensure effectiveness?", "q_sq": "A ka evidencë të monitorimit të proceseve dhe rishikimit të rregullt për të siguruar efektivitetin?"},
                {"q": "Is there a systematic method for determining customer requirements and ensuring their fulfillment?", "q_sq": "A ekziston një metodë sistematike për përcaktimin e kërkesave të klientit dhe sigurimin e përmbushjes së tyre?"},
                {"q": "Are there procedures for handling customer feedback and complaints?", "q_sq": "A ka procedura për trajtimin e reagimeve dhe ankesave të klientëve?"},
                {"q": "Have you established criteria for selection and evaluation of external suppliers?", "q_sq": "A keni vendosur kritere për përzgjedhjen dhe vlerësimin e furnitorëve të jashtëm?"},
                {"q": "Is there a defined process for identifying, controlling and correcting non-conforming products or services?", "q_sq": "A ka një proces të përcaktuar për identifikimin, kontrollin dhe korrigjimin e produkteve ose shërbimeve jo‑konform?"},
            ]
        },
        {
            "title": "Performance Evaluation",
            "title_sq": "6. Vlerësimi I Performancës",
            "questions": [
                {"q": "Have you defined appropriate key performance indicators (KPIs) for the QMS?", "q_sq": "A keni përcaktuar tregues kyç të performancës (KPI) të përshtatshëm për SMC-në?"},
                {"q": "Are measurement and monitoring processes in place to track QMS performance?", "q_sq": "A janë proceset e matjes dhe monitorimit në vend për të ndjekur performancën e SMC-së?"},
                {"q": "Is there an internal audit program with planned audits covering all areas of the QMS?", "q_sq": "A ekziston një program i auditimit të brendshëm me auditime të planifikuara që mbulojnë të gjitha fushat e SMC-së?"},
                {"q": "Are audit results recorded and corrective actions taken when non-conformities are identified?", "q_sq": "A regjistrohen rezultatet e auditimit dhe merren veprime korrigjuese kur identifikohen mospërputhje?"},
                {"q": "Are regular management reviews held to assess the effectiveness of the QMS?", "q_sq": "A mbahen rishikime të rregullta të manaxhimit për të vlerësuar efektivitetin e SMC-së?"},
                {"q": "Is customer satisfaction regularly monitored and results used to drive improvements?", "q_sq": "A monitorohet rregullisht kënaqësia e klientit dhe përdoren rezultatet për të nxitur përmirësime në SMC?"},
            ]
        },
        {
            "title": "Improvement",
            "title_sq": "7. Përmirësimi",
            "questions": [
                {"q": "Do you have procedures to identify, document and address non-conformities?", "q_sq": "A keni procedura për të identifikuar, dokumentuar dhe trajtuar mospërputhjet?"},
                {"q": "Are corrective actions implemented in a timely manner and is their effectiveness verified?", "q_sq": "A zbatohen veprimet korrigjuese në kohë dhe a verifikohet efektiviteti i tyre?"},
                {"q": "Is there a culture of continual improvement, with regular reviews of processes and performance?", "q_sq": "A ekziston një kulturë e përmirësimit të vazhdueshëm, me rishikime të rregullta të proceseve dhe performancës?"},
                {"q": "Are improvements driven by data analysis, customer feedback and internal audits?", "q_sq": "A nxiten përmirësimet nga analiza e të dhënave, reagimet e klientëve dhe auditimet e brendshme?"},
                {"q": "Do you proactively identify potential non-conformities and take steps to prevent them?", "q_sq": "A identifikoni në mënyrë proaktive mospërputhjet potenciale dhe ndërmerrni hapa për t'i parandaluar ato?"},
            ]
        },
    ]
}

ISO_14001_DATA = {
    "name": "ISO 14001:2015 Self-Assessment Checklist",
    "name_sq": "Lista e Vetëvlerësimit ISO 14001:2015",
    "description": "Environmental Management System self-assessment questionnaire",
    "description_sq": "SISTEMI I MANAXHIMIT TË MJEDISIT",
    "sections": [
        {
            "title": "Context of the Organization",
            "title_sq": "1. Konteksti i Organizatës",
            "questions": [
                {"q": "Have you identified external and internal issues related to your environmental management system (EMS)?", "q_sq": "A i keni identifikuar çështjet e jashtme dhe të brendshme që lidhen me sistemin tuaj të manaxhimit mjedisor (SMM)?"},
                {"q": "Have you determined factors that affect the organization's ability to achieve intended outcomes?", "q_sq": "A i keni përcaktuar faktorët që ndikojnë në aftësinë e organizatës për të arritur rezultatet e synuara?"},
                {"q": "Have you identified relevant interested parties (e.g., regulatory bodies, customers, community, etc.)?", "q_sq": "A i keni identifikuar palët e interesuara përkatëse (p.sh., organet rregullatore, klientët, komuniteti, etj.)?"},
                {"q": "Have you assessed the needs and expectations of these parties in relation to environmental management?", "q_sq": "A i keni vlerësuar nevojat dhe pritshmëritë e këtyre palëve në lidhje me manaxhimin mjedisor?"},
                {"q": "Is the scope of the EMS clearly defined and documented?", "q_sq": "A është përcaktuar dhe dokumentuar qartë fusha e SMM-së?"},
                {"q": "Does this scope take into account internal and external factors and the needs of interested parties?", "q_sq": "A e merr parasysh kjo fushë faktorët e brendshëm dhe të jashtëm si dhe nevojat e palëve të interesuara?"},
                {"q": "Have you established, implemented, maintained and continually improved an EMS in accordance with ISO 14001:2015?", "q_sq": "A e keni ngritur, zbatuar, mirëmbajtur dhe përmirësuar vazhdimisht një SMM në përputhje me kërkesat e ISO 14001:2015?"},
            ]
        },
        {
            "title": "Leadership",
            "title_sq": "2. Udhëheqja",
            "questions": [
                {"q": "Does top management demonstrate leadership and commitment to the EMS?", "q_sq": "A demonstron manaxhimi i lartë udhëheqje dhe angazhim ndaj SMM-së?"},
                {"q": "Is there evidence that environmental responsibilities are integrated into the organization's business processes?", "q_sq": "A ka evidencë që përgjegjësitë mjedisore janë integruar në proceset e biznesit të organizatës?"},
                {"q": "Has top management established an environmental policy appropriate to the nature and scale of the organization's environmental impacts?", "q_sq": "A ka vendosur manaxhimi i lartë një politikë mjedisore që i përshtatet natyrës dhe shkallës së ndikimeve mjedisore të organizatës?"},
                {"q": "Is this policy available, communicated and understood within the organization?", "q_sq": "A është kjo politikë e disponueshme, e komunikuar dhe e kuptuar brenda organizatës?"},
                {"q": "Are the commitments contained in this policy being implemented and maintained?", "q_sq": "A po zbatohen dhe mirëmbahen angazhimet e përfshira në këtë politikë?"},
                {"q": "Are roles, responsibilities and authorities for environmental management defined, documented and communicated?", "q_sq": "A janë përcaktuar, dokumentuar dhe komunikuar rolet, përgjegjësitë dhe të drejtat për manaxhimin mjedisor?"},
            ]
        },
        {
            "title": "Planning",
            "title_sq": "3. Planifikimi",
            "questions": [
                {"q": "Have you identified risks and opportunities related to environmental aspects and impacts?", "q_sq": "A i keni identifikuar risqet dhe mundësitë në lidhje me aspektet dhe ndikimet mjedisore?"},
                {"q": "Have you planned actions to address these risks and take advantage of opportunities?", "q_sq": "A keni planifikuar veprime për t'i adresuar këto risqe dhe për të përfituar nga mundësitë?"},
                {"q": "Are these actions integrated into your EMS and business planning process?", "q_sq": "A janë këto veprime të integruara në SMM-në tuaj dhe procesin e planifikimit të biznesit?"},
                {"q": "Are environmental objectives set, measurable (where possible), and consistent with the environmental policy?", "q_sq": "A janë vendosur objektiva mjedisore, të matshme (kur është e mundur), dhe të përputhshme me politikën mjedisore?"},
                {"q": "Are there action plans to achieve these objectives, including responsibilities, deadlines and performance indicators?", "q_sq": "A ekzistojnë plane veprimi për të arritur këto objektiva, duke përfshirë përgjegjësitë, afatet dhe treguesit e performancës?"},
            ]
        },
        {
            "title": "Support",
            "title_sq": "4. Mbështetja",
            "questions": [
                {"q": "Are necessary resources (financial, human, technological) available to implement and maintain the EMS?", "q_sq": "A janë vendosur burimet e nevojshme (financiare, njerëzore, teknologjike) për të zbatuar dhe mirëmbajtur SMM-në?"},
                {"q": "Have you identified competence requirements for employees and contractors related to the EMS?", "q_sq": "A i keni identifikuar kërkesat për të drejta për punonjësit dhe kontraktorët lidhur me SMM-në?"},
                {"q": "Do you have training, qualification and awareness programs to ensure full capabilities?", "q_sq": "A keni programe për trajnim, kualifikim dhe ndërgjegjësim për të siguruar aftësi të plota?"},
                {"q": "Are employees aware of the environmental policy, significant environmental aspects and their roles in the EMS?", "q_sq": "A janë punonjësit të ndërgjegjshëm për politikën mjedisore, aspektet e rëndësishme mjedisore dhe rolet e tyre në SMM?"},
                {"q": "Are procedures for internal and external communication established?", "q_sq": "A janë vendosur procedura për komunikimin e brendshëm dhe të jashtëm?"},
                {"q": "Is there a controlled system for documenting EMS procedures, records and communications?", "q_sq": "A ekziston një sistem i kontrolluar për dokumentimin e procedurave, regjistrave dhe komunikimeve të SMM-së?"},
            ]
        },
        {
            "title": "Operation",
            "title_sq": "5. Operacioni",
            "questions": [
                {"q": "Have you defined the processes necessary to meet EMS requirements?", "q_sq": "A i keni përcaktuar proceset e nevojshme për të përmbushur kërkesat e SMM-së?"},
                {"q": "Do you have operational controls to manage environmental aspects and reduce risks?", "q_sq": "A keni kontrolle operative për të manaxhuar aspektet mjedisore dhe për të zvogëluar risqet?"},
                {"q": "Are procedures documented for operational activities that may have significant environmental impact?", "q_sq": "A janë dokumentuar procedurat për aktivitetet operative që mund të kenë ndikim të rëndësishëm mjedisor?"},
                {"q": "Is there a documented procedure for emergency preparedness and response related to environmental incidents?", "q_sq": "A ekziston një procedurë e dokumentuar për gatishmërinë dhe reagimin ndaj emergjencave lidhur me incidente mjedisore?"},
                {"q": "Have potential emergency scenarios been identified and tested?", "q_sq": "A janë identifikuar dhe testuar skenarët potencialë të emergjencës?"},
            ]
        },
        {
            "title": "Performance Evaluation",
            "title_sq": "6. Vlerësimi i Performancës",
            "questions": [
                {"q": "Are there procedures for monitoring and measuring key characteristics of operations that affect the environment?", "q_sq": "A ka procedura për monitorimin dhe matjen e karakteristikave kyçe të operacioneve që ndikojnë në mjedis?"},
                {"q": "Do you have methods for analyzing and evaluating environmental performance?", "q_sq": "A keni metoda për analizimin dhe vlerësimin e performancës mjedisore?"},
                {"q": "Is there an internal audit program to assess EMS compliance with ISO 14001:2015 requirements?", "q_sq": "A ekziston një program i auditimit të brendshëm për të vlerësuar përputhshmërinë e SMM-së me kërkesat e ISO 14001:2015?"},
                {"q": "Are audit results documented and corrective actions taken for identified non-conformities?", "q_sq": "A dokumentohen rezultatet e auditimit dhe a merren veprime korrigjuese për mospërputhjet e identifikuara?"},
                {"q": "Are regular management reviews conducted to ensure the suitability, adequacy and effectiveness of the EMS?", "q_sq": "A realizohen rishikime të rregullta nga manaxhimi i lartë për të siguruar përshtatshmërinë, mjaftueshmërinë dhe efektivitetin e SMM-së?"},
            ]
        },
        {
            "title": "Improvement",
            "title_sq": "7. Përmirësimi",
            "questions": [
                {"q": "Are there procedures to identify and control non-conformities?", "q_sq": "A ka procedura për të identifikuar dhe kontrolluar mospërputhjet?"},
                {"q": "Is there a process to assess the need to eliminate the causes of non-conformities?", "q_sq": "A ekziston një proces për të vlerësuar nevojën për të eliminuar shkaqet e mospërputhjeve?"},
                {"q": "Are corrective actions documented, implemented and reviewed for their effectiveness?", "q_sq": "A dokumentohen, zbatohen dhe rishikohen veprimet korrigjuese për efektivitetin e tyre?"},
                {"q": "Does the organization actively seek ways to improve EMS performance?", "q_sq": "A kërkon organizata në mënyrë aktive mënyra për të përmirësuar performancën e SMM-së?"},
                {"q": "Are continual improvement objectives documented, communicated and systematically tracked?", "q_sq": "A janë dokumentuar, komunikuar dhe ndjekur sistematikisht objektivat për përmirësim të vazhdueshëm?"},
            ]
        },
    ]
}

# Export all forms data
ALL_FORMS_DATA = {
    "ISO_9001": ISO_9001_DATA,
    "ISO_14001": ISO_14001_DATA,
    "ISO_45001": ISO_45001_DATA,
    "ISO_22000": ISO_22000_DATA,
    "ISO_27001": ISO_27001_DATA,
    "ISO_50001": ISO_50001_DATA,
    "ISO_22301": ISO_22301_DATA,
    "ISO_37001": ISO_37001_DATA,
    "ISO_39001": ISO_39001_DATA,
    "HACCP": HACCP_DATA,
    "GENERAL": CE_MARKING_DATA,  # CE Marking uses GENERAL as ISO standard
}
