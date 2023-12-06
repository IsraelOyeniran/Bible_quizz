let curPage = 0;
let pageImages = ["photo_gallery/adult.jpg","photo_gallery/adult.jpg","photo_gallery/adult.jpg"]
let pageBodys = ["Click here to select your Bible study plan, if you are below 6 years, or next if you are above.",
                "Click here to select your Bible study plan, if you are below 20 years, or next if you are above.",
                "Click here to select your Bible study plan, if you are  20 years and older or next to go back."
                ]

let caroselElementStrings = [
                            'Click <a id="caroselLink" href="/Child/child_plans.html"><strong>here</strong></a> to select your Bible study plan, if you are below 6 years, or click next button if you are above.',
                            'Click <a id="caroselLink" href="/Teen/teen_plans.html"><strong>here</strong></a> to select your Bible study plan, if you are below 20 years, or click next button if you are above.',
                            'Click <a id="caroselLink" href="/Child/child_plans.html"><strong>here</strong></a> to select your Bible study plan, if you are 20 years and older, or <a href="/Categories/categories.html"><strong>exit</strong></a> to go back.'
                            ];

function alertCall() {
    alert("This is an alert");
}

function nextCard() {
    curPage  += 1;
    if (curPage >= 3){
        curPage = 0
    }

    const cardImg = document.getElementById("caroselImg");
    cardImg.src = pageImages[curPage];

    const cardText = document.getElementById("caroselText");
    cardText.textContent = ""; 
    cardText.textContent = pageBodys[curPage];

    cardText.innerHTML = caroselElementStrings[curPage];
}



// function nextCard() {
//     const cardBody = document.getElementById("cardBody");
//     cardBody.textContent = "";

//     const newImg = document.createElement('img');
//     newImg.src = "photo_gallery/Teenagers.jpg";
//     newImg.style = "padding-left: 20px";
//     cardBody.append(newImg);   
//     console.log(cardBody);
// }




