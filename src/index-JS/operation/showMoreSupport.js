const fonds = document.querySelectorAll(".support__item");
const showeButton = document.querySelector(".support__scroll-button");
const showIcon = document.querySelector(".support__scroll-icon");

showeButton.addEventListener("click", showeMoreSupports);

function showeMoreSupports() {
    let count = 0;

    fonds.forEach((element) => {
        if (count <= 2) {
            element.classList.toggle("no-showe");
        } else if (count > 5) {
            element.classList.toggle("no-showe");
        }

        count += 1;
    });

    if (fonds[0].classList.contains("no-showe")) {
        showIcon.style.transform = "rotate(180deg)";
    } else {
        showIcon.style.transform = "rotate(0deg)";
    }
}