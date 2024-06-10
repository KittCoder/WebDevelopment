setInterval(() => {
    const hourID = document.getElementById('hour');
    const minuteID = document.getElementById('minute');
    const secondID = document.getElementById('second');
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let hr_rotation = 30 * hour + minutes / 2;
    let minute_rotation = 6 * minutes;
    let second_rotation = 6 * seconds;
    hourID.style.transform = `rotate(${hr_rotation}deg)`;
    minuteID.style.transform = `rotate(${minute_rotation}deg)`;
    secondID.style.transform = `rotate(${second_rotation}deg)`;
}, 1000); 