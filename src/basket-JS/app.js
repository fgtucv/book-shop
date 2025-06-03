import { buildHeader } from "./createHtml/buildHeader.js";
import { buildShopingList } from "./createHtml/buildShopingList.js";
import { getAccountApi } from "./service/getAccountApi.js";
import { buildPaginationList } from "../basket-JS/createHtml/buildPaginationList.js";

const paginationDiv = document.querySelector(".shoping-list__pagination-div");

let page1 = 1;
let page2 = 4;

paginationDiv.addEventListener("click", pagination);

buildHeader(JSON.parse(localStorage.getItem("account")));

getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
    buildShopingList(data[0].cards.slice(page1 - 1, page2 - 1));
    buildPaginationList(data[0].cards.length);
});

function pagination(event) {
    const element = event.target;
    const active = document.querySelector(".active-number");

    if (element.classList.contains("shoping-list__pagination-number")) {
        page2 = Number(element.textContent) * 3;
        page1 = page2 - 3

        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
            buildShopingList(data[0].cards.slice(page1, page2));
        });

        active.classList.remove("active-number");
        element.classList.add("active-number");
    } else if (element.classList.contains("shoping-list__pagination-back-too")) {
        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
            buildShopingList(data[0].cards.slice(0, 3));
        });
    } else if (element.classList.contains("shoping-list__pagination-back") && page1 >= 3) {
        const backPage = document.getElementById(`${Number.parseInt(active.id) - 1}button`);

        page1 = page1 - 3;
        page2 = page2 - 3;

        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
            buildShopingList(data[0].cards.slice(page1, page2));
        });

        active.classList.remove("active-number");
        backPage.classList.add("active-number");
    } else if (element.classList.contains("shoping-list__pagination-forward")) {
        const nextPage = document.getElementById(`${Number.parseInt(active.id) + 1}button`);

        page1 = page1 + 3;
        page2 = page2 + 3;

        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
            buildShopingList(data[0].cards.slice(page1, page2));
        });

        active.classList.remove("active-number");
        nextPage.classList.add("active-number");
    } else if (element.classList.contains("shoping-list__pagination-forward-too")) {
        page1 = page1 + 3;
        page2 = page2 + 3;

        getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {

            page1 =  Number.parseInt(data[0].cards.length / 3 + 1) * 3 - 3;
            page2 = Number.parseInt(data[0].cards.length / 3 + 1) * 3;
            console.log(page1, page2)
            buildShopingList(data[0].cards.slice(page1, page2));
        });
    }
};