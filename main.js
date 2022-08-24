let newYear = new Date("Dec 31, 2022 23:59:59");

let counter = setInterval(() => {
    let dateNow = new Date().getTime()
    let dateDiff = newYear - dateNow

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) 
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : `${days}`;
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : `${seconds}`;
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000))
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : `${seconds}`;

    if (days < 0) {
        clearInterval(counter)
        console.log("Happy New Year")
    }
}, 1000);
