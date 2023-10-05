const verse = "john 1:1";
const url = "https://bible-api.com/".concat(verse);
let response = await fetch(url);
let data = await response.json()
console.log(data.text);