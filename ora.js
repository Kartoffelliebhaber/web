"use strict";

let kulso = document.getElementById("kulso");
kulso.appendChild(masodperc);
kulso.appendChild(perc);
kulso.appendChild(ora);

for (let i = 0; i < 60; i++) {
  let percTarto = document.createElement("div");
  let percPotty = document.createElement("div");
  percTarto.appendChild(percPotty);
  percTarto.setAttribute("class", "percTarto");
  percPotty.setAttribute("class", "percPotty");
  percTarto.style.transform = `rotate(${6 * i}deg)`;
  percTarto.style.transformOrigin = "bottom";
  kulso.appendChild(percTarto);
}

function forgat() {
  setInterval(korbe, 1000);
}

function korbe() {
  let ido = new Date();
  let hour = ido.getHours();
  let minute = ido.getMinutes();
  let second = ido.getSeconds();
  console.log(hour, minute, second);
  ora.style.transform = `rotate(${hour * 30}deg)`;
  ora.style.transformOrigin = "bottom";
  perc.style.transform = `rotate(${minute * 6}deg)`;
  perc.style.transformOrigin = "bottom";
  masodperc.style.transform = `rotate(${second * 6}deg)`;
  masodperc.style.transformOrigin = "bottom";
}
