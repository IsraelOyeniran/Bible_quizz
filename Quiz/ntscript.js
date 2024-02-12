const all_questions = [
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
            {text: "(A) 49 books in the New Testament", correct: false},
            {text: "(B) 34 books in the New Testament", correct: false},
            {text: "(C) 27 books in the New Testament", correct: true},
            {text: "(A) 20 books in the New Testament", correct: false},
        ]  
    },

    {
        question: "Which New Testament book has Jesus' Sermon on the Mount?",
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
    },

    {
        question: "What job did Jesus’ earthly father, Joseph, do?",
        answers: [
            {text: "(A) Fisherman", correct: false},
            {text: "(B) Carpenter", correct: true},
            {text: "(C) Tentmaker", correct: false},
            {text: "(D) Shephard", correct: false},
        ]  
    },

    {
        question: "What is the collective name of the stories Jesus told?",
        answers: [
            {text: "(A) Miracles", correct: false},
            {text: "(B) Poems", correct: false},
            {text: "(C) Parables", correct: true},
            {text: "(D) Psalms", correct: false},
        ]  
    },

    {
        question: "Who wrote a lot of the letters to churches in the New Testament?",
        answers: [
            {text: "(A) Joseph", correct: false},
            {text: "(B) Jesus", correct: false},
            {text: "(C) Jairus", correct: false},
            {text: "(D) Paul", correct: true},
        ]  
    },

    {
        question: "Who wanted to kill Jesus when he was a baby?",
        answers: [
            {text: "(A) Caesar", correct: false},
            {text: "(B) John the Baptist", correct: false},
            {text: "(C) The wise men", correct: false},
            {text: "(D) Herod", correct: true},
        ]  
    },

    {
        question: "What did Simon Peter do for a living?",
        answers: [
            {text: "(A) King", correct: false},
            {text: "(B) Shephard", correct: false},
            {text: "(C) Fisherman", correct: true},
            {text: "(D) Preacher", correct: false},
        ]  
    },

    {
        question: "What happened to Jesus after the resurrection?",
        answers: [
            {text: "(A) He went to live with Mary and Martha", correct: false},
            {text: "(B) He made himself king", correct: false},
            {text: "(C) He went to live in Jerusalem", correct: false},
            {text: "(D) He ascended into heaven", correct: true},
        ]  
    },

    {
        question: "What did the Holy Spirit look like when the disciples received it?",
        answers: [
            {text: "(A) A rushing wind", correct: false},
            {text: "(B) Tongues of fire", correct: true},
            {text: "(C) White doves", correct: false},
            {text: "(D) Billowing clouds", correct: false},
        ]  
    },

    {
        question: "What was most likely the first Gospel written?",
        answers: [
            {text: "(A) Matthew", correct: false},
            {text: "(B) Exodus", correct: false},
            {text: "(C) Mark", correct: true},
            {text: "(D) Solomon", correct: false},
        ]
    },

    {
        question: "In what language was most of the New Testament given?",
        answers: [
            {text: "(A) English", correct: false},
            {text: "(B) Greek", correct: true},
            {text: "(C) Spanish", correct: false},
            {text: "(D) French", correct: false},
        ]
    },

    {
        question: "What was most likely the last Gospel written?",
        answers: [
            {text: "(A) Matthew", correct: false},
            {text: "(B) Mark", correct: false},
            {text: "(C) John", correct: true},
            {text: "(D) Luke", correct: false},
        ]
    },

    {
        question: "What was most likely the first of Paul's letters written",
        answers: [
            {text: "(A) 1 Thessalonians", correct: true},
            {text: "(B) Exodus", correct: false},
            {text: "(C) Mark", correct: false},
            {text: "(D) Solomon", correct: false},
        ]
    },

    {
        question: "Where did Jesus’ family go when Herod wanted to harm him as baby?",
        answers: [
            {text: "(A) Church", correct: false},
            {text: "(B) Jerusalem", correct: false},
            {text: "(C) Rome", correct: false},
            {text: "(D) Egypt", correct: true},
        ]
    },

    {
        question: "How many of Jesus’ brothers are named in the Bible?",
        answers: [
            {text: "(A) Twelve (12)", correct: false},
            {text: "(B) Four (4)", correct: true},
            {text: "(C) None (0)", correct: false},
            {text: "(D) Seven (7)", correct: false},
        ]
    },

    {
        question: "How many of Jesus’ sisters are named in the Bible?",
        answers: [
            {text: "(A) Twelve (12)", correct: false},
            {text: "(B) Four (4)", correct: false},
            {text: "(C) None (0)", correct: true},
            {text: "(D) Seven (7)", correct: false},
        ]
    },

    {
        question: "Name the place where Jesus walked on water?",
        answers: [
            {text: "(A) Sea of Galilee", correct: true},
            {text: "(B) Red Sea", correct: false},
            {text: "(C) Atlantic Ocean", correct: false},
            {text: "(D) Bethesda", correct: false},
        ]
    },

    {
        question: "Who baptized Jesus?",
        answers: [
            {text: "(A) Paul Apostle", correct: false},
            {text: "(B) John the Baptist", correct: true},
            {text: "(C) Jesus Brother", correct: false},
            {text: "(D) Peter", correct: false},
        ]
    },

    {
        question: "Who spoke from the sky when Jesus was baptized?",
        answers: [
            {text: "(A) Angel", correct: false},
            {text: "(B) Dove", correct: false},
            {text: "(C) God", correct: true},
            {text: "(D) Jesus Mother", correct: false},
        ]
    },

    {
        question: "What did God say when He spoke?",
        answers: [
            {text: "(A) That he was well-pleased with his son.", correct: true},
            {text: "(B) That he can laugh", correct: false},
            {text: "(C) That he can swim", correct: false},
            {text: "(D) That he baptized too early", correct: false},
        ]
    },

    {
        question: "What happened when Jesus went into the wilderness?",
        answers: [
            {text: "(A) He was asleep.", correct: false},
            {text: "(B) Nothing happen", correct: false},
            {text: "(C) He was preaching", correct: false},
            {text: "(D) He was tempted by Satan", correct: true},
        ]
    },

    {
        question: "Name Jesus’ hometown?",
        answers: [
            {text: "(A) Heaven", correct: false},
            {text: "(B) Rome", correct: false},
            {text: "(C) Nazareth", correct: true},
            {text: "(D) Jerusalem", correct: false},
        ]
    },

    {
        question: "What did Jesus turned water into?",
        answers: [
            {text: "(A) Coca-Cola", correct: false},
            {text: "(B) Wine", correct: true},
            {text: "(C) Juice", correct: false},
            {text: "(D) Water", correct: false},
        ]
    },

    {
        question: "Besides preaching, name an activity Jesus did while traveling in Galilee?",
        answers: [
            {text: "(A) Healing the sick and casting out demons", correct: true},
            {text: "(B) Revival", correct: false},
            {text: "(C) Fishing", correct: false},
            {text: "(D) Fighting", correct: false},
        ]
    },

    {
        question: "What was Matthew before he followed Jesus?",
        answers: [
            {text: "(A) A tax collector", correct: true},
            {text: "(B) A lecturer", correct: false},
            {text: "(C) An Hockey Player", correct: false},
            {text: "(D) A Trader", correct: false},
        ]
    },

    {
        question: "Why did Jesus weep in the Bible?",
        answers: [
            {text: "(A) Because his father died", correct: false},
            {text: "(B) Because he was hungry", correct: false},
            {text: "(C) Because his friend Lazarus died", correct: true},
            {text: "(D) Because his mother died", correct: false},
        ]
    },

    {
        question: "How many days was Lazarus dead before Jesus came to visit?",
        answers: [
            {text: "(A) Seven days", correct: false},
            {text: "(B) Nine days", correct: false},
            {text: "(C) One day", correct: false},
            {text: "(D) Four days", correct: true},
        ]
    },

    {
        question: "What problem did Bartimaeus have that Jesus fixed?",
        answers: [
            {text: "(A) He was blind", correct: true},
            {text: "(B) He was crying", correct: false},
            {text: "(C) He was stubborn", correct: false},
            {text: "(D) None", correct: false},
        ]
    },

    {
        question: "How many people did Jesus feed with fish and bread?",
        answers: [
            {text: "(A) 10,000 people", correct: false},
            {text: "(B) 7,000 people", correct: false},
            {text: "(C) 5,000 people", correct: true},
            {text: "(D) 500 people", correct: false},
        ]
    }
];

let questions; 

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let questionsFinished = 0;
let score = 0;
let max_questions = 25;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function showQuestion(){
    resetState();
    questionsFinished += 1;
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = questionsFinished;
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
    // questionElement.innerHTML = `You Scored ${score} out of ${all_questions.length}!`;
    questionElement.innerHTML = `You Scored ${score} out of ${max_questions}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    questionsFinished = 0;
}

function handleNextButton(){
    questions.splice(currentQuestionIndex, 1);
    currentQuestionIndex = getRandomInt(questions.length);
    // if(currentQuestionIndex < questions.length){
    if(questionsFinished < max_questions){
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

function startQuiz(){
    questions = [...all_questions];
    currentQuestionIndex = getRandomInt(questions.length);
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

startQuiz();


