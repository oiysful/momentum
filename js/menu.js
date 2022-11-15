const menuBtn = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const hiddenMenu = document.querySelector("#hidden-menu");

function extendMenu() {
    menuBtn.style.width = "12vw";
    menuBtn.style.height = "30%";
    menuBtn.style.paddingTop = "0.5%";
    menuBtn.style.paddingBottom = "0.5%";
    hamburger.classList.add(HIDDEN_CLASSNAME);
    hiddenMenu.classList.remove(HIDDEN_CLASSNAME);
}

function collapseMenu() {
    menuBtn.style.width = "1.8vw";
    menuBtn.style.height = "1.5vw";
    menuBtn.style.paddingTop = "0";
    menuBtn.style.paddingBottom = "0";
    hamburger.classList.remove(HIDDEN_CLASSNAME);
    hiddenMenu.classList.add(HIDDEN_CLASSNAME);
}

menuBtn.addEventListener("mouseover", extendMenu);
menuBtn.addEventListener("mouseout", collapseMenu);