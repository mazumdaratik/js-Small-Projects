const questions = [
    {
        question: "What is the Capital of Bangladesh?",
        answers: [
            {text: "Cumilla", correct: false},
            {text: "Dhaka", correct: true},
            {text: "Chattagram", correct: false},
            {text: "Barishal", correct: false},
        ]
    },

    {
        question: "What was the Popular Programing Language?",
        answers: [
            {text: "Fortran", correct: true},
            {text: "Pascal", correct: false},
            {text: "Lisp", correct: false},
            {text: "Basic", correct: false},
        ]
    },

    {
        question: "Who is the Founder of Node.js?",
        answers: [
            {text: "Dennis Ritchie", correct: false},
            {text: "Ryan Dawl", correct: true},
            {text: "Bill Gates", correct: false},
            {text: "Bjarne Stroustrup", correct: false},
        ]
    },

    {
        question: "Who owned the Visual Code Studio?",
        answers: [
            {text: "Google", correct: false},
            {text: "Microsoft", correct: true},
            {text: "Amazon", correct: false},
            {text: "Azure", correct: false},
        ]
    },
    {
        question: "Who is the founder of Facebook?",
        answers: [
            {text: "Jef Bezos", correct: false},
            {text: "Mark Zuckerburg", correct: true},
            {text: "Jack Ma", correct: false},
            {text: "Jawad Karim", correct: false},
        ]
    },
    {
        question: "Who is the founder of JavaScript?",
        answers: [
            {text: "Elon Musk", correct: false},
            {text: "Dennis Ritchie", correct: false},
            {text: "Anders Hejlsberg", correct: false},
            {text: "Brendan Eich", correct: true},
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}
function resetState(){
    nextButton.style.display = "none";
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
if(currentQuestionIndex<questions.length){
    showQuestion();
    } else {
        showScore();
    }
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block';
}   
}
nextButton.addEventListener('click', () => {
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});
startQuiz();