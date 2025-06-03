const openButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".phone__close-button");
const bacdrop = document.querySelector(".phone-bacdrop");
const header = document.querySelector(".header");

header.addEventListener("click", (event) => {
    if (event.target.parentNode.parentNode.classList.contains("header__menu-button") || event.target.parentNode.classList.contains("header__menu-button") || event.target.classList.contains("header__menu-button")) {
        openModal()
        closeButton.style.display = "flex";
    } else {
        return
    }
});

closeButton.addEventListener("click", closeModal);

function openModal() {
    bacdrop.classList.remove("is-hidden");
    openButton.style.display = "none";
    closeButton.style.display = "flex";
}

export function closeModal() {
    bacdrop.classList.add("is-hidden");
    openButton.style.display = "flex";
    closeButton.style.display = "none";
}