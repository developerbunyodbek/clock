const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const btn = document.querySelector("#checkbox");
const clockHour = document.querySelector(".clock-hour")
const clockMinute = document.querySelector(".clock-minute")
const clockSecond = document.querySelector(".clock-second")

setInterval(() => {
  let date = new Date();
  let hourTime = date.getHours();
  let minuteTime = date.getMinutes();
  let secondTime = date.getSeconds();

  let hourRotation = 30 * hourTime + minuteTime / 2;
  let minuteRotation = 6 * minuteTime;
  let secondRotation = 6 * secondTime;

  if (hourTime < 10) {
    hourTime = "0" + hourTime;
  }
  if (minuteTime < 10) {
    minuteTime = "0" + minuteTime;
  }
  if (secondTime < 10) {
    secondTime = "0" + secondTime;
  }

  clockHour.textContent = hourTime;
  clockMinute.textContent = minuteTime;
  clockSecond.textContent = secondTime;

  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});