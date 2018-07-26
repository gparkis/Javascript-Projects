let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let milliseconds = document.getElementById('milliseconds');

let startbtn = document.getElementById('startBtn');
let pausebtn = document.getElementById('pauseBtn');
let stopbtn = document.getElementById('stopBtn');
let restartbtn = document.getElementById('restartBtn');

let setTime, currentTime, difference, timer=0, interval, mstime, sctime,
mntime, hrtime, numString, divisible;



/*------------------------------------------------------ */


const update = () => {
    currentTime = Date.now();
    difference = currentTime - setTime;
    setTime=currentTime;
    timer += difference;

    mstime = parseInt(((timer/1000)%1)*100);
    sctime = Math.floor(timer/1000);
    mntime = Math.floor(sctime/60);
    hrtime = Math.floor(mntime/60);



    milliseconds.innerHTML = twodigit(mstime);
    seconds.innerHTML = twodigit(processSixty(sctime));
    minutes.innerHTML = twodigit(processSixty(mntime));
    hours.innerHTML = twodigit(hrtime);
    
};

startbtn.addEventListener('click', ()=>{
    setTime = Date.now();
    interval=setInterval(update, 10); //this will run (custom function) function again every 10 milliseconds
});

pausebtn.addEventListener('click', ()=>{
    clearInterval(interval);
});
stopbtn.addEventListener('click', ()=>{
    clearInterval(interval);
    timer = 0;
});
restartbtn.addEventListener('click', ()=>{
    timer=0;
    update();
});

const twodigit = (number) => {
    numString = number.toString();
    if (numString.length <2) {
        return"0" + numString;
    } else {
        return numString;
    }
}

const processSixty = (number) => {
    divisible = Math.floor(number / 60);
    if (number/60 >= divisible) {
        return number - (60 * divisible);
    }
}