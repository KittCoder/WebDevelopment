const targetDate = new Date('2024-02-19T18:00:00');

function updateCountdown() {
    const currentTime = new Date();

    // this is the difference in miliseconds (object returns miliseconds)
    const difference = targetDate - currentTime;

    // here we have to convert the difference
    const days = Math.floor(difference/(1000*60*60*24));
    const hours = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((difference % (1000 * 60 * 60))/ (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60))/ (1000));

    // update the display
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (difference <= 0) {
        clearInterval(interval);
        document.getElementById('timer').innerText = "The timer has expired";
    }
}

const interval = setInterval(updateCountdown, 1000);