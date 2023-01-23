let dataTime = new Date("Dec 31, 2023 23:59:59 ").getTime();
let countes = setInterval(() => {
  let dataNew = new Date().getTime();
  let dateDiff = dataTime - dataNew;

  let deys = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutis = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secods = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = deys < 10 ? `0${deys}` : deys;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML =
    minutis < 10 ? `0${minutis}` : minutis;
  document.getElementById("seconds").innerHTML =
    secods < 10 ? `0${secods}` : secods;
  if (dateDiff < 0) {
    clearInterval(countes);
  }
}, 1000);
