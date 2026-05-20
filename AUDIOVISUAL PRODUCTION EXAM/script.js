// ============================================
// STUDY GUIDE — JAVASCRIPT (MULTILINGUAL)
// ============================================

// ============================================
// STATE MANAGEMENT
// ============================================

let appState = {
  currentTab: "lessons",
  currentLanguage: localStorage.getItem("language") || "ca",
  currentLesson: "teams",
  mastered: new Set(),
  quizAnswers: {},
  notes: "",
  darkMode: localStorage.getItem("darkMode") === "true",
  sound: localStorage.getItem("sound") !== "false",
  autoFlip: localStorage.getItem("autoFlip") !== "false",
  sessionStartTime: Date.now(),
  filteredCards: [],
};

// ============================================
// FLASHCARDS DATA (MULTILINGUAL)
// ============================================

const flashcardsDataCA = [
  {
    q: "Qui fa les marques en T al terra?",
    a: "L'ajudant de càmera (2n AC)",
    cat: "rols",
  },
  { q: "Color càsting al desglos", a: "Taronja", cat: "colors" },
  { q: "Color Art al desglos", a: "Verd", cat: "colors" },
  { q: "Color So al desglos", a: "Groc", cat: "colors" },
  { q: "Color Vestuari al desglos", a: "Lila", cat: "colors" },
  { q: "Color Maquillatge/Perruqueria", a: "Rosa", cat: "colors" },
  { q: "Color Producció", a: "Vermell", cat: "colors" },
  { q: "Color Foto/Càmera", a: "Blau", cat: "colors" },
  { q: "Qui pot tallar un pla?", a: "ÚNICAMENT el director", cat: "rols" },
  {
    q: "1 pàgina de guió = ?",
    a: "~1 minut de pantalla. ~2 hores de rodatge",
    cat: "timing",
  },
  { q: "1/8 de pàgina = ?", a: "~15 minuts de rodatge", cat: "timing" },
  { q: "Contingència del pressupost", a: "5-10% del total", cat: "timing" },
  {
    q: "Quan s'envia la callsheet?",
    a: "Màxim 12 hores abans de l'hora de citació",
    cat: "documents",
  },
  {
    q: "Qui assisteix a la loca artística?",
    a: "Director, DOP, Dir. d'Art (3 caps artístics)",
    cat: "rols",
  },
  {
    q: "Qui assisteix a la loca tècnica?",
    a: "DOP, Gaffer, Producció, Dir. Art, Director, AD, So",
    cat: "rols",
  },
  {
    q: "Que és SM al desglos?",
    a: "Sus Medios (vé pels seus propis mitjans). Actors MAI en SM",
    cat: "documents",
  },
  {
    q: "Que és NT al desglos?",
    a: "No Treballa (mai s'esborra el nom)",
    cat: "documents",
  },
  { q: "Format estàndard del guió", a: "Courier 12pt en A4", cat: "documents" },
  {
    q: "Que significa RTS?",
    a: "Ready To Shoot = Motor = Llestos per Rodar",
    cat: "timing",
  },
  {
    q: "Primer criteri del pla de rodatge",
    a: "Disponibilitat dels actors (primer), després les localitzacions",
    cat: "rols",
  },
  {
    q: "Norma dels 180°",
    a: "La primera càmera estableix l'eix. Totes les càmeres han de quedar al mateix costat",
    cat: "documents",
  },
  {
    q: "Jump cuts: mínim angle",
    a: "Mínim 30° de diferència entre plans",
    cat: "documents",
  },
];

const flashcardsDataEN = [
  {
    q: "Who marks the T's on the ground?",
    a: "The camera assistant (2nd AC)",
    cat: "rols",
  },
  { q: "Casting color in breakdown", a: "Orange", cat: "colors" },
  { q: "Art color in breakdown", a: "Green", cat: "colors" },
  { q: "Sound color in breakdown", a: "Yellow", cat: "colors" },
  { q: "Wardrobe color in breakdown", a: "Lilac", cat: "colors" },
  { q: "Makeup color in breakdown", a: "Pink", cat: "colors" },
  { q: "Production color in breakdown", a: "Red", cat: "colors" },
  { q: "Camera/Photo color in breakdown", a: "Blue", cat: "colors" },
  { q: "Who can call 'Cut'?", a: "ONLY the director", cat: "rols" },
  {
    q: "1 page of script = ?",
    a: "~1 minute of screen time. ~2 hours of shooting",
    cat: "timing",
  },
  { q: "1/8 of a page = ?", a: "~15 minutes of shooting", cat: "timing" },
  { q: "Budget contingency", a: "5-10% of total", cat: "timing" },
  {
    q: "When is the callsheet sent?",
    a: "Maximum 12 hours before call time",
    cat: "documents",
  },
  {
    q: "Who attends the artistic location?",
    a: "Director, DOP, Art Director (3 heads)",
    cat: "rols",
  },
  {
    q: "Who attends the technical location?",
    a: "DOP, Gaffer, Production, Art Director, Director, AD, Sound",
    cat: "rols",
  },
  {
    q: "What is SM in breakdown?",
    a: "Sus Medios (uses own means). Actors NEVER in SM",
    cat: "documents",
  },
  {
    q: "What is NT in breakdown?",
    a: "Not Working (name is never erased)",
    cat: "documents",
  },
  { q: "Standard script format", a: "Courier 12pt on A4", cat: "documents" },
  {
    q: "What does RTS mean?",
    a: "Ready To Shoot = Motor = Ready to Roll",
    cat: "timing",
  },
  {
    q: "First criterion for shooting schedule",
    a: "Actor availability (first), then locations",
    cat: "rols",
  },
  {
    q: "180° Rule",
    a: "First camera establishes the axis. All cameras must stay on same side",
    cat: "documents",
  },
  {
    q: "Jump cuts: minimum angle",
    a: "Minimum 30° difference between shots",
    cat: "documents",
  },
];

// ============================================
// EXPANDED FLASHCARDS - SCRIPT READING, BREAKDOWN, BUDGET, PRODUCTION
// ============================================

const flashcardsDataCA_Extended = [
  // SCRIPT READING
  {
    q: "Quin és el format estàndard de guió?",
    a: "Courier 12 punts en A4",
    cat: "scriptreading",
  },
  {
    q: "Slugline = ?",
    a: "Encapçalament d'escena (ubicació/hora)",
    cat: "scriptreading",
  },
  {
    q: "ACTION al guió",
    a: "On dius al lector què passa a l'escena",
    cat: "scriptreading",
  },
  {
    q: "CHARACTER elements",
    a: "En MAJÚSCULES, seguits per Diàleg",
    cat: "scriptreading",
  },
  {
    q: "PARENTHETICAL",
    a: "Elements entre parèntesis dopo Character o Dialogue",
    cat: "scriptreading",
  },
  {
    q: "TRANSITION",
    a: "Informació de com una escena passa a una altra",
    cat: "scriptreading",
  },

  // BREAKDOWN
  {
    q: "Primera regla del desglos",
    a: "Llegir el guió complet primer",
    cat: "breakdown",
  },
  {
    q: "Format estàndard = durada?",
    a: "1 pàgina = ~1 minut pantalla = ~2 hores rodatge",
    cat: "breakdown",
  },
  {
    q: "Escena dramàtica vs escena producció",
    a: "Dramàtica = unitat narrativa. Producció = cada INT/EXT/hora",
    cat: "breakdown",
  },
  {
    q: "Quan NO cal encapçalament d'escena?",
    a: "Nou angle càmera, continuació mateixa acció, beat psicològic",
    cat: "breakdown",
  },
  {
    q: "Si escena < 1 polzada",
    a: "Compta com 1/8 de pàgina",
    cat: "breakdown",
  },
  {
    q: "Norma d'or del desglos",
    a: "Marca elements NOMÉS una vegada per escena",
    cat: "breakdown",
  },
  {
    q: "Breakdown sheet = ?",
    a: "Formulari individual amb info de cada escena",
    cat: "breakdown",
  },
  {
    q: "Info a cada breakdown sheet",
    a: "Durada, scene#, pàgina, dia/nit, INT/EXT, ubicació, descripció",
    cat: "breakdown",
  },

  // BUDGET & PRODUCTION
  {
    q: "Seccions principals pressupost",
    a: "Desenvolupament, Preproducció, Producció, Postproducció, Drets, Promoció, Contingència",
    cat: "budget",
  },
  {
    q: "Contingència típica",
    a: "5-10% del total del pressupost",
    cat: "budget",
  },
  {
    q: "In-kind contributions",
    a: "Contribucions no monetàries (mà d'obra, equip, ubicacions)",
    cat: "budget",
  },
  {
    q: "Primeira pàgina Pressupost",
    a: "Resum de categories principals i subtotals",
    cat: "budget",
  },

  // PRODUCTION FOLDER
  { q: "Logline durada", a: "Màxim 3 línies", cat: "folder" },
  { q: "Synopsis durada", a: "Màxim mitja pàgina A4", cat: "folder" },
  { q: "Treatment durada", a: "Típicament 2-10 pàgines", cat: "folder" },
  {
    q: "Full de Coberta Projecte",
    a: "Carnet d'identitat: títol, tipus, forma, durada, format, idioma, productor",
    cat: "folder",
  },

  // FILM PRODUCTION ON SET
  { q: "Orden entrada al set (1r)", a: "Equip d'Art", cat: "onset" },
  { q: "Orden entrada al set (4t)", a: "Director", cat: "onset" },
  {
    q: "COMBO seients",
    a: "Director, Script Supervisor, DP (DP assegut per accés ràpid)",
    cat: "onset",
  },
  {
    q: "Magliner",
    a: "Carret d'equip, col·locat prop càmera sense entrar en frame",
    cat: "onset",
  },
  {
    q: "Camera tape colors",
    a: "Negre i blanc estàndard. Cada actor té un color",
    cat: "onset",
  },
  { q: "2n AC marca", a: "Posicions en forma de T al terra", cat: "onset" },

  // CLAPPER STRUCTURE
  {
    q: "CLAPPER: ROLL",
    a: "Memòria card (ex: A001, lletra = càmera)",
    cat: "onset",
  },
  { q: "CLAPPER: SCENE/SHOT", a: "Ex: 3/1 (Escena 3, Pla 1)", cat: "onset" },
  { q: "CLAPPER: SYNC/MOS", a: "Amb so o silenciós", cat: "onset" },
  {
    q: "PU (Pick-Up)",
    a: "Presa addicional d'un punt específic dins el mateix pla",
    cat: "onset",
  },

  // CINEMATOGRAPHIC AXIS
  {
    q: "180° Rule",
    a: "Primera càmera estableix eix. Totes han de romandre mateix costat",
    cat: "cinematography",
  },
  {
    q: "Jump cut mínrim",
    a: "Almenys 30° canvi angle entre plànols",
    cat: "cinematography",
  },

  // PRE-PRODUCTION PHASES
  {
    q: "Setmana -5 dilluns",
    a: "Guió literari final (ex: VER.7)",
    cat: "preproduction",
  },
  {
    q: "Setmana -5 dimarts",
    a: "Reunió script amb tots caps departament",
    cat: "preproduction",
  },
  {
    q: "Setmana -4 scouts",
    a: "Scout artístic (Director, DP, Art). Scout tècnic (tots)",
    cat: "preproduction",
  },
  {
    q: "Setmana -2 dijous",
    a: "Assajos actors i tests càmera/makeup (amb stand-in)",
    cat: "preproduction",
  },
  {
    q: "Setmana -1",
    a: "Recull equip i enviament CALLSHEET #1",
    cat: "preproduction",
  },
];

const flashcardsDataEN_Extended = [
  // SCRIPT READING
  {
    q: "Standard script format?",
    a: "Courier 12pt on A4 paper",
    cat: "scriptreading",
  },
  {
    q: "Slugline = ?",
    a: "Scene heading (location/time)",
    cat: "scriptreading",
  },
  {
    q: "ACTION in script",
    a: "Where you tell reader what happens in scene",
    cat: "scriptreading",
  },
  {
    q: "CHARACTER elements",
    a: "In UPPERCASE, followed immediately by Dialogue",
    cat: "scriptreading",
  },
  {
    q: "PARENTHETICAL",
    a: "Elements in parentheses after Character or Dialogue",
    cat: "scriptreading",
  },
  {
    q: "TRANSITION",
    a: "Information about how one scene transitions to another",
    cat: "scriptreading",
  },

  // BREAKDOWN
  {
    q: "First rule of breakdown",
    a: "Read the entire script first",
    cat: "breakdown",
  },
  {
    q: "Standard format = duration?",
    a: "1 page = ~1 minute screen time = ~2 hours shooting",
    cat: "breakdown",
  },
  {
    q: "Dramatic vs Production scene",
    a: "Dramatic = narrative unit. Production = each INT/EXT/time change",
    cat: "breakdown",
  },
  {
    q: "When NO scene heading needed?",
    a: "New camera angle, same action continuation, psychological beat",
    cat: "breakdown",
  },
  { q: "If scene < 1 inch", a: "Still counts as 1/8 page", cat: "breakdown" },
  {
    q: "Golden rule of breakdown",
    a: "Mark elements ONLY once per scene",
    cat: "breakdown",
  },
  {
    q: "Breakdown sheet = ?",
    a: "Individual form with each scene's information",
    cat: "breakdown",
  },
  {
    q: "Info on breakdown sheet",
    a: "Duration, scene#, page, day/night, INT/EXT, location, description",
    cat: "breakdown",
  },

  // BUDGET & PRODUCTION
  {
    q: "Main budget sections",
    a: "Development, Pre-production, Production, Post-production, Rights, Promotion, Contingency",
    cat: "budget",
  },
  { q: "Typical contingency", a: "5-10% of total budget", cat: "budget" },
  {
    q: "In-kind contributions",
    a: "Non-monetary contributions (labour, equipment, locations)",
    cat: "budget",
  },
  {
    q: "First budget page",
    a: "Summary with major categories and subtotals",
    cat: "budget",
  },

  // PRODUCTION FOLDER
  { q: "Logline duration", a: "Maximum 3 lines", cat: "folder" },
  { q: "Synopsis duration", a: "Maximum half A4 page", cat: "folder" },
  { q: "Treatment duration", a: "Typically 2-10 pages", cat: "folder" },
  {
    q: "Project Cover Sheet",
    a: "Identity card: title, type, form, duration, format, language, producer",
    cat: "folder",
  },

  // FILM PRODUCTION ON SET
  { q: "Order onto set (1st)", a: "Art Department", cat: "onset" },
  { q: "Order onto set (4th)", a: "Director", cat: "onset" },
  {
    q: "COMBO seating",
    a: "Director, Script Supervisor, DP (DP seated for quick access)",
    cat: "onset",
  },
  {
    q: "Magliner",
    a: "Equipment trolley, placed near camera without entering frame",
    cat: "onset",
  },
  {
    q: "Camera tape colors",
    a: "Black and white standard. Each actor assigned colour",
    cat: "onset",
  },
  { q: "2nd AC marks", a: "Positions in T-shape on floor", cat: "onset" },

  // CLAPPER STRUCTURE
  {
    q: "CLAPPER: ROLL",
    a: "Memory card (e.g. A001, letter = camera)",
    cat: "onset",
  },
  { q: "CLAPPER: SCENE/SHOT", a: "E.g. 3/1 (Scene 3, Shot 1)", cat: "onset" },
  { q: "CLAPPER: SYNC/MOS", a: "Sound or silent", cat: "onset" },
  {
    q: "PU (Pick-Up)",
    a: "Additional take from specific point within same shot",
    cat: "onset",
  },

  // CINEMATOGRAPHIC AXIS
  {
    q: "180° Rule",
    a: "First camera establishes axis. All must stay on same side",
    cat: "cinematography",
  },
  {
    q: "Jump cut minimum",
    a: "At least 30° angle difference between shots",
    cat: "cinematography",
  },

  // PRE-PRODUCTION PHASES
  {
    q: "Week -5 Monday",
    a: "Final Literary Script (e.g. VER.7)",
    cat: "preproduction",
  },
  {
    q: "Week -5 Tuesday",
    a: "Script meeting with all department heads",
    cat: "preproduction",
  },
  {
    q: "Week -4 scouts",
    a: "Artistic scout (Director, DP, Art). Technical scout (all)",
    cat: "preproduction",
  },
  {
    q: "Week -2 Thursday",
    a: "Actor rehearsals and camera/makeup tests (with stand-in)",
    cat: "preproduction",
  },
  {
    q: "Week -1",
    a: "Equipment collection and CALLSHEET #1 sent",
    cat: "preproduction",
  },
];

// ============================================
// QUIZ DATA (MULTILINGUAL)
// ============================================

// Array de múltiples quizzes per a varietat
const quizDataCA_Set1 = [
  {
    q: "Quin és el primer criteri a l'hora de fer el pla de rodatge?",
    opts: [
      "Disponibilitat de la localització",
      "Disponibilitat dels actors",
      "Condicions del DOP",
      "Pressupost disponible",
    ],
    a: 1,
    exp: "La disponibilitat dels actors és sempre la primera prioritat.",
    difficulty: "easy",
  },
  {
    q: "Quin color s'assigna al Vestuari al desglos?",
    opts: ["Rosa", "Taronja", "Lila", "Vermell"],
    a: 2,
    exp: "Vestuari = Lila. Rosa és per a Maquillatge i Perruqueria.",
    difficulty: "easy",
  },
  {
    q: "1 pàgina de guió = ?",
    opts: [
      "30 minuts",
      "1 minut i ~2 hores de rodatge",
      "5 minuts",
      "10 minuts",
    ],
    a: 1,
    exp: "1 pàgina ≈ 1 minut de pantalla i ~2 hores de rodatge sense preparació.",
    difficulty: "easy",
  },
  {
    q: "Quan s'envia la callsheet com a màxim?",
    opts: [
      "24 hores abans",
      "12 hores abans de l'hora de citació",
      "48 hores abans",
      "La nit anterior",
    ],
    a: 1,
    exp: "La callsheet s'envia com a màxim 12 hores abans, en format PDF vertical.",
    difficulty: "easy",
  },
  {
    q: "Qui assisteix a la loca artística?",
    opts: [
      "DOP, Gaffer, Producció, AD, So",
      "Director, DOP i Director d'Art únicament",
      "Tot l'equip de caps",
      "Producció i Script",
    ],
    a: 1,
    exp: "A la loca artística hi van els 3 caps artístics: Director, DOP i Director d'Art.",
    difficulty: "medium",
  },
  {
    q: "Qui pot tallar un pla?",
    opts: [
      "El DOP",
      "ÚNICAMENT el director",
      "Qualsevol cap de departament",
      "El productor",
    ],
    a: 1,
    exp: "ÚNICAMENT el director pot tallar un pla durant el rodatge.",
    difficulty: "easy",
  },
  {
    q: "Format estàndard del guió",
    opts: [
      "Arial 11pt en A3",
      "Courier 12pt en A4",
      "Times New Roman 12pt en A4",
      "Courier 11pt en A4",
    ],
    a: 1,
    exp: "El format estàndard és Courier 12pt en A4 per a 1 pàgina ≈ 1 minut.",
    difficulty: "easy",
  },
  {
    q: "Qui fa les marques en T al terra?",
    opts: ["El DOP", "L'ajudant de càmera (2n AC)", "El gaffer", "El grip"],
    a: 1,
    exp: "L'ajudant de càmera (2n AC) és qui fa les marques en T.",
    difficulty: "medium",
  },
  {
    q: "Color Foto/Càmera al desglos?",
    opts: ["Blau", "Verd", "Vermell", "Taronja"],
    a: 0,
    exp: "Foto/Càmera = Blau. Aquest és el color estàndard als desglosos.",
    difficulty: "easy",
  },
  {
    q: "Que significa 'SM' al desglos?",
    opts: ["Special Makeup", "Sus Medios", "Sound & Music", "Script Manager"],
    a: 1,
    exp: "SM = Sus Medios (vé pels seus propis mitjans). Actors MAI en SM.",
    difficulty: "medium",
  },
  {
    q: "1/8 de pàgina de guió ≈?",
    opts: [
      "5 minuts de rodatge",
      "15 minuts de rodatge",
      "30 minuts de rodatge",
      "1 hora de rodatge",
    ],
    a: 1,
    exp: "1/8 de pàgina ≈ 15 minuts de rodatge.",
    difficulty: "easy",
  },
  {
    q: "Quin és el porcentatge de contingència del pressupost?",
    opts: ["2-3%", "5-10%", "15-20%", "25-30%"],
    a: 1,
    exp: "Contingència = 5-10% del total. A vegades obligatòria en finançament públic.",
    difficulty: "medium",
  },
  {
    q: "Que significa 'RTS' en producció?",
    opts: [
      "Ready To Start",
      "Ready To Shoot",
      "Recording Time Signal",
      "Real Time Sync",
    ],
    a: 1,
    exp: "RTS = Ready To Shoot = Motor = Llestos per Rodar.",
    difficulty: "medium",
  },
  {
    q: "Color Producció al desglos?",
    opts: ["Lila", "Vermell", "Groc", "Taronja"],
    a: 1,
    exp: "Producció = Vermell. Els colors estan estandarditzats als desglosos.",
    difficulty: "easy",
  },
  {
    q: "Norma dels 180°",
    opts: [
      "Els plans han de tenir 180° de diferència",
      "La primera càmera estableix l'eix i totes han de quedar al mateix costat",
      "Tots els plans han de veure 180° del plató",
      "Els actors es giren 180°",
    ],
    a: 1,
    exp: "Norma dels 180°: Primera càmera estableix l'eix. Totes les càmeres al mateix costat.",
    difficulty: "hard",
  },
  {
    q: "Jump cuts: mínim angle?",
    opts: [
      "10° diferència",
      "20° diferència",
      "30° diferència",
      "45° diferència",
    ],
    a: 2,
    exp: "Jump cuts necessiten mínim 30° de diferència entre plans per evitar salts visuals.",
    difficulty: "hard",
  },
  {
    q: "Que significa 'NT' al desglos?",
    opts: ["Not Talent", "No Treballa", "Not Time", "New Type"],
    a: 1,
    exp: "NT = No Treballa (mai s'esborra el nom). Apareix en la planificació però no treballa.",
    difficulty: "medium",
  },
  {
    q: "Qui assisteix a la loca tècnica?",
    opts: [
      "DOP, Gaffer, Producció, Dir. Art, Director, AD, So",
      "Solo DOP i Productor",
      "Tot l'equip complet",
      "Director i Director d'Art",
    ],
    a: 0,
    exp: "Loca tècnica: DOP, Gaffer, Producció, Dir. Art, Director, AD, So (tots els caps).",
    difficulty: "hard",
  },
  {
    q: "Color So al desglos?",
    opts: ["Rosa", "Groc", "Verd", "Blau"],
    a: 1,
    exp: "So = Groc. Els colors són estàndards en tots els desglosos de producció.",
    difficulty: "easy",
  },
  {
    q: "Temps per a 1 pla de 3 minuts de durada?",
    opts: ["12 minuts", "18 minuts", "24-27 minuts", "30 minuts"],
    a: 2,
    exp: "Durada del pla × 7 preses + 3 min director. 3 min × 7 + 3 = 24 min (o més si és complex).",
    difficulty: "hard",
  },
];

const quizDataEN_Set1 = [
  {
    q: "What is the first criterion for creating a shooting schedule?",
    opts: [
      "Location availability",
      "Actor availability",
      "DOP conditions",
      "Available budget",
    ],
    a: 1,
    exp: "Actor availability is always the first priority.",
    difficulty: "easy",
  },
  {
    q: "What color is assigned to Wardrobe in breakdown?",
    opts: ["Pink", "Orange", "Lilac", "Red"],
    a: 2,
    exp: "Wardrobe = Lilac. Pink is for Makeup/Hair.",
    difficulty: "easy",
  },
  {
    q: "1 page of script = ?",
    opts: [
      "30 minutes",
      "1 minute and ~2 hours shooting",
      "5 minutes",
      "10 minutes",
    ],
    a: 1,
    exp: "1 page ≈ 1 minute of screen time and ~2 hours shooting without setup.",
    difficulty: "easy",
  },
  {
    q: "When is the callsheet sent at the latest?",
    opts: [
      "24 hours before",
      "12 hours before call time",
      "48 hours before",
      "The night before",
    ],
    a: 1,
    exp: "Callsheet is sent maximum 12 hours before in vertical PDF format.",
    difficulty: "easy",
  },
  {
    q: "Who attends the artistic location scout?",
    opts: [
      "DOP, Gaffer, Production, AD, Sound",
      "Director, DOP and Art Director only",
      "All department heads",
      "Production and Script",
    ],
    a: 1,
    exp: "Artistic location has 3 heads: Director, DOP and Art Director.",
    difficulty: "medium",
  },
  {
    q: "Who can call 'Cut'?",
    opts: [
      "The DOP",
      "ONLY the director",
      "Any department head",
      "The producer",
    ],
    a: 1,
    exp: "ONLY the director can call 'Cut' during filming.",
    difficulty: "easy",
  },
  {
    q: "Standard script format",
    opts: [
      "Arial 11pt on A3",
      "Courier 12pt on A4",
      "Times New Roman 12pt on A4",
      "Courier 11pt on A4",
    ],
    a: 1,
    exp: "Standard format is Courier 12pt on A4 for 1 page ≈ 1 minute.",
    difficulty: "easy",
  },
  {
    q: "Who marks the T's on the ground?",
    opts: [
      "The DOP",
      "The camera assistant (2nd AC)",
      "The gaffer",
      "The grip",
    ],
    a: 1,
    exp: "The camera assistant (2nd AC) marks the T's on the ground.",
    difficulty: "medium",
  },
  {
    q: "Camera/Photo color in breakdown?",
    opts: ["Blue", "Green", "Red", "Orange"],
    a: 0,
    exp: "Camera/Photo = Blue. This is the standard color in breakdowns.",
    difficulty: "easy",
  },
  {
    q: "What does 'SM' mean in breakdown?",
    opts: ["Special Makeup", "Sus Medios", "Sound & Music", "Script Manager"],
    a: 1,
    exp: "SM = Sus Medios (uses own means). Actors NEVER in SM.",
    difficulty: "medium",
  },
  {
    q: "1/8 of a script page ≈?",
    opts: [
      "5 minutes shooting",
      "15 minutes shooting",
      "30 minutes shooting",
      "1 hour shooting",
    ],
    a: 1,
    exp: "1/8 of a page ≈ 15 minutes of shooting.",
    difficulty: "easy",
  },
  {
    q: "What percentage is the budget contingency?",
    opts: ["2-3%", "5-10%", "15-20%", "25-30%"],
    a: 1,
    exp: "Contingency = 5-10% of total. Sometimes mandatory in public funding.",
    difficulty: "medium",
  },
  {
    q: "What does 'RTS' mean in production?",
    opts: [
      "Ready To Start",
      "Ready To Shoot",
      "Recording Time Signal",
      "Real Time Sync",
    ],
    a: 1,
    exp: "RTS = Ready To Shoot = Motor = Ready to Roll.",
    difficulty: "medium",
  },
  {
    q: "Production color in breakdown?",
    opts: ["Lilac", "Red", "Yellow", "Orange"],
    a: 1,
    exp: "Production = Red. Colors are standardized in breakdowns.",
    difficulty: "easy",
  },
  {
    q: "180° Rule",
    opts: [
      "Plans must be 180° apart",
      "First camera establishes axis, all stay on same side",
      "All plans see 180° of set",
      "Actors turn 180°",
    ],
    a: 1,
    exp: "180° Rule: First camera sets axis. All cameras stay on same side.",
    difficulty: "hard",
  },
  {
    q: "Jump cuts: minimum angle?",
    opts: [
      "10° difference",
      "20° difference",
      "30° difference",
      "45° difference",
    ],
    a: 2,
    exp: "Jump cuts need minimum 30° difference between shots to avoid visual jumps.",
    difficulty: "hard",
  },
  {
    q: "What does 'NT' mean in breakdown?",
    opts: ["Not Talent", "Not Working", "Not Time", "New Type"],
    a: 1,
    exp: "NT = Not Working (name is never erased). Appears in planning but doesn't work.",
    difficulty: "medium",
  },
  {
    q: "Who attends technical location?",
    opts: [
      "DOP, Gaffer, Production, Art Director, Director, AD, Sound",
      "Only DOP and Producer",
      "The entire team",
      "Director and Art Director",
    ],
    a: 0,
    exp: "Technical location: DOP, Gaffer, Production, Art Director, Director, AD, Sound.",
    difficulty: "hard",
  },
  {
    q: "Sound color in breakdown?",
    opts: ["Pink", "Yellow", "Green", "Blue"],
    a: 1,
    exp: "Sound = Yellow. Colors are standard in all production breakdowns.",
    difficulty: "easy",
  },
  {
    q: "Time for a 3 minute shot?",
    opts: ["12 minutes", "18 minutes", "24-27 minutes", "30 minutes"],
    a: 2,
    exp: "Shot duration × 7 takes + 3 min director. 3 min × 7 + 3 = 24 min (or more if complex).",
    difficulty: "hard",
  },
];

const quizDataCA_Set2 = [
  {
    q: "Quants minuts per 3 minuts de rodatge?",
    opts: ["9 minuts", "15 minuts", "21-25 minuts", "35 minuts"],
    a: 2,
    exp: "3 minuts × 7 takes + 3 min director = 21-24 minuts (o més si és complex).",
    difficulty: "medium",
  },
  {
    q: "Color de l'art al desglos?",
    opts: ["Groc", "Verd", "Taronja", "Blau"],
    a: 2,
    exp: "Art = Taronja. Els colors són estàndard en tots els desglos de producció.",
    difficulty: "easy",
  },
  {
    q: "Quin és l'ordre de prioritat de rodatge?",
    opts: [
      "Talents primer",
      "Exteriors primer",
      "Interiors primer",
      "Personatges principals primer",
    ],
    a: 1,
    exp: "Els exteriors es roden primers perquè depenen de la llum natural i són més impredictibles.",
    difficulty: "hard",
  },
  {
    q: "Quants minuts per a la caracterització?",
    opts: ["15-30 minuts", "45-60 minuts", "90 minuts", "120+ minuts"],
    a: 2,
    exp: "La caracterització (perruques, maquillatge, vestuari) normalment necessita 90+ minuts.",
    difficulty: "medium",
  },
  {
    q: "Quin document marca el ritme de producció?",
    opts: ["Pressupost", "Calendari", "Escaleta", "Desglos"],
    a: 1,
    exp: "El calendari de producció defineix els dies, hores i ritme general de rodatge.",
    difficulty: "easy",
  },
  {
    q: "Color de la direcció al desglos?",
    opts: ["Vermell", "Blau", "Negre", "Blanc"],
    a: 0,
    exp: "Direcció = Vermell. Color estàndard per a la posició de director.",
    difficulty: "easy",
  },
  {
    q: "Quants departaments es reprensentaen la localització tècnica?",
    opts: ["3", "5", "7", "10"],
    a: 2,
    exp: "Localització tècnica: DOP, Electricista, Producció, Art, Director, AD, So = 7 departaments.",
    difficulty: "hard",
  },
  {
    q: "Quina és la durada d'una callsheet?",
    opts: ["1 dia", "1 setmana", "1 mes", "Varía"],
    a: 0,
    exp: "Una callsheet es fa per a cada dia de producció i marca l'horari i detalls del dia.",
    difficulty: "easy",
  },
  {
    q: "Quants minuts de buffer per a imprevistos?",
    opts: ["5-10 minuts", "15-20 minuts", "30-45 minuts", "60+ minuts"],
    a: 2,
    exp: "Normalment es preveu 30-45 minuts d'buffer per a imprevistos cada dia de rodatge.",
    difficulty: "medium",
  },
  {
    q: "Quin és el document de l'script supervisor?",
    opts: ["Desglos", "Escaleta", "Continuïtat", "Calendari"],
    a: 2,
    exp: "El document de continuïtat marca els detalls visuals i de continuïtat entre takes.",
    difficulty: "medium",
  },
  {
    q: "Color de la câmara al desglos?",
    opts: ["Blau", "Groc", "Cyan", "Morat"],
    a: 2,
    exp: "Càmara = Cyan (blau clar). Color estàndard al desglos de producció.",
    difficulty: "medium",
  },
  {
    q: "Quants elements té un desglos complet?",
    opts: ["5-10", "15-25", "30-40", "50+"],
    a: 1,
    exp: "Un desglos complet inclou 15-25+ elements: talent, câmara, so, art, etc.",
    difficulty: "hard",
  },
  {
    q: "Quina és la responsabilitat del UPM?",
    opts: ["Direcció", "Producció executiva", "Edició", "Iluminació"],
    a: 1,
    exp: "El UPM (Unit Production Manager) supervisa els aspectes executives i administratius.",
    difficulty: "hard",
  },
  {
    q: "Quina és l'escala estàndard de temps al desglos?",
    opts: ["Minuts", "Segons", "Octavos de pàgina", "Línies"],
    a: 2,
    exp: "Es mesura en octavos (1/8 de pàgina) per a tenir una escala visual de durada.",
    difficulty: "hard",
  },
  {
    q: "Quants takes es preveuen per a una escena complexa?",
    opts: ["2-3 takes", "5 takes", "7-10 takes", "15+ takes"],
    a: 2,
    exp: "Per a escenes complexes es preveuen 7-10 takes (o més si hi ha molts actors/accions).",
    difficulty: "medium",
  },
  {
    q: "Quin és el format de la claqueta?",
    opts: [
      "Digital només",
      "Amb pissarra i número",
      "Verbal únicament",
      "Automàtic amb câmara",
    ],
    a: 1,
    exp: "La claqueta tradicional té pissarra amb número de scene, take, data i director.",
    difficulty: "easy",
  },
  {
    q: "Quants departaments de producció hi ha normalment?",
    opts: ["3-5", "6-9", "10-15", "20+"],
    a: 2,
    exp: "Producció televisiva/cinematogràfica típica: 10+ departaments (de direcció a posproduccio).",
    difficulty: "medium",
  },
  {
    q: "Quin document detalla el viatge dels actors?",
    opts: ["Pressupost", "Callsheet", "Desglos", "Escaleta"],
    a: 1,
    exp: "La callsheet inclou pickup times (hora de recollida), locació, horaris del dia.",
    difficulty: "medium",
  },
  {
    q: "Quina és la durada mitjana d'una escena de 3 minuts de metratge?",
    opts: ["6 minuts", "12 minuts", "18-24 minuts", "30 minuts"],
    a: 2,
    exp: "Metratge × 7 takes (mitjana) + 3-4 min de director review = 18-24 minuts típicament.",
    difficulty: "hard",
  },
  {
    q: "Quins són els 3 documents clau d'una producció?",
    opts: [
      "Escaleta, Pressupost, Desglos",
      "Calendari, Script, Claqueta",
      "Escaleta, Calendari, Callsheet",
      "Pressupost, Desglos, Escaleta",
    ],
    a: 0,
    exp: "Els 3 documents clau: Escaleta (guió), Pressupost (diners), Desglos (execució).",
    difficulty: "hard",
  },
];

const quizDataEN_Set2 = [
  {
    q: "How many minutes for a 3-minute shot?",
    opts: ["9 minutes", "15 minutes", "21-25 minutes", "35 minutes"],
    a: 2,
    exp: "3 min × 7 takes + 3 min director = 21-24 min (or more if complex).",
    difficulty: "medium",
  },
  {
    q: "Art color in breakdown?",
    opts: ["Yellow", "Green", "Orange", "Blue"],
    a: 2,
    exp: "Art = Orange. Colors are standard in all production breakdowns.",
    difficulty: "easy",
  },
  {
    q: "What is the shooting priority order?",
    opts: [
      "Talent first",
      "Exteriors first",
      "Interiors first",
      "Main characters first",
    ],
    a: 1,
    exp: "Exteriors are shot first because they depend on natural light and are unpredictable.",
    difficulty: "hard",
  },
  {
    q: "How many minutes for makeup and wardrobe?",
    opts: ["15-30 minutes", "45-60 minutes", "90 minutes", "120+ minutes"],
    a: 2,
    exp: "Hair, makeup, wardrobe (characterization) typically requires 90+ minutes per actor.",
    difficulty: "medium",
  },
  {
    q: "Which document sets the production pace?",
    opts: ["Budget", "Calendar", "Escaleta", "Breakdown"],
    a: 1,
    exp: "The production calendar defines days, hours, and overall shooting pace.",
    difficulty: "easy",
  },
  {
    q: "Director color in breakdown?",
    opts: ["Red", "Blue", "Black", "White"],
    a: 0,
    exp: "Director = Red. Standard color for director position in breakdown.",
    difficulty: "easy",
  },
  {
    q: "How many departments in technical location setup?",
    opts: ["3", "5", "7", "10"],
    a: 2,
    exp: "Technical location: DOP, Gaffer, Production, Art, Director, AD, Sound = 7 departments.",
    difficulty: "hard",
  },
  {
    q: "What is a callsheet duration?",
    opts: ["1 day", "1 week", "1 month", "Varies"],
    a: 0,
    exp: "A callsheet is made for each production day and lists call times and details.",
    difficulty: "easy",
  },
  {
    q: "How much buffer time for unexpected delays?",
    opts: ["5-10 minutes", "15-20 minutes", "30-45 minutes", "60+ minutes"],
    a: 2,
    exp: "Typically 30-45 minutes buffer is planned per day for unexpected issues.",
    difficulty: "medium",
  },
  {
    q: "What is the script supervisor's main document?",
    opts: ["Breakdown", "Escaleta", "Continuity notes", "Calendar"],
    a: 2,
    exp: "Continuity notes document visual details and continuity between takes.",
    difficulty: "medium",
  },
  {
    q: "Camera color in breakdown?",
    opts: ["Blue", "Yellow", "Cyan", "Purple"],
    a: 2,
    exp: "Camera = Cyan (light blue). Standard color in production breakdown.",
    difficulty: "medium",
  },
  {
    q: "How many elements in a complete breakdown?",
    opts: ["5-10", "15-25", "30-40", "50+"],
    a: 1,
    exp: "A complete breakdown includes 15-25+ elements: talent, camera, sound, art, etc.",
    difficulty: "hard",
  },
  {
    q: "What is the UPM's main responsibility?",
    opts: ["Direction", "Executive production", "Editing", "Lighting"],
    a: 1,
    exp: "The UPM (Unit Production Manager) supervises executive and administrative aspects.",
    difficulty: "hard",
  },
  {
    q: "What is the standard time scale in breakdown?",
    opts: ["Minutes", "Seconds", "Eighths of page", "Lines"],
    a: 2,
    exp: "Measured in eighths (1/8 of page) for visual scale of duration.",
    difficulty: "hard",
  },
  {
    q: "How many takes for a complex scene?",
    opts: ["2-3 takes", "5 takes", "7-10 takes", "15+ takes"],
    a: 2,
    exp: "Complex scenes require 7-10 takes (or more with many actors/actions).",
    difficulty: "medium",
  },
  {
    q: "What is clapper board format?",
    opts: [
      "Digital only",
      "Slate with numbers",
      "Verbal only",
      "Camera automatic",
    ],
    a: 1,
    exp: "Traditional clapper has slate with scene number, take, date, director name.",
    difficulty: "easy",
  },
  {
    q: "How many production departments typically?",
    opts: ["3-5", "6-9", "10-15", "20+"],
    a: 2,
    exp: "TV/film production typically has 10+ departments (from direction to post).",
    difficulty: "medium",
  },
  {
    q: "Which document details actor travel and times?",
    opts: ["Budget", "Callsheet", "Breakdown", "Escaleta"],
    a: 1,
    exp: "Callsheet includes pickup times, location, and daily schedule details.",
    difficulty: "medium",
  },
  {
    q: "Average duration for a 3-minute scene?",
    opts: ["6 minutes", "12 minutes", "18-24 minutes", "30 minutes"],
    a: 2,
    exp: "Runtime × 7 takes (average) + 3-4 min director review = 18-24 min typical.",
    difficulty: "hard",
  },
  {
    q: "What are the 3 key production documents?",
    opts: [
      "Escaleta, Budget, Breakdown",
      "Calendar, Script, Clapper",
      "Escaleta, Calendar, Callsheet",
      "Budget, Breakdown, Escaleta",
    ],
    a: 0,
    exp: "3 key documents: Escaleta (script), Budget (money), Breakdown (execution).",
    difficulty: "hard",
  },
];

const quizDataCA_Set3 = [
  {
    q: "Quina és la norma cinematogràfica per a la durada de takes?",
    opts: [
      "Mínima 5 minuts",
      "Mínima 2 minuts",
      "Máxima 3 minuts",
      "No hi ha norma",
    ],
    a: 2,
    exp: "La norma estableix que els takes rareament superen 3-4 minuts de metratge útil.",
    difficulty: "hard",
  },
  {
    q: "Com es calcula l'ordre de rodatge de les escenes?",
    opts: [
      "Per locació",
      "Per personatge",
      "Per durada",
      "Per importancia al guió",
    ],
    a: 0,
    exp: "L'ordre de rodatge es calcula per locació per minimitzar temps de canvi.",
    difficulty: "hard",
  },
  {
    q: "Quina és la responsabilitat del Gaffer?",
    opts: ["Direcció d'art", "Iluminació", "Càmara", "So"],
    a: 1,
    exp: "El Gaffer és el jefe de l'equip d'il·luminació sota la supervisió del DOP.",
    difficulty: "medium",
  },
  {
    q: "Quants noms d'ocupacions hi ha en una producció de 15 persones?",
    opts: ["5-7", "8-12", "13-15", "20+"],
    a: 1,
    exp: "Una producció de 15 persones típicament té 8-12 ocupacions/departaments diferent.",
    difficulty: "hard",
  },
  {
    q: "Quina és la durada d'un 'flying day' (dia de 12h)?",
    opts: ["8 hores", "10 hores", "12 hores", "14 hores"],
    a: 2,
    exp: "Un flying day és de 12 hores de rodatge continu amb pauses mínimes.",
    difficulty: "hard",
  },
  {
    q: "Quins departaments necessiten 'call time' més primerenc?",
    opts: [
      "Talent i actor",
      "Art i caracterització",
      "Departaments tècnics",
      "Tots iguals",
    ],
    a: 1,
    exp: "Art, Characterization i departaments de suport arriben primers que talent.",
    difficulty: "hard",
  },
  {
    q: "Quina és la funció de l'Script Supervisor?",
    opts: ["Editar", "Gravar notes de continuïtat", "Direcció", "So"],
    a: 1,
    exp: "L'Script Supervisor enregistra continuïtat visual, diàlegs i timing exacte.",
    difficulty: "medium",
  },
  {
    q: "Com es mesura la complexitat d'una escena al desglos?",
    opts: [
      "Per número de takes",
      "Per número d'elements",
      "Per durada",
      "Per pressupost",
    ],
    a: 1,
    exp: "La complexitat es mesura pel número d'elements (talent, câmara, so, art, etc).",
    difficulty: "hard",
  },
  {
    q: "Quina és la durada mínima d'un 'turnover day' (canvi de focus)?",
    opts: ["2 hores", "4-6 hores", "8 hores", "24 hores"],
    a: 1,
    exp: "Un turnover day necessita 4-6 hores per a reorganitzar equips i locacions.",
    difficulty: "hard",
  },
  {
    q: "Quins noms de departaments comencen amb 'Production'?",
    opts: [
      "Production Manager",
      "Production Assistant",
      "Tots dos",
      "Cap dels anteriors",
    ],
    a: 2,
    exp: "Els dos: PM (manager) i PA (assistant) són departament de Producció Executiva.",
    difficulty: "hard",
  },
  {
    q: "Quina és la responsabilitat del DOP?",
    opts: ["Direcció", "Fotografia i llum", "Edició", "So"],
    a: 1,
    exp: "El DOP (Director of Photography) supervisa toda la iluminació i fotografia.",
    difficulty: "medium",
  },
  {
    q: "Com s'organitzen els takes en el desglos?",
    opts: ["Cronológicamente", "Per locació", "Per departament", "Per actor"],
    a: 1,
    exp: "Els takes s'organitzen per locació per optimitzar temps de rodatge.",
    difficulty: "hard",
  },
  {
    q: "Quina és la durada estàndard per a eating scenes?",
    opts: ["2-3 minuts", "4-5 minuts", "6-8 minuts", "10+ minuts"],
    a: 2,
    exp: "Les escenes de menjar necessiten 6-8 minuts per ensures continuïtat visual exacta.",
    difficulty: "hard",
  },
  {
    q: "Quins documents requieren signatures legals?",
    opts: ["Escaleta", "Desglos", "Callsheet", "Pressupost"],
    a: 1,
    exp: "El Desglos requiere signatures de tots els departaments per a confirmació.",
    difficulty: "hard",
  },
  {
    q: "Com es calcula el número de takes necessaris?",
    opts: [
      "1 per take",
      "5-7 per defecte",
      "Varia per complexitat",
      "Director tria",
    ],
    a: 2,
    exp: "Varia: escenes simples 3-5, complex 7-12, accions 10+, efectes 20+.",
    difficulty: "hard",
  },
  {
    q: "Quina és la responsabilitat principal del Production Manager?",
    opts: ["Direcció", "Pressupuests i timings", "Iluminació", "So"],
    a: 1,
    exp: "El PM gestiona budgets, timings i aspectes administratius executives.",
    difficulty: "medium",
  },
  {
    q: "Com es distribueixen les hores de treball en un dia de rodatge?",
    opts: ["8-10 hores", "10-12 hores", "12-14 hores", "14-16 hores"],
    a: 2,
    exp: "Un dia típic de rodatge dura 12-14 hores (setup + shoot + breakdown).",
    difficulty: "medium",
  },
  {
    q: "Quina és la prioritat quan hi ha conflicte de recursos?",
    opts: ["Talent", "Câmara", "Producció", "Director"],
    a: 0,
    exp: "El talent (actors) té prioritat máxima perquè són els més cars i escassos.",
    difficulty: "hard",
  },
  {
    q: "Quants takes de seguretat per a un efecte especial?",
    opts: ["1-2 takes", "3-5 takes", "5-10 takes", "10-20 takes"],
    a: 3,
    exp: "Els efectes especials necessiten 10-20+ takes per assegurar resultats.",
    difficulty: "hard",
  },
  {
    q: "Quin és el document final del desglos procesado?",
    opts: [
      "Breaksheet",
      "Final desglos",
      "Callsheet",
      "Script supervisor notes",
    ],
    a: 2,
    exp: "La callsheet és la versió final i simplificada del desglos per a cada dia.",
    difficulty: "hard",
  },
];

const quizDataEN_Set3 = [
  {
    q: "What is the film standard for shot duration?",
    opts: [
      "Minimum 5 minutes",
      "Minimum 2 minutes",
      "Maximum 3 minutes",
      "No standard",
    ],
    a: 2,
    exp: "Standard establishes that takes rarely exceed 3-4 minutes of usable footage.",
    difficulty: "hard",
  },
  {
    q: "How is shooting order of scenes calculated?",
    opts: [
      "By location",
      "By character",
      "By duration",
      "By script importance",
    ],
    a: 0,
    exp: "Shooting order is determined by location to minimize setup changes.",
    difficulty: "hard",
  },
  {
    q: "What is the Gaffer's responsibility?",
    opts: ["Art direction", "Lighting", "Camera", "Sound"],
    a: 1,
    exp: "Gaffer is the head of lighting crew under DOP supervision.",
    difficulty: "medium",
  },
  {
    q: "How many job titles in a 15-person production?",
    opts: ["5-7", "8-12", "13-15", "20+"],
    a: 1,
    exp: "A 15-person production typically has 8-12 different job titles/departments.",
    difficulty: "hard",
  },
  {
    q: "What is a 'flying day' (12h day) duration?",
    opts: ["8 hours", "10 hours", "12 hours", "14 hours"],
    a: 2,
    exp: "A flying day is 12 continuous shooting hours with minimal breaks.",
    difficulty: "hard",
  },
  {
    q: "Which departments need earliest call time?",
    opts: [
      "Talent and actor",
      "Art and makeup",
      "Technical departments",
      "All equal",
    ],
    a: 1,
    exp: "Art, characterization, and support departments arrive before talent.",
    difficulty: "hard",
  },
  {
    q: "What is the Script Supervisor's function?",
    opts: ["Editing", "Recording continuity notes", "Direction", "Sound"],
    a: 1,
    exp: "Script Supervisor records visual continuity, dialogue, and exact timing.",
    difficulty: "medium",
  },
  {
    q: "How is scene complexity measured in breakdown?",
    opts: [
      "By number of takes",
      "By number of elements",
      "By duration",
      "By budget",
    ],
    a: 1,
    exp: "Complexity is measured by number of elements (talent, camera, sound, art, etc).",
    difficulty: "hard",
  },
  {
    q: "What is minimum 'turnover day' duration?",
    opts: ["2 hours", "4-6 hours", "8 hours", "24 hours"],
    a: 1,
    exp: "Turnover day requires 4-6 hours to reorganize crews and locations.",
    difficulty: "hard",
  },
  {
    q: "Which department names start with 'Production'?",
    opts: ["Production Manager", "Production Assistant", "Both", "Neither"],
    a: 2,
    exp: "Both PM (manager) and PA (assistant) are part of Executive Production.",
    difficulty: "hard",
  },
  {
    q: "What is the DOP's responsibility?",
    opts: ["Direction", "Photography and lighting", "Editing", "Sound"],
    a: 1,
    exp: "DOP (Director of Photography) supervises all lighting and photography.",
    difficulty: "medium",
  },
  {
    q: "How are takes organized in breakdown?",
    opts: ["Chronologically", "By location", "By department", "By actor"],
    a: 1,
    exp: "Takes are organized by location to optimize shooting time.",
    difficulty: "hard",
  },
  {
    q: "What is standard duration for eating scenes?",
    opts: ["2-3 minutes", "4-5 minutes", "6-8 minutes", "10+ minutes"],
    a: 2,
    exp: "Eating scenes require 6-8 minutes to ensure exact visual continuity.",
    difficulty: "hard",
  },
  {
    q: "Which documents require legal signatures?",
    opts: ["Escaleta", "Breakdown", "Callsheet", "Budget"],
    a: 1,
    exp: "Breakdown requires signatures from all departments for confirmation.",
    difficulty: "hard",
  },
  {
    q: "How is number of necessary takes calculated?",
    opts: [
      "1 per take",
      "5-7 default",
      "Varies by complexity",
      "Director chooses",
    ],
    a: 2,
    exp: "Varies: simple 3-5, complex 7-12, action 10+, effects 20+.",
    difficulty: "hard",
  },
  {
    q: "What is Production Manager's main responsibility?",
    opts: ["Direction", "Budgets and timings", "Lighting", "Sound"],
    a: 1,
    exp: "PM manages budgets, timings, and executive administrative aspects.",
    difficulty: "medium",
  },
  {
    q: "How are working hours distributed in a shooting day?",
    opts: ["8-10 hours", "10-12 hours", "12-14 hours", "14-16 hours"],
    a: 2,
    exp: "Typical shooting day is 12-14 hours (setup + shoot + breakdown).",
    difficulty: "medium",
  },
  {
    q: "What is priority when resources conflict?",
    opts: ["Talent", "Camera", "Production", "Director"],
    a: 0,
    exp: "Talent (actors) has maximum priority - they are most costly and scarce.",
    difficulty: "hard",
  },
  {
    q: "How many safety takes for a special effect?",
    opts: ["1-2 takes", "3-5 takes", "5-10 takes", "10-20 takes"],
    a: 3,
    exp: "Special effects require 10-20+ takes to ensure successful results.",
    difficulty: "hard",
  },
  {
    q: "What is the final processed breakdown document?",
    opts: [
      "Breaksheet",
      "Final breakdown",
      "Callsheet",
      "Script supervisor notes",
    ],
    a: 2,
    exp: "Callsheet is the final simplified version of breakdown for each day.",
    difficulty: "hard",
  },
];

const quizDataCA_Set4 = [
  {
    q: "Encapçalament d'escena (SLUGLINE) conté",
    opts: ["INT/EXT", "Ubicació", "Dia/Nit", "Tots els anteriors"],
    a: 3,
    exp: "SLUGLINE inclou: INT/EXT, ubicació específica, dia/nit.",
    difficulty: "easy",
  },
  {
    q: "ACTION al guió",
    opts: [
      "Narració",
      "Descripcio, accions, moviments",
      "Només diàlegs",
      "Directrius",
    ],
    a: 1,
    exp: "ACTION descriu la ubicació, personatges, accions i moviments.",
    difficulty: "easy",
  },
  {
    q: "Quants octavos en una pàgina completa?",
    opts: ["4", "6", "8", "10"],
    a: 2,
    exp: "Una pàgina completa = 8/8 (vuit octavos).",
    difficulty: "medium",
  },
  {
    q: "Si desglos < 1 polzada",
    opts: ["No compta", "1/8", "2/8", "1/16"],
    a: 1,
    exp: "Qualsevol cosa menys d'una polzada es compta com 1/8 de pàgina.",
    difficulty: "medium",
  },
  {
    q: "Escena dramàtica vs producció",
    opts: [
      "Mateixa cosa",
      "Dramàtica = unitat narrativa. Producció = INT/EXT/hora",
      "Dramàtica = més llarga",
      "No hi ha diferència",
    ],
    a: 1,
    exp: "En producció, cada canvi INT/EXT o hora crea nova escena.",
    difficulty: "hard",
  },
  {
    q: "Quando NO cal encapçalament",
    opts: [
      "Nou angle",
      "Continuació accio",
      "Beat psicologic",
      "Tots els anteriors",
    ],
    a: 3,
    exp: "No cal encapçalament per angles nous, continuació o beats psicològics.",
    difficulty: "hard",
  },
  {
    q: "Breakdown sheet inclou",
    opts: [
      "Solo número",
      "Durada + location",
      "Durada + numero + ubicació + descripció",
      "Solo descripció",
    ],
    a: 2,
    exp: "Breakdown sheet: Durada, Número escena, Pàgina, Dia/Nit, INT/EXT, Ubicació, Descripció.",
    difficulty: "medium",
  },
  {
    q: "Norma d'or del desglos",
    opts: [
      "Marca tot",
      "Marca 2-3 vegades",
      "Marca només una vegada per escena",
      "Marca colors",
    ],
    a: 2,
    exp: "Marca cada element ÚNICAMENT una vegada per escena.",
    difficulty: "easy",
  },
  {
    q: "Seccions principals pressupost",
    opts: [
      "Solo personal",
      "Personal + equip",
      "Desenvolupament + Producció + Post",
      "Totes les anteriors",
    ],
    a: 3,
    exp: "Seccions: Desenvolupament, Preproducció, Producció, Postproducció, Drets, Promoció, Contingència.",
    difficulty: "hard",
  },
  {
    q: "Contingència = ?",
    opts: ["1%", "5-10%", "15%", "20%"],
    a: 1,
    exp: "Contingència típica és 5-10% del total per imprevistos.",
    difficulty: "easy",
  },
  {
    q: "In-kind contributions",
    opts: ["Diners", "Equip o work no pagat", "Locations gratis", "B i C"],
    a: 3,
    exp: "In-kind: Contribucions no monetàries (equip, treball, ubicacions).",
    difficulty: "medium",
  },
  {
    q: "Production Folder inclou",
    opts: [
      "Solo guió",
      "Logline + Synopsis + Guió",
      "Logline + Synopsis + Treatment + Guió + Folder",
      "Tothom",
    ],
    a: 3,
    exp: "Folder: Logline, Synopsis, Treatment, Script, Project Cover Sheet, Format, Temes, etc.",
    difficulty: "hard",
  },
  {
    q: "Logline durada",
    opts: ["1 línea", "2 línies", "Máximo 3 línies", "5+ línies"],
    a: 2,
    exp: "Logline: Máximo 3 línies descrivint idea central del film.",
    difficulty: "easy",
  },
  {
    q: "Orden entrada set (primer)",
    opts: ["Director", "Càmera", "Art", "Actor"],
    a: 2,
    exp: "Primera entra l'Art Department.",
    difficulty: "medium",
  },
  {
    q: "Orden entrada set (quart)",
    opts: ["Art", "Càmera", "Director", "Actor"],
    a: 2,
    exp: "Quart entra el Director (buys the shot).",
    difficulty: "easy",
  },
  {
    q: "COMBO seients",
    opts: [
      "Solo director",
      "Director + DP",
      "Director + DP + Script Supervisor",
      "5+ personas",
    ],
    a: 2,
    exp: "COMBO: 3 seients - Director, Script Supervisor, DP (DP per accés ràpid).",
    difficulty: "medium",
  },
  {
    q: "CLAPPER ROLL",
    opts: [
      "Film roll",
      "Memory card (ex: A001)",
      "Número de presa",
      "Ubicació",
    ],
    a: 1,
    exp: "ROLL: Memory card identificador. Lletra = número càmara (A, B, etc).",
    difficulty: "medium",
  },
  {
    q: "180° Rule",
    opts: [
      "Sense límits",
      "Primera càmera estableix eix, totes igual costat",
      "30° mínim",
      "Solo suposició",
    ],
    a: 1,
    exp: "180° Rule: Primera posició estableix eix. Totes les càmeres romandre mateix costat.",
    difficulty: "hard",
  },
  {
    q: "Jump cut mínim",
    opts: ["10°", "20°", "30°", "45°"],
    a: 2,
    exp: "Mínim 30° angle change entre plànols. Menys és massa similar.",
    difficulty: "medium",
  },
  {
    q: "Setmana -5 principal tarea",
    opts: ["Casting", "Guió final + Reunió script", "Scouts", "Tests equip"],
    a: 1,
    exp: "Semana -5: Guió final (VER.7) i Reunió script amb tots caps departament.",
    difficulty: "hard",
  },
];

const quizDataEN_Set4 = [
  {
    q: "Scene heading (SLUGLINE) contains",
    opts: ["INT/EXT", "Location", "Day/Night", "All of above"],
    a: 3,
    exp: "SLUGLINE includes: INT/EXT, specific location, day/night.",
    difficulty: "easy",
  },
  {
    q: "ACTION in script",
    opts: [
      "Narration",
      "Description, actions, movements",
      "Only dialogue",
      "Directions",
    ],
    a: 1,
    exp: "ACTION describes location, characters, actions, and movements.",
    difficulty: "easy",
  },
  {
    q: "How many eighths in one full page?",
    opts: ["4", "6", "8", "10"],
    a: 2,
    exp: "One full page = 8/8 (eight eighths).",
    difficulty: "medium",
  },
  {
    q: "If breakdown < 1 inch",
    opts: ["Doesn't count", "1/8", "2/8", "1/16"],
    a: 1,
    exp: "Anything less than one inch counts as 1/8 of page.",
    difficulty: "medium",
  },
  {
    q: "Dramatic vs Production scene",
    opts: [
      "Same thing",
      "Dramatic = narrative unit. Production = INT/EXT/time",
      "Dramatic = longer",
      "No difference",
    ],
    a: 1,
    exp: "In production, each INT/EXT or time change creates new scene.",
    difficulty: "hard",
  },
  {
    q: "When NOT needed: Scene heading",
    opts: [
      "New angle",
      "Action continuation",
      "Psychological beat",
      "All of above",
    ],
    a: 3,
    exp: "Not needed for new angles, continuations, or psychological beats.",
    difficulty: "hard",
  },
  {
    q: "Breakdown sheet includes",
    opts: [
      "Just number",
      "Duration + location",
      "Duration + number + location + description",
      "Just description",
    ],
    a: 2,
    exp: "Breakdown sheet: Duration, Scene#, Page, Day/Night, INT/EXT, Location, Description.",
    difficulty: "medium",
  },
  {
    q: "Golden rule of breakdown",
    opts: [
      "Mark everything",
      "Mark 2-3 times",
      "Mark only once per scene",
      "Mark colors",
    ],
    a: 2,
    exp: "Mark each element ONLY once per scene.",
    difficulty: "easy",
  },
  {
    q: "Main budget sections",
    opts: [
      "Just personnel",
      "Personnel + equipment",
      "Development + Production + Post",
      "All of above",
    ],
    a: 3,
    exp: "Sections: Development, Pre-production, Production, Post-production, Rights, Promotion, Contingency.",
    difficulty: "hard",
  },
  {
    q: "Contingency = ?",
    opts: ["1%", "5-10%", "15%", "20%"],
    a: 1,
    exp: "Typical contingency is 5-10% of total for unexpected costs.",
    difficulty: "easy",
  },
  {
    q: "In-kind contributions",
    opts: ["Money", "Equipment or unpaid work", "Free locations", "B and C"],
    a: 3,
    exp: "In-kind: Non-monetary contributions (equipment, labour, locations).",
    difficulty: "medium",
  },
  {
    q: "Production Folder includes",
    opts: [
      "Just script",
      "Logline + Synopsis + Script",
      "Logline + Synopsis + Treatment + Script + Folder",
      "Everything",
    ],
    a: 3,
    exp: "Folder: Logline, Synopsis, Treatment, Script, Project Cover Sheet, Format, Themes, etc.",
    difficulty: "hard",
  },
  {
    q: "Logline duration",
    opts: ["1 line", "2 lines", "Maximum 3 lines", "5+ lines"],
    a: 2,
    exp: "Logline: Maximum 3 lines describing film's central idea.",
    difficulty: "easy",
  },
  {
    q: "Order onto set (first)",
    opts: ["Director", "Camera", "Art", "Actor"],
    a: 2,
    exp: "First enters Art Department.",
    difficulty: "medium",
  },
  {
    q: "Order onto set (fourth)",
    opts: ["Art", "Camera", "Director", "Actor"],
    a: 2,
    exp: "Fourth enters Director (buys the shot).",
    difficulty: "easy",
  },
  {
    q: "COMBO seating",
    opts: [
      "Just director",
      "Director + DP",
      "Director + DP + Script Supervisor",
      "5+ people",
    ],
    a: 2,
    exp: "COMBO: 3 chairs - Director, Script Supervisor, DP (DP for quick access).",
    difficulty: "medium",
  },
  {
    q: "CLAPPER ROLL",
    opts: ["Film roll", "Memory card (e.g. A001)", "Take number", "Location"],
    a: 1,
    exp: "ROLL: Memory card identifier. Letter = camera number (A, B, etc).",
    difficulty: "medium",
  },
  {
    q: "180° Rule",
    opts: [
      "No limits",
      "First camera sets axis, all stay same side",
      "30° minimum",
      "Just a guess",
    ],
    a: 1,
    exp: "180° Rule: First position sets axis. All cameras stay on same side.",
    difficulty: "hard",
  },
  {
    q: "Jump cut minimum",
    opts: ["10°", "20°", "30°", "45°"],
    a: 2,
    exp: "Minimum 30° angle change between shots. Less is too similar.",
    difficulty: "medium",
  },
  {
    q: "Week -5 main task",
    opts: [
      "Casting",
      "Final script + Script meeting",
      "Scouts",
      "Equipment tests",
    ],
    a: 1,
    exp: "Week -5: Final script (VER.7) and Script meeting with all department heads.",
    difficulty: "hard",
  },
];

const quizDataCA_Set5 = [
  {
    q: "PARENTHETICAL al guió",
    opts: [
      "Entre astriscs",
      "Entre parèntesis",
      "Entre cometes",
      "Entre guions",
    ],
    a: 1,
    exp: "PARENTHETICAL: Entre parèntesis (tone, action) dopo character o dialogue.",
    difficulty: "easy",
  },
  {
    q: "TRANSITION al guió",
    opts: [
      "Transició entre actors",
      "Transició entre ubicacions",
      "Informació del pas entre escenes",
      "Transició de so",
    ],
    a: 2,
    exp: "TRANSITION: Especifica el mode de pas entre escenes (CUT TO, FADE, DISSOLVE, etc).",
    difficulty: "medium",
  },
  {
    q: "Format estàndard: Font i mida",
    opts: ["Arial 11", "Times New Roman 12", "Courier 12", "Helvetica 14"],
    a: 2,
    exp: "Format estàndard: Courier 12 punts en paper A4.",
    difficulty: "easy",
  },
  {
    q: "1 pàgina de guió estàndard",
    opts: [
      "30 segons pantalla",
      "1 minut pantalla",
      "2 minuts pantalla",
      "5 minuts pantalla",
    ],
    a: 1,
    exp: "1 pàgina = ~1 minut de metratge. 2 hores de rodatge aprox.",
    difficulty: "medium",
  },
  {
    q: "Durada marcada en desglos: FULL PAGE",
    opts: ["8/8", "7/8", "1 PAGE", "8th"],
    a: 2,
    exp: "Les pàgines completes s'indiquen com '1 PAGE', no com 8/8.",
    difficulty: "medium",
  },
  {
    q: "Marking elements: Quan marca",
    opts: [
      "Tots els cops que apareixa",
      "Primer cop que apareixa",
      "Cada aparició en diferent lloc",
      "Mai",
    ],
    a: 1,
    exp: "Marca cada element UNA VEGADA per escena (regla d'or).",
    difficulty: "hard",
  },
  {
    q: "Colors estàndard: Art Department",
    opts: ["Blau", "Verd", "Vermell", "Taronja"],
    a: 1,
    exp: "Art Department = VERD al desglos.",
    difficulty: "easy",
  },
  {
    q: "Colors estàndard: Sound",
    opts: ["Groc", "Blau", "Taronja", "Verd"],
    a: 0,
    exp: "Sound = GROC al desglos estàndard.",
    difficulty: "easy",
  },
  {
    q: "Colors estàndard: Wardrobe/Vestuari",
    opts: ["Rosa", "Lila/Violeta", "Taronja", "Blau"],
    a: 1,
    exp: "Wardrobe = LILA al desglos.",
    difficulty: "easy",
  },
  {
    q: "Breakdown tools: Marcar",
    opts: [
      "Solo digital",
      "Solo a ma amb llapis",
      "Ambos metodes valids",
      "A teclat",
    ],
    a: 2,
    exp: "Es pot marcar elements a mà amb llapis colors o digital en software.",
    difficulty: "medium",
  },
  {
    q: "Synopsis: Durada",
    opts: ["1 línea", "1 parágrafe", "Mitja pàgina", "2-3 páginas"],
    a: 2,
    exp: "Synopsis: Máximo mitja pàgina A4, sense descriure ending.",
    difficulty: "medium",
  },
  {
    q: "Treatment: Durada",
    opts: ["1 pàgina", "3 páginas", "2-10 páginas", "20+ páginas"],
    a: 2,
    exp: "Treatment: Típicament 2-10 páginas, sense diàlog.",
    difficulty: "medium",
  },
  {
    q: "Project Cover Sheet: Inclou",
    opts: [
      "Solo títol",
      "Títol + tipus + durada",
      "Títol + tipus + forma + durada + format + idioma + productor",
      "Solo info financial",
    ],
    a: 2,
    exp: "Cover Sheet: Títol, Tipus, Forma, Durada, Format, Idioma, Productor, País.",
    difficulty: "hard",
  },
  {
    q: "Magliner al set",
    opts: [
      "Llum portàtil",
      "Carret d'equip",
      "Cadira del director",
      "Monitor video",
    ],
    a: 1,
    exp: "Magliner: Carret d'equip col·locat prop càmera sense entrar en frame.",
    difficulty: "medium",
  },
  {
    q: "Camera tape colors: Funció",
    opts: [
      "Decoració",
      "Marcar posicions actors",
      "Identificar càmeres",
      "Marcar llums",
    ],
    a: 1,
    exp: "Camera tape marca posicions dels actors en forma de T. Cada actor té color.",
    difficulty: "medium",
  },
  {
    q: "PU (Pick-Up) significa",
    opts: [
      "Presa nova día diferent",
      "Presa d'un punt específic dins mateix pla",
      "Presa fàcil",
      "Presa de respaldo",
    ],
    a: 1,
    exp: "PU: Presa addicional del mateix pla del dia anterior.",
    difficulty: "hard",
  },
  {
    q: "Scout artístic: Qui assiste?",
    opts: ["Tothom", "Director, DP, Art", "Director, PM, AD", "Solo director"],
    a: 1,
    exp: "Scout artístic: Director, DP, Production Designer (les 3 caps creatius).",
    difficulty: "hard",
  },
  {
    q: "Scout tècnic: Qui assiste?",
    opts: [
      "Director i DP",
      "Totes caps departament",
      "Solo production",
      "Solo AD",
    ],
    a: 1,
    exp: "Scout tècnic: TOTS els caps de departament (DP, Gaffer, Art, Sound, AD, PM).",
    difficulty: "hard",
  },
  {
    q: "Callsheet: Quan s'envia?",
    opts: ["1 dia antes", "12 hores antes", "1 hora antes", "El dia anterior"],
    a: 1,
    exp: "Callsheet MUST enviada máximo 12 horas antes de call time.",
    difficulty: "easy",
  },
  {
    q: "Callsheet: Format",
    opts: [
      "Horitzontal PDF",
      "Vertical PDF per email",
      "Horitzontal per email",
      "Word document",
    ],
    a: 1,
    exp: "Callsheet: Vertical PDF format enviat per email.",
    difficulty: "medium",
  },
];

const quizDataEN_Set5 = [
  {
    q: "PARENTHETICAL in script",
    opts: [
      "Within asterisks",
      "Within parentheses",
      "Within quotes",
      "Within dashes",
    ],
    a: 1,
    exp: "PARENTHETICAL: Within parentheses (tone, action) after character or dialogue.",
    difficulty: "easy",
  },
  {
    q: "TRANSITION in script",
    opts: [
      "Actor transition",
      "Location transition",
      "Information about scene change",
      "Sound transition",
    ],
    a: 2,
    exp: "TRANSITION: Specifies mode of passage between scenes (CUT TO, FADE, DISSOLVE, etc).",
    difficulty: "medium",
  },
  {
    q: "Standard format: Font and size",
    opts: ["Arial 11", "Times New Roman 12", "Courier 12", "Helvetica 14"],
    a: 2,
    exp: "Standard format: Courier 12pt on A4 paper.",
    difficulty: "easy",
  },
  {
    q: "1 page standard script",
    opts: [
      "30 seconds screen",
      "1 minute screen",
      "2 minutes screen",
      "5 minutes screen",
    ],
    a: 1,
    exp: "1 page = ~1 minute footage. ~2 hours shooting approx.",
    difficulty: "medium",
  },
  {
    q: "Duration marked: FULL PAGE",
    opts: ["8/8", "7/8", "1 PAGE", "8th"],
    a: 2,
    exp: "Full pages indicated as '1 PAGE', not as 8/8.",
    difficulty: "medium",
  },
  {
    q: "Marking elements: When",
    opts: [
      "Every time appears",
      "First time appears",
      "Each appearance different place",
      "Never",
    ],
    a: 1,
    exp: "Mark each element ONCE per scene (golden rule).",
    difficulty: "hard",
  },
  {
    q: "Standard colors: Art Department",
    opts: ["Blue", "Green", "Red", "Orange"],
    a: 1,
    exp: "Art Department = GREEN in breakdown.",
    difficulty: "easy",
  },
  {
    q: "Standard colors: Sound",
    opts: ["Yellow", "Blue", "Orange", "Green"],
    a: 0,
    exp: "Sound = YELLOW in standard breakdown.",
    difficulty: "easy",
  },
  {
    q: "Standard colors: Wardrobe",
    opts: ["Pink", "Lilac/Purple", "Orange", "Blue"],
    a: 1,
    exp: "Wardrobe = LILAC in breakdown.",
    difficulty: "easy",
  },
  {
    q: "Breakdown tools: Marking",
    opts: [
      "Digital only",
      "By hand with pencils only",
      "Both methods valid",
      "Keyboard",
    ],
    a: 2,
    exp: "Can mark elements by hand with colored pencils or digitally in software.",
    difficulty: "medium",
  },
  {
    q: "Synopsis: Duration",
    opts: ["1 line", "1 paragraph", "Half page", "2-3 pages"],
    a: 2,
    exp: "Synopsis: Maximum half A4 page, without describing ending.",
    difficulty: "medium",
  },
  {
    q: "Treatment: Duration",
    opts: ["1 page", "3 pages", "2-10 pages", "20+ pages"],
    a: 2,
    exp: "Treatment: Typically 2-10 pages, without dialogue.",
    difficulty: "medium",
  },
  {
    q: "Project Cover Sheet: Includes",
    opts: [
      "Just title",
      "Title + type + duration",
      "Title + type + form + duration + format + language + producer",
      "Just financial info",
    ],
    a: 2,
    exp: "Cover Sheet: Title, Type, Form, Duration, Format, Language, Producer, Country.",
    difficulty: "hard",
  },
  {
    q: "Magliner on set",
    opts: [
      "Portable light",
      "Equipment trolley",
      "Director's chair",
      "Video monitor",
    ],
    a: 1,
    exp: "Magliner: Equipment trolley placed near camera without entering frame.",
    difficulty: "medium",
  },
  {
    q: "Camera tape colors: Function",
    opts: [
      "Decoration",
      "Mark actor positions",
      "Identify cameras",
      "Mark lights",
    ],
    a: 1,
    exp: "Camera tape marks actor positions in T-shape. Each actor has colour.",
    difficulty: "medium",
  },
  {
    q: "PU (Pick-Up) means",
    opts: [
      "New take different day",
      "Take from specific point within same shot",
      "Easy take",
      "Backup take",
    ],
    a: 1,
    exp: "PU: Additional take of same shot from previous day.",
    difficulty: "hard",
  },
  {
    q: "Artistic scout: Who attends?",
    opts: [
      "Everyone",
      "Director, DP, Art",
      "Director, PM, AD",
      "Just director",
    ],
    a: 1,
    exp: "Artistic scout: Director, DP, Production Designer (3 creative heads).",
    difficulty: "hard",
  },
  {
    q: "Technical scout: Who attends?",
    opts: [
      "Director and DP",
      "All department heads",
      "Just production",
      "Just AD",
    ],
    a: 1,
    exp: "Technical scout: ALL department heads (DP, Gaffer, Art, Sound, AD, PM).",
    difficulty: "hard",
  },
  {
    q: "Callsheet: When sent?",
    opts: ["1 day before", "12 hours before", "1 hour before", "Previous day"],
    a: 1,
    exp: "Callsheet MUST be sent maximum 12 hours before call time.",
    difficulty: "easy",
  },
  {
    q: "Callsheet: Format",
    opts: [
      "Horizontal PDF",
      "Vertical PDF by email",
      "Horizontal by email",
      "Word document",
    ],
    a: 1,
    exp: "Callsheet: Vertical PDF format sent by email.",
    difficulty: "medium",
  },
];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  applySettings();
  setupEventListeners();
  initializeLanguage();
  renderLessons("teams");
  updateStats();
  updateSessionTime();
});

// ============================================
// LANGUAGE SYSTEM
// ============================================

function initializeLanguage() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.lang === appState.currentLanguage) {
      btn.classList.add("active");
    }
  });
  updateLanguageContent();
}

function setLanguage(lang) {
  appState.currentLanguage = lang;
  saveState();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.lang === lang) btn.classList.add("active");
  });

  updateLanguageContent();

  if (appState.currentTab === "lessons") {
    renderLessons(appState.currentLesson);
  } else if (appState.currentTab === "cards") {
    renderFlashcards();
  } else if (appState.currentTab === "quiz") {
    renderQuiz();
  }
}

function translate(key) {
  return translations[appState.currentLanguage]?.[key] || key;
}

function updateLanguageContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translate(key);
  });
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
  // Language selector
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Tab Navigation
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tabName = e.target.dataset.tab;
      switchTab(tabName);
    });
  });

  // Lesson buttons
  document.querySelectorAll(".lesson-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const lessonName = e.target.dataset.lesson;
      selectLesson(lessonName);
    });
  });

  // Apunts buttons
  document.querySelectorAll(".apunts-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const apuntName = e.target.dataset.apunt;
      renderApunts(apuntName);
    });
  });

  // Search & Filter
  const searchInput = document.getElementById("cardSearch");
  if (searchInput) searchInput.addEventListener("input", filterCards);

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      filterCards();
    });
  });

  // Settings
  document
    .getElementById("darkMode")
    .addEventListener("change", toggleDarkMode);
  document.getElementById("soundToggle").addEventListener("change", (e) => {
    appState.sound = e.target.checked;
    saveState();
  });
  document.getElementById("autoFlip").addEventListener("change", (e) => {
    appState.autoFlip = e.target.checked;
    saveState();
  });

  // Notes
  const notesArea = document.getElementById("notesTextarea");
  if (notesArea) notesArea.value = appState.notes;

  // Quiz
  const diffSelect = document.getElementById("difficultySelect");
  if (diffSelect) {
    diffSelect.addEventListener("change", () => {
      appState.quizAnswers = {};
      renderQuiz();
      updateQuizScore();
    });
  }
}

// ============================================
// TAB SWITCHING
// ============================================

function switchTab(tabName) {
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => c.classList.remove("active"));
  document.getElementById(tabName).classList.add("active");

  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");

  appState.currentTab = tabName;
  saveState();

  if (tabName === "cards") {
    appState.filteredCards = getFlashcardsData();
    renderFlashcards();
  } else if (tabName === "quiz") {
    renderQuiz();
  } else if (tabName === "apunts") {
    renderApunts("howtoread");
  }
}

// ============================================
// APUNTS SYSTEM
// ============================================

function renderApunts(apuntName) {
  const lang = appState.currentLanguage;
  const apuntsContent = document.getElementById("apuntsContent");

  if (!apuntsContent) return;

  const apunt = apuntsData[lang]?.[apuntName];
  if (!apunt) return;

  // Update buttons
  document.querySelectorAll(".apunts-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.apunt === apuntName) btn.classList.add("active");
  });

  // Build content
  let html = `<div class="apunt-section"><h3>${apunt.title}</h3>`;

  if (apunt.sections) {
    apunt.sections.forEach((section) => {
      html += `
        <div class="apunt-item">
          <h4>${section.heading}</h4>
          <p>${section.content.replace(/\n/g, "<br>")}</p>
        </div>
      `;
    });
  }

  html += `</div>`;
  apuntsContent.innerHTML = html;
}

// ============================================
// LESSONS SYSTEM
// ============================================

function selectLesson(lessonName) {
  appState.currentLesson = lessonName;
  renderLessons(lessonName);

  document.querySelectorAll(".lesson-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.lesson === lessonName) btn.classList.add("active");
  });
}

function renderLessons(lessonName) {
  const lang = appState.currentLanguage;
  const lessons = lessonsData[lang];
  const lesson = lessons[lessonName];

  if (!lesson) return;

  const content = document.getElementById("lessonsContent");
  content.innerHTML = "";

  lesson.sections.forEach((section) => {
    const sectionEl = document.createElement("div");
    sectionEl.className = "lesson-section";

    const titleEl = document.createElement("h3");
    titleEl.textContent = section.name;
    sectionEl.appendChild(titleEl);

    section.items.forEach((item) => {
      const itemEl = document.createElement("div");
      itemEl.className = "lesson-item";
      itemEl.innerHTML = `
        <div class="lesson-item-title">${item.title}</div>
        <div class="lesson-item-desc">${item.desc}</div>
      `;
      sectionEl.appendChild(itemEl);
    });

    content.appendChild(sectionEl);
  });
}

// ============================================
// FLASHCARDS
// ============================================

function getFlashcardsData() {
  const lang = appState.currentLanguage;
  const baseCards = lang === "ca" ? flashcardsDataCA : flashcardsDataEN;
  const extendedCards =
    lang === "ca" ? flashcardsDataCA_Extended : flashcardsDataEN_Extended;
  return [...baseCards, ...extendedCards];
}

function renderFlashcards() {
  const grid = document.getElementById("cardsGrid");
  grid.innerHTML = "";

  appState.filteredCards.forEach((card, idx) => {
    const cardEl = document.createElement("div");
    cardEl.className = "flashcard";
    cardEl.dataset.index = idx;
    cardEl.style.transformStyle = "preserve-3d";

    // NO mostrar flashcards girades al caregar (sense .flipped)
    // Sols s'afegeix si l'usuari ja l'ha clicat manualment

    const hintText =
      appState.currentLanguage === "ca"
        ? "clica per girar ↓"
        : "click to flip ↓";

    cardEl.innerHTML = `
      <div class="flashcard-category">${card.cat}</div>
      <div class="flashcard-inner">
        <div class="flashcard-front">${card.q}</div>
        <div class="flashcard-back">${card.a}</div>
      </div>
      <div class="flashcard-hint">${hintText}</div>
    `;

    cardEl.addEventListener("click", () => toggleFlashcard(cardEl, idx));
    grid.appendChild(cardEl);
  });

  updateStats();
}

function toggleFlashcard(cardEl, idx) {
  cardEl.classList.toggle("flipped");
  if (cardEl.classList.contains("flipped")) {
    appState.mastered.add(idx);
    playSound();
  }
  saveState();
  updateStats();
}

function filterCards() {
  const query = document.getElementById("cardSearch").value.toLowerCase();
  const activeFilter =
    document.querySelector(".filter-btn.active").dataset.category;
  const allCards = getFlashcardsData();

  appState.filteredCards = allCards.filter((card) => {
    const matchesQuery =
      card.q.toLowerCase().includes(query) ||
      card.a.toLowerCase().includes(query);
    const matchesCategory = activeFilter === "all" || card.cat === activeFilter;
    return matchesQuery && matchesCategory;
  });

  renderFlashcards();
}

// ============================================
// QUIZ
// ============================================

function getQuizData() {
  const sets =
    appState.currentLanguage === "ca"
      ? [
          quizDataCA_Set1,
          quizDataCA_Set2,
          quizDataCA_Set3,
          quizDataCA_Set4,
          quizDataCA_Set5,
        ]
      : [
          quizDataEN_Set1,
          quizDataEN_Set2,
          quizDataEN_Set3,
          quizDataEN_Set4,
          quizDataEN_Set5,
        ];

  // Randomly select one set
  const randomIndex = Math.floor(Math.random() * sets.length);
  return sets[randomIndex];
}

function renderQuiz() {
  const difficulty = document.getElementById("difficultySelect").value;
  const allQuestions = getQuizData();
  const filteredQuestions =
    difficulty === "all"
      ? allQuestions
      : allQuestions.filter((q) => q.difficulty === difficulty);

  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  filteredQuestions.forEach((question, idx) => {
    const qBlock = document.createElement("div");
    qBlock.className = "question-block";

    const questionEl = document.createElement("div");
    questionEl.className = "question-text";
    questionEl.innerHTML = `<span class="question-number">${idx + 1}</span>${question.q}`;
    qBlock.appendChild(questionEl);

    const optionsEl = document.createElement("div");
    optionsEl.className = "options";

    question.opts.forEach((opt, optIdx) => {
      const optEl = document.createElement("div");
      optEl.className = "option";
      optEl.innerHTML = `
        <span class="option-letter">${String.fromCharCode(65 + optIdx)})</span>
        <span class="option-text">${opt}</span>
      `;

      optEl.addEventListener("click", () =>
        selectAnswer(optEl, question, idx, optIdx),
      );
      optionsEl.appendChild(optEl);
    });

    qBlock.appendChild(optionsEl);

    const expEl = document.createElement("div");
    expEl.className = "explanation";
    expEl.textContent = question.exp;
    qBlock.appendChild(expEl);

    container.appendChild(qBlock);
  });
}

function selectAnswer(optEl, question, qIdx, optIdx) {
  const block = optEl.closest(".question-block");

  if (appState.quizAnswers[qIdx] !== undefined) return;

  appState.quizAnswers[qIdx] = optIdx;
  saveState();

  const options = block.querySelectorAll(".option");
  options.forEach((o) => o.classList.add("disabled"));

  if (optIdx === question.a) {
    optEl.classList.add("correct");
    playSound();
  } else {
    optEl.classList.add("wrong");
    options[question.a].classList.add("correct");
  }

  block.querySelector(".explanation").classList.add("show");
  updateQuizScore();
}

function updateQuizScore() {
  const difficulty = document.getElementById("difficultySelect").value;
  const allQuestions = getQuizData();
  const filteredQuestions =
    difficulty === "all"
      ? allQuestions
      : allQuestions.filter((q) => q.difficulty === difficulty);

  let correctCount = 0;
  Object.entries(appState.quizAnswers).forEach(([qIdx, optIdx]) => {
    if (
      parseInt(qIdx) < filteredQuestions.length &&
      optIdx === filteredQuestions[parseInt(qIdx)].a
    ) {
      correctCount++;
    }
  });

  const answered = Object.keys(appState.quizAnswers).length;
  const percentage =
    answered > 0 ? Math.round((correctCount / answered) * 100) : 0;

  document.getElementById("scoreNum").textContent = correctCount;
  document.getElementById("scoreDen").textContent = answered;
  document.getElementById("scorePercentage").textContent = `${percentage}%`;

  let color = "color: var(--error-color)";
  if (percentage >= 70) color = "color: var(--success-color)";
  else if (percentage >= 50) color = "color: var(--warning-color)";

  document.getElementById("scorePercentage").style.cssText = color;
}

// ============================================
// STATS
// ============================================

function updateStats() {
  const total = appState.filteredCards.length || getFlashcardsData().length;
  const mastered = Array.from(appState.mastered).filter(
    (idx) => idx < total,
  ).length;

  document.getElementById("totalCards").textContent = total;
  document.getElementById("masteredCards").textContent = mastered;
  document.getElementById("pendingCards").textContent = total - mastered;
}

// ============================================
// NOTES
// ============================================

function saveNotes() {
  appState.notes = document.getElementById("notesTextarea").value;
  saveState();

  const status = document.getElementById("notesStatus");
  status.textContent = "✓ Guardat!";
  status.classList.add("show");
  setTimeout(() => status.classList.remove("show"), 3000);
}

function clearNotes() {
  if (confirm("¿Estàs segur?")) {
    document.getElementById("notesTextarea").value = "";
    appState.notes = "";
    saveState();
  }
}

// ============================================
// SETTINGS
// ============================================

function toggleDarkMode(e) {
  appState.darkMode = e.target.checked;
  applySettings();
  saveState();
}

function applySettings() {
  if (appState.darkMode) {
    document.body.classList.add("dark-mode");
    document.getElementById("darkMode").checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("darkMode").checked = false;
  }

  document.getElementById("soundToggle").checked = appState.sound;
  document.getElementById("autoFlip").checked = appState.autoFlip;
}

function playSound() {
  if (!appState.sound) return;

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);

  oscillator.frequency.value = 800;
  oscillator.type = "sine";
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.1);
}

function updateSessionTime() {
  const elapsed = Math.floor((Date.now() - appState.sessionStartTime) / 60000);
  document.getElementById("sessionTime").textContent = elapsed;
  setTimeout(updateSessionTime, 60000);
}

// ============================================
// STATE PERSISTENCE
// ============================================

function saveState() {
  const state = {
    mastered: Array.from(appState.mastered),
    quizAnswers: appState.quizAnswers,
    notes: appState.notes,
    darkMode: appState.darkMode,
    sound: appState.sound,
    autoFlip: appState.autoFlip,
    language: appState.currentLanguage,
  };
  localStorage.setItem("studyGuideState", JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem("studyGuideState");
  if (saved) {
    const state = JSON.parse(saved);
    appState.mastered = new Set(state.mastered);
    appState.quizAnswers = state.quizAnswers || {};
    appState.notes = state.notes || "";
    appState.darkMode = state.darkMode ?? false;
    appState.sound = state.sound ?? true;
    appState.autoFlip = state.autoFlip ?? true;
    appState.currentLanguage = state.language || "ca";
  }
}

// ============================================
// RESET FUNCTIONS
// ============================================

function resetQuiz() {
  appState.quizAnswers = {};
  saveState();
  renderQuiz();
  updateQuizScore();
}

function resetAllProgress() {
  if (confirm("¿Esborrar tot el progres?")) {
    appState.mastered = new Set();
    appState.quizAnswers = {};
    appState.notes = "";
    appState.sessionStartTime = Date.now();
    saveState();
    location.reload();
  }
}

// Auto-save notes
document.addEventListener("beforeunload", () => {
  const notesArea = document.getElementById("notesTextarea");
  if (notesArea) {
    appState.notes = notesArea.value;
    saveState();
  }
});
