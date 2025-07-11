import { updateShopingList } from "../service/updateShopingList";

const sopingList = document.querySelector(".shoping-list__list");
const bacdrop = document.querySelector(".deletModal-backdrop");
const closeButton = document.querySelector(".deletModal__close-button");
const deletButton = document.querySelector(".deletModal__button");
const img = document.querySelector(".deletModal__img");
const title = document.querySelector(".deletModal__title");
const text = document.querySelector(".deletModal__text");
const name = document.querySelector(".deletModal__name");

sopingList.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
deletButton.addEventListener("click", deletCard)

let cardId;

function openModal(event) {
    const element = event.target;

    let parentElement;

    if (element.parentNode.parentNode.parentNode.classList.contains("shoping-list__item")) {
        parentElement = element.parentNode.parentNode.parentNode;
    } else if (element.parentNode.parentNode.classList.contains("shoping-list__item")) {
        parentElement = element.parentNode.parentNode;
    } else if (element.parentNode.classList.contains("shoping-list__item")) {
        parentElement = element.parentNode;
    }

    img.src = parentElement.getAttribute("data-img");
    title.textContent = parentElement.getAttribute("data-title");
    text.textContent = parentElement.getAttribute("data-description");
    name.textContent = parentElement.getAttribute("data-author");

    cardId = parentElement.getAttribute("data-id");

    if (element.classList.contains("shoping-list__delet-button") || element.parentNode.classList.contains("shoping-list__delet-button") || element.parentNode.parentNode.classList.contains("shoping-list__delet-button")) {

        bacdrop.classList.remove("is-hidden");
    } else {
        return;
    }
}

function closeModal() {
    bacdrop.classList.add("is-hidden");
}

function deletCard() {
    const account = JSON.parse(localStorage.getItem("account"));
    const array = JSON.parse(localStorage.getItem("account")).cards;
    const deletElementIndex = array.findIndex(card => card.id === cardId)

    array.splice(deletElementIndex, 1);

    account.cards = array;

    localStorage.setItem("account", JSON.stringify(account));

    updateShopingList(JSON.parse(localStorage.getItem("account")), JSON.parse(localStorage.getItem("account")).id);

    closeModal();
}