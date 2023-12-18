current_verse = 1
// letters = ["Aa","Bb","Cc"]
// verses = ['Romans 3:23','Acts 16:31','Colossians 3:20']
versepairs = [
    ["Aa","Romans 3:23"],
    ["Bb","Acts 16:31"],
    ["Cc","Colossians 3:20"],
    ["Dd","Matthew 7:12"]
]

async function fetchVerse(verseName){
    let response = await fetch("https://bible-api.com/"+verseName);
    let data = await response.json()
    return data
}

function makeTextBold(string){
    return "<b>"+string+"</b>"
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
    if (current_verse >= verses.length){
        current_verse = 0
    }

    
}