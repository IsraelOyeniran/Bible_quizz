let curPage = 0;
let pageLinks = ["https://biblehub.com/romans/3-23.htm"]

let pageAlphabets = ["Aa","Bb","Cc","Dd","Ee","Ff","Gg","Hh","Ii","Jj","Kk","Ll","Mm",
                    "Nn","Oo","Pp","Qq","Rr","Ss","Tt","Uu","Vv","Ww","Xx","Yy","Zz"]

let pageBodys = ["All have sinned and fall short of the glory of God."
                ]

function alertCall() {
    alert("This is an alert");
}

function nextVerse() {
    curPage  += 1;
    if (curPage >= 26){
        curPage = 0
    }

    const navBar = document.getElementById("");
    cardImg.src = pageImages[curPage];

    const cardText = document.getElementById("");
    cardText.textContent = "";
    cardText.textContent = pageBodys[curPage];
}





