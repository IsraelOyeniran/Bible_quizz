const all_questions = [
    {
        question: "Which book of the Bible tells about the beginnings of the world?",
        answers: [
            {text: "(A) Genesis", correct: true},
            {text: "(B) Matthew", correct: false},
            {text: "(C) Exodus", correct: false},
            {text: "(D) Mark", correct: false},
        ]
    },

    {
        question: "In what language was most of the Old Testament written?",
        answers: [
            {text: "(A) Hebrew", correct: true},
            {text: "(B) Greek", correct: false},
            {text: "(C) English", correct: false},
            {text: "(D) French", correct: false},
        ]
    },

    {
        question: "Which of the Old Testament books is a collection of hymns and songs?",
        answers: [
            {text: "(A) Song of Solomon", correct: false},
            {text: "(B) Psalms", correct: true},
            {text: "(C) Ecclesiastes", correct: false},
            {text: "(D) Isaiah", correct: false},
        ]
    },

    {
        question: "Who wrote many of the Psalms?",
        answers: [
            {text: "(A) Simon Peter", correct: false},
            {text: "(B) Andrew", correct: false},
            {text: "(C) Bartholomew", correct: false},
            {text: "(D) King David", correct: true}, 
        ]
    },

    {
        question: "Where did the universe come from?",
        answers: [
            {text: "(A) Genesis 1:1", correct: true},
            {text: "(B) Revelation", correct: false},
            {text: "(C) Number", correct: false},
            {text: "(D) Heaven", correct: false},
        ]
    },

    {
        question: "Who were the first man and first woman?",
        answers: [
            {text: "(A) Abraham and Sarah", correct: false},
            {text: "(B) Adam and Ruth", correct: false},
            {text: "(C) Adam and Sarah", correct: false},
            {text: "(D) Adam and Eve", correct: true},
        ] 
    },

    {
        question: "Who were the first two brothers?",
        answers: [
            {text: "(A) Cain and Paul", correct: false},
            {text: "(B) Abraham and Arron", correct: false},
            {text: "(C) Cain and John", correct: false},
            {text: "(D) Cain and Abel", correct: true},
        ] 
    },

    {
        question: "How did sin enter the world?",
        answers: [
            {text: "(A) Through snake", correct: false},
            {text: "(B) Through the disobedience of Adam and Eve", correct: true},
            {text: "(C) Through apple fruits", correct: false},
            {text: "(D) Through animals", correct: false},
        ]  
    },

    {
        question: "What man walked with God until God took him to heaven without dying?",
        answers: [
            {text: "(A) Abraham", correct: false},
            {text: "(B) Elijah", correct: false},
            {text: "(C) Enoch", correct: true},
            {text: "(A) Isaac", correct: false},
        ]  
    },

    {
        question: "Who lived longer than any other person, and how long did he live?",
        answers: [
            {text: "(A) Adam", correct: false},
            {text: "(B) Abraham", correct: false},
            {text: "(C) Moses", correct: false},
            {text: "(D) Methuselah", correct: true},
        ] 
    },

    {
        question: "Whom did God spare from the Great Flood?",
        answers: [
            {text: "(A) Noah and his family", correct: true},
            {text: "(B) Noah only", correct: false},
            {text: "(C) Noah and the animals", correct: false},
            {text: "(D) Just the animals", correct: false},
        ] 
    },

    {
        question: "What was the first thing that God created? ",
        answers: [
            {text: "(A) Sun", correct: false},
            {text: "(B) Water", correct: false},
            {text: "(C) Light", correct: true},
            {text: "(D) Moon", correct: false},
        ]
    },

    {
        question: "Which day did God create plants? ",
        answers: [
            {text: "(A) Third", correct: true},
            {text: "(B) First", correct: false},
            {text: "(C) Fourth", correct: false},
            {text: "(D) Sixth", correct: false},
        ]
    },

    {
        question: "What was the boat Noah built called? ",
        answers: [
            {text: "(A) War ship", correct: false},
            {text: "(B) An ark", correct: true},
            {text: "(C) Fishing boat", correct: false},
            {text: "(D) Cruise ship", correct: false},
        ]
    },

    {
        question: "How many of each type of animal did Noah have on the ark? ",
        answers: [
            {text: "(A) Seven", correct: false},
            {text: "(B) One", correct: false},
            {text: "(C) Twelve", correct: false},
            {text: "(D) Two", correct: true}, 
        ]
    },

    {
        question: "What is the symbol of God’s promise to Noah?",
        answers: [
            {text: "(A) The rainbow", correct: true},
            {text: "(B) The moon", correct: false},
            {text: "(C) The sun", correct: false},
            {text: "(D) The rain", correct: false},
        ]
    },

    {
        question: "Who received the 10 commandments from God?",
        answers: [
            {text: "(A) Abraham", correct: false},
            {text: "(B) Peter", correct: false},
            {text: "(C) Noah", correct: false},
            {text: "(D) Moses", correct: true},
        ] 
    },

    {
        question: "What are we told to do in the fifth commandment?",
        answers: [
            {text: "(A) Honor your father and brother", correct: false},
            {text: "(B) Love one another", correct: false},
            {text: "(C) Honor your prophet", correct: false},
            {text: "(D) Honor your father and mother", correct: true},
        ] 
    },

    {
        question: "What food do we ask God to give us in the Lord’s Prayer?",
        answers: [
            {text: "(A) Carmel meat", correct: false},
            {text: "(B) Our daily bread", correct: true},
            {text: "(C) Communion", correct: false},
            {text: "(D) Bread and fish", correct: false},
        ]  
    },

    {
        question: "This young boy defeated a giant?",
        answers: [
            {text: "(A) Samson", correct: false},
            {text: "(B) Joseph", correct: false},
            {text: "(C) James", correct: false},
            {text: "(D) David", correct: true},
        ] 
    },

    {
        question: "This prophet was swallowed by a fish.",
        answers: [
            {text: "(A) Jonah", correct: true},
            {text: "(B) Peter", correct: false},
            {text: "(C) Paul", correct: false},
            {text: "(D) Solomon", correct: false},
        ] 
    },

    {
        question: "Who were the three sons of Noah?",
        answers: [
            {text: "(A) Shem, Cain, Japheth", correct: false},
            {text: "(B) Ephraim, Ham, Japheth", correct: false},
            {text: "(C) Joseph, Ham, Japheth", correct: false},
            {text: "(D) Shem, Ham, Japheth", correct: true},
        ]  
    },

    {
        question: "When the flood came, how long did it rain?",
        answers: [
            {text: "(A) 50 days and nights", correct: false},
            {text: "(B) 45 days and nights", correct: false},
            {text: "(C) 47 days and nights", correct: false},
            {text: "(D) 40 days and nights", correct: true},
        ]  
    },

    {
        question: "After the flood, how did the people rebel against God?",
        answers: [
            {text: "(A) By fighting one and other", correct: false},
            {text: "(B) By cursing God", correct: false},
            {text: "(C) By building a tower to reach heaven", correct: true},
            {text: "(D) By refusing to worship God", correct: false},
        ]  
    },

    {
        question: "How many people boarded Noah’s Ark?",
        answers: [
            {text: "(A) Eight (8)", correct: true},
            {text: "(B) Eleven (11)", correct: false},
            {text: "(C) Six (6)", correct: false},
            {text: "(D) Three (3)", correct: false},
        ]
    },

    {
        question: "What did Joshua command to stay still?",
        answers: [
            {text: "(A) Moon and stars", correct: false},
            {text: "(B) Moon & Sun", correct: true},
            {text: "(C) Fire on the mountain", correct: false},
            {text: "(D) The sea", correct: false},
        ]
    },

    {
        question: "How many plagues are in Exodus?",
        answers: [
            {text: "(A) Seven (7)", correct: false},
            {text: "(B) Twelve (12)", correct: false},
            {text: "(C) Three (3)", correct: false},
            {text: "(D) Ten (10)", correct: true},
        ]
    },

    {
        question: "Who is the first murderer in the Bible?",
        answers: [
            {text: "(A) Adam", correct: false},
            {text: "(B) The snake", correct: false},
            {text: "(C) Cain", correct: true},
            {text: "(D) Eve", correct: false},
        ]
    },

    {
        question: "Which place is called “Zion” and “the city of David”?",
        answers: [
            {text: "(A) Syria", correct: false},
            {text: "(B) Jerusalem", correct: true},
            {text: "(C) Egypt", correct: false},
            {text: "(D) Israel", correct: false},
        ]
    },

    {
        question: "Who was Abraham's nephew?",
        answers: [
            {text: "(A) Matthew", correct: false},
            {text: "(B) Aaron", correct: false},
            {text: "(C) Lot", correct: true},
            {text: "(D) Jacob", correct: false},
        ]
    },

    {
        question: "What was the original name of the country God promised to Abraham?",
        answers: [
            {text: "(A) Egypt", correct: false},
            {text: "(B) Jerusalem", correct: false},
            {text: "(C) Rome", correct: false},
            {text: "(D) Canaan", correct: true},
        ]
    },

    {
        question: "Who was Abraham's wife?",
        answers: [
            {text: "(A) Rebecca (12)", correct: false},
            {text: "(B) Sarah (4)", correct: true},
            {text: "(C) Naomi (0)", correct: false},
            {text: "(D) Ruth (7)", correct: false},
        ]
    },

    {
        question: "To what country did Abraham go in time of famine?",
        answers: [
            {text: "(A) Bethlehem (12)", correct: false},
            {text: "(B) Jerusalem (4)", correct: false},
            {text: "(C) Egypt (0)", correct: true},
            {text: "(D) Rome (7)", correct: false},
        ]
    },

    {
        question: "Who was Melchizedek?",
        answers: [
            {text: "(A) Priest of God and King of Salem", correct: true},
            {text: "(B) King of Egypt", correct: false},
            {text: "(C) Priest of God and King of Babylon", correct: false},
            {text: "(D) Apostle in the church", correct: false},
        ]
    },

    {
        question: "How old were Abraham and Sarah when Isaac was born?",
        answers: [
            {text: "(A) Abraham was 101 and Sarah was 90 years old", correct: false},
            {text: "(B) Abraham was 100 and Sarah was 90 years old", correct: true},
            {text: "(C) Abraham was 100 and Sarah was 91 years old", correct: false},
            {text: "(D) Abraham was 100 and Sarah was 99 years old", correct: false},
        ]
    },

    {
        question: "Who else was in prison with Joseph?",
        answers: [
            {text: "(A) Pharaoh’s cupbearer and his nephew", correct: false},
            {text: "(B) Pharaoh’s gateman and chief baker", correct: false},
            {text: "(C) The Pharaoh’s cupbearer and chief baker", correct: true},
            {text: "(D) Pharaoh’s Son", correct: false},
        ]
    },

    {
        question: "Who was the first king of Israel?",
        answers: [
            {text: "(A) Saul", correct: true},
            {text: "(B) Jacob", correct: false},
            {text: "(C) Paul", correct: false},
            {text: "(D) Timothy", correct: false},
        ]
    },

    {
        question: "Who was the king of Israel anointed by Samuel after Saul?",
        answers: [
            {text: "(A) Solomon.", correct: false},
            {text: "(B) Absalom", correct: false},
            {text: "(C) Aaron", correct: false},
            {text: "(D) David", correct: true},
        ]
    },

    {
        question: "Who was David’s son that became king?",
        answers: [
            {text: "(A) Absalom", correct: false},
            {text: "(B) Adonijah", correct: false},
            {text: "(C) Solomon", correct: true},
            {text: "(D) Amnon", correct: false},
        ]
    },

    {
        question: "What trait did Solomon pray for from God?",
        answers: [
            {text: "(A) Blessing", correct: false},
            {text: "(B) Wisdom", correct: true},
            {text: "(C) Wealth", correct: false},
            {text: "(D) Sick family", correct: false},
        ]
    },

    {
        question: "What happened to the kingdom after Solomon’s rule?",
        answers: [
            {text: "(A) It split in two", correct: true},
            {text: "(B) Destroyed", correct: false},
            {text: "(C) Blessed", correct: false},
            {text: "(D) It split in three", correct: false},
        ]
    },

    {
        question: "Which books of the Bible did Solomon write?",
        answers: [
            {text: "(A) Song of Solomon and Proverbs and some Psalms", correct: true},
            {text: "(B) Song of Solomon and Proverbs and Psalms", correct: false},
            {text: "(C) Psalms", correct: false},
            {text: "(D) Proverbs and Psalms", correct: false},
        ]
    },

    {
        question: "Who killed Absalom?",
        answers: [
            {text: "(A) Jacob", correct: false},
            {text: "(B) Esau", correct: false},
            {text: "(C) Joab", correct: true},
            {text: "(D) Saul", correct: false},
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
        question: "What capital city did David abandon as Absalom came towards it?",
        answers: [
            {text: "(A) Jerusalem", correct: true},
            {text: "(B) Babylon", correct: false},
            {text: "(C) Jordan", correct: false},
            {text: "(D) Egypt", correct: false},
        ]
    },

    {
        question: "How many times did David spare Saul’s life?",
        answers: [
            {text: "(A) One time", correct: false},
            {text: "(B) Three times", correct: false},
            {text: "(C) Twice", correct: true},
            {text: "(D) Never", correct: false},
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
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    questionsFinished = 0;
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

function startQuiz(){
    questions = [...all_questions];
    currentQuestionIndex = getRandomInt(questions.length);
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

startQuiz();