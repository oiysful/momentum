const menuBtn = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const hiddenMenu = document.querySelector("#hidden-menu");
const editNameForm = document.querySelector("#edit-name-form");
const editNameInput = document.querySelector("#edit-name-input");
const menuItems = hiddenMenu.querySelectorAll("li");

const logoutBtn = document.getElementById("logout");
const editNameBtn = document.getElementById("edit-name");
const changeBgBtn = document.getElementById("change-bg");


function expandMenu() {
    menuBtn.style.width = "12em";
    menuBtn.style.height = "8em";
    menuBtn.style.boxShadow = "1px 1px 5px rgb(32, 32, 32)";

    hamburger.style.width = "12em";
    hamburger.style.height = "8em";
    hamburger.style.backgroundColor = "transparent";
    
    hamburger.classList.add(HIDDEN_CLASSNAME);
    hiddenMenu.classList.remove(HIDDEN_CLASSNAME);
    menuItems.forEach(item => item.style.fontSize = "1em");
}

function collapseMenu() {
    menuBtn.style.width = "1.8em";
    menuBtn.style.height = "1.5em";
    menuBtn.style.boxShadow = "none";
    
    hamburger.style.width = "1.8em";
    hamburger.style.height = "2px";
    hamburger.style.backgroundColor = "whitesmoke";
    
    hamburger.classList.remove(HIDDEN_CLASSNAME);
    hiddenMenu.classList.add(HIDDEN_CLASSNAME);
    editNameForm.classList.add(HIDDEN_CLASSNAME);
    menuItems.forEach(item => item.style.fontSize = "0");
}

function menuItemMouseOn(item) {
    const keyframe = item.type === COMMON_EVENTS.MOUSE_ENTER ? ["transparent", "rgba(245, 245, 245, 0.4)"]
                                                             : ["rgba(245, 245, 245, 0.4)", "transparent"];

    const selected = document.getElementById(item.target.id);
    selected.animate(
        {
            backgroundColor: keyframe
        },
        COMMON_ANIMATE_PROPERTY
    )
}

function logout() {
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
}

function editName() {
    const editNameInput = editNameForm.querySelector("#edit-name-input");
    editNameForm.classList.remove(HIDDEN_CLASSNAME);
    editNameInput.focus();

    hiddenMenu.classList.add(HIDDEN_CLASSNAME);

    menuBtn.style.width = "14em";
    menuBtn.style.height = "6em";
}

function editNameSubmit(event) {
    event.preventDefault();
    collapseMenu();
    username = editNameInput.value;
    editNameInput.value = "";
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

menuBtn.addEventListener(COMMON_EVENTS.MOUSE_ENTER, expandMenu);
menuBtn.addEventListener(COMMON_EVENTS.MOUSE_LEAVE, collapseMenu);

logoutBtn.addEventListener(COMMON_EVENTS.MOUSE_ENTER, menuItemMouseOn);
logoutBtn.addEventListener(COMMON_EVENTS.MOUSE_LEAVE, menuItemMouseOn);
logoutBtn.addEventListener(COMMON_EVENTS.CLICK, logout);

editNameBtn.addEventListener(COMMON_EVENTS.MOUSE_ENTER, menuItemMouseOn);
editNameBtn.addEventListener(COMMON_EVENTS.MOUSE_LEAVE, menuItemMouseOn);
editNameBtn.addEventListener(COMMON_EVENTS.CLICK, editName);

editNameForm.addEventListener(COMMON_EVENTS.SUBMIT, editNameSubmit);

changeBgBtn.addEventListener(COMMON_EVENTS.MOUSE_ENTER, menuItemMouseOn);
changeBgBtn.addEventListener(COMMON_EVENTS.MOUSE_LEAVE, menuItemMouseOn);
changeBgBtn.addEventListener(COMMON_EVENTS.CLICK, backgroundImage);