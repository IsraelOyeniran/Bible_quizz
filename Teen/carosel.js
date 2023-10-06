let curPage = 0;
let caroselLink = ["Ephesians 4:32","jhskjhjakjah"]
let boxBodys = ["Be kind to one another.","hjahjdkjhkjahhd","hjajajhadhhd"]


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