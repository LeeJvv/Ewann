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

const learningItems = [];
const flashcards = [];
const quiz = [];
const timeline = [];
const words = [];
const examPractice = [];

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
