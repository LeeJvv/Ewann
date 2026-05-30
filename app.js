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
    title: "Welkom by Ewann se app",
    picture: 0,
    groups: [
      { label: "Hoe om te leer", lines: ["Lees een klein deel op 'n slag.", "Se die belangrikste punt hardop.", "Merk dit klaar wanneer jy dit ken."] },
      { label: "Wanneer nuwe werk kom", lines: ["Mamma stuur die opsomming.", "Die app kry nuwe kaartjies en vrae.", "Jy oefen weer op die iPad."] }
    ]
  },
  {
    title: "Slim opsomming-metode",
    picture: 2,
    groups: [
      { label: "Stap 1", lines: ["Kyk eers na die opskrif.", "Vra: waaroor gaan hierdie stuk?"] },
      { label: "Stap 2", lines: ["Lees die kort punte.", "Kies drie woorde wat jy moet onthou."] },
      { label: "Stap 3", lines: ["Maak die boek toe.", "Vertel die stuk in jou eie woorde."] }
    ]
  },
  {
    title: "Toets jouself",
    picture: 3,
    groups: [
      { label: "Flitskaarte", lines: ["Lees die vraag.", "Antwoord voor jy omdraai.", "Probeer weer as jy huiwer."] },
      { label: "Vasvra", lines: ["Kies die beste antwoord.", "Lees die terugvoer.", "Begin weer tot dit maklik voel."] }
    ]
  }
];

const flashcards = [
  ["Wat moet Ewann eerste doen met 'n nuwe opsomming?", "Lees een klein deel op 'n slag."],
  ["Hoekom se ons die antwoord hardop?", "Dit help jou brein om die werk beter te onthou."],
  ["Wat doen jy as jy 'n vraag verkeerd kry?", "Lees die stuk weer en probeer weer."],
  ["Wat beteken 'opsomming'?", "'n Kort weergawe van die belangrikste idees."]
];

const quiz = [
  {
    question: "Wat is die beste manier om met 'n nuwe opsomming te begin?",
    options: ["Lees alles vinnig en los dit", "Lees een klein deel op 'n slag", "Net kyk na die prentjies", "Slaan die moeilike woorde oor"],
    answer: 1,
    fact: "Klein dele is makliker om te onthou."
  },
  {
    question: "Wat moet jy doen voordat jy 'Wys antwoord' druk?",
    options: ["Raai sommer", "Dink eers self aan die antwoord", "Maak die app toe", "Vra dadelik vir hulp"],
    answer: 1,
    fact: "As jy eers self probeer, leer jy sterker."
  },
  {
    question: "Waarvoor is die woordelys?",
    options: ["Om belangrike woorde te oefen", "Om speletjies weg te steek", "Om die iPad af te sit", "Om punte uit te vee"],
    answer: 0,
    fact: "Die woordelys hou moeilike of belangrike woorde bymekaar."
  }
];

const timeline = [
  ["1", "Lees die opskrif en kyk waaroor die werk gaan."],
  ["2", "Lees die kort punte rustig deur."],
  ["3", "Se die belangrikste idees hardop."],
  ["4", "Doen flitskaarte en die vasvra."],
  ["5", "Herhaal later weer vir vaslegging."]
];

const words = [
  ["opsomming", "'n Kort weergawe van die belangrikste idees."],
  ["leerpad", "Die plek waar die werk in klein dele opgebreek is."],
  ["flitskaart", "'n Vraagkaart wat jy kan omdraai om die antwoord te sien."],
  ["vasvra", "'n Kort toetsie om te sien wat jy onthou."],
  ["vordering", "Hoeveel werk jy klaar geleer het."],
  ["herhaal", "Om iets weer te oefen sodat jy dit beter onthou."]
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
