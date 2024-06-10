function SayHello() {
    // get user input
    let value = document.getElementById('username').value;
    // get a handle to the output area
    let output = document.getElementById('output');
    // write a message to the output area
    output.innerText = `Hello ${value}!`;
}