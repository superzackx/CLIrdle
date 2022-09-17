const prompt = require("prompt-sync")({ sigint: true });
const colors = require('colors');
const { rword } = require('rword');

function clirdleGame(){

let word = rword.generate(1, { length: 5 });
console.log("   ____ _     ___         _ _      \r\n  \/ ___| |   |_ _|_ __ __| | | ___ \r\n | |   | |    | || \'__\/ _` | |\/ _ \\\r\n | |___| |___ | || | | (_| | |  __\/\r\n  \\____|_____|___|_|  \\__,_|_|\\___|\n".rainbow)
console.log("CLIrdle successfully loaded. A random 5 letter word has been selected.")
let printTest = prompt("Enter word: ");
while(printTest.length != 5) {
    printTest = prompt("Please enter a 5 letter word: ")
}
while(!list.includes(printTest)){
    printTest = prompt("Please enter a valid word: ")
}
let test = printTest;
test = test.split("")

printTest = printTest.split("")
let finalString = "";
let copyWord = word.split("");
let code = ReturnHints(copyWord, test);


let gCount = 0;
let turns = 0;

let abc = [
    {
        letter: "A",
        color: "Grey"
    },
    {
        letter: "B",
        color: "Grey"
    },
    {
        letter: "C",
        color: "Grey"
    },
    {
        letter: "D",
        color: "Grey"
    },
    {
        letter: "E",
        color: "Grey"
    },
    {
        letter: "F",
        color: "Grey"
    },
    {
        letter: "G",
        color: "Grey"
    },
    {
        letter: "H",
        color: "Grey"
    },
    {
        letter: "I",
        color: "Grey"
    },
    {
        letter: "J",
        color: "Grey"
    },
    {
        letter: "K",
        color: "Grey"
    },
    {
        letter: "L",
        color: "Grey"
    },
    {
        letter: "M",
        color: "Grey"
    },
    {
        letter: "N",
        color: "Grey"
    },
    {
        letter: "O",
        color: "Grey"
    },
    {
        letter: "P",
        color: "Grey"
    },
    {
        letter: "Q",
        color: "Grey"
    },
    {
        letter: "R",
        color: "Grey"
    },
    {
        letter: "S",
        color: "Grey"
    },
    {
        letter: "T",
        color: "Grey"
    },
    {
        letter: "U",
        color: "Grey"
    },
    {
        letter: "V",
        color: "Grey"
    },
    {
        letter: "W",
        color: "Grey"
    },
    {
        letter: "X",
        color: "Grey"
    },
    {
        letter: "Y",
        color: "Grey"
    },
    {
        letter: "Z",
        color: "Grey"
    }
]

let colorKeyboard = ""
let breaker = "\n"
let stats = ""

function compileKeyboard(arr){
    colorKeyboard = ""
    arr.forEach(letter => {
        if(letter.color === "Grey"){
            colorKeyboard = colorKeyboard + " " + ` ${letter.letter} `.bgBlack
        } else if (letter.color === "Green") {
            colorKeyboard = colorKeyboard + " " + ` ${letter.letter} `.bgGreen.black
        } else if (letter.color === "Yellow") {
            colorKeyboard = colorKeyboard + " " + ` ${letter.letter} `.bgYellow.black
        } else {
            colorKeyboard = colorKeyboard + " " + ` ${letter.letter} `.gray
        }
    })
    
}

while (gCount < 5 && turns < 6) {
    gCount = 0;
    let i = 0;
    let objIndex
    let letterCopy
    printTest.forEach(letter => {
        letterCopy = letter.toUpperCase();
        let colorCode = code[i]
        if(colorCode === "B"){
            objIndex = abc.findIndex((obj => obj.letter === letterCopy));
            abc[objIndex].color = "Black"
            finalString = finalString + " " + ` ${letter} `.bgBlack.white
        } else if(colorCode === "Y") {
            objIndex = abc.findIndex((obj => obj.letter === letterCopy));
            abc[objIndex].color = "Yellow"
            finalString = finalString + " " + ` ${letter} `.bgYellow.black
        } else {
            objIndex = abc.findIndex((obj => obj.letter === letterCopy));
            abc[objIndex].color = "Green"
            finalString = finalString + " " + ` ${letter} `.bgGreen.black
            gCount++;
        }
        i++;
    })
    stats = stats + "\n" + finalString
    console.log(finalString);
    compileKeyboard(abc)
    console.log("\n")
    let colorBoard1 = colorKeyboard.substring(0, 261)
    let colorBoard2 = colorKeyboard.substring(261)
    console.log(colorBoard1)
    console.log(colorBoard2)
    turns++;
    if (gCount < 5 && turns < 6) {
        printTest = prompt("Enter word: ");
        while(printTest.length != 5) {
            printTest = prompt("Please enter a 5 letter word: ")
        }
        while(!list.includes(printTest)){
            printTest = prompt("Please enter a valid word: ")
        }
        let test = printTest;
        test = test.split("")
        printTest = printTest.split("")
        finalString = "";
        code = ReturnHints(word.split(""), test);
    }
    else if (gCount == 5) {
        console.log("Great");
        console.log(stats)
    } 
    else if (turns == 6) {
        console.log("The correct word is: ")
        console.log(" " + ` ${word[0]} `.bgRed + " " + ` ${word[1]} `.bgRed + " " + ` ${word[2]} `.bgRed + " " + ` ${word[3]} `.bgRed + " " + ` ${word[4]} `.bgRed)
        console.log ("Better Luck Next Time!");
        console.log(stats)
        again = prompt("Play again? (y/n)")
        if(again === "y"){
            clirdleGame()
        }
    }
}



function ReturnHints (wordle, test) {

let outString = [];
let i = 0;

//first remove the greens
for (i = 0; i < 5; i++) {
    if (wordle[i] == test[i]) {
        outString[i] = "G";
        wordle[i] = "0";
        test[i] = "0";
    }
    else outString[i] = "B";
}

i = 0;
test.forEach(letter => {
    if (letter != "0") { 
        let indices = findAllCharsInString(letter, wordle);
        if (indices.length == 0) {
            //black
            outString[i] = "B";
        }
        else if (indices.includes(i)){
            //green
            outString[i] = "G";
            wordle[i] = "0";
        }
        else {
            outString[i] = "Y";
            wordle[indices[0]] = "0";
        }
    }
    i++;   
})
    return outString;
}

function findAllCharsInString (letter, wordle) {
    var indices = [];
    for(var i=0; i<wordle.length;i++) {
        if (wordle[i] === letter) indices.push(i);
    }
    return indices;
 }
}

clirdleGame()
