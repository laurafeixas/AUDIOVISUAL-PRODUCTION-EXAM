// ============================================
// MULTILINGUAL DATA & LESSONS - COMPLETE VERSION
// ============================================

const translations = {
  ca: {
    lessons: "Temari Complet",
    lessonsDesc: "Aprèn tots els temes per a l'examen de producció audiovisual",
    flashcards: "Flashcards",
    quiz: "Test d'Examen",
    notes: "Les Meves Notes",
    settings: "Preferències",
    darkMode: "Mode fosc",
    sound: "Efectes de so",
    sessionTime: "Temps",
    save: "Guardar",
    clear: "Netejar",
    reset: "Reiniciar",
  },
  en: {
    lessons: "Complete Curriculum",
    lessonsDesc: "Learn all topics for audiovisual production",
    flashcards: "Flashcards",
    quiz: "Practice Test",
    notes: "My Notes",
    settings: "Settings",
    darkMode: "Dark mode",
    sound: "Sound effects",
    sessionTime: "Study time",
    save: "Save",
    clear: "Clear",
    reset: "Reset",
  },
};

const lessonsData = {
  ca: {
    teams: {
      title: "Equips & Rols",
      sections: [
        {
          name: "Equip Creatiu",
          items: [
            { title: "Productor", desc: "Supervisió general del projecte" },
            {
              title: "Productor executiu",
              desc: "Controla els diners. Als EEUU = mateix que director, té l'última paraula",
            },
            {
              title: "Director",
              desc: "Roda l'storyboard ja plantejat. Visió de storytelling. Millor si no és guionista",
            },
            { title: "Guionista", desc: "Escriu el guió literari" },
          ],
        },
        {
          name: "Equip de Direcció",
          items: [
            {
              title: "1r AD",
              desc: "Fa que el guió es faci realitat al set. Elabora tots els documents de producció (escaleta, callsheet, pla de rodatge)",
            },
            {
              title: "2n AD (set)",
              desc: "Mou actors, informa de l'estatus al 1r AD",
            },
            {
              title: "2n AD (papers)",
              desc: "Gestiona els papers i els traspassa",
            },
            { title: "3r AD / Auxiliar", desc: "Mou els figurants" },
            {
              title: "Script Supervisor",
              desc: "Controla el racord de tota la pel·li. Mira clips, fa timing, guió ratllat, parte de càmera i producció",
            },
            {
              title: "Coach de menors",
              desc: "Treballa amb actors menors d'edat",
            },
            {
              title: "Coordinador d'intimitat",
              desc: "Gestiona escenes de nuesa o contacte físic",
            },
          ],
        },
        {
          name: "Càmera",
          items: [
            {
              title: "DOP/DP",
              desc: "Dirigeix càmera, llums i grip. Diu, no cal que sigui tècnic",
            },
            { title: "Operador", desc: "Opera la càmera" },
            {
              title: "Foquista (1r AC)",
              desc: "Comprova el focus, no munta la càmera",
            },
            {
              title: "Ajudant càmera (2n AC)",
              desc: "Munta la càmera. Posa marques en T al terra",
            },
            {
              title: "Data Wrangler",
              desc: "Transfereix fitxers. Sempre 3 còpies. Mai HDD→HDD",
            },
            {
              title: "DIT",
              desc: "Posa LUTs als plans per veure el color final aproximat",
            },
            {
              title: "Vídeo Assistent",
              desc: "Monitor (combo) que mira el director. Moure'l costa temps",
            },
          ],
        },
        {
          name: "Llums & Grip",
          items: [
            {
              title: "Gaffer",
              desc: "Mà dreta del DOP. Gestor de l'equip de llums",
            },
            { title: "Best Boy", desc: "Assistent del gaffer" },
            { title: "Elèctrics", desc: "Munten cables i elements elèctrics" },
            {
              title: "Maquinista / Grip",
              desc: "Munten rails, dollies, grues",
            },
            {
              title: "Steady cam op.",
              desc: "Ve amb el seu material, ~1h per muntar",
            },
          ],
        },
        {
          name: "So",
          items: [
            {
              title: "Cap de so / Sonidista",
              desc: "Grava tots els sons al set + wild tracks (durada doble de la seqüència)",
            },
            {
              title: "Perchista / Boom op.",
              desc: "Opera el micròfon de perxa. S'espera al final per no molestar",
            },
            {
              title: "Editor de so (post)",
              desc: "Fa els foleys en postproducció",
            },
          ],
        },
        {
          name: "Caracterització",
          items: [
            {
              title: "Maquillatge",
              desc: "Proves de llum prèvies obligatòries",
            },
            { title: "Perruqueria", desc: "Treballa amb maquillatge" },
            {
              title: "Vestuari",
              desc: "Coordina amb perchista per passar els micros",
            },
          ],
        },
        {
          name: "Art / Decoració",
          items: [
            {
              title: "Dir. d'Art / Prod. Designer",
              desc: "Decideix estètica i decoració",
            },
            {
              title: "Regidor",
              desc: "Aconsegueix i transporta elements grans",
            },
            {
              title: "Ajudant rodatge",
              desc: "Posa elements al lloc per rodar",
            },
            {
              title: "Atretzzista / Props master",
              desc: "Controla tots els props dels personatges",
            },
          ],
        },
        {
          name: "Edició",
          items: [
            { title: "Editor", desc: "Munta la pel·li en postproducció" },
            {
              title: "Ajudant de muntatge",
              desc: "Organitza i classifica les tomes",
            },
            {
              title: "Script Supervisor (post)",
              desc: "Mira clips, documenta totes les tomes",
            },
          ],
        },
        {
          name: "Ordre d'entrada al set",
          items: [
            { title: "1. Art", desc: "Prepara l'espai" },
            {
              title: "2. Foto / DOP",
              desc: "Càmera vestida, muntada fora del set",
            },
            {
              title: "3. Càmera",
              desc: "Entra, pregunta on va el primer plano, posa el Magliner",
            },
            {
              title: "4. Director",
              desc: "Compra el plano (mira si funciona)",
            },
            { title: "5. Actors + Script", desc: "Amb Script Supervisor" },
            {
              title: "6. Sonidista",
              desc: "S'espera que tothom es col·loqui, planifica on va la perxa",
            },
          ],
        },
        {
          name: "Ordre de gravació",
          items: [
            { title: "1. Vídeo", desc: "Vídeo gravant" },
            { title: "2. So", desc: "So gravant" },
            { title: "3. Càmera", desc: "Càmera gravant" },
            { title: "4. Pausa", desc: "" },
            { title: "5. Claqueta", desc: "Clack" },
            { title: "6. Quadra", desc: "Comprova enquadrament i focus" },
            { title: "7. Acció figuració", desc: "" },
            { title: "8. Acció actors", desc: "" },
            { title: "9. Tallem", desc: "NOMÉS el director pot tallar" },
          ],
        },
      ],
    },
    preproduction: {
      title: "Preproducció",
      sections: [
        {
          name: "Calendari de preproducció",
          items: [
            {
              title: "Guió líquid",
              desc: "Base modificable. Ex: VER.7 → versions 7.1, 7.2, 7.3…",
            },
            {
              title: "Reunió de guió",
              desc: "Dimarts setmana -5. Assiteixen: Director, DOP, Producció, Dir. Art, Vestuari, Maquillatge, So, AD (porta veu), Script (convidat)",
            },
            {
              title: "Colors del desglos",
              desc: "Taronja=Càsting, Verd=Art, Blau=Foto, Groc=So, Rosa=Makeup, Lila=Vestuari, Vermell=Producció",
            },
            {
              title: "Localitzacions (setmana -4)",
              desc: "Loca Artística: Director+DOP+Dir.Art. Loca Tècnica: tots els caps",
            },
            {
              title: "Vestuari (setmana -3)",
              desc: "Demanar: americana, camisa, pantaló, sabata, alçada. MAI pes ni edat",
            },
            {
              title: "Reunió workflow (setmana -2)",
              desc: "DIT, Data Wrangler, Ajudant muntatge, So, Producció",
            },
            {
              title: "Assaig actors (dijous -2)",
              desc: "NOMÉS director + script. AD coordina. Script apunta canvis",
            },
            {
              title: "Callsheet #1 (divendres -1)",
              desc: "Màxim 12h abans. Format: vertical, PDF, correu",
            },
          ],
        },
        {
          name: "Temporalització",
          items: [
            {
              title: "Motor / RTS",
              desc: "Ready To Shoot = hora que li dones al REC",
            },
            {
              title: "Temps per pla",
              desc: "Durada del pla × 7 preses + 3 minuts pel director",
            },
            {
              title: "Exemple",
              desc: "Pla de 3 min → 21 + 3 = 24 min. Si és llarg → 24-27 min",
            },
            {
              title: "Break esmorzar",
              desc: "Millor després de l'escena més difícil (~2 primeres hores)",
            },
            {
              title: "Travel Day",
              desc: "Si es viatja el dia abans → es paga a meitat de preu",
            },
            {
              title: "Trasllat entre set",
              desc: "10-15 min. Entre localitzacions: l'AD cronometra + 10-15 min d'ubicació",
            },
            {
              title: "Recollida (wrap)",
              desc: "30 minuts (producció + tècnics)",
            },
          ],
        },
      ],
    },
    documents: {
      title: "Documents AD",
      sections: [
        {
          name: "Escaleta Cronològica",
          items: [
            {
              title: "Definició",
              desc: "Document que llista totes les seqüències en ordre cronològic de la història (no d'ordre de rodatge)",
            },
            {
              title: "Capçalera",
              desc: "Versió + nom i cognom AD, Director, DOP",
            },
            {
              title: "Per cada seqüència",
              desc: "INT/EXT · LOCA ficció · Descripció (2 línies) · DIA/NIT · Octaus · Nre. plans",
            },
            {
              title: "Casting",
              desc: "Números per ordre d'aparició. 01 pot ser protagonista",
            },
            {
              title: "Dies de Ficció",
              desc: "Número de dia de la història. No canvia pel temps real",
            },
            { title: "Flashbacks", desc: "S'indiquen com FB-1, FB-2…" },
          ],
        },
        {
          name: "Desglos de Necessitats",
          items: [
            {
              title: "Estructura de personatges",
              desc: "Protagonistes, Secundaris, Reparto, Figuració especial, Figuració, Stunts, Semovients",
            },
            {
              title: "Codificació vestuari",
              desc: "01.V1 = Actor 01 vestuari 1 · 01.V0 = Nus (inclou sabatilles + barnús)",
            },
            {
              title: "TBC / TBD",
              desc: "TBC = To Be Confirmed · TBD = To Be Determined",
            },
            {
              title: "SM",
              desc: "Sus Medios (vé pels seus propis mitjans). Actors MAI en SM",
            },
            { title: "NT", desc: "No Treballa (mai s'esborra el nom)" },
            {
              title: "OC/OP",
              desc: "Orden Propia (ordre de feina del dia a la callsheet)",
            },
          ],
        },
        {
          name: "Callsheet",
          items: [
            {
              title: "Capçalera obligatòria",
              desc: "Directors, Dies, Localització, Meteorologia, Avisos",
            },
            {
              title: "Horaris",
              desc: "Manteniment, Bocata, RTS/Motor, Enviament",
            },
            {
              title: "Enviament",
              desc: "Màxim 12h abans de l'hora de citació. Format: vertical, PDF, correu",
            },
          ],
        },
        {
          name: "Documents del Script Supervisor",
          items: [
            {
              title: "Timing",
              desc: "Calcula la durada de les seqüències → durada total de la pel·li",
            },
            {
              title: "Parte de càmera",
              desc: "Seq., data, dia ficció, efecte, loca, personatges, vestuari/maquillatge, descripció cronològica",
            },
            { title: "Guió ratllat", desc: "Cada línia = una presa" },
            {
              title: "Parte de producció",
              desc: "Totes les escenes rodades cada dia",
            },
          ],
        },
        {
          name: "La Claqueta",
          items: [
            {
              title: "ROLL",
              desc: "Targeta (#A001). A/B = Càmera A o B. Cinema: lletres. TV: números",
            },
            { title: "SCENE/SHOT", desc: "Ex: 3/1 = Escena 3, Pla 1" },
            {
              title: "TAKE",
              desc: "Número de toma. PU = Pick Up (des d'un punt del mateix pla)",
            },
            { title: "SYNC / MOS", desc: "So o Mut" },
            {
              title: "DATE",
              desc: "Dia natural, però al set es parla en 'dies de rodatge'",
            },
          ],
        },
      ],
    },
    breakdown: {
      title: "Script Breakdown",
      sections: [
        {
          name: "Elements del guió",
          items: [
            {
              title: "Scene Heading / Slugline",
              desc: "INT. CASA MARIA — DIA",
            },
            { title: "Action", desc: "Descriu el que passa a l'escena" },
            {
              title: "Character",
              desc: "En MAJÚSCULES, immeditament seguit del diàleg",
            },
            {
              title: "Dialogue",
              desc: "No pot existir sense un element Character immediatament abans",
            },
            {
              title: "Parenthetical",
              desc: "Entre parèntesis, segueix un Character o Dialogue",
            },
            { title: "Transition", desc: "CUT TO, DISSOLVE, etc." },
            {
              title: "Format estàndard",
              desc: "Courier 12pt en A4 → 1 pàgina ≈ 1 minut de pantalla",
            },
          ],
        },
        {
          name: "Mesurar en Octaus",
          items: [
            {
              title: "Sistema",
              desc: "Cada pàgina de guió es divideix en 8 parts iguals",
            },
            {
              title: "1/8 ≈ 15 min de rodatge",
              desc: "1 pàgina completa ≈ 2 hores de rodatge (sense preparació)",
            },
            { title: "Si menys d'1 polzada", desc: "Encara es compta com 1/8" },
            { title: "1 pàgina completa", desc: "S'escriu '1 PAGE', no '8/8'" },
            { title: "1 pàg + 1/8", desc: "S'escriu '1⅛ PAGE', no '9/8'" },
          ],
        },
        {
          name: "Normes cinematogràfiques",
          items: [
            {
              title: "Regla dels 180°",
              desc: "Primera càmera estableix l'eix. Totes les càmeres al mateix costat",
            },
            { title: "Jump cuts", desc: "Mínim 30° de diferència entre plans" },
            {
              title: "Partes i restos",
              desc: "Seqüència dividida en 2 parts → 'Parte 1 + Resto 1'. Més de 2 → 1A, 1B, 1C…",
            },
          ],
        },
        {
          name: "Breakdown Sheets",
          items: [
            {
              title: "1 full = 1 escena normalment",
              desc: "Si 27 sluglines → 27 fulls",
            },
            {
              title: "Capçalera",
              desc: "Número escena · Pàgina guió · Octaus · DIA/NIT · INT/EXT · Localització",
            },
            { title: "Cast", desc: "Per ordre de número assignat. Extres: 62" },
            {
              title: "DQs",
              desc: "Director Questions — preguntes per resoldre",
            },
          ],
        },
      ],
    },
    folder: {
      title: "Production Folder",
      sections: [
        {
          name: "Documents d'identitat",
          items: [
            { title: "Logline", desc: "Idea central. Màxim 3 línies" },
            { title: "Sinopsi", desc: "Visió general. Màxim ½ A4" },
            {
              title: "Treatment",
              desc: "Descripció detallada en prosa. 2-10 pàgines. Sense diàlegs",
            },
            { title: "Script", desc: "Courier 12pt en A4. Complet" },
          ],
        },
        {
          name: "Documents Creatius",
          items: [
            {
              title: "Format & Paràmetres",
              desc: "Durada objectiu · Format imatge · Format so · Color/BN",
            },
            {
              title: "Temes i Focus Artístic",
              desc: "2-5 temes clau · Rellevància actual · Límits deliberats",
            },
            {
              title: "Argument i Estructura",
              desc: "Pregunta central · Enfocament estructural",
            },
            {
              title: "Refs Visuals i Sonores",
              desc: "Films, fotografia, obres d'art, textures, ritme, so, mood board",
            },
            {
              title: "Ètica i Responsabilitat",
              desc: "Consentiment · Riscos de representació · Gestió material sensible",
            },
          ],
        },
        {
          name: "Persones i Accés",
          items: [
            {
              title: "Col·laboradors clau",
              desc: "Bio professional + rol + contribució específica",
            },
            {
              title: "Cast / Participants",
              desc: "Noms · Disponibilitat · Consideracions especials",
            },
            {
              title: "Localitzacions",
              desc: "Descripció · Estat accés · Restriccions",
            },
            {
              title: "Permisos",
              desc: "Autoritzacions · Releases · Drets musicals",
            },
          ],
        },
        {
          name: "Context i Vida Posterior",
          items: [
            {
              title: "Mercat / Festivals",
              desc: "Festivals rellevants amb justificació",
            },
            {
              title: "Estratègia distribució",
              desc: "Audiència objectiu · Contexts de circulació",
            },
            {
              title: "Estratègia comunicació",
              desc: "Identitat visual · Pòster/tràiler · Premsa",
            },
            {
              title: "Lliurament final",
              desc: "Versions · Crèdits · Subtítols · Arxiu",
            },
          ],
        },
      ],
    },
    budget: {
      title: "Pressupost",
      sections: [
        {
          name: "Categories",
          items: [
            {
              title: "Desenvolupament",
              desc: "Recerca · Escriptura · Temps de dev. · Viatges recerca",
            },
            {
              title: "Preproducció",
              desc: "Coordinació · Scouting · Permisos · Planificació · Assajos",
            },
            {
              title: "Producció — Personal",
              desc: "Director, productor, càmera, so, actors/participants",
            },
            {
              title: "Producció — Equipament",
              desc: "Càmera · So · Llums · Dades",
            },
            {
              title: "Producció — Logística",
              desc: "Transport · Allotjament · Menjar · Taxes localització",
            },
            {
              title: "Postproducció",
              desc: "Edició · So · Música · Color · Subtítols",
            },
            {
              title: "Drets i llicències",
              desc: "Arxiu · Música · Drets imatge · Taxes legals",
            },
            {
              title: "Promoció i distribució",
              desc: "DCP · Taxes festivals · Materials premsa",
            },
            {
              title: "Fee productor",
              desc: "Fee + administració + comptabilitat",
            },
            { title: "Contingència", desc: "5–10% del total" },
          ],
        },
        {
          name: "Temps de rodatge estimat",
          items: [
            { title: "1/8 pàgina", desc: "≈ 15 minuts de rodatge" },
            {
              title: "1 pàgina completa",
              desc: "≈ 2 hores de rodatge (abans de preparació)",
            },
            {
              title: "Dia de rodatge",
              desc: "Arriba fàcilment a 12h sumant muntatge, preparació, descansos",
            },
            { title: "Escenes de diàleg", desc: "Més predictibles en temps" },
            { title: "Escenes d'acció", desc: "Menys predictibles en temps" },
          ],
        },
      ],
    },
    howtoread: {
      title: "Com Llegir un Script",
      sections: [
        {
          name: "Elements del Guió",
          items: [
            {
              title: "SLUGLINE",
              desc: "INT/EXT, ubicació, dia/nit al començament cada escena",
            },
            {
              title: "ACTION",
              desc: "Descripció de ubicació, personatges, accions i moviments",
            },
            {
              title: "CHARACTER",
              desc: "Noms en MAJÚSCULES, seguits immediatament per diàleg",
            },
            {
              title: "DIALOGUE",
              desc: "No pot existir sense Character element immediatament anterior",
            },
            {
              title: "PARENTHETICAL",
              desc: "Entre parèntesis (tone, action) después de Character o Dialogue",
            },
            {
              title: "TRANSITION",
              desc: "Especifica com passa entre escenes (CUT TO, FADE, DISSOLVE)",
            },
          ],
        },
        {
          name: "Format Estàndard",
          items: [
            { title: "Font i Mida", desc: "Courier 12 punts en paper A4" },
            {
              title: "Durada per Pàgina",
              desc: "1 pàgina ≈ 1 minut pantalla ≈ 2 hores rodatge",
            },
            {
              title: "Divisió Octavos",
              desc: "Pàgina completa = 8/8. Menys d'1 polzada = 1/8",
            },
            {
              title: "Notació",
              desc: "Pàgines completes: '1 PAGE' (no 8/8). Exemple: 1⅛ PAGE",
            },
          ],
        },
      ],
    },
    breakdown: {
      title: "The Breakdown",
      sections: [
        {
          name: "Conceptes Clau",
          items: [
            {
              title: "Primera Regla",
              desc: "Llegir el guió complet primer per entendre-ho tot",
            },
            {
              title: "Escena Dramàtica",
              desc: "Unitat narrativa que pot saltar entre ubicacions o temps",
            },
            {
              title: "Escena Producció",
              desc: "Definida pel slugline. Cada canvi INT/EXT o hora = nova escena",
            },
            {
              title: "Quan NO Slugline",
              desc: "Per nou angle, continuació accio, beat psicologic, inserts",
            },
          ],
        },
        {
          name: "Marcar Elements",
          items: [
            {
              title: "Norma d'Or",
              desc: "Marca cada element UNA VEGADA per escena",
            },
            {
              title: "Colors Estàndard",
              desc: "Art=Verd, So=Groc, Vestuari=Lila, Maquillatge=Rosa, Producció=Vermell, Foto=Blau, Càsting=Taronja",
            },
            {
              title: "Elements a Marcar",
              desc: "Characters, locations, props, wardrobe, VFX, stunts, extras, vehicles, animals, special equipment",
            },
            {
              title: "Breakdown Sheet",
              desc: "Info: Durada, Scene#, Pàgina, Dia/Nit, INT/EXT, Ubicació, Descripció",
            },
          ],
        },
      ],
    },
    productionprocess: {
      title: "Processos de Producció",
      sections: [
        {
          name: "Al Set",
          items: [
            {
              title: "Orden Entrada",
              desc: "1-Art, 2-Càmera (fora), 3-Càmera (dins), 4-Director, 5-Actors+SS, 6-So",
            },
            {
              title: "COMBO Seients",
              desc: "3 úniques: Director, Script Supervisor, DP (DP assegut per accés ràpid)",
            },
            {
              title: "Magliner",
              desc: "Carret equip prop càmera sense entrar frame",
            },
            {
              title: "Camera Tape",
              desc: "Marca posicions actors en forma T. Negre/Blanc estàndard. Color per actor",
            },
          ],
        },
        {
          name: "Clapper i Rodatge",
          items: [
            {
              title: "ROLL",
              desc: "Memory card ID (ex: A001). Lletra = número càmara",
            },
            { title: "SCENE/SHOT", desc: "Ex: 3/1 = Escena 3, Pla 1" },
            {
              title: "TAKE & PU",
              desc: "TAKE = número de presa. PU = presa addicional punt específic",
            },
            {
              title: "SYNC/MOS",
              desc: "SYNC = amb so. MOS = silenciós (Minus OuR Sound)",
            },
            {
              title: "Eix Cinematogràfic",
              desc: "180° Rule: Primeira càmera estableix eix, totes stay même costat",
            },
            {
              title: "Jump Cuts",
              desc: "Mínim 30° angle entre plànols. Menys és massa similar",
            },
          ],
        },
        {
          name: "Pre-Producció",
          items: [
            {
              title: "Semana -5",
              desc: "Dilluns: Guió final. Dimarts: Reunió Script. Dimecres: Desglos, stripboard, casting",
            },
            {
              title: "Semana -4",
              desc: "Scout artístic (Director, DP, Art). Scout tècnic (tothom). Callback casting",
            },
            {
              title: "Semana -2",
              desc: "Workflow meeting (DIT, Data, Editor, So). Assajos actors i tests càmera",
            },
            {
              title: "Semana -1",
              desc: "Equip recull. CALLSHEET #1 enviada max 12h antes. PDF vertical per email",
            },
            {
              title: "Callsheet Info",
              desc: "Título + versió + Director + DP + Día + Ubicació + Hospital + Comissaria + Temps",
            },
          ],
        },
      ],
    },
  },
  en: {
    teams: {
      title: "Teams & Roles",
      sections: [
        {
          name: "Creative Team",
          items: [
            { title: "Producer", desc: "General supervision of the project" },
            {
              title: "Executive Producer",
              desc: "Controls budget. In the US = same as director, has final say",
            },
            {
              title: "Director",
              desc: "Shoots pre-planned storyboard. Storytelling vision",
            },
            { title: "Screenwriter", desc: "Writes literary script" },
          ],
        },
        {
          name: "Direction Team",
          items: [
            {
              title: "1st AD",
              desc: "Makes script come alive on set. Creates all production documents",
            },
            {
              title: "2nd AD (set)",
              desc: "Moves actors, reports status to 1st AD",
            },
            {
              title: "2nd AD (papers)",
              desc: "Manages paperwork and transfers",
            },
            { title: "3rd AD / Auxiliary", desc: "Moves extras" },
            {
              title: "Script Supervisor",
              desc: "Controls continuity. Watches clips, timing, script notes, camera report, production report",
            },
            { title: "Minor Coach", desc: "Works with underage actors" },
            {
              title: "Intimacy Coordinator",
              desc: "Manages scenes of nudity or physical contact",
            },
          ],
        },
        {
          name: "Camera",
          items: [
            {
              title: "DOP/DP",
              desc: "Directs camera, lights and grip. Says what, not how",
            },
            { title: "Operator", desc: "Operates the camera" },
            {
              title: "Focus Puller (1st AC)",
              desc: "Checks focus, does not assemble camera",
            },
            {
              title: "Camera Assistant (2nd AC)",
              desc: "Assembles camera. Marks T's on ground",
            },
            {
              title: "Data Wrangler",
              desc: "Transfers files. Always 3 copies. Never HDD→HDD",
            },
            {
              title: "DIT",
              desc: "Applies LUTs to shots to see approximate final color",
            },
            {
              title: "Video Assistant",
              desc: "Monitor (combo) that director watches. Moving costs time",
            },
          ],
        },
        {
          name: "Lights & Grip",
          items: [
            {
              title: "Gaffer",
              desc: "Right hand of DOP. Manager of lighting team",
            },
            { title: "Best Boy", desc: "Assistant to gaffer" },
            {
              title: "Electricians",
              desc: "Assemble cables and electrical elements",
            },
            {
              title: "Machinist / Grip",
              desc: "Assemble rails, dollies, cranes",
            },
            {
              title: "Steady cam op.",
              desc: "Comes with own equipment, ~1h to set up",
            },
          ],
        },
        {
          name: "Sound",
          items: [
            {
              title: "Sound Supervisor",
              desc: "Records all sounds on set + wild tracks (double sequence duration)",
            },
            {
              title: "Boom Operator",
              desc: "Operates boom microphone. Waits until end to not disturb",
            },
            {
              title: "Sound Editor (post)",
              desc: "Creates foleys in post-production",
            },
          ],
        },
        {
          name: "Characterization",
          items: [
            { title: "Makeup", desc: "Prior light tests mandatory" },
            { title: "Hair", desc: "Works with makeup" },
            {
              title: "Wardrobe",
              desc: "Coordinates with boom op to pass microphones",
            },
          ],
        },
        {
          name: "Art / Decoration",
          items: [
            {
              title: "Art Director / Production Designer",
              desc: "Decides aesthetics and decoration",
            },
            {
              title: "Set Decorator",
              desc: "Acquires and transports large elements",
            },
            {
              title: "Set Dresser",
              desc: "Places elements on location for shooting",
            },
            {
              title: "Atrezista / Props Master",
              desc: "Controls all character props",
            },
          ],
        },
        {
          name: "Editing",
          items: [
            { title: "Editor", desc: "Edits film in post-production" },
            {
              title: "Assistant Editor",
              desc: "Organizes and classifies takes",
            },
            {
              title: "Script Supervisor (post)",
              desc: "Watches clips, documents all takes",
            },
          ],
        },
      ],
    },
    preproduction: {
      title: "Preproduction",
      sections: [
        {
          name: "Preproduction Calendar",
          items: [
            {
              title: "Liquid Script",
              desc: "Modifiable base. Ex: VER.7 → versions 7.1, 7.2",
            },
            {
              title: "Script Meeting",
              desc: "Tuesday week -5. Attendees: Director, DOP, Production, Art Director, Wardrobe, Makeup, Sound, AD, Script",
            },
            {
              title: "Breakdown Colors",
              desc: "Orange=Casting, Green=Art, Blue=Photo, Yellow=Sound, Pink=Makeup, Purple=Wardrobe, Red=Production",
            },
            {
              title: "Locations (week -4)",
              desc: "Artistic Location: Director+DOP+Art Dir. Technical Location: all department heads",
            },
            {
              title: "Wardrobe (week -3)",
              desc: "Request: jacket, shirt, pants, shoes, height. NEVER weight or age",
            },
            {
              title: "Workflow Meeting (week -2)",
              desc: "DIT, Data Wrangler, Assistant Editor, Sound, Production",
            },
            {
              title: "Actor Rehearsal (Thursday -2)",
              desc: "ONLY director + script. AD coordinates. Script notes changes",
            },
            {
              title: "Callsheet #1 (Friday -1)",
              desc: "Maximum 12h before. Format: vertical, PDF, email",
            },
          ],
        },
        {
          name: "Timing",
          items: [
            {
              title: "Motor / RTS",
              desc: "Ready To Shoot = time you give to REC",
            },
            {
              title: "Time per shot",
              desc: "Shot duration × 7 takes + 3 minutes for director",
            },
            {
              title: "Example",
              desc: "3 min shot → 21 + 3 = 24 min. If longer → 24-27 min",
            },
            {
              title: "Breakfast break",
              desc: "Better after most difficult scene (~2 first hours)",
            },
            {
              title: "Travel Day",
              desc: "If traveling day before → paid at half price",
            },
          ],
        },
      ],
    },
    documents: {
      title: "AD Documents",
      sections: [
        {
          name: "Chronological Script",
          items: [
            {
              title: "Definition",
              desc: "Lists all sequences in chronological order of story (not shooting order)",
            },
            {
              title: "Header",
              desc: "Version + names of 1st AD, Director, DOP",
            },
            {
              title: "Per sequence",
              desc: "INT/EXT · Fictional location · Description · DAY/NIGHT · Eighths · Number of shots",
            },
            {
              title: "Casting",
              desc: "Numbers in order of appearance. 01 can be protagonist",
            },
            {
              title: "Days of Fiction",
              desc: "Number of day in story. Doesn't change with real time",
            },
            { title: "Flashbacks", desc: "Indicated as FB-1, FB-2…" },
          ],
        },
        {
          name: "Breakdown of Needs",
          items: [
            {
              title: "Character Structure",
              desc: "Protagonists, Secondary, Supporting, Special Extras, Extras, Stunts, Animals",
            },
            {
              title: "Wardrobe Coding",
              desc: "01.V1 = Actor 01 wardrobe 1 · 01.V0 = Nude (includes slippers + robe)",
            },
            {
              title: "TBC / TBD",
              desc: "TBC = To Be Confirmed · TBD = To Be Determined",
            },
            {
              title: "SM",
              desc: "Sus Medios (uses own means). Actors NEVER in SM",
            },
            { title: "NT", desc: "Not Working (name is never erased)" },
            { title: "OC/OP", desc: "Own Order (order of work on callsheet)" },
          ],
        },
        {
          name: "Callsheet",
          items: [
            {
              title: "Mandatory Header",
              desc: "Directors, Days, Location, Weather, Warnings",
            },
            { title: "Times", desc: "Maintenance, Meal, RTS/Motor, Send" },
            {
              title: "Send",
              desc: "Maximum 12h before call time. Format: vertical, PDF, email",
            },
          ],
        },
        {
          name: "Script Supervisor Documents",
          items: [
            {
              title: "Timing",
              desc: "Calculates duration of sequences → total film duration",
            },
            {
              title: "Camera Report",
              desc: "Seq., date, day of fiction, effect, location, characters, wardrobe/makeup, chronological description",
            },
            { title: "Lined Script", desc: "Each line = one take" },
            { title: "Production Report", desc: "All scenes shot each day" },
          ],
        },
        {
          name: "The Clapper",
          items: [
            {
              title: "ROLL",
              desc: "Card (#A001). A/B = Camera A or B. Cinema: letters. TV: numbers",
            },
            { title: "SCENE/SHOT", desc: "Ex: 3/1 = Scene 3, Shot 1" },
            {
              title: "TAKE",
              desc: "Take number. PU = Pick Up (from point in same shot)",
            },
            { title: "SYNC / MOS", desc: "Sound or Silent" },
            {
              title: "DATE",
              desc: "Calendar date, but on set spoken in 'shooting days'",
            },
          ],
        },
      ],
    },
    breakdown: {
      title: "Script Breakdown",
      sections: [
        {
          name: "Script Elements",
          items: [
            {
              title: "Scene Heading / Slugline",
              desc: "INT. MARIA'S HOUSE — DAY",
            },
            { title: "Action", desc: "Describes what happens in scene" },
            {
              title: "Character",
              desc: "In UPPERCASE, immediately followed by dialogue",
            },
            {
              title: "Dialogue",
              desc: "Cannot exist without Character element before it",
            },
            {
              title: "Parenthetical",
              desc: "In parentheses, follows Character or Dialogue",
            },
            { title: "Transition", desc: "CUT TO, DISSOLVE, etc." },
            {
              title: "Standard Format",
              desc: "Courier 12pt on A4 → 1 page ≈ 1 minute screen time",
            },
          ],
        },
        {
          name: "Measuring in Eighths",
          items: [
            {
              title: "System",
              desc: "Each script page divided into 8 equal parts",
            },
            {
              title: "1/8 ≈ 15 min shooting",
              desc: "1 full page ≈ 2 hours shooting (without setup)",
            },
            { title: "If less than 1 inch", desc: "Still counts as 1/8" },
            { title: "1 full page", desc: "Write '1 PAGE', not '8/8'" },
            { title: "1 page + 1/8", desc: "Write '1⅛ PAGE', not '9/8'" },
          ],
        },
        {
          name: "Cinematographic Norms",
          items: [
            {
              title: "180° Rule",
              desc: "First camera establishes axis. All cameras on same side",
            },
            {
              title: "Jump Cuts",
              desc: "Minimum 30° difference between shots",
            },
            {
              title: "Parts & Remainders",
              desc: "Sequence split in 2 → 'Part 1 + Remainder 1'. More than 2 → 1A, 1B, 1C…",
            },
          ],
        },
        {
          name: "Breakdown Sheets",
          items: [
            {
              title: "1 sheet = 1 scene normally",
              desc: "If 27 sluglines → 27 sheets",
            },
            {
              title: "Header",
              desc: "Scene number · Script page · Eighths · DAY/NIGHT · INT/EXT · Location",
            },
            { title: "Cast", desc: "In order of assigned number. Extras: 62" },
            { title: "DQs", desc: "Director Questions — questions to resolve" },
          ],
        },
      ],
    },
    folder: {
      title: "Production Folder",
      sections: [
        {
          name: "Identity Documents",
          items: [
            { title: "Logline", desc: "Central idea. Maximum 3 lines" },
            { title: "Synopsis", desc: "General view. Maximum ½ A4" },
            {
              title: "Treatment",
              desc: "Detailed prose description. 2-10 pages. No dialogue",
            },
            { title: "Script", desc: "Courier 12pt on A4. Complete" },
          ],
        },
        {
          name: "Creative Documents",
          items: [
            {
              title: "Format & Parameters",
              desc: "Target duration · Image format · Audio format · Color/BW",
            },
            {
              title: "Themes & Artistic Focus",
              desc: "2-5 key themes · Current relevance · Deliberate limits",
            },
            {
              title: "Argument & Structure",
              desc: "Central question · Structural approach",
            },
            {
              title: "Visual & Sound References",
              desc: "Films, photography, artworks, textures, rhythm, sound, mood board",
            },
            {
              title: "Ethics & Responsibility",
              desc: "Consent · Representation risks · Sensitive material management",
            },
          ],
        },
        {
          name: "People & Access",
          items: [
            {
              title: "Key Collaborators",
              desc: "Professional bio + role + specific contribution",
            },
            {
              title: "Cast / Participants",
              desc: "Names · Availability · Special considerations",
            },
            {
              title: "Locations",
              desc: "Description · Access status · Restrictions",
            },
            {
              title: "Permits",
              desc: "Authorizations · Releases · Music rights",
            },
          ],
        },
        {
          name: "Context & Afterlife",
          items: [
            {
              title: "Market / Festivals",
              desc: "Relevant festivals with justification",
            },
            {
              title: "Distribution Strategy",
              desc: "Target audience · Circulation contexts",
            },
            {
              title: "Communication Strategy",
              desc: "Visual identity · Poster/trailer · Press",
            },
            {
              title: "Final Delivery",
              desc: "Versions · Credits · Subtitles · Archive",
            },
          ],
        },
      ],
    },
    budget: {
      title: "Budget",
      sections: [
        {
          name: "Categories",
          items: [
            {
              title: "Development",
              desc: "Research · Writing · Dev time · Research travels",
            },
            {
              title: "Preproduction",
              desc: "Coordination · Scouting · Permits · Planning · Rehearsals",
            },
            {
              title: "Production — Personnel",
              desc: "Director, producer, camera, sound, actors/participants",
            },
            {
              title: "Production — Equipment",
              desc: "Camera · Sound · Lights · Data",
            },
            {
              title: "Production — Logistics",
              desc: "Transport · Accommodation · Food · Location fees",
            },
            {
              title: "Postproduction",
              desc: "Editing · Sound · Music · Color · Subtitles",
            },
            {
              title: "Rights & Licenses",
              desc: "Archive · Music · Image rights · Legal fees",
            },
            {
              title: "Promotion & Distribution",
              desc: "DCP · Festival fees · Press materials",
            },
            {
              title: "Producer Fee",
              desc: "Fee + administration + accounting",
            },
            { title: "Contingency", desc: "5–10% of total" },
          ],
        },
        {
          name: "Estimated Shooting Time",
          items: [
            { title: "1/8 page", desc: "≈ 15 minutes shooting" },
            { title: "1 full page", desc: "≈ 2 hours shooting (before setup)" },
            {
              title: "Shooting day",
              desc: "Easily reaches 12h adding assembly, setup, breaks",
            },
            { title: "Dialogue scenes", desc: "More predictable in time" },
            { title: "Action scenes", desc: "Less predictable in time" },
          ],
        },
      ],
    },
    howtoread: {
      title: "How to Read a Script",
      sections: [
        {
          name: "Script Elements",
          items: [
            {
              title: "SLUGLINE",
              desc: "INT/EXT, location, day/night at beginning of each scene",
            },
            {
              title: "ACTION",
              desc: "Description of location, characters, actions and movements",
            },
            {
              title: "CHARACTER",
              desc: "Names in UPPERCASE, followed immediately by dialogue",
            },
            {
              title: "DIALOGUE",
              desc: "Cannot exist without Character element immediately before it",
            },
            {
              title: "PARENTHETICAL",
              desc: "Within parentheses (tone, action) after Character or Dialogue",
            },
            {
              title: "TRANSITION",
              desc: "Specifies how scenes change (CUT TO, FADE, DISSOLVE)",
            },
          ],
        },
        {
          name: "Standard Format",
          items: [
            { title: "Font and Size", desc: "Courier 12pt on A4 paper" },
            {
              title: "Duration per Page",
              desc: "1 page ≈ 1 minute screen ≈ 2 hours shooting",
            },
            {
              title: "Eighths Division",
              desc: "Full page = 8/8. Less than 1 inch = 1/8",
            },
            {
              title: "Notation",
              desc: "Full pages: '1 PAGE' (not 8/8). Example: 1⅛ PAGE",
            },
          ],
        },
      ],
    },
    breakdown: {
      title: "The Breakdown",
      sections: [
        {
          name: "Key Concepts",
          items: [
            {
              title: "First Rule",
              desc: "Read entire script first to understand everything",
            },
            {
              title: "Dramatic Scene",
              desc: "Narrative unit that may jump between locations or time",
            },
            {
              title: "Production Scene",
              desc: "Defined by slugline. Each INT/EXT or time change = new scene",
            },
            {
              title: "When NO Slugline",
              desc: "For new angle, action continuation, psychological beat, inserts",
            },
          ],
        },
        {
          name: "Marking Elements",
          items: [
            { title: "Golden Rule", desc: "Mark each element ONCE per scene" },
            {
              title: "Standard Colors",
              desc: "Art=Green, Sound=Yellow, Wardrobe=Lilac, Makeup=Pink, Production=Red, Photo=Blue, Cast=Orange",
            },
            {
              title: "Elements to Mark",
              desc: "Characters, locations, props, wardrobe, VFX, stunts, extras, vehicles, animals, special equipment",
            },
            {
              title: "Breakdown Sheet",
              desc: "Info: Duration, Scene#, Page, Day/Night, INT/EXT, Location, Description",
            },
          ],
        },
      ],
    },
    productionprocess: {
      title: "Production Processes",
      sections: [
        {
          name: "On Set",
          items: [
            {
              title: "Order onto Set",
              desc: "1-Art, 2-Camera (outside), 3-Camera (inside), 4-Director, 5-Actors+SS, 6-Sound",
            },
            {
              title: "COMBO Seating",
              desc: "3 only: Director, Script Supervisor, DP (DP seated for quick access)",
            },
            {
              title: "Magliner",
              desc: "Equipment trolley near camera without entering frame",
            },
            {
              title: "Camera Tape",
              desc: "Marks actor positions in T-shape. Black/White standard. Color per actor",
            },
          ],
        },
        {
          name: "Clapper and Shooting",
          items: [
            {
              title: "ROLL",
              desc: "Memory card ID (e.g. A001). Letter = camera number",
            },
            { title: "SCENE/SHOT", desc: "E.g. 3/1 = Scene 3, Shot 1" },
            {
              title: "TAKE & PU",
              desc: "TAKE = take number. PU = additional take specific point",
            },
            {
              title: "SYNC/MOS",
              desc: "SYNC = with sound. MOS = silent (Minus OuR Sound)",
            },
            {
              title: "Cinematographic Axis",
              desc: "180° Rule: First camera sets axis, all stay same side",
            },
            {
              title: "Jump Cuts",
              desc: "Minimum 30° angle between shots. Less is too similar",
            },
          ],
        },
        {
          name: "Pre-Production",
          items: [
            {
              title: "Week -5",
              desc: "Monday: Final script. Tuesday: Script meeting. Wednesday: Breakdown, stripboard, casting",
            },
            {
              title: "Week -4",
              desc: "Artistic scout (Director, DP, Art). Technical scout (everyone). Callback casting",
            },
            {
              title: "Week -2",
              desc: "Workflow meeting (DIT, Data, Editor, Sound). Actor rehearsals and camera tests",
            },
            {
              title: "Week -1",
              desc: "Equipment collection. CALLSHEET #1 sent max 12h before. PDF vertical by email",
            },
            {
              title: "Callsheet Info",
              desc: "Title + version + Director + DP + Day + Location + Hospital + Police station + Times",
            },
          ],
        },
      ],
    },
  },
};

// ============================================
// COMPLETE NOTES (APUNTS) DATA
// ============================================

const apuntsData = {
  ca: {
    howtoread: {
      title: "Com Llegir un Script",
      sections: [
        {
          heading: "LA SEQÜÈNCIA I L'ESCENA",
          content:
            "Porcions del script que es desenvolupen en un moment específic.",
        },
        {
          heading: "ENCAPÇALAMENT D'ESCENA / SLUGLINE",
          content:
            "Descripció bàsica (una línia de text) al començament de cada escena per indicar ubicació o hora.",
        },
        {
          heading: "ACCIÓ",
          content: "On dius al lector què passa a l'escena.",
        },
        {
          heading: "PERSONATGE",
          content:
            "Els elements del personatge estan en MAJÚSCULES i van immediatament seguits per Diàleg.",
        },
        {
          heading: "DIÀLEG",
          content:
            "El diàleg no pot existir sense un element de Personatge immediatament anterior.",
        },
        {
          heading: "PARÈNTESI",
          content:
            "Els elements entre parèntesis van envoltats entre parèntesis i segueixen un element de Personatge o Diàleg.",
        },
        {
          heading: "TRANSICIÓ",
          content:
            "Les transicions s'usen per indicar informació especial sobre com una escena passa a una altra.",
        },
        {
          heading: "FORMAT",
          content:
            "Courier 12 punts en paper A4 per assegurar coherència de durada de pàgina i programació de producció precisa.",
        },
      ],
    },
    breakdown: {
      title: "The Breakdown",
      sections: [
        {
          heading: "LLEGIR EL GUIÓ SER",
          content:
            "No pots desglosar el que no entens. Conèixer l'abast complet del film et permet identificar requisits de producció més ràpidament i amb precisió.",
        },
        {
          heading: "CONFIRMAR FORMAT ESTÀNDARD",
          content:
            "En format de guió estàndard, una pàgina aproximadament equival a un minut de pantalla. Aquesta estimació és fonamental per a pressupostació, programació i planificació del rodatge.",
        },
        {
          heading: "DESGLOS = EINA DE PRODUCCIÓ",
          content:
            "Determina quants dies es necessiten actors, quants dies en cada locació, què és necessari per executar cada escena, i com es farà físicament el film.",
        },
        {
          heading: "EINES DE DESGLOS",
          content:
            "Pots marcar elements a mà amb llàpis de colors directament en paper o etiqueta-los digitalment en software de producció.",
        },
        {
          heading: "CREAR NÚMEROS D'ESCENA",
          content:
            "Si no existeixen ja. Assegura't que cada escena estigui clarament i precisa identificada.",
        },
        {
          heading: "QUÈ SIGNIFICA 'ESCENA'",
          content:
            "La paraula 'escena' pot tenir significats diferents segons la perspectiva. En producció fílmica, és important entendre la diferència entre escenes dramàtiques i escenes de producció.",
        },
        {
          heading: "SIGNIFICAT DRAMÀTIC (HISTÒRIA)",
          content:
            "Una escena és una unitat dramàtica. Pot saltar entre ubicacions o temps però sembla un moment continu. En producció es compten com múltiples escenes.",
        },
        {
          heading: "SIGNIFICAT DE PRODUCCIÓ (DESGLOS)",
          content:
            "Una escena es defineix pel seu encapçalament. Cada canvi INT./EXT., ubicació o hora crea una nova escena de producció.",
        },
        {
          heading: "QUAN CAL ENCAPÇALAMENT D'ESCENA",
          content:
            "Quan senyalitza un canvi de producció: interior/exterior, nova ubicació física, o canvi meaningful de temps que afecta llum, vestuari, programació o moviments d'unitat.",
        },
        {
          heading: "QUAN NO CAL ENCAPÇALAMENT",
          content:
            "No és necessari si només indica nou angle de càmera, continuació de la mateixa acció, o moment psicològic/editorial.",
        },
        {
          heading: "DESGLOS A MÀ - OCTAVOS",
          content:
            "Cada pàgina de guió es divideix en vuit seccions iguals. Utilitza un full doblat com regla. Escriu la durada com 1/8, 2/8, 3/8, etc. Si és menys d'una polzada, compta com 1/8. Les pàgines completes s'indiquen com '1 PÀGINA', no 8/8s.",
        },
        {
          heading: "MARCAR ELEMENTS PER COLORS",
          content:
            "Els colors estàndard de la indústria són: Càsting (Taronja), Art (Verd), So (Groc), Vestuari (Lila), Maquillatge/Perruqueria (Rosa), Producció (Vermell), Foto (Blau).",
        },
        {
          heading: "ELEMENTS A MARCAR",
          content:
            "Encapçalaments, INT/EXT, Dia/Nit, Ubicacions, Personatges principals, Accessoris clau, Vestuari clau, Figurants, Acrobàcies, Efectes visuals, Efectes especials, Vehicles, Animals, Equip especial, Menors, bebès.",
        },
        {
          heading: "NORMA D'OR",
          content: "Marca elements només una vegada per escena.",
        },
        {
          heading: "BREAKDOWN SHEETS",
          content:
            "Són formularis individuals que transfereixen la informació del desglos del guió. Cada sheet representa una escena i porta info: Durada, Número d'escena, Pàgina del guió, Dia/Nit, INT/EXT, Nom de l'ubicació, Descripció breu.",
        },
      ],
    },
    budget: {
      title: "Pressupost i Estructura de Producció",
      sections: [
        {
          heading: "PROPÒSIT DEL PRESSUPOST",
          content:
            "Estableix quants diners es necessiten i com s'utilitzaran. Els productors o PM creen pressupostos basats directament en el guió.",
        },
        {
          heading: "COM PENSAR EN PRESSUPOST",
          content:
            "Pregunta: Podem reduir scenes, personatges o ubicacions? Pots usar una ubicació per múltiples scenes? L'art pot adaptar espais? Quins recursos existents podem escriure al guió? L'objectiu: protegir la pel·li de costos innecessaris.",
        },
        {
          heading: "ESTRUCTURA DEL PRESSUPOST",
          content:
            "Primera pàgina: Resum de pressupost (categories majors i subtotals). Pàgines detallades: Cada categoria amb línies individuals i subtotals vinculats al resum.",
        },
        {
          heading: "CATEGORIES PRINCIPALS",
          content:
            "DESENVOLUPAMENT (recerca, escriptura, test shoots). PREPRODUCCIÓ (coordinació, scouts de locació, permisos, programació, assajos). PRODUCCIÓ (personal, equip, locations, logística). POSTPRODUCCIÓ (edició, so, música, color, subtítols). DRETS & ACLARIMENTS. PROMOCIÓ & DISTRIBUCIÓ. TAXA PRODUCTOR & OVERHEAD. CONTINGÈNCIA (5-10%).",
        },
        {
          heading: "PERSONAL DE PRODUCCIÓ",
          content:
            "Director, Productor, Càmera/Imatge, So, Suport de Producció, Performers/Participants (Es mostren fins i tot les taxes diferides).",
        },
        {
          heading: "EQUIP TÈCNIC",
          content:
            "Càmera, So, Llums, Emmagatzemament de dades (per a rental, owned o contribuït).",
        },
        {
          heading: "UBICACIONS & LOGÍSTICA",
          content: "Transport, Allotjament, Menjar, Taxes de locació.",
        },
        {
          heading: "CONTRIBUCIONS IN-KIND",
          content:
            "Mà d'obra no remunerada, Equip donat, Ubicacions gratuïtes, Serveis voluntaris. Es mostren separats del diner real.",
        },
        {
          heading: "PLA DE FINANÇAMENT",
          content:
            "CONFIRMAT: Fons ja assegurats. PENDENT: Aplicacions presentades. IN-KIND: Contribucions no monetàries.",
        },
      ],
    },
    folder: {
      title: "Production Folder",
      sections: [
        {
          heading: "LOGLINE",
          content:
            "Descripció breu que articula la idea central del film. Màxim 3 línies. Permet que el lector entengui la intenció general.",
        },
        {
          heading: "SINOPSI",
          content:
            "Resum de contingut i forma del film. Sense descriure l'ending o analitzar temes. Màxim mitja pàgina A4.",
        },
        {
          heading: "TRACTAMENT",
          content:
            "Descripció detallada en prosa que explica com es desenvolupa la història. Sense diàleg ni escena heading. Permet que el lector entengui forma i desenvolupament. Típicament 2-10 pàgines.",
        },
        {
          heading: "GUIÓ",
          content:
            "Document escrit que detalla exactament què es veu i sent. Escrit en format estàndard. Es translate la idea del film en document de treball per a cast i crew.",
        },
        {
          heading: "FULL DE COBERTA DEL PROJECTE",
          content:
            "Primera pàgina. Carnet d'identitat del projecte. Inclou: Títol, Tipus (curt/llargmetratge/sèrie), Forma (ficció/documentary), Durada prevista, Format/Mitjà, Idioma original, País/Ciutats, Productor(s) amb detalls.",
        },
        {
          heading: "PARÀMETRES DE FORMAT & PRODUCCIÓ",
          content:
            "Durada objectiu, Format d'imatge/Aspect ratio, Format de so, Color/B&N, Context d'exhibició previst (cinema/festival/galeria/online).",
        },
        {
          heading: "TEMES & FOCUS ARTÍSTIC",
          content:
            "Explicació curta de les idees que el film explora. Temes clau (2-5), Rellevància en context actual, Límits deliberats (què no adreça el projecte).",
        },
        {
          heading: "ARGUMENT & ESTRUCTURA",
          content:
            "Descripció de com s'organitza el film. Pregunta central, Enfocament estructural, Progressió estructural, Què assegura coherència.",
        },
        {
          heading: "REFERENCES VISUALS & SO",
          content:
            "Col·lecció d'exemples que comuniquen el look, ritme i atmosfera. Inclou: References visuals, Notes de ritme, Enfocament de so, Mood board (PDF).",
        },
        {
          heading: "DECLARACIÓ D'ÈTICA & RESPONSABILITAT",
          content:
            "Explicació de com el projecte tractarà gent, llocs i material sensible responsablement. Approach de consentiment, Riscos de representació, Relació amb subjectes, Estratègia per material sensible.",
        },
        {
          heading: "COLS CLAUS & CONTRIBUTORS",
          content:
            "Llista de gent principal amb rol, background i contribució específica. Bio professional curta (1 paràgraf).",
        },
        {
          heading: "CAST / PARTICIPANTS",
          content:
            "Info de qui apareix al film. Noms o funcions, Disponibilitat i limitacions, Consideracions especials (edat, proteccions, permisos).",
        },
        {
          heading: "UBICACIONS",
          content:
            "Descripció de on es film. Estat d'accés (confirmat/pendent), Restriccions pràctiques (so, llum, horaris).",
        },
        {
          heading: "PERMISOS & AUTORITZACIONS",
          content:
            "Tots els documents que donen permís legal i ètic. Autoritzacions de locació, Apareça/Participació releases, Acords d'arxiu, Drets de música.",
        },
        {
          heading: "PLA DE TREBALL / PROGRAMACIÓ",
          content:
            "Timeline mostrant quan passa cada etapa. Fase de desenvolupament, Preproducció, Rodatge, Postproducció, Períodes buffer, Data objectiu de lliurament.",
        },
        {
          heading: "MERCATS, PLATAFORMES & SCHEMES",
          content:
            "Llista de festivals, labs o institucions rellevants. Identificar festivals apropriats i justificar per què. Prioritzar camins realistes de presentació.",
        },
        {
          heading: "ESTRATÈGIA DE DISTRIBUCIÓ & AUDIÈNCIA",
          content:
            "Pla per a qui és el film i com arribarà a aquella audiència. Audiència objectiu(s), Contextos culturals/geogràfics existents, Modes de circulació, Timeline de llançament.",
        },
        {
          heading: "ESTRATÈGIA DE COMUNICACIÓ & PROMOCIÓ",
          content:
            "Com es presentarà públicament el projecte. Intenció d'identitat visual, Conceptes de pòster/teaser/trailer, Llenguatge de premsa, Estratègia de presència online.",
        },
      ],
    },
    filmproduction: {
      title: "Film Production Notes",
      sections: [
        {
          heading: "ORDEN D'ENTRADA AL SET",
          content:
            "1. Equip d'Art\n2. Càmera/DOP (està equilibrada fora del set)\n3. Càmera (demana al AD on va el primer pla, col·loca Magliner)\n4. Director (compra el pla)\n5. Actors amb Script Supervisor\n6. So (assessa l'escena, decideix posició de boom)",
        },
        {
          heading: "COMBO - DISTRIBUCIÓ DE SEIENTS",
          content:
            "Només 3 cadires:\n- Director\n- Script Supervisor  \n- DP (assegut per arribar ràpidament al set)\nDe peu al costat: Hair/Makeup (per mantenir comunicació amb el set)",
        },
        {
          heading: "EQUIPMENT TÈCNIC AL SET",
          content:
            "Magliner: Carret d'equip. Col·locat tan a prop de la càmera sense entrar en frame. Camera tape: Negre i blanc estàndard. Cada actor té un color. 2n AC marca posicions en forma de T al terra.",
        },
        {
          heading: "CLAPPER / PISSARRA - ESTRUCTURA",
          content:
            "ROLL: Memòria card (ex: A001). Lletra = càmera (TV usa números). SCENE/SHOT: ex 3/1 (Escena 3, Pla 1). TAKE: Número de presa. PU 1 = Pick-Up d'un punt específic. DIRECTOR, DOP. DATE: Data calendari. SYNC/MOS: So o silenciós. MM lens.",
        },
        {
          heading: "ORDEN DE RODATGE DINS UNA ESCENA",
          content:
            "1. Pla general/Master\n2. Pla doble/Mitjà\n3. Pla mitjà actor femení (primerenc per complexitat makeup)\n4. Pla mitjà actor masculí\n5. Primer pla/Inserció\n* Si hi ha persona gran: prioritat. Els nens típicament no es maquilles.",
        },
        {
          heading: "REGLES D'EIX CINEMATOGRÀFIC",
          content:
            "Regla dels 180°: Quan hi ha dues persones, la primera posició de càmera estableix l'eix. Totes les càmeres posteriors han de romandre al mateix costat. Jump cuts: Ha d'haver almenys canvi de 30° entre plànols; menys és massa similar.",
        },
        {
          heading: "CALLSHEET",
          content:
            "Encapçalament: Títol + versió guió + Director + DOP + Dia de rodatge + Ubicació + Hospital més proper + Comissaria + Pronòstic + Contacte AD. Horaris: Horari entrada equip, Hora de citació, Hora menjar, RTS (Ready to Shoot), Fi de rodatge, Fi de dia.",
        },
        {
          heading: "DESGLOS DE PRODUCCIÓ & NECESSITATS",
          content:
            "Ordre: Principals, Suport cast, Day players, Figurants destacats, Figurants/Atmosfera, Acrobàcies, Animals, Càmera, Electricitat, Grip, Decoració, Accessoris, Vehicles, Maquillatge, Perruqueria, Vestuari, So, Efectes especials, Producció, Elements previs, Material d'arxiu, Placement, Altres.",
        },
        {
          heading: "TEMPORADA DE PRE-PRODUCCIÓ - SETMANA -5",
          content:
            "DILLUNS: Guió literari final (versió definida ex: VER.7). DIMARTS: Reunió script amb caps de departament (AD, DP, Art, Vestuari, Makeup, So, Script Supervisor). DIMECRES: Desglos, stripboard cronològic, casting, scouts de locació.",
        },
        {
          heading: "TEMPORADA DE PRE-PRODUCCIÓ - SETMANA -4",
          content:
            "Ubicacions: Presenta 2-3 opcions per ubicació. Scout artístic (només Director, DP, Production Designer). Scout tècnic (tots els caps de departament). Standby locations. Casting callback.",
        },
        {
          heading: "TEMPORADA DE PRE-PRODUCCIÓ - SETMANA -2",
          content:
            "DIMECRES: Workflow meeting (DIT, Data Wrangler, Assistant Editor, So, Producció). DIJOUS: Props casting, Actor rehearsals (només director i script supervisor), Tests de càmera/makeup/hair (amb stand-in).",
        },
        {
          heading: "TEMPORADA DE PRE-PRODUCCIÓ - SETMANA -1",
          content:
            "AD envia documents finalitzats. DP i So envien llista d'equip tècnic a rental house. Recull d'equip. CALLSHEET #1 enviada màxim 12 hores abans. En format PDF vertical per email.",
        },
        {
          heading: "TIMING UNA JORNADA DE RODATGE",
          content:
            "Temps per pla = durada del pla × 7 preses + 3 minuts per director. Exemple: 3-minut shot = 21 + 3 = 24 min. Canvis entre locacions: 10-15 min dins set, + temps de viatge + 10-15 min per establir-se. Wrap-out: 30 min.",
        },
        {
          heading: "FASES D'UNA SEQÜÈNCIA-PRESA",
          content:
            "1. Walk-through amb actors (sense makeup)\n2. Assajos de càmera (primer amb phone/iPad - app Artemis)\n3. Assajos de càmera + actors (ara amb makeup) - moltes passades\n4. SHOOT",
        },
        {
          heading: "ORDEN DE GRAVACIÓ AL SET",
          content:
            "1. Video rolling\n2. So rolling\n3. Càmera rolling\n4. Clac (pissarra)\n5. Mark? (comprovar framing i focus)\n6. Action - Figurants\n7. Action - Actors\n8. Cut (ÚNICAMENT el director pot cridar cut)\n\nOK hand signal = tenimatge.",
        },
      ],
    },
  },
  en: {
    howtoread: {
      title: "How to Read a Script",
      sections: [
        {
          heading: "THE SEQUENCE AND THE SCENE",
          content:
            "Portions of your script that takes place at a certain time.",
        },
        {
          heading: "SCENE HEADING / SLUGLINE",
          content:
            "Basic description (a line of text) at the beginning of each scene to tell location or time.",
        },
        {
          heading: "ACTION",
          content: "Where you tell the reader what happens on the scene.",
        },
        {
          heading: "CHARACTER",
          content:
            "Character elements are in UPPERCASE and are followed immediately by Dialogue.",
        },
        {
          heading: "DIALOGUE",
          content:
            "Dialogue cannot exist without a Character element immediately before it.",
        },
        {
          heading: "PARENTHETICAL",
          content:
            "Parenthetical elements are wrapped in parentheses, and follow a Character or Dialogue element.",
        },
        {
          heading: "TRANSITION",
          content:
            "Transitions are used to indicate special information about how one scene transitions to another.",
        },
        {
          heading: "FORMAT",
          content:
            "12-point Courier on A4 paper to ensure consistent page length and accurate production scheduling.",
        },
      ],
    },
    breakdown: {
      title: "The Breakdown",
      sections: [
        {
          heading: "READ THE ENTIRE SCRIPT FIRST",
          content:
            "You cannot break down what you do not understand. Knowing the full scope of the film makes identifying production requirements faster and more accurate.",
        },
        {
          heading: "CONFIRM STANDARD FORMAT",
          content:
            "In standard script format, one page equals approximately one minute of screen time. This is fundamental to budgeting, scheduling, and planning the shoot.",
        },
        {
          heading: "BREAKDOWN IS A PRODUCTION TOOL",
          content:
            "It determines actor days needed, location days, what's needed for each scene, and how the film will be physically made.",
        },
        {
          heading: "BREAKDOWN TOOLS",
          content:
            "Mark elements by hand with colored pencils or tag them digitally in production software.",
        },
        {
          heading: "CREATE SCENE NUMBERS",
          content:
            "If they don't already exist. Make sure every scene is clearly and accurately identified.",
        },
        {
          heading: "WHAT A SCENE MEANS",
          content:
            "The word 'scene' can have different meanings. In film production, understand the difference between dramatic scenes and production scenes.",
        },
        {
          heading: "DRAMATIC MEANING",
          content:
            "A scene is one dramatic unit. It may jump between locations or time but feel continuous. Production counts them as multiple scenes.",
        },
        {
          heading: "PRODUCTION MEANING",
          content:
            "A scene is defined by its scene heading. Each change in INT./EXT., location, or time creates a new production scene.",
        },
        {
          heading: "WHEN SCENE HEADING IS REQUIRED",
          content:
            "When it signals a production change: interior/exterior shift, new location, or meaningful time change affecting lighting, wardrobe, or scheduling.",
        },
        {
          heading: "WHEN SCENE HEADING IS NOT REQUIRED",
          content:
            "Not necessary if it only indicates new camera angle, action continuation, or psychological/editorial beat.",
        },
        {
          heading: "BREAKDOWN INTO EIGHTHS",
          content:
            "Each script page divided into eight equal sections. Scene length measured in eighths. If less than one inch, still counts as 1/8. Full pages indicated as '1 PAGE', not 8/8ths.",
        },
        {
          heading: "COLOR-CODING ELEMENTS",
          content:
            "Industry standards: Cast (Orange), Art (Green), Sound (Yellow), Wardrobe (Lilac), Makeup/Hair (Pink), Production (Red), Photo (Blue).",
        },
        {
          heading: "ELEMENTS TO MARK",
          content:
            "Scene headings, INT/EXT, Day/Night, Locations, Main characters, Key props, Wardrobe, Extras, Stunts, VFX, Effects, Vehicles, Animals, Special equipment, Minors, babies.",
        },
        {
          heading: "THE GOLDEN RULE",
          content: "Mark elements only once per scene.",
        },
        {
          heading: "BREAKDOWN SHEETS",
          content:
            "Individual forms transferring script breakdown info. Each sheet = one scene, containing: Page count (eighths), Scene number, Script page, Day/Night, INT/EXT, Location name, Brief description.",
        },
      ],
    },
    budget: {
      title: "Budget & Producer Structure",
      sections: [
        {
          heading: "PURPOSE OF BUDGET",
          content:
            "States how much money is needed and how it will be spent. Created by producer or PM based directly on script.",
        },
        {
          heading: "BUDGET THINKING",
          content:
            "Ask: Can we reduce scenes, characters, or locations? Can one location represent multiple scenes? Can art adapt spaces? What existing resources can we write in? Goal: Protect film from unnecessary cost.",
        },
        {
          heading: "BUDGET ORGANIZATION",
          content:
            "First page: Budget summary (major categories and subtotals). Detailed pages: Each category with line items and subtotals linked to summary.",
        },
        {
          heading: "MAIN CATEGORIES",
          content:
            "DEVELOPMENT, PRE-PRODUCTION, PRODUCTION, POST-PRODUCTION, RIGHTS & CLEARANCES, PROMOTION & DISTRIBUTION, PRODUCER FEE & OVERHEADS, CONTINGENCY (5-10%).",
        },
        {
          heading: "PRODUCTION PERSONNEL",
          content:
            "Director, Producer, Camera/Image, Sound, Production support, Performers/Participants (even deferred fees shown).",
        },
        {
          heading: "TECHNICAL EQUIPMENT",
          content:
            "Camera, Sound, Lighting, Data storage (rented, owned, or contributed).",
        },
        {
          heading: "LOCATIONS & LOGISTICS",
          content: "Transport, Accommodation, Meals, Location fees.",
        },
        {
          heading: "IN-KIND CONTRIBUTIONS",
          content:
            "Unpaid labour, Donated equipment, Free locations, Volunteer services. Shown separately from actual money.",
        },
        {
          heading: "FINANCING PLAN",
          content:
            "CONFIRMED: Funds already secured. PENDING: Applications submitted. IN-KIND: Non-monetary contributions.",
        },
      ],
    },
    folder: {
      title: "Production Folder",
      sections: [
        {
          heading: "LOGLINE",
          content:
            "Brief description articulating the film's central idea. Max 3 lines. Allows reader to understand overall intention.",
        },
        {
          heading: "SYNOPSIS",
          content:
            "Overview of film content and form. Without describing ending or analyzing themes. Max half A4 page.",
        },
        {
          heading: "TREATMENT",
          content:
            "Detailed prose describing how story unfolds. Without dialogue or scene headings. Allows reader to understand shape and development. Typically 2-10 pages.",
        },
        {
          heading: "SCRIPT",
          content:
            "Written document detailing exactly what is seen and heard. Standard format. Translates film idea into working document for cast and crew.",
        },
        {
          heading: "PROJECT COVER SHEET",
          content:
            "First page. Project ID card. Includes: Title, Type (short/feature/series), Form (fiction/documentary), Duration, Format/Medium, Original language, Country/Cities, Producer(s) with details.",
        },
        {
          heading: "FORMAT & PRODUCTION PARAMETERS",
          content:
            "Target duration, Image format/Aspect ratio, Sound format, Colour/B&W, Intended exhibition context.",
        },
        {
          heading: "THEMES & ARTISTIC FOCUS",
          content:
            "Short explanation of ideas film explores. Key themes (2-5), Relevance in current context, Deliberate limits.",
        },
        {
          heading: "ARGUMENT & STRUCTURE",
          content:
            "Description of how film is organized. Central question, Structural approach, Progression, What ensures coherence.",
        },
        {
          heading: "VISUAL & SOUND REFERENCES",
          content:
            "Collection of examples communicating intended look, rhythm, atmosphere. Includes: Visual references, Rhythm notes, Sound approach, Mood board (PDF).",
        },
        {
          heading: "ETHICS & RESPONSIBILITY STATEMENT",
          content:
            "Explanation of how project treats people, places, sensitive material responsibly. Consent approach, Representation risks, Subject relationship, Sensitive material strategy.",
        },
        {
          heading: "KEY COLLABORATORS & CONTRIBUTORS",
          content:
            "List of main people involved with role, background and contribution. Short professional bio (1 paragraph).",
        },
        {
          heading: "CAST / PARTICIPANTS",
          content:
            "Info about who appears. Names/functions, Availability and constraints, Special considerations (age, protections, permits).",
        },
        {
          heading: "LOCATIONS",
          content:
            "Description of where film will be shot. Access status (confirmed/pending), Practical constraints (noise, light, hours).",
        },
        {
          heading: "PERMISSIONS & AUTHORISATIONS",
          content:
            "All documents giving legal and ethical permission. Location authorisations, Appearance/Participation releases, Archive agreements, Music and sound rights.",
        },
        {
          heading: "WORKING PLAN / PRODUCTION SCHEDULE",
          content:
            "Timeline showing when each stage happens. Development phase, Pre-production, Shooting, Post-production, Buffer periods, Target delivery date.",
        },
        {
          heading: "MARKETS, PLATFORMS & SUPPORT SCHEMES",
          content:
            "List of relevant festivals, labs, or institutions. Identify appropriate venues and justify why. Prioritise realistic presentation paths.",
        },
        {
          heading: "DISTRIBUTION & AUDIENCE STRATEGY",
          content:
            "Plan for who film is for and how it reaches them. Target audience(s), Existing cultural/geographic contexts, Circulation modes, Release timeline.",
        },
        {
          heading: "COMMUNICATION & PROMOTION STRATEGY",
          content:
            "How project will be presented publicly. Visual identity intention, Poster/teaser/trailer concepts, Press language, Online presence strategy.",
        },
      ],
    },
    filmproduction: {
      title: "Film Production Notes",
      sections: [
        {
          heading: "ORDER OF ENTRY ONTO SET",
          content:
            "1. Art Department\n2. Camera/DP (rigged outside set)\n3. Camera (asks AD where first shot goes, places Magliner)\n4. Director (buys the shot)\n5. Actors with Script Supervisor\n6. Sound Recordist (assesses scene, decides boom position)",
        },
        {
          heading: "COMBO - SEATING LAYOUT",
          content:
            "Only 3 chairs:\n- Director\n- Script Supervisor\n- DP (seated for quick access to set)\nStanding: Hair/Makeup (maintain set communication)",
        },
        {
          heading: "TECHNICAL EQUIPMENT ON SET",
          content:
            "Magliner: Equipment trolley placed close to camera without entering frame. Camera tape: Black and white standard. Each actor assigned a colour. 2nd AC marks positions in T-shape.",
        },
        {
          heading: "CLAPPER / CLAPPERBOARD - STRUCTURE",
          content:
            "ROLL: Memory card (e.g. A001). Letter = camera (TV uses numbers). SCENE/SHOT: e.g. 3/1 (Scene 3, Shot 1). TAKE: Take number. PU 1 = Pick-Up. DIRECTOR, DOP. DATE: Calendar date. SYNC/MOS: Sound or silent. MM lens.",
        },
        {
          heading: "SHOT ORDER WITHIN A SCENE",
          content:
            "1. Wide/Master shot\n2. Two-shot/Medium\n3. Medium shot Female (first due to makeup complexity)\n4. Medium shot Male\n5. Close-up/Insert\n*Elderly prioritized. Children usually not made up.",
        },
        {
          heading: "CINEMATOGRAPHIC AXIS RULES",
          content:
            "180° Rule: First camera position establishes axis; all cameras stay same side. Jump cuts: Minimum 30° angle change between shots; less is too similar.",
        },
        {
          heading: "CALLSHEET",
          content:
            "Header: Title + script version + Director + DOP + Shooting day + Location + Nearest hospital + Police station + Forecast + AD contact. Schedule: Crew in time, Crew call, Lunch box, Lunch, RTS, End shooting, End of day.",
        },
        {
          heading: "PRODUCTION & NEEDS BREAKDOWN",
          content:
            "Order: Principals, Supporting cast, Day players, Featured extras, Background/Extras, Stunts, Animals, Camera, Electrics, Grip, Set Dec, Props, Vehicles, Makeup, Hair, Wardrobe, Sound, VFX, Directing, Production, Pre-existing, Archive, Product placement, Other.",
        },
        {
          heading: "PRE-PRODUCTION SEASON - WEEK -5",
          content:
            "MONDAY: Final Literary Script (e.g. VER.7). TUESDAY: Script meeting with department heads (AD, DP, Art, Wardrobe, Makeup, Sound, Script Supervisor). WEDNESDAY: Breakdown, stripboard, casting, location scouting.",
        },
        {
          heading: "PRE-PRODUCTION SEASON - WEEK -4",
          content:
            "Locations: Present 2-3 options per location. Artistic scout (Director, DP, Production Designer only). Technical scout (all department heads). Standby locations. Casting callbacks.",
        },
        {
          heading: "PRE-PRODUCTION SEASON - WEEK -2",
          content:
            "WEDNESDAY: Workflow meeting (DIT, Data Wrangler, Assistant Editor, Sound, Production). THURSDAY: Props casting, Actor rehearsals (director and script supervisor only), Camera/Makeup/Hair tests (with stand-in).",
        },
        {
          heading: "PRE-PRODUCTION SEASON - WEEK -1",
          content:
            "AD sends finalized documents. DP and Sound send technical equipment list to rental house. Equipment collection. CALLSHEET #1 sent max 12 hours before. Vertical PDF format by email.",
        },
        {
          heading: "TIMING A SHOOTING DAY",
          content:
            "Time per shot = shot duration × 7 takes + 3 minutes director. Example: 3-minute shot = 21 + 3 = 24 min. Transfers within set: 10-15 min. Between locations: travel time + 10-15 min setup. Wrap-out: 30 min.",
        },
        {
          heading: "SEQUENCE SHOT - PHASES",
          content:
            "1. Walk-through with actors (no makeup)\n2. Camera rehearsals (first with phone/iPad - Artemis app)\n3. Camera rehearsals + actors (now in makeup) - many passes\n4. SHOOT",
        },
        {
          heading: "ON-SET RECORDING ORDER",
          content:
            "1. Video rolling\n2. Sound rolling\n3. Camera rolling\n4. Clack (clapperboard)\n5. Mark? (check framing and focus)\n6. Action - Background\n7. Action - Actors\n8. Cut (ONLY director calls cut)\n\nOK hand signal = have picture.",
        },
      ],
    },
  },
};

// Export for script.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { translations, lessonsData, apuntsData };
}
