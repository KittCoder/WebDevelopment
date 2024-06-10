const answers = ['Yes', 'No', 'Absolutely', 'Absolutely not'];

function displayAnswer() {
    console.log('displayAnswer');
    let index = Math.floor(Math.random() * answers.length);
    let answer = answers[index];
    const answerCircle = document.getElementById('answerCircle');
    answerCircle.style.display = 'inline-block';
    answerCircle.innerHTML = '<br><br>' + answer;
}