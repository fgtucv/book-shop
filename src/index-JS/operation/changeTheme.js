const checkbox = document.querySelector(".header__switch-input");
const style = document.querySelector(".dark-style");

localStorage.setItem("Theme", JSON.stringify(false))

checkbox.addEventListener("click", () => {
    if (JSON.parse(localStorage.getItem("Theme")) === true) {
        style.innerHTML = "";
        localStorage.setItem("Theme", JSON.stringify(false));
    } else if (JSON.parse(localStorage.getItem("Theme")) === false) {
        localStorage.setItem("Theme", JSON.stringify(true));
        style.innerHTML = ".header {background-color: #111; border: 2px solid #FFF;} .header__logo-span {    color: #F3F3F3;} .header__nav-item {background: none;} .active-nav-item {background: #EAC645}.header__nav-link {color: #FFF;} .header__nav-icon {fill: #ffffff;} .category__span {color: rgba(255, 255, 255, 0.60);} .active {color: #EAC645;} .shop_title {color: #FFF;} .magazine__book-name {color: #FFF;} .magazine__button {color: #FFF;} body {background-color: #202024;} .login-modal {border: 2px solid #F6F6F6;background: #202024;} .login-modal__close-icon {stroke: #FFF;} .login-modal__input {border: 2px solid #F6F6F6;background: transparent;} .login-modal__input::placeholder {color: #F6F6F6;} .login-modal__email-icon {stroke: #FFF;} .login-modal__password-icon {stroke: #FFF;} .login-modal__submit-button {color: #000;background: #F6F6F6;} .login-modal__type-button {color: rgba(246, 246, 246, 0.50);} .addModal {border: 2px solid #FFF;background: #202024;} .header__menu-icon { stroke:rgb(255, 255, 255); } .phone__close-icon { stroke:rgb(255, 255, 255); } .addModal__close-icon {stroke: #FFF;} .addModal__title {color: #FFF;} .addModal__name {color: #B4AFAF;} .addModal__text {color: #FFF;}.addModal__button {color: #FFF;}";
    }
})