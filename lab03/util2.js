async function fetchData1() {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.73&lon=-73.69&appid=4063b128d8e4f4940b7e3825e47f38d4&units=imperial"); // replace with https://api.openweathermap.org/data/2.5/weather?lat=42.73&lon=-73.69&appid=4063b128d8e4f4940b7e3825e47f38d4&units=imperial when ready
        if(!response.ok) {
            throw new Error("Could not fetch resource!");
        }

        const data = await response.json();
        document.dispatchEvent(new CustomEvent("weatherDataReady", {detail: data}));
    }

    catch(error) {
        console.error(error);
    }
}

async function fetchData2() {
    try {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/42.7278%2C-73.6874/today?unitGroup=us&elements=moonphase&include=days%2Calerts&key=78TL93DR6FF3D2RXWPMJMQ4XW&contentType=json"); // replace with https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/42.7278%2C-73.6874/today?unitGroup=us&elements=moonphase&include=days%2Calerts&key=78TL93DR6FF3D2RXWPMJMQ4XW&contentType=json when ready
        if(!response.ok) {
            throw new Error("Could not fetch resource!");
        }

        const data = await response.json();
        document.dispatchEvent(new CustomEvent("moonphaseDataReady", {detail: data}));
    }

    catch(error) {
        console.error(error);
    }
}

async function fetchData3() {
    try {
        const response = await fetch("http://colormind.io/api/", {
            method: "POST",
            body: JSON.stringify({ model: "default" }),
        }); 
        if(!response.ok) {
            throw new Error("Could not fetch resource!");
        }
        const data = await response.json();
        document.dispatchEvent(new CustomEvent("colorPaletteReady", {detail: data}));
    }

    catch(error) {
        console.error(error);
    }
}

function toCardinal(degrees) {
    // +/- 11.25
    const offset = 11.25;
    if(degrees >= 337.5+offset && degrees <= 0+offset) { return "N"; }
    else if(degrees >= 0+offset && degrees <= 22.5+offset) { return "NNE"; }
    else if(degrees >= 22.5+offset && degrees <= 45+offset) { return "NE"; }
    else if(degrees >= 45+offset && degrees <= 67.5+offset) { return "ENE"; }
    else if(degrees >= 67.5+offset && degrees <= 90+offset) { return "E"; }
    else if(degrees >= 90+offset && degrees <= 112.5+offset) { return "ESE"; }
    else if(degrees >= 112.5+offset && degrees <= 135+offset) { return "SE"; }
    else if(degrees >= 135+offset && degrees <= 157.5+offset) { return "SSE"; }
    else if(degrees >= 157.5+offset && degrees <= 180+offset) { return "S"; }
    else if(degrees >= 180+offset && degrees <= 202.5+offset) { return "SSW"; }
    else if(degrees >= 202.5+offset && degrees <= 225+offset) { return "SW"; }
    else if(degrees >= 225+offset && degrees <= 247.5+offset) { return "WSW"; }
    else if(degrees >= 247.5+offset && degrees <= 270+offset) { return "W"; }
    else if(degrees >= 270+offset && degrees <= 292.5+offset) { return "WNW"; }
    else if(degrees >= 292.5+offset && degrees <= 315+offset) { return "NW"; }
    else if(degrees >= 315+offset && degrees <= 337.5+offset) { return "NNW"; }
}

function getWindArrow(dir) {
    if(dir == "N") { return "arrows/N.svg"; }
    if(dir == "NNE") { return "arrows/NNE.svg"; }
    if(dir == "NE") { return "arrows/NE.svg"; }
    if(dir == "ENE") { return "arrows/ENE.svg"; }
    if(dir == "E") { return "arrows/E.svg"; }
    if(dir == "ESE") { return "arrows/ESE.svg"; }
    if(dir == "SE") { return "arrows/SE.svg"; }
    if(dir == "SSE") { return "arrows/SSE.svg"; }
    if(dir == "S") { return "arrows/S.svg"; }
    if(dir == "SSW") { return "arrows/SSW.svg"; }
    if(dir == "SW") { return "arrows/SW.svg"; }
    if(dir == "WSW") { return "arrows/WSW.svg"; }
    if(dir == "W") { return "arrows/W.svg"; }
    if(dir == "WNW") { return "arrows/WNW.svg"; }
    if(dir == "NW") { return "arrows/NW.svg"; }
    if(dir == "NNW") { return "arrows/NNW.svg"; }
}

function getWeatherEmoji(code) {
    if(code >= 200 && code < 300) { return "⛈️"; }
    if(code >= 300 && code < 400) { return "🌧️"; }
    if(code >= 500 && code < 510) { return "🌧️"; }
    if(code == 511) { return "🌨️"; }
    if(code >= 520 && code < 600) { return "🌧️"; }
    if(code >= 600 && code < 700) { return "❄️"; }
    if(code >= 700 && code < 762) { return "🌫️"; }
    if(code == 762) { return "🌋"; }
    if(code == 771) { return "🌨️"; }
    if(code == 781) { return "🌪️"; }
    if(code == 800) { return "☀️"; }
    if(code == 801) { return "🌤️"; }
    if(code == 802) { return "⛅"; }
    if(code == 803) { return "🌥️"; }
    if(code == 804) { return "☁️"; }

}

function getMoonPhaseEmoji(phase) {
    if(phase == 0 || phase == 1) { return "🌑"; } // New Moon
    else if(phase > 0 && phase < 0.25) { return "🌒"; } // Waxing Crescent
    else if(phase == 0.25) { return "🌓"; } // First Quarter
    else if(phase > 0.25 && phase < 0.5) { return "🌔"; } // Waxing Gibbous
    else if(phase == 0.50) { return "🌕"; } // Full Moon
    else if(phase > 0.50 && phase < 0.75) { return "🌖"; } // Waning Gibbous
    else if(phase == 0.75) { return "🌗"; } // Last Quarter
    else if(phase > 0.75 && phase < 1) { return "🌘"; } // Waning Crescent
}

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


fetchData1();
fetchData2();
fetchData3();