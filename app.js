const topicPictures = [
  {
    label: "Wetenskap",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dff7f1"></rect><path d="M49 18h22v9l18 32c6 11-2 23-15 23H46c-13 0-21-12-15-23l18-32z" fill="#ffffff" stroke="#0f766e" stroke-width="5" stroke-linejoin="round"></path><path d="M42 61h36" stroke="#22c55e" stroke-width="7" stroke-linecap="round"></path><circle cx="49" cy="51" r="5" fill="#f59e0b"></circle><circle cx="68" cy="44" r="4" fill="#1d4ed8"></circle></svg>`
  },
  {
    label: "Aarde",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#e0f2fe"></rect><circle cx="60" cy="45" r="29" fill="#1d4ed8"></circle><path d="M40 34c10-8 22-7 35 1-5 5-6 11-1 18-12 7-25 6-38-2 7-4 8-10 4-17z" fill="#22c55e"></path><path d="M27 71h66" stroke="#0f766e" stroke-width="6" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Energie",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fff7d6"></rect><path d="M65 12L31 52h23l-8 26 43-48H65z" fill="#f59e0b"></path><circle cx="84" cy="64" r="9" fill="#0f766e"></circle></svg>`
  },
  {
    label: "Notas",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#f1f5f9"></rect><rect x="28" y="18" width="64" height="58" rx="8" fill="#ffffff" stroke="#334155" stroke-width="5"></rect><path d="M42 35h36M42 48h32M42 61h24" stroke="#0f766e" stroke-width="5" stroke-linecap="round"></path></svg>`
  }
];

const learningItems = [
  {
    title: "Assessering: wat om te leer",
    picture: 3,
    groups: [
      { label: "Datum en vak", lines: ["NWT assessering: 9 Junie 2026.", "Gebruik jou skrifte, handboek en opsomming om te leer."] },
      { label: "Hoofstukke", lines: ["Materiale om ons.", "Toestandverandering.", "Die watersiklus.", "Vaste materiale.", "Eienskappe van materiale."] },
      { label: "Wat om goed te ken", lines: ["Definisies.", "Voorbeelde.", "Byskrifte op prente.", "Hoe prosesse in volgorde werk."] }
    ]
  },
  {
    title: "Die drie toestande van materie",
    picture: 0,
    groups: [
      { label: "Vaste stof", lines: ["Het 'n vaste vorm.", "Voorbeelde: hout, klip, plastiek en appels.", "Deeltjies is naby mekaar en netjies gepak."] },
      { label: "Vloeistof", lines: ["Kan vloei.", "Neem die vorm van die houer aan.", "Voorbeelde: water, kookolie en tee."] },
      { label: "Gas", lines: ["Het geen vaste vorm nie.", "Deeltjies beweeg rond en vul die ruimte.", "Voorbeelde: gas vir koskook en stoom."] }
    ]
  },
  {
    title: "Toestandveranderinge",
    picture: 2,
    groups: [
      { label: "Wanneer hitte bykom", lines: ["Smelt: 'n vaste stof verander in 'n vloeistof.", "Verdamp: 'n vloeistof verander in 'n gas.", "Voorbeelde: roomys smelt, water kook en verdamp."] },
      { label: "Wanneer hitte weggaan", lines: ["Kondenseer: 'n gas koel af en verander in 'n vloeistof.", "Stol: 'n vloeistof verloor hitte en verander in 'n vaste stof.", "Voorbeelde: wasem vorm druppels, jellie stol."] },
      { label: "Termometer", lines: ["'n Termometer meet temperatuur.", "Die vloeistof binne beweeg op wanneer dit warmer raak."] }
    ]
  },
  {
    title: "Die watersiklus",
    picture: 1,
    groups: [
      { label: "Wat is dit?", lines: ["Die watersiklus is die beweging van water vanaf land en see na die lug en weer terug.", "Water verander van toestand in hierdie siklus.", "Die water op aarde beweeg heeltyd in die rondte."] },
      { label: "Byskrifte om te ken", lines: ["Son.", "Wind.", "Verdamping.", "Kondensasie.", "Neerslag.", "Afloop.", "Grondwater.", "Riviere en strome.", "See."] },
      { label: "Aardverwarming", lines: ["As die aarde warmer word, verdamp meer water.", "Die watersiklus kan verander as gevolg van aardverwarming."] }
    ]
  },
  {
    title: "Waarom die watersiklus belangrik is",
    picture: 1,
    groups: [
      { label: "Varswater", lines: ["Reen, sneeu en ander neerslag gee vars water.", "Riviere, mere en grondwater kry water.", "Mense, diere en plante het vars water nodig."] },
      { label: "Lewe op aarde", lines: ["Plante het water nodig vir fotosintese.", "Sonder plante is daar minder kos en suurstof.", "Lewe op aarde is afhanklik van die watersiklus."] },
      { label: "Suiwering en temperatuur", lines: ["Verdamping en kondensasie help water natuurlik suiwer.", "Die watersiklus help ook om temperatuur te reguleer."] }
    ]
  },
  {
    title: "Rou en vervaardigde materiale",
    picture: 3,
    groups: [
      { label: "Rou materiaal", lines: ["Kom uit die natuur.", "Voorbeelde: hout, klei, sand, klip, katoen, diervelle, wol, steenkool en olie."] },
      { label: "Vervaardigde materiaal", lines: ["Word deur mense uit natuurlike materiale gemaak.", "Voorbeelde: glas, keramiek, plastiek, leer, vesel, tafels, bakstene, hemde en spykers."] },
      { label: "Onthou", lines: ["Rou materiale kan verander word om nuwe materiale te maak.", "Soms word rou materiale gemeng of verhit."] }
    ]
  },
  {
    title: "Hoe materiale vervaardig word",
    picture: 0,
    groups: [
      { label: "Sand word glas", lines: ["Sand bestaan uit baie fyn klipdeeltjies.", "Wanneer sand verhit word, smelt dit tot 'n vloeistof.", "Wanneer dit afkoel, word dit glas."] },
      { label: "Klei word keramiek", lines: ["Klei bestaan uit klein gladde stukkies gebreekte klip.", "Klei kan maklik gevorm word.", "Wanneer klei in 'n warm oond gebak word, word dit keramiek."] },
      { label: "Steenkool en olie word plastiek/vesel", lines: ["Steenkool en olie kom uit die grond.", "Hierdie materiale kan saam plastiek vorm.", "Nylon en polyester is vesels wat uit steenkool en olie gemaak kan word."] }
    ]
  },
  {
    title: "Eienskappe van materiale",
    picture: 3,
    groups: [
      { label: "Woorde om te gebruik", lines: ["Hard.", "Sag.", "Buigsaam.", "Sterk.", "Swak.", "Bros.", "Waterdig.", "Absorberend.", "Lig of swaar."] },
      { label: "Voorbeelde", lines: ["Leer is buigsaam en word van diervelle gemaak.", "Wol is sag en buigsaam.", "Keramiek is hard, maar bros.", "Glas is helder, hard en kan maklik breek."] },
      { label: "Vrae in die toets", lines: ["Beskryf hoe 'n materiaal lyk.", "Se waarvan dit gemaak is.", "Noem die eienskappe van die materiaal."] }
    ]
  }
];

const flashcards = [
  ["Wat is materie?", "Alles rondom ons wat ruimte opneem."],
  ["Noem die drie toestande van materie.", "Vaste stof, vloeistof en gas."],
  ["Wat is 'n vaste stof?", "Iets wat 'n vaste vorm het, soos hout, klip of plastiek."],
  ["Wat is 'n vloeistof?", "Iets wat kan vloei en die vorm van die houer aanneem."],
  ["Wat is 'n gas?", "Iets sonder vaste vorm waarvan die deeltjies rondbeweeg en die ruimte vul."],
  ["Wat beteken smelt?", "'n Vaste stof kry hitte en verander in 'n vloeistof."],
  ["Wat beteken verdamp?", "'n Vloeistof kry hitte en verander in 'n gas."],
  ["Wat beteken kondenseer?", "'n Gas koel af en verander in 'n vloeistof."],
  ["Wat beteken stol?", "'n Vloeistof verloor hitte en verander in 'n vaste stof."],
  ["Waarvoor gebruik ons 'n termometer?", "Om temperatuur te meet."],
  ["Wat is die watersiklus?", "Die beweging van water vanaf land en see na die lug en weer terug."],
  ["Noem vier byskrifte op die watersiklus.", "Son, verdamping, kondensasie, neerslag, afloop, grondwater, riviere/strome of see."],
  ["Hoekom is die watersiklus belangrik?", "Dit gee vars water, help plante groei, reguleer temperatuur en suiwer water natuurlik."],
  ["Wat is rou materiaal?", "Materiaal wat uit die natuur kom."],
  ["Wat is vervaardigde materiaal?", "Materiaal of voorwerpe wat mense uit natuurlike materiale maak."],
  ["Waarvan word glas gemaak?", "Van sand wat verhit en afgekoel word."],
  ["Waarvan word keramiek gemaak?", "Van klei wat gebak word."],
  ["Waarvan word leer gemaak?", "Van diervelle."],
  ["Wat beteken bros?", "Dit breek maklik."],
  ["Wat beteken absorberend?", "Dit suig vloeistof maklik op."]
];

const quiz = [
  {
    question: "Watter een is 'n vaste stof?",
    options: ["Hout", "Water", "Stoom", "Wind"],
    answer: 0,
    fact: "Hout het 'n vaste vorm en is dus 'n vaste stof."
  },
  {
    question: "Wat gebeur wanneer roomys smelt?",
    options: ["Vaste stof verander in vloeistof", "Gas verander in vloeistof", "Vloeistof verander in gas", "Vloeistof verander in vaste stof"],
    answer: 0,
    fact: "Smelt gebeur wanneer 'n vaste stof hitte kry."
  },
  {
    question: "Wat beteken verdamping?",
    options: ["Vloeistof verander in gas", "Gas verander in vloeistof", "Vaste stof verander in vloeistof", "Vloeistof word hard"],
    answer: 0,
    fact: "Wanneer water kook of in die lug verdamp, verander dit in gas."
  },
  {
    question: "Wat beteken kondensasie?",
    options: ["Gas verander in vloeistof", "Sand word glas", "Klei word hard", "Water loop in riviere af"],
    answer: 0,
    fact: "Wasem wat op 'n koue oppervlak druppels vorm, is kondensasie."
  },
  {
    question: "Wat meet 'n termometer?",
    options: ["Temperatuur", "Wind", "Gewig", "Kleur"],
    answer: 0,
    fact: "'n Termometer wys hoe warm of koud iets is."
  },
  {
    question: "Watter woord beteken water wat uit wolke val?",
    options: ["Neerslag", "Verdamping", "Kondensasie", "Grondwater"],
    answer: 0,
    fact: "Neerslag kan reen, sneeu of hael wees."
  },
  {
    question: "Wat is afloop?",
    options: ["Water wat oor die aardoppervlak na strome, riviere en mere loop", "Water wat in gas verander", "Waterdruppels in wolke", "Die son se hitte"],
    answer: 0,
    fact: "Afloop is water wat oor die oppervlak wegvloei."
  },
  {
    question: "Hoekom kan lewe nie goed sonder die watersiklus voortgaan nie?",
    options: ["Daar sou nie genoeg varswater wees nie", "Alle klippe sou verdwyn", "Sand sou altyd smelt", "Alle materiale sou plastiek word"],
    answer: 0,
    fact: "Mense, diere en plante het vars water nodig."
  },
  {
    question: "Wat is 'n voorbeeld van rou materiaal?",
    options: ["Hout", "Tafel", "Glasbeker", "Plastieksak"],
    answer: 0,
    fact: "Hout kom uit die natuur."
  },
  {
    question: "Wat is 'n voorbeeld van vervaardigde materiaal of produk?",
    options: ["Baksteen", "Klip", "Katoenplant", "Sand"],
    answer: 0,
    fact: "Bakstene word deur mense gemaak."
  },
  {
    question: "Waarvan word glas gemaak?",
    options: ["Sand", "Diervelle", "Wol", "Reenwater"],
    answer: 0,
    fact: "Sand word verhit, smelt, word gevorm en koel dan af as glas."
  },
  {
    question: "Waarvan word keramiek gemaak?",
    options: ["Klei en klip/sand", "Steenkool en olie", "Katoen", "Waterdamp"],
    answer: 0,
    fact: "Klei kan gebak word om keramiek te maak."
  },
  {
    question: "Watter materiaal word uit diervelle gemaak?",
    options: ["Leer", "Glas", "Klei", "Stoom"],
    answer: 0,
    fact: "Leer is 'n buigsame materiaal wat van diervelle gemaak word."
  },
  {
    question: "Wat beteken bros?",
    options: ["Breek maklik", "Suig water op", "Kan vloei", "Word in wolke gemaak"],
    answer: 0,
    fact: "Keramiek is hard, maar kan bros wees."
  },
  {
    question: "Wat beteken absorberend?",
    options: ["Suig vloeistof maklik op", "Breek maklik", "Is gemaak van olie", "Verander in gas"],
    answer: 0,
    fact: "Absorberend beteken dit neem vloeistof op."
  }
];

const timeline = [
  ["1. Materie", "Alles rondom ons is materie en kan vaste stof, vloeistof of gas wees."],
  ["2. Deeltjies", "Kyk hoe deeltjies in vaste stowwe, vloeistowwe en gasse gerangskik is."],
  ["3. Hitte by", "Smelt en verdamp gebeur wanneer hitte bykom."],
  ["4. Hitte weg", "Kondenseer en stol gebeur wanneer hitte weggaan of iets afkoel."],
  ["5. Watersiklus", "Water beweeg vanaf land en see na die lug en weer terug."],
  ["6. Varswater", "Die watersiklus gee vars water en help lewe op aarde."],
  ["7. Rou materiaal", "Materiaal kom eers uit die natuur, soos hout, sand, klei en katoen."],
  ["8. Vervaardiging", "Mense verander rou materiale in nuwe materiale of produkte."],
  ["9. Eienskappe", "Beskryf materiale met woorde soos hard, sag, bros, buigsaam en waterdig."]
];

const words = [
  ["materie", "Alles rondom ons wat ruimte opneem."],
  ["vaste stof", "Materie wat 'n vaste vorm het."],
  ["vloeistof", "Materie wat kan vloei en die vorm van die houer aanneem."],
  ["gas", "Materie sonder vaste vorm wat die ruimte vul."],
  ["verandering van toestand", "'n Stof verander van een toestand na 'n ander wanneer dit hitte verloor of hitte bykry."],
  ["smelt", "'n Vaste stof kry hitte en verander in 'n vloeistof."],
  ["verdamp", "'n Vloeistof verander in 'n gas."],
  ["kondenseer", "'n Gas verander in 'n vloeistof."],
  ["stol", "'n Vloeistof verander in 'n vaste stof."],
  ["termometer", "'n Instrument wat temperatuur meet."],
  ["watersiklus", "Die beweging van water vanaf land en see na die lug en weer terug."],
  ["kondensasie", "Wanneer gas 'n vloeistof word."],
  ["afloop", "Water wat oor die aardoppervlak in strome, riviere, visdamme en mere afloop."],
  ["neerslag", "Water wat uit wolke val, soos reen, sneeu of hael."],
  ["damp", "Klein druppeltjies wat baie ligter as water is."],
  ["grondwater", "Water wat in die grond insak en ondergronds beweeg."],
  ["rou materiaal", "Natuurlike materiaal wat in die natuur gevind word."],
  ["vervaardigde materiaal", "Materiaal of produkte wat mense uit natuurlike materiale maak."],
  ["sand", "Baie fyn klipdeeltjies."],
  ["klei", "Klein, gladde stukkies gebreekte klip."],
  ["vormbaar", "Kan maklik gevorm word."],
  ["keramiek", "'n Harde materiaal gemaak van klei en klip/sand."],
  ["bros", "Breek maklik."],
  ["steenkool", "'n Harde swart stof wat uit die grond kom."],
  ["plastiek", "Word gemaak uit stowwe wat in steenkool en olie gevind word."],
  ["leer", "Buigsame materiaal wat van diervelle gemaak word."],
  ["vesel", "Draadjies of toutjies in plant- en diermateriaal."],
  ["absorberend", "Suig vloeistof maklik op."],
  ["waterdig", "Laat water nie maklik deur nie."],
  ["buigsaam", "Kan buig sonder om maklik te breek."]
];

const examPractice = [
  {
    marks: "3 punte",
    question: "Noem die drie toestande van materie en gee een voorbeeld van elkeen.",
    answer: ["Vaste stof: hout, klip, plastiek of appels.", "Vloeistof: water, kookolie of tee.", "Gas: stoom of gas vir koskook."]
  },
  {
    marks: "4 punte",
    question: "Verduidelik smelt, verdamp, kondenseer en stol kortliks.",
    answer: ["Smelt: vaste stof verander in vloeistof.", "Verdamp: vloeistof verander in gas.", "Kondenseer: gas verander in vloeistof.", "Stol: vloeistof verander in vaste stof."]
  },
  {
    marks: "4 punte",
    question: "Gee vier byskrifte wat op 'n watersiklus-diagram kan voorkom.",
    answer: ["Son.", "Verdamping.", "Kondensasie.", "Neerslag.", "Afloop.", "Grondwater.", "Riviere en strome.", "See.", "Wind."]
  },
  {
    marks: "4 punte",
    question: "Waarom is die watersiklus belangrik vir lewe op aarde?",
    answer: ["Dit voorsien vars water aan riviere, mere en grondwater.", "Plante het water nodig om te groei.", "Dit help om temperatuur te reguleer.", "Dit help met natuurlike suiwering van water."]
  },
  {
    marks: "4 punte",
    question: "Verduidelik die verskil tussen rou materiale en vervaardigde materiale.",
    answer: ["Rou materiale kom uit die natuur.", "Voorbeelde is hout, sand, klei, katoen en diervelle.", "Vervaardigde materiale word deur mense gemaak.", "Voorbeelde is glas, keramiek, plastiek, leer en bakstene."]
  },
  {
    marks: "3 punte",
    question: "Hoe word glas uit sand gemaak?",
    answer: ["Sand word verhit.", "Die sand smelt tot 'n vloeistof en kan gevorm word.", "Wanneer dit afkoel, word dit glas."]
  },
  {
    marks: "3 punte",
    question: "Hoe word keramiek uit klei gemaak?",
    answer: ["Klei kan maklik gevorm word.", "Die klei word in 'n baie warm oond gebak.", "Die gebakte klei word hard en verander in keramiek."]
  },
  {
    marks: "5 punte",
    question: "Beskryf die eienskappe van materiale met geskikte woorde.",
    answer: ["Leer: buigsaam en sterk.", "Wol: sag en buigsaam.", "Keramiek: hard, maar bros.", "Glas: helder, hard en bros.", "Plastiek: kan buigsaam en waterdig wees."]
  }
];

const emptyCopy = {
  learn: {
    title: "NWT-leerwerk kom hier in",
    body: "Stuur vir my Ewann se NWT opsommings of fotos, dan bou ek die leerpad met kort punte, kernwoorde en oefenvrae."
  },
  cards: {
    title: "Nog geen flitskaarte nie",
    body: "Die flitskaarte word uit die NWT-inhoud gemaak wanneer die nuwe werk bygevoeg word."
  },
  quiz: {
    title: "Nog geen vasvra nie",
    body: "Die vasvra sal vrae, antwoorde en terugvoer uit die NWT-werk bevat."
  },
  practice: {
    title: "Nog geen vraestel-oefening nie",
    body: "Hier kom langer modelantwoorde en punte-wenke vir NWT."
  },
  timeline: {
    title: "Nog geen volgorde-afdeling nie",
    body: "As die NWT-werk prosesse of stappe het, plaas ons dit hier in volgorde."
  },
  words: {
    title: "Nog geen woordelys nie",
    body: "Belangrike NWT-terme en definisies kom hier."
  }
};

const state = {
  done: new Set(JSON.parse(localStorage.getItem("ewannNwtDone") || "[]")),
  cardIndex: 0,
  cardFlipped: false,
  quizIndex: 0,
  score: 0,
  answered: false
};

const $ = (selector) => document.querySelector(selector);

function saveProgress() {
  localStorage.setItem("ewannNwtDone", JSON.stringify([...state.done]));
}

function emptyCard(copy) {
  return `
    <article class="topic-card">
      <div class="topic-visual" aria-label="${topicPictures[0].label}" role="img">${topicPictures[0].svg}</div>
      <h3>${copy.title}</h3>
      <p class="feedback">${copy.body}</p>
    </article>
  `;
}

function renderProgress() {
  const total = learningItems.length;
  const done = [...state.done].filter((index) => index < total).length;
  $("#progressText").textContent = `${done} van ${total} voltooi`;
  $("#progressBar").style.width = `${total ? (done / total) * 100 : 0}%`;
}

function renderTopics() {
  if (!learningItems.length) {
    $("#topicGrid").innerHTML = emptyCard(emptyCopy.learn);
    return;
  }

  $("#topicGrid").innerHTML = learningItems.map((topic, index) => {
    const done = state.done.has(index);
    const picture = topicPictures[topic.picture] || topicPictures[0];
    return `
      <article class="topic-card ${done ? "is-done" : ""}">
        <div class="topic-visual" aria-label="${picture.label}" role="img">${picture.svg}</div>
        <h3>${index + 1}. ${topic.title}</h3>
        <div class="topic-groups">
          ${topic.groups.map((group) => `
            <section class="mini-section">
              <h4>${group.label}</h4>
              <ul>${group.lines.map((line) => `<li>${line}</li>`).join("")}</ul>
            </section>
          `).join("")}
        </div>
        <button class="${done ? "secondary-button" : "primary-button"}" data-topic="${index}" type="button">
          ${done ? "Klaar gemerk" : "Merk as geleer"}
        </button>
      </article>
    `;
  }).join("");
}

function renderCard() {
  if (!flashcards.length) {
    $("#flashcard").innerHTML = `
      <div>
        <span class="eyebrow">Flitskaarte</span>
        <h3>${emptyCopy.cards.title}</h3>
        <p>${emptyCopy.cards.body}</p>
      </div>
    `;
    $("#flipCard").disabled = true;
    $("#prevCard").disabled = true;
    $("#nextCard").disabled = true;
    $("#cardCounter").textContent = "0 kaarte";
    return;
  }

  $("#flipCard").disabled = false;
  $("#prevCard").disabled = false;
  $("#nextCard").disabled = false;

  const [question, answer] = flashcards[state.cardIndex];
  $("#flashcard").innerHTML = `
    <div>
      <span class="eyebrow">${state.cardFlipped ? "Antwoord" : "Vraag"}</span>
      <h3>${state.cardFlipped ? answer : question}</h3>
      <p>${state.cardFlipped ? "Kan jy nou die vraag weer sonder hulp antwoord?" : "Dink eers self. Klik dan om die antwoord te sien."}</p>
    </div>
  `;
  $("#flipCard").textContent = state.cardFlipped ? "Wys vraag" : "Wys antwoord";
  $("#cardCounter").textContent = `Kaart ${state.cardIndex + 1} van ${flashcards.length}`;
}

function renderQuiz() {
  if (!quiz.length) {
    $("#quizBox").innerHTML = emptyCard(emptyCopy.quiz);
    return;
  }

  if (state.quizIndex >= quiz.length) {
    const percent = Math.round((state.score / quiz.length) * 100);
    $("#quizBox").innerHTML = `
      <div class="quiz-question">
        <span class="eyebrow">Klaar</span>
        <h3>Jou punt: ${state.score} uit ${quiz.length} (${percent}%)</h3>
        <p class="feedback">${percent >= 70 ? "Mooi. Hersien nou die flitskaarte om dit vas te le." : "Goeie poging. Lees die leerpad weer en probeer dan weer."}</p>
      </div>
    `;
    return;
  }

  const item = quiz[state.quizIndex];
  $("#quizBox").innerHTML = `
    <div class="quiz-question">
      <span class="eyebrow">Vraag ${state.quizIndex + 1} van ${quiz.length}</span>
      <h3>${item.question}</h3>
      <div class="answers">
        ${item.options.map((option, index) => `<button class="answer" data-answer="${index}" type="button">${option}</button>`).join("")}
      </div>
      <p class="feedback" id="quizFeedback"></p>
    </div>
  `;
}

function renderPractice() {
  if (!examPractice.length) {
    $("#practiceList").innerHTML = emptyCard(emptyCopy.practice);
    return;
  }

  $("#practiceList").innerHTML = examPractice.map((item, index) => `
    <article class="practice-card">
      <span class="practice-meta">Vraag ${index + 1} | ${item.marks}</span>
      <h3>${item.question}</h3>
      <p>Modelantwoord:</p>
      <ul>${item.answer.map((line) => `<li>${line}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderTimeline() {
  if (!timeline.length) {
    $("#timelineList").innerHTML = emptyCard(emptyCopy.timeline);
    return;
  }

  $("#timelineList").innerHTML = timeline.map(([date, event]) => `
    <article class="timeline-item">
      <strong>${date}</strong>
      <p>${event}</p>
    </article>
  `).join("");
}

function renderWords(filter = "") {
  if (!words.length) {
    $("#wordList").innerHTML = emptyCard(emptyCopy.words);
    return;
  }

  const term = filter.trim().toLowerCase();
  const visibleWords = words.filter(([word, meaning]) => `${word} ${meaning}`.toLowerCase().includes(term));
  $("#wordList").innerHTML = visibleWords.map(([word, meaning]) => `
    <article class="word-card">
      <h3>${word}</h3>
      <p>${meaning}</p>
    </article>
  `).join("") || `<p class="feedback">Geen woord pas by jou soektog nie.</p>`;
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab, .view").forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    $(`#${tab.dataset.view}`).classList.add("is-active");
  });
});

$("#topicGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  const index = Number(button.dataset.topic);
  if (state.done.has(index)) {
    state.done.delete(index);
  } else {
    state.done.add(index);
  }
  saveProgress();
  renderTopics();
  renderProgress();
});

$("#resetProgress").addEventListener("click", () => {
  state.done.clear();
  saveProgress();
  renderTopics();
  renderProgress();
});

$("#flipCard").addEventListener("click", () => {
  if (!flashcards.length) return;
  state.cardFlipped = !state.cardFlipped;
  renderCard();
});

$("#flashcard").addEventListener("click", () => {
  if (!flashcards.length) return;
  state.cardFlipped = !state.cardFlipped;
  renderCard();
});

$("#prevCard").addEventListener("click", () => {
  if (!flashcards.length) return;
  state.cardIndex = (state.cardIndex - 1 + flashcards.length) % flashcards.length;
  state.cardFlipped = false;
  renderCard();
});

$("#nextCard").addEventListener("click", () => {
  if (!flashcards.length) return;
  state.cardIndex = (state.cardIndex + 1) % flashcards.length;
  state.cardFlipped = false;
  renderCard();
});

$("#quizBox").addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button || state.answered) return;
  state.answered = true;
  const choice = Number(button.dataset.answer);
  const item = quiz[state.quizIndex];
  const buttons = document.querySelectorAll("[data-answer]");
  buttons.forEach((answerButton) => {
    answerButton.disabled = true;
    const answerIndex = Number(answerButton.dataset.answer);
    if (answerIndex === item.answer) answerButton.classList.add("correct");
    if (answerIndex === choice && choice !== item.answer) answerButton.classList.add("wrong");
  });
  if (choice === item.answer) state.score += 1;
  $("#quizFeedback").textContent = choice === item.answer ? `Reg. ${item.fact}` : `Nog nie. ${item.fact}`;
  setTimeout(() => {
    state.quizIndex += 1;
    state.answered = false;
    renderQuiz();
  }, 1600);
});

$("#restartQuiz").addEventListener("click", () => {
  state.quizIndex = 0;
  state.score = 0;
  state.answered = false;
  renderQuiz();
});

$("#wordSearch").addEventListener("input", (event) => renderWords(event.target.value));

renderTopics();
renderProgress();
renderCard();
renderQuiz();
renderPractice();
renderTimeline();
renderWords();
