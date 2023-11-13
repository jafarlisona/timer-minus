const input = document.querySelector("input");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");
const timer = document.querySelector("h2");
let minutes = 0; 
let seconds = 0; 
let time;

startBtn.onclick = () => {
  clearInterval(time); 
  minutes = +input.value;

  time = setInterval(() => {
    let timerContent = "";

    if (minutes >= 10) {
      timerContent += `${minutes}:`;
    } else {
      timerContent += `0${minutes}:`;
    }

    if (seconds >= 10) {
      timerContent += `${seconds}`;
    } else {
      timerContent += `0${seconds}`;
    }

    timer.textContent = timerContent;

    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        clearInterval(time);
      }
    }
  }, 1000);
};

stopBtn.onclick = () => {
  clearInterval(time);
};

resetBtn.onclick = () => {
  minutes = 0;
  seconds = 0;
  timer.textContent = "00:00";
  clearInterval(time);
};
