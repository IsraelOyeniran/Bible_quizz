versepairs = [
    ["Aa","Romans 3:23"],
    ["Bb","Acts 16:31"],
    ["Cc","Colossians 3:20"],
    ["Dd","Matthew 7:12"],
    ["Ee","Proverbs 20:11"],
    ["Ff","Isaiah 43:1"],
    ["Gg","1 Thessalonians 5:18"],
    ["Hh","Exodus 20:12"],
    ["Ii","John 15:5"],
    ["Jj","Hebrews 13:8"],
    ["Kk","Psalm 34:13"],
    ["Ll","Isaiah 45:22"],
    ["Mm","John 3:7"],
    ["Nn","Matthew 6:24"],
    ["Oo","Psalm 89:8"],
    ["Pp","Ephesians 6:11, 14-17"],
    ["Qq","1 Thessalonians 5:19"],
    ["Rr","Exodus 20:8-10"],
    ["Ss","Matthew 6:33"],
    ["Tt","Proverbs 3:5-6"],
    ["Uu","Isaiah 9:6-7"],
    ["Vv","Romans 12:19,21"],
    ["Ww","Psalm 27:14"],
    ["Xx","Matthew 18:3"],
    ["Yy","Matthew 5:14,16"],
    ["Zz","Psalm 97:8,9"]
];

async function getVerse(verseIndex) {
    let response = await fetch(
        `https://bible-api.com/${versepairs[verseIndex][1]}`
    );
    let data = await response.json()
    return data.text;
}

let parentElement = document.getElementById("carosel");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");
let verseMessage = document.querySelector("dialog p");

closeButton.addEventListener("click", () => {
    dialog.close();
});


versepairs.forEach((versepair, index) => {
    let box = document.createElement("div");
    box.className = "box";

    let boxLetters = document.createElement("div");
    boxLetters.className = "boxLetters";

    let boldedLetters = document.createElement("b");
    boldedLetters.className = "boldedLetters";
    boldedLetters.textContent = versepair[0];

    boxLetters.appendChild(boldedLetters);

    let textDiv = document.createElement("div");
    textDiv.className = "navBar";

    let style = document.createElement("h1");
    style.className = "style";

    let caroselButton = document.createElement("button");
    caroselButton.className = "caroselButton" + index;
    caroselButton.textContent = versepair[1];

    caroselButton.addEventListener("click", async () => {
        verseMessage.innerHTML = await getVerse(index);
        dialog.showModal();
    });

    style.appendChild(caroselButton);
    
    textDiv.appendChild(style);

    box.appendChild(boxLetters);
    box.appendChild(textDiv);

    parentElement.appendChild(box);
});






// function createVerseSelection(){

//     const caroselDiv = document.createElement("Div");
//     caroselDiv.id = "carosel"

//     const boxDiv = document.createElement("Div");
//     boxDiv.className = "box"

//     caroselDiv.appendChild(boxDiv)

//     const boxLettersDiv = document.createElement("Div")
//     boxLettersDiv.id = "boxLetters"

//     boxDiv.appendChild("boxLetters")

//     const boldedLettersDiv = document.createElement("b")
//     boldedLettersDiv.id = "boldedLetters"
//     boldedLettersDiv.innerHTML = "Aa"
//     boxLettersDiv.append(boldedLettersDiv)
    
//     const navBarDiv = document.createElement("nav")
//     navBarDiv.id = "navBar"
//     boxDiv.appendChild(navBarDiv)

//     const verseContainer = getElementById("verseContainer")
//     verseContainer.appendChild(caroselDiv)  

//     console.log(verseContainer)
// }

// function createVerseSelection(){
//     versepairs.array.array.forEach(element => {
        
//     });
// }



// async function fetchVerse(versepairs){
//     let response = await fetch("https://bible-api.com/"+versepairs);
//     let data = await response.json()
//     return data
// }

// function nextVerse() {
//     versepair = versepairs[current_verse]
//     const CaroselLink = document.getElementById("caroselLink")
//     CaroselLink.innerHTML = versepairs[1]

//     const boldedLetters = document.getElementById("boldedLetters")
//     boldedLetters.innerHTML = versepairs[0]

//     const bodyText = document.getElementById("caroselText")

//     fetchVerse(verses[current_verse]).then((data) => {
//             console.log(data)
//             bodyText.innerHTML = data.text
//         }
//     )

//     current_verse += 1
//     if (current_verse >= versepairs.length){
//         current_verse = 0
//     }

    
// }