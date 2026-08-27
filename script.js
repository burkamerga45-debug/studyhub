/* ========================================
   STUDYHUB
   STEP 1 — FOUNDATION
======================================== */


/* SUBJECT DATA */

const subjects = [
  {
    name: "Mathematics",
    description: "Numbers, algebra, geometry and problem solving."
  },
  {
    name: "Physics",
    description: "Motion, forces, energy and the physical world."
  },
  {
    name: "Chemistry",
    description: "Matter, reactions, atoms and chemical systems."
  },
  {
    name: "Biology",
    description: "Living organisms, cells and biological systems."
  },
  {
    name: "English",
    description: "Language, grammar, reading and communication."
  },
  {
    name: "Amharic",
    description: "Language, literature, reading and writing."
  },
  {
    name: "Civics",
    description: "Citizenship, rights, responsibilities and society."
  },
  {
    name: "History",
    description: "People, civilizations, events and the past."
  },
  {
    name: "Geography",
    description: "Earth, environment, places and human activity."
  },
  {
    name: "Economics",
    description: "Resources, markets, production and society."
  },
  {
    name: "ICT",
    description: "Technology, information and digital systems."
  },
  {
    name: "Physical Education",
    description: "Movement, fitness, sports and healthy activity."
  }
];


/* CREATE SUBJECT CARDS */

const subjectGrid = document.getElementById("subjectGrid");

subjects.forEach((subject, index) => {

  const card = document.createElement("div");

  card.className = "subject-card";

  card.innerHTML = `
    <span class="subject-number">
      ${String(index + 1).padStart(2, "0")}
    </span>

    <h3>${subject.name}</h3>

    <p>${subject.description}</p>

    <span class="subject-arrow">→</span>
  `;

  card.addEventListener("click", () => {

    alert(
      `${subject.name}\n\n` +
      `Subject workspace coming next.`
    );

  });

  subjectGrid.appendChild(card);

});


/* ========================================
   PAGE NAVIGATION
======================================== */

const navItems = document.querySelectorAll(".nav-item");

const pages = document.querySelectorAll(".page");


function showPage(pageName) {

  pages.forEach(page => {

    page.classList.remove("active-page");

  });


  const selectedPage = document.getElementById(pageName);

  if (selectedPage) {

    selectedPage.classList.add("active-page");

  }


  navItems.forEach(item => {

    item.classList.remove("active");

    if (item.dataset.page === pageName) {

      item.classList.add("active");

    }

  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


navItems.forEach(item => {

  item.addEventListener("click", () => {

    showPage(item.dataset.page);

  });

});


/* BUTTONS THAT NAVIGATE */

const pageButtons = document.querySelectorAll(
  "[data-page-target]"
);


pageButtons.forEach(button => {

  button.addEventListener("click", () => {

    showPage(button.dataset.pageTarget);

  });

});


/* ========================================
   TASK CHECKBOXES
======================================== */

const taskChecks = document.querySelectorAll(".task-check");


taskChecks.forEach(check => {

  check.addEventListener("click", () => {

    const task = check.closest(".task");

    const isCompleted = check.classList.contains("checked");


    if (isCompleted) {

      check.classList.remove("checked");

      check.textContent = "";

      task.classList.remove("completed");

    } else {

      check.classList.add("checked");

      check.textContent = "✓";

      task.classList.add("completed");

    }

  });

});


/* ========================================
   POMODORO TIMER
======================================== */

let timerSeconds = 25 * 60;

let timerRunning = false;

let timerInterval = null;


const timerDisplay = document.getElementById("timer");

const startButton = document.getElementById("startTimer");

const resetButton = document.getElementById("resetTimer");


function updateTimerDisplay() {

  const minutes = Math.floor(timerSeconds / 60);

  const seconds = timerSeconds % 60;

  timerDisplay.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


function startTimer() {

  if (timerRunning) return;

  timerRunning = true;

  startButton.textContent = "Pause";


  timerInterval = setInterval(() => {

    if (timerSeconds <= 0) {

      clearInterval(timerInterval);

      timerRunning = false;

      startButton.textContent = "Start";

      alert("Focus session complete! 🔥");

      return;

    }


    timerSeconds--;

    updateTimerDisplay();

  }, 1000);

}


function pauseTimer() {

  clearInterval(timerInterval);

  timerRunning = false;

  startButton.textContent = "Start";

}


function resetTimer() {

  clearInterval(timerInterval);

  timerRunning = false;

  timerSeconds = 25 * 60;

  startButton.textContent = "Start";

  updateTimerDisplay();

}


startButton.addEventListener("click", () => {

  if (timerRunning) {

    pauseTimer();

  } else {

    startTimer();

  }

});


resetButton.addEventListener("click", resetTimer);


/* INITIAL TIMER */

updateTimerDisplay();


console.log("StudyHub Step 1 loaded successfully 🚀");
