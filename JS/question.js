import database from './data.js'

export default class Question {
    constructor() { }
    id;
    title;
    answers;
    trueAns;

    static NewQuiz() {
        let qst = []
        database.forEach(element => {
            let q = new Question();
            q.id = element.id;
            q.title = element.title;
            q.answers = element.answers.sort((one, two) => 0.5 - Math.random());
            q.trueAns = element.trueAns;
            qst.push(q);
        });
        let end = qst.sort((one, two) => 0.5 - Math.random()).slice(0, 10);
        return end || [];
    }
}