let start_id = document.getElementById("startQuiz");
let instructionSection = document.getElementById("instructions-section");
start_id.addEventListener(
  "click",
  () => {
    route(instructionSection ,() => {
        alert("You are home");
      });
  },
  
);

let next_id = document.getElementById("next_id");
next_id.addEventListener("click", () => {
  route(next_id);
});

let home_id = document.getElementById("QuizToHomeBtn");
let welcomeSection = document.getElementById("welcomeSection");

home_id.addEventListener("click", () => {
  route(welcomeSection);
});

function route(e, callback = () => {}) {
  section = document.querySelectorAll("section");
  callback(e);
  section.forEach(function (cls) {
    cls.classList.add("hidden");
  });
  e.classList.remove("hidden");
}
