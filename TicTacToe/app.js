// Tic Tac Toe
// 2024 - 04 - 08

// cache the DOM
let playerText = document.getElementById('playerText');
let restartBTN = document.getElementById('restartBTN');

// Array.from() converts HTML collection into an array
let boxes = Array.from(document.getElementsByClassName('box'));

let winningIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

// setiup some variables
const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer = X_TEXT;

// Array indexed from 0 - 8, filled with null values
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click',boxClicked));
}

function boxClicked(e) {
    const id = e.target.id;

    if(!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        //check to see if there is a winning situation
        if (playerHasWon() !== false) {
            playerText.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon();

            winning_blocks.map(box => boxes[box].style.backgroundColor=winningIndicator);
            return;
        }


        // switches current player from what they are now
        // ternary if statement
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const wincondition of winningCombos) {
        let [a,b,c] = wincondition;

        if (spaces[a] && (spaces[a] == spaces[b]) && (spaces[a] == spaces[c])) {
            return [a,b,c];
        }
    }
    return false;
}

restartBTN.addEventListener('click',restart);

function restart() {
    spaces.fill(null);
    boxes.forEach(box => {
        box.innerHTML = '';
        box.style.backgroundColor = '';
    })

    playerText.innerHTML = 'Tic Tac Toe';
    currentPlayer = X_TEXT;
}

// run the game
startGame();