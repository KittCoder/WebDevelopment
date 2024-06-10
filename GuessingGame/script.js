// Guessing Game Javascript
// 2024 - 02 - 05


// pick a number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// get handles to html elements
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

// local variables
let guessCount = 1;
let resetButton;

// check the user number against the random number
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:"
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!"
        lastResult.getElementsByClassName.backgroundColor = "green";
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!! GAME OVER !!!"
        lowOrHi.textContent = '';
        setGameOver();
    } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high";
    } else {
        lastResult.textContent = "Wrong!"
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!"
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

// listen for click events from the submit button and run the check guess function
guessSubmit.addEventListener("click",checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("Button");
    resetButton.textContent = "Start New Game?";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultsParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = ''
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}