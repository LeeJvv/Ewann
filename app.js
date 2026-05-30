const topicPictures = [
  {
    label: "Boek",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dbeafe"></rect><path d="M24 24h33c8 0 14 6 14 14v33H38c-8 0-14-6-14-14z" fill="#ffffff"></path><path d="M71 38c0-8 6-14 14-14h11v47H71z" fill="#bfdbfe"></path><path d="M38 41h20M38 55h18M81 41h10M81 55h10" stroke="#1d4ed8" stroke-width="5" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Ster",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fef3c7"></rect><path d="M60 17l9 19 21 3-15 15 4 21-19-10-19 10 4-21-15-15 21-3z" fill="#f59e0b"></path><circle cx="60" cy="50" r="9" fill="#fff7ed"></circle></svg>`
  },
  {
    label: "Potlood",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#dcfce7"></rect><path d="M33 64l10-25 34-18 12 22-34 18z" fill="#16a34a"></path><path d="M77 21l11-6 12 22-11 6z" fill="#2563eb"></path><path d="M33 64l-4 13 14-4z" fill="#92400e"></path><path d="M47 39l12 22" stroke="#bbf7d0" stroke-width="5" stroke-linecap="round"></path></svg>`
  },
  {
    label: "Vraag",
    svg: `<svg viewBox="0 0 120 90" aria-hidden="true"><rect width="120" height="90" rx="12" fill="#fae8ff"></rect><circle cx="60" cy="45" r="31" fill="#ffffff"></circle><path d="M49 35c2-9 20-10 23 0 4 13-14 13-14 25" fill="none" stroke="#9333ea" stroke-width="7" stroke-linecap="round"></path><circle cx="59" cy="69" r="4" fill="#9333ea"></circle></svg>`
  }
];

const learningItems = [
  {
    title: "Kwartaal 1: nuwe woorde",
    picture: 0,
    groups: [
      { label: "Leer hierdie woorde", lines: ["onderhoud", "ondersoek", "geskiedenis", "vuurtoring", "promenade"] },
      { label: "Leer ook hierdie woorde", lines: ["storms", "seine", "kus", "skipbreuk ly", "gemeenskap"] },
      { label: "Slim leerwenk", lines: ["Lees elke woord hardop.", "Se wat jy dink dit beteken.", "Kyk dan in die woordelys."] }
    ]
  },
  {
    title: "Nelson Mandela: lesse uit stories",
    picture: 1,
    groups: [
      { label: "Les by Xhosa-leier", lines: ["Luister eers na elke persoon.", "Praat eers wanneer jy klaar geluister het.", "'n Goeie leier bly soms in die agtergrond."] },
      { label: "Les by Pa", lines: ["Staan vas vir wat regverdig is.", "Staan vas vir wat reg is."] },
      { label: "Les by Ma en die donkie", lines: ["Gee vir ander om.", "Moenie jou deur jou vyand dom laat lyk nie."] }
    ]
  },
  {
    title: "Nelson Mandela: kinderjare",
    picture: 0,
    groups: [
      { label: "Geboorte", lines: ["Hy is op 18 Julie 1918 in Mvezo in die Oos-Kaap gebore.", "Sy pa het hom die naam Rolihlahla gegee.", "Rolihlahla beteken 'moeilikheidmaker'."] },
      { label: "Grootword", lines: ["Hy het in 'n klein dorpie grootgeword.", "Hy het die familie se skape en bokke opgepas."] },
      { label: "Werk en studie", lines: ["Hy het gestudeer om 'n prokureur te word.", "Hy het later 'n leier van die ANC geword."] }
    ]
  },
  {
    title: "Mandela veg teen apartheid",
    picture: 3,
    groups: [
      { label: "Apartheid", lines: ["Apartheid was nie regverdig nie.", "Die regering het Suid-Afrikaners in groepe verdeel.", "Swart en wit mense kon nie oral saam wees nie."] },
      { label: "Protes", lines: ["Mandela en sy vriende wou Suid-Afrika verander.", "Hulle het protesoptogte deur die strate gelei.", "Mandela het gestaan vir wat hy geglo het."] },
      { label: "Politieke gevangene", lines: ["Mense wat tronk toe gestuur word vir waarin hulle glo, word politieke gevangenes genoem.", "Mandela is na Robbeneiland gestuur."] }
    ]
  },
  {
    title: "Vryheid en presidentskap",
    picture: 1,
    groups: [
      { label: "1990", lines: ["Op 11 Februarie 1990 kondig President FW de Klerk aan dat Mandela vrygelaat word.", "Mandela kom na 27 jaar uit die tronk."] },
      { label: "1994", lines: ["Apartheid is in 1994 beeindig.", "Elke Suid-Afrikaner ouer as 18 jaar kon vir 'n nuwe regering stem.", "Op 8 Mei 1994 neem Mandela presidentskap oor by FW de Klerk."] },
      { label: "Onthou", lines: ["Mandela het die land se eerste swart president geword.", "Hy is op 5 Desember 2013 oorlede."] }
    ]
  },
  {
    title: "Die Vryheidsmanifes",
    picture: 2,
    groups: [
      { label: "Belangrike idee", lines: ["Suid-Afrika behoort aan almal wat daarin woon.", "Dit sluit swart en wit mense in."] },
      { label: "Hoekom dit saak maak", lines: ["Mandela het geglo in wat reg is.", "Hy het geglo mense moet regverdig behandel word.", "Hy wou 'n beter Suid-Afrika he."] }
    ]
  }
];

const flashcards = [
  ["Wat beteken onderhoud?", "'n Gesprek waar iemand vrae vra om inligting te kry."],
  ["Wat beteken ondersoek?", "Om iets mooi na te gaan om meer daaroor uit te vind."],
  ["Wat is geskiedenis?", "Die studie van dinge wat in die verlede gebeur het."],
  ["Wat is 'n vuurtoring?", "'n Hoe toring met 'n lig wat skepe naby die kus waarsku."],
  ["Wat is 'n promenade?", "'n Pad of stapplek langs die see."],
  ["Wanneer is Nelson Mandela gebore?", "18 Julie 1918."],
  ["Waar is Mandela gebore?", "In Mvezo in die Oos-Kaap."],
  ["Wat beteken Rolihlahla?", "Moeilikheidmaker."],
  ["Waarteen het Mandela geveg?", "Teen apartheid."],
  ["Wat is 'n politieke gevangene?", "Iemand wat tronk toe gestuur word vir dit waarin hy of sy glo."],
  ["Hoe lank was Mandela in die tronk?", "27 jaar."],
  ["Waar was Mandela in die tronk?", "Op Robbeneiland."],
  ["Wanneer is apartheid beeindig?", "In 1994."],
  ["Wat was Mandela se groot presidentskap-feit?", "Hy was Suid-Afrika se eerste swart president."],
  ["Wanneer is Mandela oorlede?", "5 Desember 2013."]
];

const quiz = [
  {
    question: "Wat beteken geskiedenis?",
    options: ["Die studie van die verlede", "Om by die see te stap", "Iemand wat tronk toe gaan", "Slegte weer by die see"],
    answer: 0,
    fact: "Geskiedenis help ons leer wat vroeer gebeur het."
  },
  {
    question: "Wat is 'n vuurtoring?",
    options: ["'n Toring met 'n lig wat skepe waarsku", "'n Groot winkel", "'n Politieke party", "'n Treinwa"],
    answer: 0,
    fact: "'n Vuurtoring gebruik lig as 'n sein naby die kus."
  },
  {
    question: "Wanneer is Nelson Mandela gebore?",
    options: ["18 Julie 1918", "11 Februarie 1990", "27 April 1994", "5 Desember 2013"],
    answer: 0,
    fact: "Mandela is op 18 Julie 1918 in Mvezo gebore."
  },
  {
    question: "Wat beteken Rolihlahla?",
    options: ["Moeilikheidmaker", "Goeie leier", "Vuurtoring", "Vryheidsmanifes"],
    answer: 0,
    fact: "Mandela se pa het hom die naam Rolihlahla gegee."
  },
  {
    question: "Waarteen het Mandela geveg?",
    options: ["Apartheid", "Promenades", "Seine", "Storms"],
    answer: 0,
    fact: "Mandela het teen apartheid geveg omdat dit nie regverdig was nie."
  },
  {
    question: "Wat is 'n politieke gevangene?",
    options: ["Iemand wat tronk toe gestuur word vir waarin hy glo", "Iemand wat skepe bestuur", "Iemand wat 'n onderhoud doen", "Iemand wat by die see stap"],
    answer: 0,
    fact: "Mandela was 'n politieke gevangene."
  },
  {
    question: "Hoe lank was Mandela in die tronk?",
    options: ["27 jaar", "18 jaar", "5 jaar", "1 jaar"],
    answer: 0,
    fact: "Hy is na 27 jaar uit die tronk vrygelaat."
  },
  {
    question: "Waar was die tronk waarna Mandela gestuur is?",
    options: ["Robbeneiland", "Mvezo", "Die promenade", "Die Oos-Kaap se kus"],
    answer: 0,
    fact: "Mandela is na Robbeneiland gestuur."
  },
  {
    question: "Wanneer is apartheid beeindig?",
    options: ["1994", "1918", "1990", "2013"],
    answer: 0,
    fact: "In 1994 kon Suid-Afrikaners ouer as 18 vir 'n nuwe regering stem."
  },
  {
    question: "Wat was Mandela se presidentskap-feit?",
    options: ["Hy was Suid-Afrika se eerste swart president", "Hy was 'n vuurtoringwagter", "Hy het nooit gestudeer nie", "Hy was net 'n kind in 1994"],
    answer: 0,
    fact: "Mandela het in 1994 president geword."
  }
];

const timeline = [
  ["18 Julie 1918", "Nelson Mandela word in Mvezo in die Oos-Kaap gebore."],
  ["Kinderjare", "Hy word Rolihlahla genoem en pas skape en bokke op."],
  ["Later", "Hy studeer om 'n prokureur te word en word 'n leier van die ANC."],
  ["Apartheidtyd", "Mandela en sy vriende lei protesoptogte teen onregverdige wette."],
  ["Robbeneiland", "Mandela word tronk toe gestuur as 'n politieke gevangene."],
  ["11 Februarie 1990", "President FW de Klerk kondig aan dat Mandela vrygelaat word."],
  ["27 April 1994", "Suid-Afrikaners stem vir 'n nuwe regering."],
  ["8 Mei 1994", "Mandela neem presidentskap oor by President FW de Klerk."],
  ["5 Desember 2013", "Nelson Mandela sterf."]
];

const words = [
  ["onderhoud", "'n Gesprek waar iemand vrae vra om inligting te kry."],
  ["ondersoek", "Om iets mooi na te gaan om meer daaroor uit te vind."],
  ["geskiedenis", "Die studie van mense en gebeure uit die verlede."],
  ["vuurtoring", "'n Hoe toring met 'n lig wat skepe naby die kus waarsku."],
  ["promenade", "'n Pad of stapplek langs die see."],
  ["storms", "Baie slegte weer met sterk wind, reen of donderweer."],
  ["seine", "Tekens, ligte of geluide wat 'n boodskap gee."],
  ["kus", "Die plek waar land en see bymekaar kom."],
  ["skipbreuk ly", "Wanneer 'n skip breek of sink, gewoonlik op rotse of in 'n storm."],
  ["gemeenskap", "'n Groep mense wat in dieselfde plek woon of saam hoort."],
  ["karakter", "Hoe iemand binne is en optree, soos eerlik, dapper of vriendelik."],
  ["respekteer", "Om iemand of iets met waardigheid en goeie maniere te behandel."],
  ["eienskappe", "Kenmerke wat wys hoe iemand of iets is."],
  ["apartheid", "'n Onregverdige stelsel wat mense volgens ras geskei het."],
  ["protes", "Wanneer mense wys dat hulle teen iets is."],
  ["manifes", "'n Dokument wat se wat 'n groep glo of wil verander."],
  ["politieke gevangenes", "Mense wat tronk toe gestuur word vir dit waarin hulle glo."]
];

const state = {
  done: new Set(JSON.parse(localStorage.getItem("ewannGrade4Done") || "[]")),
  cardIndex: 0,
  cardFlipped: false,
  quizIndex: 0,
  score: 0,
  answered: false
};

const $ = (selector) => document.querySelector(selector);

function saveProgress() {
  localStorage.setItem("ewannGrade4Done", JSON.stringify([...state.done]));
}

function renderProgress() {
  const total = learningItems.length;
  const done = state.done.size;
  $("#progressText").textContent = `${done} van ${total} voltooi`;
  $("#progressBar").style.width = `${total ? (done / total) * 100 : 0}%`;
}

function renderTopics() {
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
  if (state.quizIndex >= quiz.length) {
    const percent = Math.round((state.score / quiz.length) * 100);
    $("#quizBox").innerHTML = `
      <div class="quiz-question">
        <span class="eyebrow">Klaar</span>
        <h3>Jou punt: ${state.score} uit ${quiz.length} (${percent}%)</h3>
        <p class="feedback">${percent >= 70 ? "Mooi! Doen nou die flitskaarte weer om dit vas te le." : "Goeie poging. Lees die leerpad weer en probeer dan weer."}</p>
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

function renderTimeline() {
  $("#timelineList").innerHTML = timeline.map(([date, event]) => `
    <article class="timeline-item">
      <strong>${date}</strong>
      <p>${event}</p>
    </article>
  `).join("");
}

function renderWords(filter = "") {
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
  state.cardFlipped = !state.cardFlipped;
  renderCard();
});

$("#flashcard").addEventListener("click", () => {
  state.cardFlipped = !state.cardFlipped;
  renderCard();
});

$("#prevCard").addEventListener("click", () => {
  state.cardIndex = (state.cardIndex - 1 + flashcards.length) % flashcards.length;
  state.cardFlipped = false;
  renderCard();
});

$("#nextCard").addEventListener("click", () => {
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
  $("#quizFeedback").textContent = choice === item.answer ? `Reg! ${item.fact}` : `Nog nie. ${item.fact}`;
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
renderTimeline();
renderWords();
