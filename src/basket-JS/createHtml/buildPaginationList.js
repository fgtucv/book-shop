const list = document.querySelector(".shoping-list__pagination-list");

export function buildPaginationList(qwentety) {
    let html = [];

    for (let i = 1; i < Number.parseInt(qwentety / 3) + 1; i++) {
        html.push(`<li class="shoping-list__pagination-item"><button id="${i}button" type="button" class="shoping-list__pagination-number">${i + 1}</button></li>`)
    };

    list.insertAdjacentHTML("beforeend", html.join(""));
}