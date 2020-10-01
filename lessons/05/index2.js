console.log("main");

// setTimeout(() => {
//   console.log("Затриманий виклик");
// }, 2000);



// let count = 10;

// const timerEl = document.querySelector("#timer");
// timerEl.innerHTML = count;
// // console.log(timerEl);


// const setIntervalId = setInterval(() => {
//   count --;
//   timerEl.innerHTML = count;
//   if (count <= 0) {
//     clearInterval(setIntervalId);
//   }
// }, 1000);

// console.log({setIntervalId});

let seconds = 0;
let miliSeconds = 0;


const secondsBlock = document.querySelector("#secondsBlock");
const miliSecondsBlock = document.querySelector("#miliSecondsBlock");
const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const resetButton = document.querySelector("#resetButton");

secondsBlock.innerHTML = seconds;
miliSecondsBlock.innerHTML = miliSeconds;

let setIntervalId = null;
let isPause = false;

startButton.addEventListener("click",(event) => {
  if (setIntervalId) {
    return;
  }

  setIntervalId = setInterval(() => {
    if (isPause) {
      return;
    }

    miliSeconds++;
    if (miliSeconds%10 ==0) {
      seconds++;
      miliSeconds = 0;
    }
    secondsBlock.innerHTML = seconds;
    miliSecondsBlock.innerHTML = miliSeconds;
  }, 100);
});

stopButton.addEventListener("click",(event) => {
  isPause = !isPause;
});

resetButton.addEventListener("click",(event) => {
  clearInterval(setIntervalId);
  setIntervalId = null;
  seconds = 0;
  miliSeconds = 0;
  secondsBlock.innerHTML = seconds;
  miliSecondsBlock.innerHTML = miliSeconds;
});



