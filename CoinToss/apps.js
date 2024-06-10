let heads = 0;
let tails = 0;

function FlipCoin(coin) {
    // cache the dom
    document.getElementById('result').innerText = coin;
    // update the spans
    document.getElementById('totalHeads').innerText = heads;
    document.getElementById('totalTails').innerText = tails;
}

function CoinToss() {
    // generate the result of a coin toss
    let flip = Math.floor(Math.random() * 2);
    // increment the total heads and total tails
    if (flip == 0) {
        heads++;
        FlipCoin('Heads');
    }
    else {
        tails++;
        FlipCoin('Tails');
    }
}