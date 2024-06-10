// Rock Paper Scissors
// 2024-04-01

// Caching the DOM (pulling in resources needed in js)
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");

const result_p = document.querySelector(".result > p"); // special syntax for specific items in a class
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomIndex = Math.floor(Math.random() * 3)
    return  choices[randomIndex];
}

function convertToWord(choice) {
    if (choice === 'r') return "Rock";
    if (choice === 'p') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserFont = 'user'.fontsize(3).sup()
    const smallCompFont = 'comp'.fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserFont} beats ${convertToWord(computerChoice)}${smallCompFont}}. You win!`
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400)
}

function lose(userChoice, computerChoice) {
    const smallUserFont = 'user'.fontsize(3).sup()
    const smallCompFont = 'comp'.fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice);

    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserFont} loses to ${convertToWord(computerChoice)}${smallCompFont}`
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400)
}

function draw(userChoice, computerChoice) {
    const smallUserFont = 'user'.fontsize(3).sup()
    const smallCompFont = 'comp'.fontsize(3).sup()
    const userChoice_div = document.getElementById(userChoice)

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserFont} equals to ${convertToWord(computerChoice)}${smallCompFont}. Draw...`
    userChoice_div.classList.add('gray-glow')
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
        default: // do anything that is not covered by the above
            console.log('I should never see this message!')

    }
}

function main() {
    rock_div.addEventListener('click', () => {
        game("r");
    })

    paper_div.addEventListener('click', () => {
        game("p");
    })

    scissors_div.addEventListener('click', () => {
        game("s");
    })
}

main();