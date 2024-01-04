let value_millisecond = document.querySelector("#millisecond");
let value_hour = document.querySelector("#hour");
let value_minute = document.querySelector("#minute");
let value_second = document.querySelector("#second");
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
  value_hour.style.color = "black";
  value_minute.style.color = "black";
  value_second.style.color = "black";
  value_millisecond.style.color = "black"
  lapButton.classList.remove("block")
  stopButton.classList.remove("block");
});
stopButton.addEventListener('click', function (e) {
  clearInterval(int)
  value_hour.style.color = "red";
  value_minute.style.color = "red";
  value_second.style.color = "red";
  value_millisecond.style.color = "red";
  startButton.classList.remove("block");
  stopButton.classList.add("block");
});
resetButton.addEventListener('click', function (e) {
  clearInterval(int)
  startButton.classList.remove("block");
  value_hour.innerText = "00";
  value_minute.innerText = "00";
  value_second.innerText = "00";
  value_millisecond.innerText = "00";
  value_hour.style.color = "black";
  value_minute.style.color = "black";
  value_second.style.color = "black";
  value_millisecond.style.color = "black"
  lapButton.classList.add("block")
  stopButton.classList.remove("block");
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  lap = 0;
  Lap_Message.innerHTML = ` `;
});
lapButton.addEventListener('click', function () {
  lap++
  Lap_Message.innerHTML += `<p> Lap ${lap} :: ${hour} : ${minute} : ${second} : ${millisecond}</p>`;
});
const stopWatch = function () {
  millisecond += 10;
  if (millisecond == 1000) {
    millisecond = 0;
    second++;
    if (second == 59) {
      second = 0;
      minute++
      if (minute == 59) {
        minute = 0;
        hour++;
      }
    }
  }
  let hours = hour < 10 ? "0" + hour : hour;
  let minutes = minute < 10 ? "0" + minute : minute;
  let seconds = second < 10 ? "0" + second : second;
  let milliseconds = millisecond < 100 ? "0" + "0" + millisecond : millisecond;
  value_hour.innerText = hours;
  value_minute.innerText = minutes;
  value_second.innerText = seconds;
  value_millisecond.innerText = milliseconds;

}

