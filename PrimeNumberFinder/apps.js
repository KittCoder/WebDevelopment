// caching the DOM

const submit = document.getElementById('submitID');
const clear = document.getElementById('clearID');

function checkPrime(num) {
    // for loop w/ repeated division
    if (num <= 1) {
        return false;
    }
    for (let i=2; i<=Math.sqrt(num);i++) {
        if (num%i == 0) {
            return false;
        }
    }

    return true;
}

submit.addEventListener('click', function() {
    let number = document.getElementById('inputID').value;
    let primeCheck = checkPrime(number);
    if (primeCheck==true) {
        document.getElementById('resultID').innerHTML = number + ' is a prime number.';
    }
    else {
        document.getElementById('resultID').innerHTML = number + ' is not a prime number.';
    }
})

clear.addEventListener('click', ()=> {
    document.getElementById('inputID').value = '';
    document.getElementById('resultID').innerHTML = 'Result';
})

// HOMEWORK - FIX STYLING IN CSS