const API_KEY = "370a98e4f7ffa8b95366d79932d3c782";
const weather = document.getElementById("weather");
const infos = document.querySelector("#weather-infos");

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
        const weatherIcon = document.createElement("img");
        weatherIcon.src = `./img/weather/${data.weather[0].icon}.png`;
        weather.insertBefore(weatherIcon, weather.firstChild);

        const weatherName = document.createElement("li");
        weatherName.id = "weather-name";
        weatherName.innerText = `${data.weather[0].main}`;
        // weatherName.classList.add(HIDDEN_CLASSNAME);
        
        const weatherTemp = document.createElement("li");
        weatherTemp.id = "weather-temp";
        weatherTemp.innerText = `${(data.main.temp).toFixed(1)} ℃`;
        // weatherTemp.classList.add(HIDDEN_CLASSNAME);

        const weatherCity = document.createElement("li");
        weatherCity.id = "weather-city";
        weatherCity.innerText = data.name;
        // weatherCity.classList.add(HIDDEN_CLASSNAME);
        
        infos.appendChild(weatherName);
        infos.appendChild(weatherTemp);
        infos.appendChild(weatherCity);
    });
}

function onGeoErr() {
    console.log("Get User's GeoLocation Failed.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

weather.addEventListener(COMMON_EVENTS.MOUSE_ENTER, item => {
    const icon = item.target.firstChild;
    icon.classList.add(HIDDEN_CLASSNAME);

    infos.classList.remove(HIDDEN_CLASSNAME);
});
weather.addEventListener(COMMON_EVENTS.MOUSE_LEAVE, item => {
    const icon = item.target.firstChild;
    icon.classList.remove(HIDDEN_CLASSNAME);

    infos.classList.add(HIDDEN_CLASSNAME);
});