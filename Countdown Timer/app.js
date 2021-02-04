const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const ValentDay = "14 Feb 2021";

function countdown() {
    const ValentDayDate = new Date(ValentDay);
    const currentDate = new Date();

    const totalSeconds = (ValentDayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


    console.log(days, hours, minutes, seconds);
}




countdown();