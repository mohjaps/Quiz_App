let start_id = document.getElementById("startQuiz2");
let instructionSection = document.getElementById("instructions-section");
start_id.addEventListener("click", () => {
  route(instructionSection, () => {});
});

let next_id = document.getElementById("startQuiz");
next_id.addEventListener("click", () => {
  route(quizSection);
});

let quizSection_id = document.getElementById("startQuiz");
let quizSection = document.getElementById("quizSection");
quizSection_id.addEventListener("click", () => {
  route(quizSection, () => {
    var fiveMinutes = 60 * 10,
      display = document.querySelector("#timer");
    startTimer(fiveMinutes, display);
  });
});

let home_id = document.getElementById("QuizToHomeBtn");
let welcomeSection = document.getElementById("welcomeSection");

home_id.addEventListener("click", () => {
  route(welcomeSection);
});

function route(e, callback = () => {}) {
  let section = document.querySelectorAll("section");
  callback(e);
  section.forEach(function (cls) {
    cls.classList.add("hidden");
  });
  e.classList.remove("hidden");
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  const intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    if (minutes == 0 && seconds == 0) {
      display.textContent = "00:00";
      clearTimeout(intervalId);
    }
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
let home = document.getElementById("QuizToHomeBtn");
let welcomeSection2 = document.getElementById("welcomeSection");

home.addEventListener("click", () => {
  route(welcomeSection2);
});

export default route;
