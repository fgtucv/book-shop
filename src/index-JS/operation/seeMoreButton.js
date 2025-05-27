import { createBookList } from "../createHtml/createBookList.js";
const list = document.querySelector(".magazine");

list.addEventListener("click", seeMore);

function seeMore(event) {
    const element = event.target;

    if (element.classList.contains("header__exit-button")) {
        getBookApi(`https://books-backend.p.goit.global/books/category?category=${element.getAttribute("data-type")}`).then((data) => {
            createBookList(data);
            console.log(data)
        });
    } else {
        return;
    }
}