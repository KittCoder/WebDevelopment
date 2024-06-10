// Memory Game
// 2/28/2024

// this event l
document.addEventListener('DOMContentLoaded',() => {
    const cardArray = [
        {
            name: 'fries',
            img: 'Images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'Images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'Images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'Images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'Images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'Images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'Images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'Images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'Images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'Images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'Images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'Images/hotdog.png'
        }
    ];

    cardArray.sort(() => {
        return Math.random() - 0.5;
    })

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    const msg = document.querySelector('#msg')

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i=0; i < cardArray.length;i++) {
            card = document.createElement('img')
            card.setAttribute('src','./Images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const cardOneId = cardsChosenId[0];
        const cardTwoId = cardsChosenId[1];

        if (cardOneId == cardTwoId) {
            cards[cardOneId].setAttribute('src','Images/blank.png')
            msg.textContent = 'You have clicked on the same card!';
            // how do I keep the flexbox in place, rather than have it move when the text is removed?
            setTimeout(() => {
                msg.textContent = ' ';
            }, 3000)
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            cards[cardOneId].setAttribute('src','Images/white.png')
            cards[cardTwoId].setAttribute('src','Images/white.png')
            cards[cardOneId].removeEventListener('click', flipCard)
            cards[cardTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            msg.textContent = 'You have found a match!';
            setTimeout(() => {
                msg.textContent = ' ';
            }, 3000)
        }
        else {
            cards[cardOneId].setAttribute('src','Images/blank.png')
            cards[cardTwoId].setAttribute('src','Images/blank.png')
            msg.textContent = 'Sorry, try again!';
            setTimeout(() => {
                msg.textContent = ' ';
            }, 3000)

        }

        cardsChosen = [];
        cardsChosenId = [];

        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            blink(resultDisplay, "Congratulations! You got them all!")
        }

    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        console.log('clicked');
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    // how do I add blinking? I think the loop iterates over the 500ms...
    function blink(res, mes) {
        let x = res.textContent;
        for (let i = 0; i < 9; i++) {
            if (i%2 == 1) {
                setTimeout(500, ()=> {
                    x = mes
                })
            }
            else {
                setTimeout(500, ()=> {
                    x = ' '
                })
            }
        }
    }

    createBoard();

}) 

// How do I add some padding to the flexbox?