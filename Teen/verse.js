current_verse = 1

verses = ["Ephesians 4:32","1 John 3:23","Psalm 56:3","Acts 16:31","Psalm 145:9","John 11:35",
            "Genesis 16:13","Philippians 4:4","Proverbs 14:5","Numbers 6:24","Colossians 3:2",
            "Colossians 3:16","1 John 5:3","Ephesians 4:30","Hebrews 13:8","Psalm 150:6","Proverbs 3:5",
            "Romans 10:13","Romans 3:23","Matthew 5:14","Psalm 145:9","Colossians 3:20","James 1:17",
            "Matthew 28:20","Psalm 118:24","Psalm 119:105","Psalm 136:1","Luke 6:31","Philippians 4:13",
            "Psalm 138:1","John 10:11","Ephesians 6:1","Proverbs 30:5","Matthew 6:24","Deuteronomy 6:5",
            "Matthew 22:39","1 Corinthians 10:31","Psalm 19:1","Genesis 1:1","Psalm 139:14","Isaiah 43:5",
            "Psalm 1:6","Matthew 28:6","Acts 5:29","1 Thessalonians 5:17","1 John 4:19","Psalm 46:10",
            "Proverbs 2:6","Psalm 150:6","Ecclesiastes 12:13","Isaiah 26:4","Galatians 6:7"]

// versepairs = [
//     ["Aa","Romans 3:23"],
//     ["Bb","Acts 16:31"],
//     ["Cc","Colossians 3:20"],
//     ["Dd","Matthew 7:12"],
//     ["Ee","Proverbs 20:11"],
//     ["Ff","Isaiah 43:1"],
//     ["Gg","1 Thessalonians 5:18"],
//     ["Hh","Exodus 20:12"],
//     ["Ii","John 15:5"],
//     ["Jj","Hebrews 13:8"],
//     ["Kk","Psalm 34:13"],
//     ["Ll","Isaiah 45:22"],
//     ["Mm","John 3:7"],
//     ["Nn","Matthew 6:24"],
//     ["Oo","Psalm 89:8"],
//     ["Pp","Ephesians 6:11, 14-17"],
//     ["Qq","1 Thessalonians 5:19"],
//     ["Rr","Exodus 20:8-10"],
//     ["Ss","Matthew 6:33"],
//     ["Tt","Proverbs 3:5-6"],
//     ["Uu","Isaiah 9:6-7"],
//     ["Vv","Romans 12:19,21"],
//     ["Ww","Psalm 27:14"],
//     ["Xx","Matthew 18:3"],
//     ["Yy","Matthew 5:14,16"],
//     ["Zz","Psalm 97:8,9"]
// ]

async function fetchVerse(verseName){
    let response = await fetch("https://bible-api.com/"+verseName);
    let data = await response.json()
    return data
}

// function makeTextBold(string){
//     return "<b>"+string+"</b>"
// }

function nextVerse() {
    verse = verses[current_verse]
    const CaroselLink = document.getElementById("caroselLink")
    CaroselLink.innerHTML = verse[1]

    const boldedLetters = document.getElementById("boldedLetters")
    boldedLetters.innerHTML = verse[0]

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