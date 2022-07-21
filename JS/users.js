let userNameForm = document.querySelector(".startForm");
let userNameInput = document.querySelector("#username");
let startQuizBtn = document.querySelector("#startQuiz");
let QuizToHomeBtn = document.querySelector("#QuizToHomeBtn");
let table = document.querySelector("#table");
userNameInput.addEventListener("input", () => {
    // console.log(startQuizBtn);
  if (userNameInput.value) {
    startQuizBtn.disabled = false;
  } else {
    startQuizBtn.disabled = true;
  }
});
QuizToHomeBtn.addEventListener("click", () => {
  userNameInput.value = "";
  startQuizBtn.disabled = true;
});
startQuizBtn.addEventListener("click", () => {
  window.localStorage.newUserName = userNameInput.value;
});
let oldUser = {
  name: window.localStorage.newUserName,
  score: 5,
};
let usersArr = [
  {
    name: "ahmed",
    score: 5,
  },
  {
    name: "mohamed",
    score: 8,
  },
  {
    name: "bakeza",
    score: 7,
  },
];
let users = JSON.stringify(usersArr);
localStorage.setItem("savetop", users);
function addUsersToTable(User) {
  if (localStorage.getItem("savetop")) {
    topUser = JSON.parse(localStorage.getItem("savetop"));
  }
  topUser.sort((a, b) => (b.score > a.score ? 1 : -1));
  for (let c = 0; c < topUser.length; c++) {
    table.innerHTML += `
    <tr>
          <td class="oldUserName">${topUser[c].name}</td>
          <td class="oldUserScore">${topUser[c].score}</td>
          <td class="oldUserPass">${topUser[c].score >= 5 ? "pass" : "No"}</td>
        </tr>
    `;
  }
}
addUsersToTable(oldUser);
