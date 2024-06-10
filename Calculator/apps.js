const display = document.getElementById('display');

function appendToDisplay(x) {
    display.value += x;
}

function clearDisplay() {
    display.value = '';
} 

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'Error';
    }
}