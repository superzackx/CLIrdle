const colors = require('colors');
let finalString = "";
let code = ["B", "Y", "B", "G", "B"]
let word = ["W", "A", "T", "C", "H"]

word.forEach(letter => {
    let i = word.indexOf(letter)
    let colorCode = code[i]
    if(colorCode === "B"){
        finalString = finalString + " " + `  ${letter}  `.bgBlack.white
    } else if(colorCode === "Y") {
        finalString = finalString + " " + `  ${letter}  `.bgYellow.black
    } else {
        finalString = finalString + " " + `  ${letter}  `.bgGreen.black
    }
})

console.log(finalString)