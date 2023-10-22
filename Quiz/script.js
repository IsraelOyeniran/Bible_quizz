const questions = [
    {
        question: "Where was Jesus born?",
        answers: [
            {text: "(A) Nazareth", correct: false},
            {text: "(B) Jerusalem", correct: false},
            {text: "(C) Bethlehem", correct: true},
            {text: "(D) Capernaum", correct: false},
        ]
    },
    
    {
        question: "What is the first book in the Bible?",
        answers: [
            {text: "(A) Matthew", correct: false},
            {text: "(B) Exodus", correct: false},
            {text: "(C) Genesis", correct: true},
            {text: "(D) Jesus", correct: false},
        ]
    },

    {
        question: "How many disciples did Jesus have?",
        answers: [
            {text: "(A) 12", correct: true},
            {text: "(B) 7", correct: false},
            {text: "(C) 11", correct: false},
            {text: "(D) 9", correct: false},
        ]
    },

    {
        question: "How did Jesus die?",
        answers: [
            {text: "(A) He was flogged to death", correct: false},
            {text: "(B) He was crucified", correct: true},
            {text: "(C) He was stoned", correct: false},
            {text: "(D) He was burned outside the city wall", correct: false},
        ]
    },

    {
        question: "What is the name of the disciple who betrayed Jesus?",
        answers: [
            {text: "(A) Simon Peter", correct: false},
            {text: "(B) Andrew", correct: false},
            {text: "(C) Bartholomew", correct: false},
            {text: "(D) Judas Iscariot", correct: true}, 
        ]
    },

    {
        question: "Who gave Jesus gifts when he was born?",
        answers: [
            {text: "(A) The wise men", correct: true},
            {text: "(B) The shepherds", correct: false},
            {text: "(C) Mary", correct: false},
            {text: "(D) The innkeeper", correct: false},
        ]
    },

    {
        question: "What is the shortest book in the Bible?",
        answers: [
            {text: "(A) Ezekiel", correct: false},
            {text: "(B) 1 Peter", correct: false},
            {text: "(C) Jude", correct: false},
            {text: "(D) 3 John", correct: true},
        ] 
    },

    {
        question: "With what did Jesus feed 5000 people?",
        answers: [
            {text: "(A) Corn and roast lamb", correct: false},
            {text: "(B) Almonds and figs", correct: false},
            {text: "(C) Herbs and fruit of the fields", correct: false},
            {text: "(D) Loaves and fishes", correct: true},
        ] 
    },

    {
        question: "What is the name of the prayer Jesus taught to his disciples?",
        answers: [
            {text: "(A) The Righteous Prayer", correct: false},
            {text: "(B) The Lord’s Prayer", correct: true},
            {text: "(C) The Prayer of Peace", correct: false},
            {text: "(D) The Prayer of Jesus", correct: false},
        ]  
    },

    {
        question: "How many books in the New Testament?",
        answers: [
            {text: "(A) 49 books in the NT", correct: false},
            {text: "(B) 34 books in the NT", correct: false},
            {text: "(C) 27 books in the NT", correct: true},
            {text: "(A) 20 books in the NT", correct: false},
        ]  
    },

    {
        question: "Which NT book has Jesus' Sermon on the Mount?",
        answers: [
            {text: "(A) Mark", correct: false},
            {text: "(B) Judge", correct: false},
            {text: "(C) James", correct: false},
            {text: "(D) Matthew", correct: true},
        ] 
    },

    {
        question: "Who are the religious leaders who continually tried to trap Jesus with their questions?",
        answers: [
            {text: "(A) Pharisees", correct: true},
            {text: "(B) Stoics", correct: false},
            {text: "(C) Epicureans", correct: false},
            {text: "(D) Galileans", correct: false},
        ] 
    },

    {
        question: "What did Jesus do for Lazarus?",
        answers: [
            {text: "(A) Cooked him dinner", correct: false},
            {text: "(B) Took him for a walk", correct: false},
            {text: "(C) Healed him from a fever", correct: false},
            {text: "(D) Raised him from the dead", correct: true},
        ] 
    },

    {
        question: "What is the name of Jesus’ mother?",
        answers: [
            {text: "(A) Mary", correct: true},
            {text: "(B) Salome", correct: false},
            {text: "(C) Joanna", correct: false},
            {text: "(D) Martha", correct: false},
        ]  
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

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
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();




        




// {
//     question: "What four books tell about Jesus life on Earth?",
//     answers: [
//         {text: "(A) Matthew, Revelation, Mark, John", correct: false},
//         {text: "(B) Matthew, Mark, Luke, John", correct: true},
//         {text: "(C) Genesis, 1 John, Luke, Mark", correct: false},
//         {text: "(D) Matthew, Mark, Luke, 2 John", correct: false}, 
//     ]
// },


// {
//     question: "What is the longest book in the Bible?",
//     answers: [
//         {text: "(A) Psalms", correct: true},
//         {text: "(B) Exodus", correct: false},
//         {text: "(C) Genesis", correct: false},
//         {text: "(A) Numbers", correct: false},
//     ]
// },


// {
//     question: "How many books are in the Bible?",
//     answers: [
//         {text: "(A) 52", correct: false},
//         {text: "(B) 70", correct: false},
//         {text: "(C) 50", correct: false},
//         {text: "(A) 66", correct: true},
//     ] 
// },


// {
//     question: "How many books in the Old Testament?",
//     answers: [
//         {text: "(A) 39 books in the OT", correct: true},
//         {text: "(B) 32 books in the OT", correct: false},
//         {text: "(C) 30 books in the OT", correct: false},
//         {text: "(D) 40 books in the OT", correct: false},
//     ]  
// },
   

// {
//     question: "What is the last book in the Bible?",
//     answers: [
//         {text: "(A) Revelation", correct: true},
//         {text: "(B) Hebrews", correct: false},
//         {text: "(C) Genesis", correct: false},
//         {text: "(A) Jude", correct: false},
//     ] 
// },


// {
//     question: "In what language was most of the Old Testament given?",
//     answers: [
//         {text: "(A) Hebrew", correct: true},
//         {text: "(B) Greek", correct: false},
//         {text: "(C) English", correct: false},
//         {text: "(A) Spanish", correct: false},
//     ]  
// },