var playMusik = document.getElementById("musik");
const firstPageView = document.getElementById("first-content");
const secondPageView = document.getElementById("second-content");
const wrapperView = document.getElementById("wrapper");
const contentView = document.getElementById("content");
function firstPage() {
  playMusik.play();
  firstPageView.style.display = "none";
  secondPageView.style.display = "flex";
  wrapperView.style.height = "1400px";
}
function getTimeRemaining(endtime) {
  const total = Date.parse("2023-10-15T14:00:00") - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector(".days");
  const hoursSpan = clock.querySelector(".hours");
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      const jam = document.getElementById("clockdiv");
      jam.innerHTML = "Acara telah dimulai!";
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock("clockdiv", deadline);

document.getElementById("maps-logo").addEventListener("click", function () {
  window.open(
    "https://www.google.com/maps/place/Jl.+Mengwi+Gulingan,+Gulingan,+Kec.+Mengwi,+Kabupaten+Badung,+Bali+80351/@-8.5449137,115.1770329,21z/data=!4m15!1m8!3m7!1s0x2dd23b8e6194e581:0x3a5676ded7efc4b3!2sJl.+Mengwi+Gulingan,+Gulingan,+Kec.+Mengwi,+Kabupaten+Badung,+Bali+80351!3b1!8m2!3d-8.5452944!4d115.1793628!16s%2Fg%2F11b62sc1ny!3m5!1s0x2dd23b8e2762b5dd:0x98e7c930fcd6cf83!8m2!3d-8.544846!4d115.1770818!16s%2Fg%2F11ghtgvvfw?entry=ttu",
    "_blank"
  );
});
