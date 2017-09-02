const hangmanImage = document.getElementById('hangmanPicture')
const paraAbove = document.getElementById('abovePic')
const hangmanLivesSection = document.getElementById('belowPic');
const winSec = document.getElementById('winSection');
const guessedWrongSection = document.getElementById('guessedWrong');
const entryBoxID = document.getElementById('entryBoxID')
const sourceHangmanPics = "./pics/hangman/";

let hangmanLives = 7;
let hangmanNumRight = 0;
let hangmanNumWrong = 0;
let hangmanGuessesMade = 0;
let chosenWord = "";
let hangmanCorrectArray = [];
let hangmanGuessArray = [];
let hangmanGuessString = "";
let hangmanWrongGuesses = [];

let easyDifficultyHangman = 1;
let normalDifficultyHangman = 0;
let hardDifficultyHangman = 0;

let hangmanWordBatch = ["please work", "alexandra", "international", "university", "john", "ben", "leon", "pocketboy", "eastenders", "elliott", "hangman",];

function setToEasyHangman() {
    easyDifficultyHangman = 1;
    normalDifficultyHangman = 0;
    hardDifficultyHangman = 0;
    startUp();
}
function setToNormalHangman() {
    easyDifficultyHangman = 0;
    normalDifficultyHangman = 1;
    hardDifficultyHangman = 0;
    startUp();
}
function setToHardHangman() {
    easyDifficultyHangman = 0;
    normalDifficultyHangman = 0;
    hardDifficultyHangman = 1;
    startUp();
}

function isLetter(a) {
    return a.toLowerCase() != a.toUpperCase();
}

function genWordArray(input) {
    return input.split('');
}

function randomNumberGenerator(upto) {
    return Math.floor(Math.random() * upto);
}

function chooseRandWord() {
    let tmp = "";
    if (easyDifficultyHangman === 1) {
        do {
            tmp = hangmanWordBatch[randomNumberGenerator(hangmanWordBatch.length)]
        } while (tmp.length < 9)
    }
    if (normalDifficultyHangman === 1) {
        do {
            tmp = hangmanWordBatch[randomNumberGenerator(hangmanWordBatch.length)]
        } while (tmp.length > 7 && tmp.length < 5)
    }
    if (hardDifficultyHangman === 1) {
        do {
            tmp = hangmanWordBatch[randomNumberGenerator(hangmanWordBatch.length)]
        } while (tmp.length > 5)
    }
    return tmp;
}

function startUp() {
    chosenWord = chooseRandWord();
    hangmanCorrectArray = genWordArray(chosenWord);
    hangmanGuessArray = genWordArray(blanksGen(chosenWord));
    InitialisehangmanLivesSection();
    updateGuessSection();
    reset();
}

function reset() {
    hangmanLives = 7;
    hangmanNumRight = 0;
    hangmanNumWrong = 0;
    hangmanImage.src = sourceHangmanPics + hangmanNumWrong + ".jpg";
    hangmanWrongGuesses = [];
    winSec.innerHTML = "";
    guessedWrongSection.innerHTML = "Wrong Guesses:";
    entryBoxID.value = "";
}

function checkVictory() {
    let temp = hangmanCorrectArray.length == hangmanGuessArray.length
        && hangmanCorrectArray.every((v, i) => v === hangmanGuessArray[i]);

    if (temp === true && hangmanLives > 0) {
        winSec.innerHTML = "You win!";
    }
    if (temp === false && hangmanLives <= 0) {
        winSec.innerHTML = "You lose!";
    }
    if (temp === true && hangmanLives <= 0) {
        winSec.innerHTML = "Took you long enough!"
    }
}

function blanksGen(input) {
    let blankString = "";
    hangmanCorrectArray.forEach((c) => {
        if (isLetter(c)) {
            blankString += "_";
        } else {
            blankString += " ";
        }
    })
    return blankString;
}

function joinArray(input) {
    return input.join('');
}

function guess(guessedLetter) {
    if (!isLetter(guessedLetter)) {
        window.alert("Input a letter!")
        return 0;
    }
    let loseLife = true;
    for (let i = 0; i < hangmanCorrectArray.length; i++) {
        if (guessedLetter === hangmanCorrectArray[i]) {
            hangmanGuessArray[i] = guessedLetter.valueOf();
            hangmanNumRight++;
            loseLife = false;
        }
    }
    if (loseLife) {
        hangmanWrongGuesses.push(guessedLetter)
        hangmanLives--;
        hangmanNumWrong++;
    }
    updateGuessedWrong();
    updateGuessSection();
    updatehangmanImage();
    checkVictory();
    entryBoxID.value = "";
}

function updateGuessSection() {
    updatehangmanGuessString();
    paraAbove.innerHTML = hangmanGuessString;
}

function InitialisehangmanLivesSection() {
    hangmanLivesSection.innerHTML += hangmanLives;
}

function updatehangmanGuessString() {
    hangmanGuessString = joinArray(hangmanGuessArray)
    hangmanLivesSection.innerHTML = "hangmanLives Left: " + hangmanLives;
}

function updateGuessedWrong() {
    guessedWrongSection.innerHTML = "Wrong guesses:\n" + hangmanWrongGuesses;
}

function updatehangmanImage() {
    if (hangmanLives > -1) {
        hangmanImage.src = sourceHangmanPics + hangmanNumWrong + ".jpg";
    } else {
        hangmanImage.src = sourceHangmanPics + 7 + ".jpg";
    }
}