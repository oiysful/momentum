const menuBtn = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const hiddenMenu = document.querySelector("#hidden-menu");
const editNameForm = document.querySelector("#edit-name-form");
const menuItems = hiddenMenu.querySelectorAll("li");

const logoutBtn = document.getElementById("logout");
const editNameBtn = document.getElementById("edit-name");
const changeBgBtn = document.getElementById("change-bg");

function menuItemsAnimation(item) {
    item.animate(
        {
            fontSize: ["0", "1rem"],
            color: ["transparent", "whitesmoke"]
        },
        COMMON_ANIMATE_PROPERTY
    );
}

function expandMenu() {
    menuBtn.style.width = "12em";
    menuBtn.style.height = "8em";

    hamburger.classList.add(HIDDEN_CLASSNAME);
    hiddenMenu.classList.remove(HIDDEN_CLASSNAME);
    menuItems.forEach(item => menuItemsAnimation(item));
}

function collapseMenu() {
    menuBtn.style.width = "1.8em";
    menuBtn.style.height = "1.5em";
    menuBtn.style.backgroundColor = "transparent";

    hamburger.classList.remove(HIDDEN_CLASSNAME);
    hiddenMenu.classList.add(HIDDEN_CLASSNAME);
    editNameForm.classList.add(HIDDEN_CLASSNAME);
}

function menuItemMouseOn(item) {
    const keyframe = item.type === COMMON_EVENTS.MOUSE_ENTER ? ["transparent", "rgba(245, 245, 245, 0.4)"] : ["rgba(245, 245, 245, 0.4)", "transparent"];

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

function reduceMenu() {
    menuBtn.style.width = "14em";
    menuBtn.style.height = "4em";
}

function editName(event) {
    const editNameInput = editNameForm.querySelector("#edit-name-input");
    hiddenMenu.classList.add(HIDDEN_CLASSNAME);
    editNameForm.classList.remove(HIDDEN_CLASSNAME);
    editNameInput.focus();
    reduceMenu();
}

// menuBtn.addEventListener(COMMON_EVENTS.CLICK, expandMenu);
menuBtn.addEventListener(COMMON_EVENTS.MOUSE_ENTER, expandMenu);
menuBtn.addEventListener(COMMON_EVENTS.MOUSE_LEAVE, collapseMenu);

logoutBtn.addEventListener(COMMON_EVENTS.MOUSE_ENTER, menuItemMouseOn);
logoutBtn.addEventListener(COMMON_EVENTS.MOUSE_LEAVE, menuItemMouseOn);
logoutBtn.addEventListener(COMMON_EVENTS.CLICK, logout);

editNameBtn.addEventListener(COMMON_EVENTS.MOUSE_ENTER, menuItemMouseOn);
editNameBtn.addEventListener(COMMON_EVENTS.MOUSE_LEAVE, menuItemMouseOn);
editNameBtn.addEventListener(COMMON_EVENTS.CLICK, editName);

changeBgBtn.addEventListener(COMMON_EVENTS.MOUSE_ENTER, menuItemMouseOn);
changeBgBtn.addEventListener(COMMON_EVENTS.MOUSE_LEAVE, menuItemMouseOn);
changeBgBtn.addEventListener(COMMON_EVENTS.CLICK, backgroundImage);