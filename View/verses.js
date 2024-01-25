current_verse = 1
// letters = ["Aa","Bb","Cc","Dd","Ee","Ff","Gg","Hh","Ii","Jj","Kk","Ll","Mm",
//             "Nn","Oo","Pp","Qq","Rr","Ss","Tt","Uu","Vv","Ww","Xx","Yy","Zz"]
verses = ['Romans 3:23','Acts 16:31','Colossians 3:20','Matthew 7:12',
            'Proverbs 20:11','Isaiah 43:1','1 Thessalonians 5:18',
            'Exodus 20:12','John 15:5','Hebrews 13:8','Psalm 34:13','Isaiah 45:22',
            'John 3:7','Matthew 6:24','Psalm 89:8','Ephesians 6:11, 14-17','1 Thessalonians 5:19',
            'Exodus 20:8-10','Matthew 6:33','Proverbs 3:5-6','Isaiah 9:6-7','Romans 12:19,21',
            'Psalm 27:14','Matthew 18:3','Matthew 5:14,16','Psalm 97:8,9'
        ]

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
]

function createVerseSelection(){

    const caroselDiv = document.createElement("div");
    caroselDiv.id = "carosel"

    const boxDiv = document.createElement("div");
    boxDiv.class = "box"

    caroselDiv.appendChild(boxDiv)

    const boxLettersDiv = document.createElement("div");
    boxLettersDiv.id = "boxLetters"

    boxDiv.appendChild(boxLettersDiv)

    const boldedLettersDiv = document.createElement("b");
    boldedLettersDiv = "boldedLetters"
    boldedLettersDiv.innerHTML = "Aa"
    boldedLettersDiv.appendChild(boldedLettersDiv)

    const navBarDiv = document.createElement("nav");
    navBarDiv.id = "navBarDiv"
    boxDiv.appendChild(navBarDiv)

    const verseContainer = document.getElementById("verseContainer");
    verseContainer.appendChild(caroselDiv)


    const h1Div = document.createElement("div")
}

async function fetchVerse(verseName){
    let response = await fetch("https://bible-api.com/"+verseName);
    let data = await response.json()
    return data
}

function nextVerse() {
    versepair = versepairs[current_verse]
    const CaroselLink = document.getElementById("caroselLink")
    CaroselLink.innerHTML = versepair[1]

    const boldedLetters = document.getElementById("boldedLetters")
    boldedLetters.innerHTML = versepair[0]

    const bodyText = document.getElementById("caroselText")

    fetchVerse(verses[current_verse]).then((data) => {
            console.log(data)
            bodyText.innerHTML = data.text
        }
    )

    current_verse += 1
    if (current_verse >= versepairs.length){
        current_verse = 0
    }

    
}