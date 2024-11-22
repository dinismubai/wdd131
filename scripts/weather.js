let temperature = 30;/*parseInt(document.getElementById("currenttemp").innerText);*/
let windspeed = 6;/*parseFloat(document.getElementById("speed").innerText);*/

let factor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);

if (temperature <= 10 && windspeed > 4.8) {
    document.getElementById("chill").innerHTML = Math.round(factor);
}
else {
    document.getElementById("chill").innerHTML = "N/A";
}