let result = document.querySelector("#display");
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let resetButton = document.querySelector("#reset");
let lapButton = document.querySelector("#lap");
let Lap_Message = document.querySelector("#message")
let int = 0;
let lap = 0;
let [hour, minute, second, millisecond] = [0, 0, 0, 0]
startButton.addEventListener('click', function (e) {
  if (int !== null) {
    clearInterval(int)
  }
  startButton.classList.add("block");
  int = setInterval(stopWatch, 10);
  result.style.color = "black";
  lapButton.classList.remove("block")
  stopButton.classList.remove("block");
});
stopButton.addEventListener('click', function (e) {
  clearInterval(int)
  result.style.color = "red";
  startButton.classList.remove("block");
  stopButton.classList.add("block");
});
resetButton.addEventListener('click', function (e) {
  clearInterval(int)
  startButton.classList.remove("block");
  result.innerText = `00 : 00 : 00 : 00`;
  result.style.color = "black";
  lapButton.classList.add("block")
  stopButton.classList.remove("block");
  Lap_Message.style.display = "none";
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  lap = 0;
  Lap_Message.innerHTML = ` `;
});
lapButton.addEventListener('click', function () {
  lap++;
  Lap_Message.style.display = "block"; 
  Lap_Message.innerHTML += `<p> Lap ${lap} :: ${hour} : ${minute} : ${second} : ${millisecond}</p>`;
});
const stopWatch = function () {
  millisecond += 1;
  if (millisecond == 100) {
    millisecond = 0;
    second++;
    if (second == 60) {
      second = 0;
      minute++
      if (minute == 60) {
        minute = 0;
        hour++;
      }
    }
  }
  let hours = hour < 10 ? "0" + hour : hour;
  let minutes = minute < 10 ? "0" + minute : minute;
  let seconds = second < 10 ? "0" + second : second;
  let milliseconds = millisecond < 10 ? "0" + millisecond : millisecond;
  result.innerText = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;

}

