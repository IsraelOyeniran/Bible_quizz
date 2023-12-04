const questions = [
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
        question: "People look on the outward appearance, but what does God look on?",
        answers: [
            {text: "(A) Our eyes", correct: false},
            {text: "(B) Our actions", correct: false},
            {text: "(C) The heart", correct: true},
            {text: "(A) Our given", correct: false},
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
        question: "Which disciples witnessed Jesus’ Transfiguration?",
        answers: [
            {text: "(A) Peter, Paul and James", correct: false},
            {text: "(B) Peter, Simon and John", correct: false},
            {text: "(C) Peter, James and Luke", correct: false},
            {text: "(D) Peter, James and John", correct: true},
        ] 
    },

    {
        question: "How is the name Emmanuel interpreted?",
        answers: [
            {text: "(A) God is with us", correct: true},
            {text: "(B) God is for us", correct: false},
            {text: "(C) God of all", correct: false},
            {text: "(D) God is loving", correct: false},
        ]  
    },

    {
        question: "Paul was shipwrecked on what island?",
        answers: [
            {text: "(A) River Jordan", correct: false},
            {text: "(B) Malta", correct: true},
            {text: "(C) Egypt", correct: false},
            {text: "(D) Syria", correct: false},
        ]  
    },

    {
        question: "Who recognized Jesus as the Messiah when he was presented to the Temple as a baby?",
        answers: [
            {text: "(A) The elders", correct: false},
            {text: "(B) Pastor", correct: false},
            {text: "(C) Simeon", correct: true},
            {text: "(D) His brother", correct: false},
        ]  
    },

    {
        question: "In the Gospel of Mark, how does the Virgin Mary learn of her pregnancy?",
        answers: [
            {text: "(A) From Joseph", correct: false},
            {text: "(B) From the dream", correct: false},
            {text: "(C) Through vision", correct: false},
            {text: "(D) From the angel Gabriel", correct: true},
        ]  
    },

    {
        question: "Who is the high priest of Jerusalem that put Jesus on trial?",
        answers: [
            {text: "(A) Caesar", correct: false},
            {text: "(B) John the Baptist", correct: false},
            {text: "(C) Herod", correct: false},
            {text: "(D) Caiaphas", correct: true},
        ]  
    },

    {
        question: "According to the Gospel of Matthew, where does Jesus give his first public sermon?",
        answers: [
            {text: "(A) In the boat", correct: false},
            {text: "(B) By the lake", correct: false},
            {text: "(C) On the mount", correct: true},
            {text: "(D) In the Synagogue", correct: false},
        ]  
    },

    {
        question: "Which insect did John the Baptist eat in the desert?",
        answers: [
            {text: "(A) Ants", correct: false},
            {text: "(B) Mosquitoes", correct: false},
            {text: "(C) Beetles", correct: false},
            {text: "(D) Locusts", correct: true},
        ]  
    },

    {
        question: "Who were the first apostles called to follow Jesus?",
        answers: [
            {text: "(A) Peter and James", correct: false},
            {text: "(B) Peter and Andrew", correct: true},
            {text: "(C) Andrew and James", correct: false},
            {text: "(D) Simon and Matthew", correct: false},
        ]  
    },

    {
        question: "Who asked Pilate for Jesus’ body after he was crucified?",
        answers: [
            {text: "(A) Disciples", correct: false},
            {text: "(B) Jesus brother's", correct: false},
            {text: "(C) Joseph of Arimathea", correct: true},
            {text: "(D) Jesus mother", correct: false},
        ]
    },

    {
        question: "What did Saul encounter when he was traveling to Damascus?",
        answers: [
            {text: "(A) Storm", correct: false},
            {text: "(B) A great and blinding light", correct: true},
            {text: "(C) Floor", correct: false},
            {text: "(D) Angel", correct: false},
        ]
    },

    {
        question: "What tribe is Paul from??",
        answers: [
            {text: "(A) Jacob", correct: false},
            {text: "(B) Isaac", correct: false},
            {text: "(C) Benjamin", correct: true},
            {text: "(D) Jacob", correct: false},
        ]
    },

    {
        question: "In the Gospel According to John, which apostle doubts Jesus’ resurrection until he sees Jesus with his own eyes?",
        answers: [
            {text: "(A) Thomas", correct: true},
            {text: "(B) Philip", correct: false},
            {text: "(C) Mark", correct: false},
            {text: "(D) Paul", correct: false},
        ]
    },

    {
        question: "Which Gospel is mostly speaks on the mystery and identity of the person of Jesus?",
        answers: [
            {text: "(A) The Gospel According to Luke", correct: false},
            {text: "(B) The Gospel According to Matthew", correct: false},
            {text: "(C) The Gospel According to Mark", correct: false},
            {text: "(D) The Gospel According to John", correct: true},
        ]
    },

    {
        question: "Which group of people are righteous enough to inherit the Kingdom of God?",
        answers: [
            {text: "(A) The Pharisees", correct: false},
            {text: "(B) The Gentiles", correct: true},
            {text: "(C) The Israelite", correct: false},
            {text: "(D) The people of Rome", correct: false},
        ]
    },

    {
        question: "What is the name of the village where Christ turned water into wine?",
        answers: [
            {text: "(A) Ethiopia", correct: false},
            {text: "(B) Jerusalem", correct: false},
            {text: "(C) Cana of Galilee", correct: true},
            {text: "(D) Wedding city", correct: false},
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
        question: "How many books are in the Bible?",
        answers: [
            {text: "(A) 52", correct: false},
            {text: "(B) 70", correct: false},
            {text: "(C) 50", correct: false},
            {text: "(A) 66", correct: true},
    ] 
    },

    {
        question: "What did God say?",
        answers: [
            {text: "(A) That he was well-pleased with his son.", correct: true},
            {text: "(B) That he can laugh", correct: false},
            {text: "(C) That he can swim", correct: false},
            {text: "(D) That he baptized too early", correct: false},
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
        question: "Who took Judas Iscariot’s place as an apostle?",
        answers: [
            {text: "(A) Matthias", correct: true},
            {text: "(B) Alexandra", correct: false},
            {text: "(C) No one", correct: false},
            {text: "(D) Timothy", correct: false},
        ]
    },

    {
        question: "What is the area of Palestine where the tribe of Judah lived after the exile?",
        answers: [
            {text: "(A) Judea", correct: true},
            {text: "(B) Palestine", correct: false},
            {text: "(C) Italy", correct: false},
            {text: "(D) Gaza", correct: false},
        ]
    },

    {
        question: "Who is Abraham’s wife?",
        answers: [
            {text: "(A) Rebecca", correct: false},
            {text: "(B) Abigel", correct: false},
            {text: "(C) Sarah", correct: true},
            {text: "(D) Maria", correct: false},
        ]
    },

    {
        question: "Which group was the ruling council of the Jews who plotted to kill Jesus?",
        answers: [
            {text: "(A) Pharaoh servants", correct: false},
            {text: "(B) The Palestine", correct: false},
            {text: "(C) The Roman Empire", correct: false},
            {text: "(D) The Sanhedrin", correct: true},
        ]
    },

    {
        question: "Who is the mother of all living?",
        answers: [
            {text: "(A) Eve", correct: true},
            {text: "(B) Sarah", correct: false},
            {text: "(C) Mary Jesus Mother", correct: false},
            {text: "(D) Martha", correct: false},
        ]
    },

    {
        question: "What did Pilate ask Jesus when he was arrested?",
        answers: [
            {text: "(A) Are you the preacher?", correct: false},
            {text: "(B) Are you the son of God?", correct: false},
            {text: "(C) Are you the King of the Jews?", correct: true},
            {text: "(D) Are you the King of kings?", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionAdquiz = 0;
let score = 0;

function startQuiz(){
    currentQuestionAdquiz = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionAdquiz];
    let questionNo = currentQuestionAdquiz + 1;
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
    currentQuestionAdquiz++;
    if(currentQuestionAdquiz < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionAdquiz < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();




        


