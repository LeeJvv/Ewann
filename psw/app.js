const topicPictures = [
  {
    label: "Hart",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fee2e2"></rect><path d="M60 74S25 54 25 33c0-12 9-20 20-20 7 0 12 3 15 9 3-6 8-9 15-9 11 0 20 8 20 20 0 21-35 41-35 41z" fill="#ef4444"></path></svg>`
  },
  {
    label: "Groep",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#e0f2fe"></rect><circle cx="38" cy="34" r="12" fill="#f59e0b"></circle><circle cx="60" cy="28" r="14" fill="#0f766e"></circle><circle cx="82" cy="34" r="12" fill="#2563eb"></circle><path d="M23 73c3-17 15-26 30-23 4 1 7 2 10 4 4-3 8-4 13-4 15-1 27 8 30 23z" fill="#ffffff" stroke="#334155" stroke-width="5" stroke-linejoin="round"></path></svg>`
  },
  {
    label: "Boek",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dcfce7"></rect><path d="M26 22h31c8 0 14 6 14 14v42H40c-8 0-14-6-14-14z" fill="#ffffff" stroke="#15803d" stroke-width="5"></path><path d="M71 36c0-8 6-14 14-14h9v56H71z" fill="#bbf7d0" stroke="#15803d" stroke-width="5"></path><path d="M40 42h18M40 56h18M80 42h9M80 56h9" stroke="#15803d" stroke-width="4" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Sterk",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fff7d6"></rect><path d="M60 15l10 20 22 3-16 15 4 22-20-10-20 10 4-22-16-15 22-3z" fill="#f59e0b"></path><path d="M44 48l10 10 24-26" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  }
];

const learningItems = [
  {
    title: "Eksamen: wat om te leer",
    picture: 2,
    groups: [
      { label: "Datum en vak", lines: ["PSW eksamen: 8 Junie 2026.", "Leer die definisies, afknouery, beter-word-stappe, kinderregte, verantwoordelikhede en groepwerk."] },
      { label: "Belangrik", lines: ["Elke kind het regte.", "Elke reg het ook 'n verantwoordelikheid.", "Regte en verantwoordelikhede werk saam."] }
    ]
  },
  {
    title: "Belangrike definisies",
    picture: 3,
    groups: [
      { label: "Persoonlike woorde", lines: ["Sterk punt: iets waarin ek goed is.", "Emosies: hoe ons voel.", "Angstig: bang, bekommerd of senuweeagtig."] },
      { label: "Probleem-woorde", lines: ["Konflik: wanneer mense baklei of kwaad raak.", "Afknouery: wanneer iemand ander seermaak of terg.", "Bullebak: iemand wat ander dreig, spot of op hulle pik."] },
      { label: "Regte-woorde", lines: ["Regte: dinge wat mense mag he of doen.", "Mishandeling: iemand seer of sleg behandel.", "Nasionaliteit: die land waar jy gebore is.", "Verantwoordelikheid: wat jy moet doen of help doen."] }
    ]
  },
  {
    title: "Afknouery",
    picture: 0,
    groups: [
      { label: "Wat kan jy doen?", lines: ["Ignoreer hulle.", "Stap weg.", "Moenie terugbaklei nie.", "Bly by 'n groep.", "Vertel 'n grootmens."] },
      { label: "Nog goeie keuses", lines: ["Wees voorbereid en he 'n antwoord reg.", "Vermy die situasie of plek.", "Moenie wys dat jy bang is nie.", "Hou rekord of skryf dit in 'n dagboek."] },
      { label: "Onthou", lines: ["'n Bullebak wil he jy moet bang voel.", "Kry hulp by 'n grootmens."] }
    ]
  },
  {
    title: "Hoe om beter te word in iets",
    picture: 2,
    groups: [
      { label: "Oefen", lines: ["Gebruik jou sterk punte om te verbeter.", "Oefening help.", "Skryf oefentoetse by die huis.", "Leer elke dag nuwe woorde."] },
      { label: "Sorg vir jou liggaam", lines: ["Slaap vroeg.", "Eet gesond.", "Drink genoeg water."] },
      { label: "Vra hulp", lines: ["Vra iemand om jou te help.", "Hoe meer jy oefen, hoe beter raak jy."] }
    ]
  },
  {
    title: "Emosies",
    picture: 0,
    groups: [
      { label: "Vier emosies", lines: ["Gelukkig.", "Hartseer.", "Kwaad.", "Bang."] },
      { label: "Waarom belangrik?", lines: ["Emosies wys hoe ons voel.", "Ons moet leer om emosies op 'n goeie manier te hanteer.", "As jy bang of hartseer voel, kan jy met 'n grootmens praat."] }
    ]
  },
  {
    title: "Kinderregte en verantwoordelikhede",
    picture: 3,
    groups: [
      { label: "Regte", lines: ["Reg op liefde en sorg.", "Reg op 'n naam en nasionaliteit.", "Reg op kos.", "Reg op skuiling.", "Reg op gesondheid.", "Reg op opvoeding."] },
      { label: "Verantwoordelikhede", lines: ["Wees gehoorsaam en respekvol.", "Gehoorsaam die landswette.", "Eet gesond en mors nie kos nie.", "Hou jou kamer netjies.", "Hou jou liggaam gesond.", "Gaan skool toe en doen huiswerk."] },
      { label: "Beskerming", lines: ["Kinders het beskerming teen mishandeling nodig.", "Moenie ander seermaak of spot nie.", "Pas jou besittings en klere op."] }
    ]
  },
  {
    title: "Werk in groepe",
    picture: 1,
    groups: [
      { label: "Probleme in groepwerk", lines: ["Maats bring nie goed nie.", "Maats stem nie saam nie.", "Konflik ontstaan.", "Werk word nie betyds klaargemaak nie.", "Kommunikasie is swak."] },
      { label: "Waarom groepwerk goed is", lines: ["Dit verbeter kommunikasie.", "Leerders help mekaar.", "Leerders kry nuwe idees.", "Leerders bou mekaar op.", "Dit help met verskillende leerstyle."] },
      { label: "Onthou", lines: ["Saam is ons sterker.", "Luister na mekaar en deel verantwoordelikhede."] }
    ]
  }
];

const flashcards = [
  ["Wat is 'n sterk punt?", "Iets waarin ek goed is."],
  ["Wat beteken verslaaf?", "Wanneer iemand nie kan ophou met iets nie."],
  ["Wat beteken konflik?", "Wanneer mense baklei of kwaad raak."],
  ["Wat is emosies?", "Hoe ons voel."],
  ["Wat beteken angstig?", "Bang, bekommerd of senuweeagtig."],
  ["Wat is afknouery?", "Wanneer iemand ander seermaak of terg."],
  ["Wat is 'n bullebak?", "Iemand wat ander dreig, spot of op hulle pik."],
  ["Wat is regte?", "Dinge wat mense mag he of doen."],
  ["Wat is mishandeling?", "Om iemand seer of sleg te behandel."],
  ["Wat is nasionaliteit?", "Die land waar jy gebore is."],
  ["Wat is 'n verantwoordelikheid?", "Wat jy moet doen of help doen."],
  ["Noem twee dinge wat jy kan doen as iemand jou afknou.", "Stap weg, bly by 'n groep, vertel 'n grootmens, ignoreer hulle of hou rekord."],
  ["Noem drie dinge wat jou help om beter te word.", "Oefen, slaap genoeg, eet gesond, drink water, skryf oefentoetse of vra hulp."],
  ["Noem een kinderreg.", "Reg op opvoeding, kos, liefde en sorg, gesondheid, skuiling of nasionaliteit."],
  ["Waarom is groepwerk goed?", "Ons help mekaar, kry nuwe idees en verbeter kommunikasie."]
];

const quiz = [
  {
    question: "Wat is 'n sterk punt?",
    options: ["Iets waarin jy goed is", "Iets waarin jy swak is", "Iets wat jou bang maak", "Iets wat jy verloor"],
    answer: 0,
    fact: "'n Sterk punt is iets waarin jy goed is."
  },
  {
    question: "Wat beteken konflik?",
    options: ["Mense baklei of raak kwaad", "Mense help mekaar altyd", "Mense slaap vroeg", "Mense eet gesond"],
    answer: 0,
    fact: "Konflik gebeur wanneer mense baklei of kwaad raak."
  },
  {
    question: "Wat moet jy doen as iemand jou afknou?",
    options: ["Vertel 'n grootmens", "Terugbaklei", "Maak asof dit altyd reg is", "Spot hulle harder"],
    answer: 0,
    fact: "Kry hulp by 'n grootmens en moenie terugbaklei nie."
  },
  {
    question: "Watter een is 'n emosie?",
    options: ["Gelukkig", "Huiswerk", "Potlood", "Tafel"],
    answer: 0,
    fact: "Gelukkig, hartseer, kwaad en bang is emosies."
  },
  {
    question: "Wat beteken angstig?",
    options: ["Bang of bekommerd", "Baie honger", "Baie vinnig", "Om te wen"],
    answer: 0,
    fact: "Angstig beteken bang, bekommerd of senuweeagtig."
  },
  {
    question: "Watter een help jou om beter te word in iets?",
    options: ["Oefen baie", "Nooit probeer nie", "Min slaap", "Nie hulp vra nie"],
    answer: 0,
    fact: "Hoe meer jy oefen, hoe beter raak jy."
  },
  {
    question: "Watter reg pas by die verantwoordelikheid: gaan skool toe en doen huiswerk?",
    options: ["Reg op opvoeding", "Reg op kos", "Reg op skuiling", "Reg op nasionaliteit"],
    answer: 0,
    fact: "Die reg op opvoeding kom saam met die verantwoordelikheid om skool toe te gaan en huiswerk te doen."
  },
  {
    question: "Wat is 'n verantwoordelikheid by die reg op kos?",
    options: ["Eet gesond en mors nie", "Baklei oor kos", "Gooi kos weg", "Eet net lekkers"],
    answer: 0,
    fact: "Ons moet kos waardeer, gesond eet en nie mors nie."
  },
  {
    question: "Wat is 'n probleem in groepwerk?",
    options: ["Swak kommunikasie", "Maats help mekaar", "Goeie idees", "Almal luister"],
    answer: 0,
    fact: "Swak kommunikasie kan groepwerk moeilik maak."
  },
  {
    question: "Waarom is groepwerk 'n goeie idee?",
    options: ["Dit help leerders om saam te werk", "Dit maak almal stil", "Dit keer dat jy leer", "Dit maak konflik altyd erger"],
    answer: 0,
    fact: "Groepwerk help met kommunikasie, idees en samewerking."
  }
];

const timeline = [
  ["1. As jy afgeknou word", "Bly kalm en moenie terugbaklei nie."],
  ["2. Beweeg weg", "Stap weg of bly by 'n groep."],
  ["3. Kry hulp", "Vertel 'n grootmens wat gebeur het."],
  ["4. Hou rekord", "Skryf neer wat gebeur het as dit weer gebeur."],
  ["5. Om beter te word", "Oefen gereeld, slaap genoeg, eet gesond en vra hulp."],
  ["6. Met regte", "Onthou elke reg het ook 'n verantwoordelikheid."],
  ["7. In groepwerk", "Luister, kommunikeer en deel verantwoordelikhede."]
];

const words = [
  ["sterk punt", "Iets waarin ek goed is."],
  ["verslaaf", "Wanneer iemand nie kan ophou met iets nie."],
  ["konflik", "Wanneer mense baklei of kwaad raak."],
  ["emosies", "Hoe ons voel."],
  ["angstig", "Bang, bekommerd of senuweeagtig."],
  ["afknouery", "Wanneer iemand ander seermaak of terg."],
  ["bullebak", "Iemand wat ander dreig, spot of op hulle pik."],
  ["regte", "Dinge wat mense mag he of doen."],
  ["mishandeling", "Om iemand seer of sleg te behandel."],
  ["nasionaliteit", "Die land waar jy gebore is."],
  ["verantwoordelikheid", "Wat jy moet doen of help doen."],
  ["kinderregte", "Regte wat kinders beskerm en help om veilig te leef."],
  ["gesinsorg", "Liefde, sorg en sekuriteit by die huis."],
  ["opvoeding", "Om skool toe te gaan en te leer."],
  ["groepwerk", "Wanneer mense saamwerk aan 'n taak."],
  ["kommunikasie", "Om duidelik met mekaar te praat en te luister."]
];

const examPractice = [
  {
    marks: "4 punte",
    question: "Noem vier dinge wat jy kan doen as iemand jou afknou.",
    answer: ["Ignoreer hulle of stap weg.", "Moenie terugbaklei nie.", "Bly by 'n groep.", "Vertel 'n grootmens of hou rekord van wat gebeur."]
  },
  {
    marks: "5 punte",
    question: "Noem vyf dinge wat jou kan help om beter te word in iets.",
    answer: ["Oefen baie.", "Leer nuwe woorde.", "Skryf oefentoetse.", "Slaap genoeg.", "Eet gesond, drink water of vra hulp."]
  },
  {
    marks: "4 punte",
    question: "Verduidelik hoe regte en verantwoordelikhede saamwerk.",
    answer: ["Elke kind het regte.", "Elke reg het ook 'n verantwoordelikheid.", "Byvoorbeeld: reg op opvoeding beteken jy moet skool toe gaan en huiswerk doen.", "Regte en verantwoordelikhede is soos twee kante van 'n muntstuk."]
  },
  {
    marks: "6 punte",
    question: "Gee drie kinderregte en die verantwoordelikheid wat by elkeen pas.",
    answer: ["Reg op kos: eet gesond en mors nie kos nie.", "Reg op skuiling: hou jou kamer of ruimte netjies.", "Reg op gesondheid: hou jou liggaam gesond.", "Reg op opvoeding: gaan skool toe en doen huiswerk.", "Reg op liefde en sorg: wees gehoorsaam en respekvol.", "Reg op beskerming: moenie ander seermaak of spot nie."]
  },
  {
    marks: "4 punte",
    question: "Noem vier probleme wat in groepwerk kan gebeur.",
    answer: ["Maats stem nie saam nie.", "Konflik ontstaan.", "Kommunikasie is swak.", "Party maats werk nie saam nie of die werk word nie betyds klaargemaak nie."]
  },
  {
    marks: "4 punte",
    question: "Waarom is groepwerk 'n goeie idee?",
    answer: ["Dit verbeter kommunikasie.", "Leerders help mekaar.", "Leerders kry nuwe idees.", "Leerders bou mekaar op en leer saamwerk."]
  }
];

const emptyCopy = {
  learn: {
    title: "PSW-leerwerk kom hier in",
    body: "Stuur vir my Ewann se PSW opsommings of fotos, dan bou ek die leerpad met kort punte, kernwoorde en oefenvrae."
  },
  cards: {
    title: "Nog geen flitskaarte nie",
    body: "Die flitskaarte word uit die PSW-inhoud gemaak wanneer die nuwe werk bygevoeg word."
  },
  quiz: {
    title: "Nog geen vasvra nie",
    body: "Die vasvra sal vrae, antwoorde en terugvoer uit die PSW-werk bevat."
  },
  practice: {
    title: "Nog geen vraestel-oefening nie",
    body: "Hier kom langer modelantwoorde en punte-wenke vir PSW."
  },
  timeline: {
    title: "Nog geen volgorde-afdeling nie",
    body: "As die PSW-werk prosesse of stappe het, plaas ons dit hier in volgorde."
  },
  words: {
    title: "Nog geen woordelys nie",
    body: "Belangrike PSW-terme en definisies kom hier."
  }
};

const state = {
  done: new Set(JSON.parse(localStorage.getItem("ewannPswDone") || "[]")),
  cardIndex: 0,
  cardFlipped: false,
  quizIndex: 0,
  score: 0,
  answered: false
};

const $ = (selector) => document.querySelector(selector);

function saveProgress() {
  localStorage.setItem("ewannPswDone", JSON.stringify([...state.done]));
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
