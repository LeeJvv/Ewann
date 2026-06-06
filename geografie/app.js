const topicPictures = [
  {
    label: "Kaart",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#e0f2fe"></rect><path d="M24 22l24-8 24 8 24-8v54l-24 8-24-8-24 8z" fill="#ffffff" stroke="#1d4ed8" stroke-width="5" stroke-linejoin="round"></path><path d="M48 14v54M72 22v54" stroke="#93c5fd" stroke-width="4"></path><path d="M34 50c12-14 28-16 45-5 6 4 11 5 17 3" fill="none" stroke="#16a34a" stroke-width="6" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Aarde",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dcfce7"></rect><circle cx="60" cy="45" r="30" fill="#2563eb"></circle><path d="M39 35c10-9 23-8 37 0-5 6-6 12-1 19-12 7-26 6-39-3 7-4 8-10 3-16z" fill="#22c55e"></path><path d="M30 75h60" stroke="#0f766e" stroke-width="6" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Kompas",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fff7d6"></rect><circle cx="60" cy="45" r="30" fill="#ffffff" stroke="#0f766e" stroke-width="6"></circle><path d="M66 39l17-18-8 24-21 25 7-25-24 8z" fill="#d97706"></path><circle cx="60" cy="45" r="5" fill="#17212b"></circle></svg>`
  },
  {
    label: "Notas",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#f1f5f9"></rect><rect x="28" y="18" width="64" height="58" rx="8" fill="#ffffff" stroke="#334155" stroke-width="5"></rect><path d="M42 35h36M42 48h32M42 61h24" stroke="#0f766e" stroke-width="5" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Sleutel",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fef3c7"></rect><circle cx="45" cy="39" r="16" fill="#ffffff" stroke="#d97706" stroke-width="6"></circle><path d="M59 39h34M78 39v12M90 39v9" stroke="#d97706" stroke-width="6" stroke-linecap="round"></path><path d="M30 68h60" stroke="#0f766e" stroke-width="5" stroke-linecap="round"></path></svg>`
  }
];

const learningItems = [
  {
    title: "Syaansigte en planaansigte",
    picture: 0,
    groups: [
      { label: "Syaansig", lines: ["Jy kyk na iets van die kant af.", "Voorbeeld: jy kyk na 'n fiets van die kant af.", "Jy sien die sy van iets."] },
      { label: "Planaansig", lines: ["Jy kyk na iets van bo af.", "Dit is soos 'n voel wat van bo af kyk.", "Kaarte word as planaansigte geteken."] },
      { label: "Vergelyk", lines: ["Syaansig: van die kant af.", "Planaansig: van bo af.", "Kyk mooi watter deel van die voorwerp jy sien."] }
    ]
  },
  {
    title: "Simbole en sleutels",
    picture: 4,
    groups: [
      { label: "Simbole", lines: ["Simbole is klein prentjies of tekens op 'n kaart.", "Hulle wys waar plekke of dinge is.", "Simbole maak kaarte makliker om te lees."] },
      { label: "Sleutel", lines: ["'n Sleutel verduidelik wat die simbole beteken.", "Jy kyk na die sleutel om te weet waarvoor elke prentjie staan.", "Voorbeelde: huis, kerk, kliniek, skool of brug."] },
      { label: "Onthou", lines: ["Moenie net raai wat 'n simbool beteken nie.", "Soek dit in die sleutel."] }
    ]
  },
  {
    title: "Kompasrigtings",
    picture: 2,
    groups: [
      { label: "Vier hoofrigtings", lines: ["Noord = N.", "Suid = S.", "Oos = O.", "Wes = W."] },
      { label: "Belangrike son-feit", lines: ["Die son kom in die ooste op.", "Die son sak in die weste."] },
      { label: "Kompas", lines: ["'n Kompas is 'n instrument wat rigtings wys.", "Die kompasnaald wys altyd noord."] }
    ]
  },
  {
    title: "Roosterverwysings",
    picture: 0,
    groups: [
      { label: "Rooster", lines: ["'n Rooster bestaan uit lyne wat blokkies vorm.", "Letters en getalle help ons om plekke op 'n kaart te vind."] },
      { label: "Hoe om dit te lees", lines: ["Lees eers die letter.", "Lees dan die getal.", "Voorbeeld: A3 beteken letter A en getal 3."] },
      { label: "Waar is dit?", lines: ["Letters is aan die kant van die kaart.", "Getalle is bo-aan die kaart."] }
    ]
  },
  {
    title: "Die 6 belangrikste behoeftes",
    picture: 3,
    groups: [
      { label: "K-W-S-K-G-E", lines: ["Kos.", "Water.", "Skuiling.", "Klere.", "Gesondheidsorg.", "Energie."] },
      { label: "Hoekom dit saak maak", lines: ["Mense het hierdie dinge nodig om veilig en gesond te leef.", "As 'n behoefte ontbreek, kan mense swaarkry."] },
      { label: "Onthou-wenk", lines: ["K-W-S-K-G-E help jou die ses behoeftes onthou."] }
    ]
  },
  {
    title: "Kos en water",
    picture: 1,
    groups: [
      { label: "Kos", lines: ["Gee energie.", "Help ons groei.", "Hou ons gesond.", "Voorbeelde: brood, vrugte, groente en water."] },
      { label: "Water", lines: ["Ons drink dit.", "Ons kook daarmee.", "Ons was onsself en klere daarmee."] },
      { label: "Gesondheid", lines: ["Skoon water hou mense gesond.", "Vuil water kan siektes veroorsaak.", "Mense kan nie lank sonder water leef nie."] }
    ]
  },
  {
    title: "Skuiling, klere en gesondheidsorg",
    picture: 3,
    groups: [
      { label: "Skuiling / behuising", lines: ["Beskerm teen koue, hitte en reen.", "Gee veiligheid.", "Gee privaatheid.", "Voorbeelde: huis, woonstel en tent."] },
      { label: "Klere", lines: ["Hou ons warm.", "Beskerm ons liggame.", "Help ons netjies lyk.", "Voorbeelde: skoolklere, skoene en jasse."] },
      { label: "Gesondheidsorg", lines: ["Dokters en klinieke help siek mense.", "Medisyne help ons beter word.", "Voorbeelde: hospitale, klinieke en tandartse."] }
    ]
  },
  {
    title: "Energie",
    picture: 1,
    groups: [
      { label: "Waarom belangrik?", lines: ["Gee lig en hitte.", "Help mense kook.", "Laat masjiene en toestelle werk."] },
      { label: "Voorbeelde", lines: ["Elektrisiteit.", "Gas.", "Sonkrag.", "Hout."] },
      { label: "Onthou", lines: ["Energie maak die daaglikse lewe makliker."] }
    ]
  },
  {
    title: "Belangrike Geografie-woorde",
    picture: 4,
    groups: [
      { label: "Plekke en paaie", lines: ["Nedersetting: plek waar mense woon.", "Landmerk: bekende plek wat maklik raakgesien word.", "Grondpad: pad van grond.", "Voetpaadjie: smal paadjie waar mense loop."] },
      { label: "Werk en materiale", lines: ["Gewasse: plante wat mense kweek.", "Fabriek: groot gebou waar goed gemaak word.", "Teer: swart oppervlak waarmee paaie gemaak word.", "Gruis: klein klippies op paaie."] },
      { label: "Lewe", lines: ["Behoeftes: dinge wat mense nodig het om te leef.", "Skuiling: veilige plek waar mense woon.", "Energie: krag vir lig, hitte en werk."] }
    ]
  }
];

const flashcards = [
  ["Wat is 'n syaansig?", "Wanneer jy na iets van die kant af kyk."],
  ["Wat is 'n planaansig?", "Wanneer jy na iets van bo af kyk."],
  ["Hoe word kaarte gewoonlik geteken?", "As planaansigte."],
  ["Wat is simbole op 'n kaart?", "Klein prentjies of tekens wat plekke of dinge wys."],
  ["Wat is 'n sleutel op 'n kaart?", "'n Deel wat verduidelik wat die simbole beteken."],
  ["Noem die vier hoofrigtings.", "Noord, Suid, Oos en Wes."],
  ["Wat is die kort vorm vir Noord?", "N."],
  ["Waar kom die son op?", "In die ooste."],
  ["Waar sak die son?", "In die weste."],
  ["Wat wys 'n kompas?", "Rigtings."],
  ["Waarheen wys die kompasnaald altyd?", "Noord."],
  ["Wat is 'n rooster?", "Lyne wat blokkies vorm."],
  ["Hoe lees jy A3?", "Eers die letter A, dan die getal 3."],
  ["Waar is letters op 'n roosterkaart?", "Aan die kant van die kaart."],
  ["Waar is getalle op 'n roosterkaart?", "Bo-aan die kaart."],
  ["Noem die 6 belangrikste behoeftes.", "Kos, water, skuiling, klere, gesondheidsorg en energie."],
  ["Wat beteken nedersetting?", "'n Plek waar mense woon."],
  ["Wat is 'n landmerk?", "'n Bekende plek wat maklik raakgesien word."],
  ["Wat beteken gewasse?", "Plante wat mense kweek vir kos of verkoop."],
  ["Wat is 'n fabriek?", "'n Groot gebou waar goed gemaak word."]
];

const quiz = [
  {
    question: "Wat is 'n syaansig?",
    options: ["Van die kant af", "Van bo af", "Van onder af", "Net van ver af"],
    answer: 0,
    fact: "Syaansig beteken jy sien die sy van iets."
  },
  {
    question: "Wat is 'n planaansig?",
    options: ["Van bo af", "Van die kant af", "Van voor af alleen", "Van agter af"],
    answer: 0,
    fact: "Kaarte word as planaansigte geteken."
  },
  {
    question: "Waarvoor gebruik ons 'n sleutel op 'n kaart?",
    options: ["Om simbole te verduidelik", "Om die papier oop te sluit", "Om die son te wys", "Om getalle uit te vee"],
    answer: 0,
    fact: "'n Sleutel verduidelik wat elke simbool beteken."
  },
  {
    question: "Watter rigting se kort vorm is O?",
    options: ["Oos", "Noord", "Suid", "Wes"],
    answer: 0,
    fact: "O staan vir Oos."
  },
  {
    question: "Waar kom die son op?",
    options: ["Oos", "Wes", "Suid", "Noord"],
    answer: 0,
    fact: "Die son kom in die ooste op."
  },
  {
    question: "Wat wys die kompasnaald altyd?",
    options: ["Noord", "Suid", "Oos", "Wes"],
    answer: 0,
    fact: "Die kompasnaald wys altyd noord."
  },
  {
    question: "Hoe lees jy 'n roosterverwysing soos A3?",
    options: ["Eers die letter, dan die getal", "Eers die getal, dan die letter", "Net die getal", "Net die prentjie"],
    answer: 0,
    fact: "Lees eers die letter en dan die getal."
  },
  {
    question: "Watter een is 'n belangrike behoefte?",
    options: ["Water", "Speelgoed", "Lekkers", "Televisie"],
    answer: 0,
    fact: "Water is een van die 6 belangrikste behoeftes."
  },
  {
    question: "Wat gee mense energie en help hulle groei?",
    options: ["Kos", "Sleutels", "Roosters", "Landmerke"],
    answer: 0,
    fact: "Kos gee energie en help ons groei."
  },
  {
    question: "Wat beskerm mense teen koue, hitte en reen?",
    options: ["Skuiling", "Roosterverwysings", "Simbole", "Kompasnaalde"],
    answer: 0,
    fact: "Skuiling of behuising gee veiligheid en beskerming."
  },
  {
    question: "Wat beteken nedersetting?",
    options: ["'n Plek waar mense woon", "'n Klein prentjie op 'n kaart", "'n Swart padoppervlak", "'n Rigting"],
    answer: 0,
    fact: "'n Nedersetting is 'n plek waar mense woon."
  },
  {
    question: "Wat is 'n landmerk?",
    options: ["'n Bekende plek wat maklik raakgesien word", "'n Getal op 'n rooster", "'n Dokter se kantoor", "'n Vorm van energie"],
    answer: 0,
    fact: "Landmerke help mense om plekke te herken."
  }
];

const timeline = [
  ["1. Kyk na die prent", "Besluit of jy dit van die kant of van bo af sien."],
  ["2. Gebruik die sleutel", "Kyk wat elke simbool op die kaart beteken."],
  ["3. Vind rigting", "Gebruik Noord, Suid, Oos en Wes."],
  ["4. Lees roosterverwysing", "Lees eers die letter en dan die getal."],
  ["5. Vind die plek", "Gebruik die blokkie om die regte plek op die kaart te kry."],
  ["6. Onthou behoeftes", "Kos, water, skuiling, klere, gesondheidsorg en energie."]
];

const words = [
  ["syaansig", "Wanneer jy na iets van die kant af kyk."],
  ["planaansig", "Wanneer jy na iets van bo af kyk."],
  ["simbool", "'n Klein prentjie of teken op 'n kaart."],
  ["sleutel", "'n Deel van 'n kaart wat verduidelik wat die simbole beteken."],
  ["kompas", "'n Instrument wat rigtings wys."],
  ["noord", "Een van die vier hoofrigtings; kort vorm N."],
  ["suid", "Een van die vier hoofrigtings; kort vorm S."],
  ["oos", "Die rigting waar die son opkom; kort vorm O."],
  ["wes", "Die rigting waar die son sak; kort vorm W."],
  ["rooster", "Lyne wat blokkies vorm."],
  ["roosterverwysing", "Letters en getalle wat help om 'n plek op 'n kaart te vind."],
  ["nedersetting", "'n Plek waar mense woon."],
  ["gewasse", "Plante wat mense kweek vir kos of verkoop."],
  ["fabriek", "'n Groot gebou waar goed gemaak word."],
  ["teer", "'n Swart oppervlak waarmee paaie gemaak word."],
  ["gruis", "Klein klippies wat op paaie gebruik word."],
  ["landmerk", "'n Bekende plek wat maklik raakgesien word."],
  ["behoeftes", "Dinge wat mense nodig het om te leef."],
  ["energie", "Krag wat mense gebruik vir lig, hitte en werk."],
  ["skuiling", "'n Veilige plek waar mense woon of wegkruip."],
  ["grondpad", "'n Pad van grond en nie van teer nie."],
  ["voetpaadjie", "'n Smal paadjie waar mense loop."],
  ["gesondheidsorg", "Hulp van dokters, klinieke en medisyne om gesond te bly."]
];

const examPractice = [
  {
    marks: "2 punte",
    question: "Verduidelik die verskil tussen 'n syaansig en 'n planaansig.",
    answer: ["Syaansig is wanneer jy na iets van die kant af kyk.", "Planaansig is wanneer jy na iets van bo af kyk."]
  },
  {
    marks: "3 punte",
    question: "Wat is simbole en sleutels op 'n kaart?",
    answer: ["Simbole is klein prentjies of tekens op 'n kaart.", "Hulle wys waar plekke of dinge is.", "'n Sleutel verduidelik wat die simbole beteken."]
  },
  {
    marks: "4 punte",
    question: "Noem die vier hoofrigtings en hulle kort vorms.",
    answer: ["Noord = N.", "Suid = S.", "Oos = O.", "Wes = W."]
  },
  {
    marks: "3 punte",
    question: "Hoe gebruik jy 'n roosterverwysing soos C4?",
    answer: ["Lees eers die letter C.", "Lees dan die getal 4.", "Soek die blokkie waar C en 4 bymekaar kom."]
  },
  {
    marks: "6 punte",
    question: "Noem die ses belangrikste behoeftes van mense.",
    answer: ["Kos.", "Water.", "Skuiling.", "Klere.", "Gesondheidsorg.", "Energie."]
  },
  {
    marks: "5 punte",
    question: "Vul die ontbrekende woorde in: Mense het ___ nodig om energie te kry. 'n Huis gee mense ___. Dokters help met ___. Elektrisiteit is 'n vorm van ___. Ons dra ___ om ons liggame te beskerm.",
    answer: ["Kos.", "Skuiling.", "Gesondheidsorg.", "Energie.", "Klere."]
  },
  {
    marks: "4 punte",
    question: "Gee vier Geografie-woordeskatwoorde met kort betekenisse.",
    answer: ["Nedersetting: plek waar mense woon.", "Landmerk: bekende plek wat maklik gesien word.", "Gewasse: plante wat mense kweek.", "Fabriek: groot gebou waar goed gemaak word."]
  }
];

const emptyCopy = {
  learn: {
    title: "Geografie-leerwerk kom hier in",
    body: "Stuur vir my Ewann se Geografie opsommings of fotos, dan bou ek die leerpad met kort punte, kernwoorde en oefenvrae."
  },
  cards: {
    title: "Nog geen flitskaarte nie",
    body: "Die flitskaarte word uit die Geografie-inhoud gemaak wanneer die nuwe werk bygevoeg word."
  },
  quiz: {
    title: "Nog geen vasvra nie",
    body: "Die vasvra sal vrae, antwoorde en terugvoer uit die Geografie-werk bevat."
  },
  practice: {
    title: "Nog geen vraestel-oefening nie",
    body: "Hier kom langer modelantwoorde en punte-wenke vir Geografie."
  },
  timeline: {
    title: "Nog geen volgorde-afdeling nie",
    body: "As die Geografie-werk plekke, prosesse of stappe het, plaas ons dit hier in volgorde."
  },
  words: {
    title: "Nog geen woordelys nie",
    body: "Belangrike Geografie-terme en definisies kom hier."
  }
};

const state = {
  done: new Set(JSON.parse(localStorage.getItem("ewannGeografieDone") || "[]")),
  cardIndex: 0,
  cardFlipped: false,
  quizIndex: 0,
  score: 0,
  answered: false
};

const $ = (selector) => document.querySelector(selector);

function saveProgress() {
  localStorage.setItem("ewannGeografieDone", JSON.stringify([...state.done]));
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
