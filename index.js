setInterval(() => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    hrot = 30 * hours + minutes / 2;
    mrot = 6 * minutes;
    srot = 6 * seconds;
    myHours.style.transform = `rotate(${hrot}deg)`;
    myMinutes.style.transform = `rotate(${mrot}deg)`;
    mySeconds.style.transform = `rotate(${srot}deg)`;
}, 1000);