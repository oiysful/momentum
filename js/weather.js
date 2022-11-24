const API_KEY = "370a98e4f7ffa8b95366d79932d3c782";

function getWeatherIcon(apiIcon) {
    if (apiIcon === "01d" || apiIcon === "01n") {
        return `./img/weather/${apiIcon}.png`;
    } else {
        return `./img/weather/${apiIcon.substr(0, 2)}.png`;
    }
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherIcon = document.querySelector("#weather img");
        const weatherName = document.querySelector("#weather-name");
        const weatherTemp = document.querySelector("#weather-temp");
        const city = document.querySelector("#weather-city");
        const temp = parseFloat(data.main.temp);
        
        weatherIcon.src = getWeatherIcon(data.weather[0].icon);
        weatherName.innerText = `${data.weather[0].main}`;
        weatherTemp.innerText = `${Math.round(temp)} ℃`;
        city.innerText = data.name;
    });
}

function onGeoErr() {
    // alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);