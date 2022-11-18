const nowDate = document.querySelector("h2#now-date");
const clock = document.querySelector("h1#clock");
const second = document.querySelector("h3#second");

function getNowDate() {
    const date = new Date();
    const now = date.toLocaleString("en-us", {
        weekday: "short",
        month: "short",
        day: "numeric"
    });
    nowDate.innerText = now;
}   

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}`;
    second.innerText = `${seconds}`;
}

getNowDate();
getClock();
setInterval(getClock, 333);

nowDate.classList.remove(HIDDEN_CLASSNAME);
clock.classList.remove(HIDDEN_CLASSNAME);
second.classList.remove(HIDDEN_CLASSNAME);