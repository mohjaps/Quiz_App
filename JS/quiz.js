import Question from './question.js'
import route from './main.js'

let currentIdx = 0;
let questionsTabel = [];
let currentQuestion = new Question();
let scoreValue = 0;

window.onload = () => {
    questionsTabel = Question.NewQuiz();
    GetQuestion()
}


function GetQuestion() {
    nxtQues.disabled = true;
    currentQuestion = questionsTabel[currentIdx];
    title.innerText = currentQuestion.title;
    answersSec.setAttribute('key', currentQuestion.id);
    let ans = ''
    currentQuestion.answers.forEach(element => {
        ans += `<li>${element}</li>`
    });
    answersSec.innerHTML = ans;
    currentIdx++
    document.querySelectorAll('.counter').forEach(element => element.innerText = currentIdx)
    Choise()
}


function Choise() {
    let answesLi = document.querySelectorAll('#answersSec li')
    answesLi.forEach(element => {
        element.onclick = () => {
            answesLi.forEach(ele => {
                ele.removeAttribute('clicked')
            });
            element.setAttribute('clicked', '')
            nxtQues.disabled = false;
        };
    });
}


nxtQues.onclick = () => {
    if (questionsTabel.length <= currentIdx) {
        sessionStorage.setItem('scoreValue', scoreValue)
        window.localStorage.score = scoreValue;
        route(document.querySelector('#result-section'))

        currentIdx = 0;
        currentQuestion = new Question();
        scoreValue = 0;
        questionsTabel = Question.NewQuiz();
    }
    else {
        let value = document.querySelector('[clicked]').innerText;
        let key = answersSec.getAttribute('key');
        let que = questionsTabel.find(ele => ele.id == key).trueAns == value
        if (que) {
            scoreValue++;
        }
        GetQuestion()
    }
}


