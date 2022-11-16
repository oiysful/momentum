const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const todoContainer = document.querySelector("#todo-container");
const menu = document.getElementById("menu");

const savedUsername = localStorage.getItem(USERNAME_KEY);

const message = getMessage();

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    paintTodoContainer();
}

function getMessage() {
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 5 && hours < 12) {
        return "Good Morning!";
    } else if(hours >= 12 && hours < 18) {
        return "Good Afternoon!";
    } else if(hours >= 18 && hours < 22) {
        return "Good Evening.";
    } else {
        return "Good Night.";
    }
}

function paintGreetings(username) {
    greeting.innerText = `${message} ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintTodoContainer() {
    todoContainer.classList.remove(HIDDEN_CLASSNAME);
    menu.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null) {
    menu.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener(COMMON_EVENTS.SUBMIT, onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    paintTodoContainer();
}