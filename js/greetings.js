const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

const message = getMessage();

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function getMessage() {
    const date = new Date();
    const hours = date.getHours();
    //morning : 05 ~ 12
    //afternoon : 12 ~ 18
    //evening : 18 ~ 22
    //night : 22 ~ 05
    if(hours >= 5 && hours < 12) {
        return "Good Morning!";
    } else if(hours >= 12 && hours < 18) {
        return "Good Afternoon!";
    } else if(hours >= 18 && hours < 22) {
        return "Good Evening.";
    } else if(hours >= 22 || hours < 5) {
        return "Good Night.";
    }
}

function paintGreetings(username) {
    greeting.innerText = `${message} ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
});