const checkbox = document.querySelector(".header__switch-input");
const style = document.querySelector(".dark-style");

localStorage.setItem("Theme", JSON.stringify(false))

checkbox.addEventListener("click", () => {
    if (JSON.parse(localStorage.getItem("Theme")) === true) {
        style.innerHTML = ""; localStorage.setItem("Theme", JSON.stringify(false));
    } else if (JSON.parse(localStorage.getItem("Theme")) === false) {
        localStorage.setItem("Theme", JSON.stringify(true)); 
        style.innerHTML = ".header{background-color: #111; border: 2px solid #FFF;} .header__logo-span {color: #F3F3F3;} .header__nav-item {background: none;} .active-nav-item {background: #EAC645 } .header__nav-link {color:#FFF;} .header__nav-icon {stroke: #ffffff; fill: #ffffff;} body {background-color: #202024;}.shoping-list__main-title { color: #ffffff; } .shoping-list__item {background: #111;} .shoping-list__info-title {color: #FFF;} .shoping-list__info-text {color: #FFF;}";
    }
})