const menuBtn = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const hiddenMenu = document.querySelector("#hidden-menu");

const logoutBtn = document.getElementById("logout");
const editNameBtn = document.getElementById("edit-name");

function expandMenu() {
    menuBtn.style.width = "12vw";
    menuBtn.style.height = "15%";
    menuBtn.style.paddingTop = "0.5%";
    menuBtn.style.paddingBottom = "0.5%";
    menuBtn.style.backgroundColor = "rgba(245, 245, 245, 0.1)";

    hamburger.classList.add(HIDDEN_CLASSNAME);
    hiddenMenu.classList.remove(HIDDEN_CLASSNAME);
}

function collapseMenu() {
    menuBtn.style.width = "1.8vw";
    menuBtn.style.height = "1.5vw";
    menuBtn.style.paddingTop = "0";
    menuBtn.style.paddingBottom = "0";
    menuBtn.style.backgroundColor = "transparent";

    hamburger.classList.remove(HIDDEN_CLASSNAME);
    hiddenMenu.classList.add(HIDDEN_CLASSNAME);
}

menuBtn.addEventListener("mouseover", expandMenu);
menuBtn.addEventListener("mouseout", collapseMenu);

// editNameBtn.addEventListener("mouseover", (event) => {
//     event.target.innerText = "> Edit name";
// });

// logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem(USERNAME_KEY);
//     location.reload();
// });