const questions = [
    {
        question: "What is the first book in the Bible?",
        answers: [
            {text: "(A) Matthew", correct: false},
            {text: "(B) Exodus", correct: false},
            {text: "(C) Genesis", correct: true},
            {text: "(A) Jesus", correct: false},
        ]
    },

    {
        question: "What four books tell about Jesus life on Earth?",
        answers: [
            {text: "(A) Matthew, Revelation, Mark, John", correct: false},
            {text: "(B) Matthew, Mark, Luke, John", correct: true},
            {text: "(C) Genesis, 1 John, Luke, Mark", correct: false},
            {text: "(A) Matthew, Mark, Luke, 2 John", correct: false}, 
        ]
    },

    {
        question: "What is the longest book in the Bible?",
        answers: [
            {text: "(A) Psalms", correct: true},
            {text: "(B) Exodus", correct: false},
            {text: "(C) Genesis", correct: false},
            {text: "(A) Numbers", correct: false},
        ]
    },

    {
        question: "What is the shortest book in the Bible?",
        answers: [
            {text: "(A) Ezekiel", correct: false},
            {text: "(B) 1 Peter", correct: false},
            {text: "(C) Jude", correct: false},
            {text: "(A) 3 John", correct: true},
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
        question: "How many books in the Old Testament?",
        answers: [
            {text: "(A) 39 books in the OT", correct: true},
            {text: "(B) 32 books in the OT", correct: false},
            {text: "(C) 30 books in the OT", correct: false},
            {text: "(A) 40 books in the OT", correct: false},
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
            {text: "(A) Matthew", correct: true},
        ] 
    },

    {
        question: "What is the last book in the Bible?",
        answers: [
            {text: "(A) Revelation", correct: true},
            {text: "(B) Hebrews", correct: false},
            {text: "(C) Genesis", correct: false},
            {text: "(A) Jude", correct: false},
        ] 
    },

    {
        question: "In what language was most of the Old Testament given?",
        answers: [
            {text: "(A) Hebrew", correct: true},
            {text: "(B) Greek", correct: false},
            {text: "(C) English", correct: false},
            {text: "(A) Spanish", correct: false},
        ]  
    }
];

const quentionElement = document.getElementById("question");
