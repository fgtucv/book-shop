import { buildHeader } from "./createHtml/buildHeader.js";
import { buildShopingList } from "./createHtml/buildShopingList.js";
import { getAccountApi } from "./service/getAccountApi.js";
import { buildPaginationList } from "../basket-JS/createHtml/buildPaginationList.js";
import { inicalization } from "../index-JS/modal/phoneModal.js";

const paginationDiv = document.querySelector(".shoping-list__pagination-div");
const body = document.querySelector("body");

const ITEMS_PER_PAGE = 3;

let currentPage = 1;

paginationDiv.addEventListener("click", handlePaginationClick);

buildHeader(JSON.parse(localStorage.getItem("account")));
initializePaginationAndShopingList();

async function initializePaginationAndShopingList() {
    try {
        const accountData = JSON.parse(localStorage.getItem("account"));
        if (!accountData || !accountData.id) {
            console.error("Account data not found in localStorage.");
            return;
        }

        const data = await getAccountApi(accountData.id);
        const allCards = data[0]?.cards || [];
        const totalItems = allCards.length;
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

        currentPage = Math.min(currentPage, totalPages);
        if (currentPage < 1 && totalPages > 0) {
            currentPage = 1;
        } else if (totalPages === 0) {
            currentPage = 0;
        }

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        buildShopingList(allCards.slice(startIndex, endIndex));

        buildPaginationList(totalItems, currentPage);
    } catch (error) {
        console.error("Error initializing pagination and shopping list:", error);
    }
}

async function handlePaginationClick(event) {
    const element = event.target;

    if (element.classList.contains("shoping-list__pagination-button") && !element.disabled) {
        const accountData = JSON.parse(localStorage.getItem("account"));
        if (!accountData || !accountData.id) {
            console.error("Account data not found in localStorage.");
            return;
        }

        const data = await getAccountApi(accountData.id);
        const allCards = data[0]?.cards || [];
        const totalPages = Math.ceil(allCards.length / ITEMS_PER_PAGE);

        if (element.classList.contains("shoping-list__pagination-number")) {
            currentPage = Number(element.textContent);
        } else if (element.classList.contains("shoping-list__pagination-back-too")) {
            currentPage = 1;
        } else if (element.classList.contains("shoping-list__pagination-back")) {
            currentPage = Math.max(1, currentPage - 1);
        } else if (element.classList.contains("shoping-list__pagination-forward")) {
            currentPage = Math.min(totalPages, currentPage + 1);
        } else if (element.classList.contains("shoping-list__pagination-forward-too")) {
            currentPage = totalPages;
        } else if (element.classList.contains("shoping-list__pagination-ellipsis")) {
            return;
        }

        currentPage = Math.max(1, Math.min(currentPage, totalPages > 0 ? totalPages : 1));
        if (totalPages === 0) currentPage = 0;

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        buildShopingList(allCards.slice(startIndex, endIndex));

        buildPaginationList(allCards.length, currentPage);
    }
}

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initializePaginationAndShopingList();
    }, 250);
});

inicalization();