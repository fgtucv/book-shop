const logOutButton = document.querySelector(".header__exit-button");
const openAndCloseButton = document.querySelector(".header__account-button");

openAndCloseButton.addEventListener("click", howOrHideButton);

function howOrHideButton() {
    // console.log("1")
    if(logOutButton.classList.contains("is-hidden")){
        logOutButton.classList.remove("is-hidden")
        console.log("1")
    } else if (!logOutButton.classList.contains("is-hidden")) {
        logOutButton.classList.add("is-hidden")
    }
}

if (JSON.parse(localStorage.getItem("status")) === "login") {
    logOutButton.addEventListener("click", logOut);
} else{
    return;
}

function logOut() {
    localStorage.clear();
    location.reload();
}