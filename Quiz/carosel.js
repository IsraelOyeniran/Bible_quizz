// let current_question = 0;
// let current_result = blank;
// let current_answer = this;

// let questions = {
//     0: ["What is the first book in the Bible?"]
// }

let curPage = 0;
let caroselQuestion = ["Question"]
let questionBody = ["What is the first book in the Bible?","hjahjdkjhkjahhd","hjajajhadhhd"]


function nextCard() {
    curPage  += 1;
    if (curPage >= 1){
        curPage = 0
    }
    const cardBodys = document.getElementById("boxBodys");
    cardBodys.textContent = "Be kind to one another.","Be kind to one another.";  
    console.log(boxBodys);
    console.log(CaroselText)
}