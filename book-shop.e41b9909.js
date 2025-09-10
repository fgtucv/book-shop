let t,e,o,a,n,i,s,l;function c(t,e,o,a){Object.defineProperty(t,e,{get:o,set:a,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},d={},u={},m=r.parcelRequireb734;null==m&&((m=function(t){if(t in d)return d[t].exports;if(t in u){var e=u[t];delete u[t];var o={id:t,exports:{}};return d[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){u[t]=e},r.parcelRequireb734=m);var _=m.register;_("gdWc9",function(t,e){let o,a;c(t.exports,"inicalization",function(){return l}),c(t.exports,"closeModal",function(){return d});let n=document.querySelector(".phone-bacdrop"),i=document.querySelector(".phoneLogin-bacdrop"),s=document.querySelector(".phoneLogin__account-name"),l=function(){o=document.querySelector(".header__menu-button"),a=document.querySelector(".phone__close-button"),(null!==o||null!==a)&&(o.addEventListener("click",r),a.addEventListener("click",d))};function r(){"no login"===JSON.parse(localStorage.getItem("status"))?n.classList.remove("is-hidden"):"login"===JSON.parse(localStorage.getItem("status"))&&(i.classList.remove("is-hidden"),s.textContent=JSON.parse(localStorage.getItem("account")).name),o.style.display="none",a.style.display="flex"}function d(){"no login"===JSON.parse(localStorage.getItem("status"))?n.classList.add("is-hidden"):"login"===JSON.parse(localStorage.getItem("status"))&&i.classList.add("is-hidden"),o.style.display="flex",a.style.display="none"}}),_("fXlgs",function(t,e){let o=document.querySelectorAll(".support__item"),a=document.querySelector(".support__scroll-button"),n=document.querySelector(".support__scroll-icon");a.addEventListener("click",function(){let t=0;o.forEach(e=>{t<=2?e.classList.toggle("no-showe"):t>5&&e.classList.toggle("no-showe"),t+=1}),o[0].classList.contains("no-showe")?n.style.transform="rotate(180deg)":n.style.transform="rotate(0deg)"})}),_("3QkRd",function(t,e){let o=document.querySelector(".header__exit-button"),a=document.querySelector(".phoneLogin__exit-button"),n=document.querySelector(".header__account-button");if("login"===JSON.parse(localStorage.getItem("status")))n.addEventListener("click",function(){o.classList.contains("is-hidden")?o.classList.remove("is-hidden"):o.classList.contains("is-hidden")||o.classList.add("is-hidden")}),"login"===JSON.parse(localStorage.getItem("status"))&&(o.addEventListener("click",i),a.addEventListener("click",i));function i(){localStorage.clear(),location.reload()}}),_("1CCW0",function(t,e){var o=m("9eO33"),a=m("fzink"),n=m("fT1hK"),i=m("gdWc9");let s=document.querySelector(".login-modal__close-button"),l=document.querySelector(".phone__open-button"),c=document.querySelector(".header__open-button"),r=document.querySelector(".login-modal__submit-button"),d=document.querySelector(".login-modal-bacdrop"),u=document.querySelector(".login-modal__change-type"),_=document.querySelector("#name"),g=document.querySelector("#email"),h=document.querySelector("#password");if("no login"!==JSON.parse(localStorage.getItem("status")))return;c.addEventListener("click",b),l.addEventListener("click",b),s.addEventListener("click",k),r.addEventListener("click",function(t){if(t.preventDefault(),"singup"===p){let t={name:`${_.value}`,email:`${g.value}`,avatar:"",cards:[],password:`${h.value}`};(0,o.postAccount)(t),localStorage.setItem("account",JSON.stringify(t)),localStorage.setItem("status",JSON.stringify("login")),(0,n.buildHeader)(JSON.parse(localStorage.getItem("account"))),k();return}"singin"===p&&(0,a.getAccount)(_.value,g.value).then(t=>{let e=t[0];h.value===e.password&&(localStorage.setItem("account",JSON.stringify(e)),localStorage.setItem("status",JSON.stringify("login")),(0,n.buildHeader)(JSON.parse(localStorage.getItem("account"))),k())})}),u.addEventListener("click",function(t){let e=t.target,o=document.querySelector(".active-modal");e!==o&&e!==o&&(e.classList.add("active-modal"),o.classList.remove("active-modal"),p=e.id,r.textContent=e.id)});let p="singup";function b(){d.classList.remove("is-hidden")}function k(){d.classList.add("is-hidden")}(0,i.inicalization)()}),_("9eO33",function(t,e){c(t.exports,"postAccount",function(){return o});let o=async t=>{try{let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}},o=await fetch("https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts",e).then(t=>o)}catch(t){return t}}}),_("fzink",function(t,e){c(t.exports,"getAccount",function(){return o});let o=async(t,e)=>{try{return await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts?name=${t}&email=${e}`).then(t=>t.json())}catch(t){return t}}}),_("fT1hK",function(t,e){c(t.exports,"buildHeader",function(){return a});let o=document.querySelector(".header");function a(t){o.innerHTML=`<div class="container">
            <div class="header__logo-div">
                <svg class="header__logo-icon" viewBox="0 0 32 32">
                    <path fill="#f6f6f6" style="fill: var(--color5, #f6f6f6)" d="M0 0l16.343 16.171 15.657 15.829v-32h-32z"></path>
                    <path fill="#f6f6f6" style="fill: var(--color5, #f6f6f6)" d="M4.457 4.229l11.943 11.829 11.257 11.486h-23.2v-23.314z"></path>
                    <path fill="#4f2ee8" style="fill: var(--color6, #4f2ee8)" d="M27.733 27.618l-11.943-11.829-11.257-11.486h23.2v23.314z"></path>
                    <path fill="#4f2ee8" style="fill: var(--color6, #4f2ee8)" d="M9.257 9.029l13.6 13.6h-13.6v-13.6z"></path>
                    <path fill="#f6f6f6" style="fill: var(--color5, #f6f6f6)" d="M9.257 9.029l13.6 13.6v-13.6h-13.6z"></path>
                </svg>
                <span class="header__logo-span">Bookshelf</span>
            </div>
            <ul class="header__nav-list">
                <li class="header__nav-item active-nav-item">
                    <a href="./index.html" class="header__nav-link active-nav-link">Home</a>
                </li>
                <li class="header__nav-item">
                    <a class="header__nav-link" href="./basket.html">Shopping list</a>
                    <svg class="header__nav-icon" viewBox="0 0 25 32">
                        <path d="M22.808 8.593h-4.444v-1.481c0-1.572-0.624-3.079-1.736-4.19s-2.619-1.736-4.19-1.736c-1.572 0-3.079 0.624-4.19 1.736s-1.736 2.619-1.736 4.19v1.481h-4.444c-0.393 0-0.77 0.156-1.048 0.434s-0.434 0.655-0.434 1.048v16.296c0 1.179 0.468 2.309 1.302 3.143s1.964 1.302 3.143 1.302h14.815c1.179 0 2.309-0.468 3.143-1.302s1.302-1.964 1.302-3.143v-16.296c0-0.393-0.156-0.77-0.434-1.048s-0.655-0.434-1.048-0.434zM9.474 7.111c0-0.786 0.312-1.539 0.868-2.095s1.309-0.868 2.095-0.868c0.786 0 1.539 0.312 2.095 0.868s0.868 1.309 0.868 2.095v1.481h-5.926v-1.481zM21.326 26.37c0 0.393-0.156 0.77-0.434 1.047s-0.655 0.434-1.047 0.434h-14.815c-0.393 0-0.77-0.156-1.048-0.434s-0.434-0.655-0.434-1.047v-14.815h2.963v1.481c0 0.393 0.156 0.77 0.434 1.048s0.655 0.434 1.048 0.434c0.393 0 0.77-0.156 1.048-0.434s0.434-0.655 0.434-1.048v-1.481h5.926v1.481c0 0.393 0.156 0.77 0.434 1.048s0.655 0.434 1.048 0.434c0.393 0 0.77-0.156 1.047-0.434s0.434-0.655 0.434-1.048v-1.481h2.963v14.815z"></path>
                    </svg>
                </li>
            </ul>
            <label class="header__switch">
                <input class="header__switch-input" type="checkbox">
                <span class="header__slider header__round"></span>
            </label>
            <button class="header__menu-button" type="button">
                <svg class="header__menu-icon" viewBox="0 0 32 32">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M22.667 13.333h-18.667"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M28 8h-24"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M28 18.667h-24"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M22.667 24h-18.667"></path>
                </svg>
            </button>
            <button class="phone__close-button" type="button">   
                <svg class="phone__close-icon" viewBox="0 0 32 32">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.4286" d="M24 8l-16 16M8 8l16 16"></path>
                </svg>
            </button>
            <div class="header__account-div">
                <div class="header__account-avatar-div">
                    <svg class="header__account-avatar" viewBox="0 0 23 32">
                        <path d="M0.303 30.778c0-2.986 1.186-5.85 3.298-7.961s4.975-3.298 7.962-3.298c2.986 0 5.85 1.186 7.962 3.298s3.298 4.975 3.298 7.961h-22.519zM11.563 18.111c-4.666 0-8.444-3.779-8.444-8.444s3.779-8.444 8.444-8.444c4.666 0 8.444 3.779 8.444 8.444s-3.779 8.444-8.444 8.444z"></path>
                    </svg>
                </div>
                <span class="header__account-name">${t.name}</span>
                <button type="button" class="header__account-button">
                    <svg class="header__account-icon" viewBox="0 0 28 32">
                        <path d="M5.9 11.609h16.513l-7.423 8.391c-0.221 0.25-0.521 0.39-0.834 0.39s-0.613-0.14-0.834-0.39l-7.422-8.391z"></path>
                    </svg>
                </button>
                <button class="header__exit-button is-hidden" type="button">
                Log out
                <svg class="header__exit-icon" viewBox="0 0 32 32">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.2" d="M5.333 16h21.333M26.667 16l-8-8M26.667 16l-8 8"></path>
                </svg>
            </button>
            </div>
        </div>`}});const g=async()=>{try{return await fetch("https://books-backend.p.goit.global/books/category-list").then(t=>t.json())}catch(t){return t}},h=document.querySelector(".category__list"),p=document.querySelector(".magazine");function b(t,e=!1){let o="";!1===e?o=t.map(t=>`
        <li class="magazine__item" id="${t._id}" data-img="${t.book_image}" data-description="${t.description}" data-type="${t.list_name}" data-author="${t.author}" data-title="${t.title}" data-amazon="${t.buy_links[0].url}" data-aplle="${t.buy_links[1].url}">
            <img class="magazine__img" src="${t.book_image}" alt="${t.description}">
            <h3 class="magazine__book-name">${t.title}</h3>
            <h4 class="magazine__book-author">${t.author}</h4>
        </li>`).join(""):!0===e&&(o=t.map(t=>t.books.length>=5?`
                <li class="magazine__item">
                    <h2 class="magazine__type-title">${t.list_name}</h2>
                    <ul class="magazine__book-list">
                        <li class="magazine__item" id="${t.books[0]._id}" data-img="${t.books[0].book_image}" data-description="${t.books[0].description}" data-type="${t.books[0].list_name}" data-author="${t.books[0].author}" data-title="${t.books[0].title}" data-amazon="${t.books[0].buy_links[0].url}" data-aplle="${t.books[0].buy_links[1].url}">
                            <img class="magazine__img" src="${t.books[0].book_image}" alt="1">
                            <h3 class="magazine__book-name">${t.books[0].title}</h3>
                            <h4 class="magazine__book-author">${t.books[0].author}</h4>
                        </li>
                        <li class="magazine__item" id="${t.books[1]._id}" data-img="${t.books[1].book_image}" data-description="${t.books[1].description}" data-type="${t.books[1].list_name}" data-author="${t.books[1].author}" data-title="${t.books[1].title}" data-amazon="${t.books[1].buy_links[0].url}" data-aplle="${t.books[1].buy_links[1].url}">
                            <img class="magazine__img" src="${t.books[1].book_image}" alt="1">
                            <h3 class="magazine__book-name">${t.books[1].title}</h3>
                            <h4 class="magazine__book-author">${t.books[1].author}</h4>
                        </li>
                        <li class="magazine__item" id="${t.books[2]._id}" data-img="${t.books[2].book_image}" data-description="${t.books[2].description}" data-type="${t.books[2].list_name}" data-author="${t.books[2].author}" data-title="${t.books[2].title}" data-amazon="${t.books[2].buy_links[0].url}" data-aplle="${t.books[2].buy_links[1].url}">
                            <img class="magazine__img" src="${t.books[2].book_image}" alt="1">
                            <h3 class="magazine__book-name">${t.books[2].title}</h3>
                            <h4 class="magazine__book-author">${t.books[2].author}</h4>
                        </li>
                        <li class="magazine__item" id="${t.books[3]._id}" data-img="${t.books[3].book_image}" data-description="${t.books[3].description}" data-type="${t.books[3].list_name}" data-author="${t.books[3].author}" data-title="${t.books[3].title}" data-amazon="${t.books[3].buy_links[0].url}" data-aplle="${t.books[3].buy_links[1].url}">
                            <img class="magazine__img" src="${t.books[3].book_image}" alt="1">
                            <h3 class="magazine__book-name">${t.books[3].title}</h3>
                            <h4 class="magazine__book-author">${t.books[3].author}</h4>
                        </li>
                        <li class="magazine__item" id="${t.books[4]._id}" data-img="${t.books[4].book_image}" data-description="${t.books[4].description}" data-type="${t.books[4].list_name}" data-author="${t.books[4].author}" data-title="${t.books[4].title}" data-amazon="${t.books[4].buy_links[0].url}" data-aplle="${t.books[4].buy_links[1].url}">
                            <img class="magazine__img" src="${t.books[4].book_image}" alt="1">
                            <h3 class="magazine__book-name">${t.books[4].title}</h3>
                            <h4 class="magazine__book-author">${t.books[4].author}</h4>
                        </li>
                    </ul>
                    <button data-type="${t.list_name}" type="button" class="magazine__button">SEE MORE</button>
                </li>`:"").join("")),p.innerHTML=o}const k=async t=>{try{return await fetch(`${t}`).then(t=>t.json())}catch(t){return t}};var y=m("gdWc9"),f=m("fT1hK");const v=document.querySelector(".phone__open-button");"login"===JSON.parse(localStorage.getItem("status"))?(0,f.buildHeader)(JSON.parse(localStorage.getItem("account"))):localStorage.setItem("status",JSON.stringify("no login")),g().then(t=>{let e;e="",e=t.map(t=>`
        <li class="category__item">
            <span class="category__span">${t.list_name}</span>
        </li>`).join(""),h.insertAdjacentHTML("beforeend",e)}),k("https://books-backend.p.goit.global/books/top-books").then(t=>{b(t,!0)}),v.addEventListener("click",()=>{(0,y.closeModal)()}),(0,y.inicalization)();const S=document.querySelector(".category__list"),$=document.querySelector(".shop_title");document.querySelector(".magazine__book-list"),S.addEventListener("click",function(t){let e=t.target;if(!e.classList.contains("active")){if(!1!==e.parentNode.classList.contains("category__item"))if("All categories"===e.textContent)document.querySelector(".active").classList.remove("active"),e.classList.add("active"),$.innerHTML="Best Sellers <span class='shop_title-purpure'>magazine</span>",k("https://books-backend.p.goit.global/books/top-books").then(t=>{b(t,!0)});else{document.querySelector(".active").classList.remove("active"),e.classList.add("active");let t=e.textContent.split(" ");$.innerHTML=`${t.slice(0,-1).join(" ")} <span class="shop_title-purpure">${t.at(-1)}</span>`,k(`https://books-backend.p.goit.global/books/category?category=${e.textContent}`).then(t=>{b(t)})}}}),m("fXlgs"),m("fT1hK"),m("fzink"),m("9eO33"),m("3QkRd");const z=document.querySelector(".magazine"),F=document.querySelector(".shop_title");z.addEventListener("click",function(t){let e=t.target;if(e.classList.contains("magazine__button")){k(`https://books-backend.p.goit.global/books/category?category=${e.getAttribute("data-type")}`).then(t=>{b(t)});let t=e.getAttribute("data-type").split(" ");F.innerHTML=`${t.slice(0,-1).join(" ")} <span class="shop_title-purpure">${t.at(-1)}</span>`}});const L=async function(t,e){try{let o={method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};return console.log(t),await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts/${e}`,o).then(t=>t.json())}catch(t){return t}};m("1CCW0"),m("gdWc9");const M=document.querySelector(".magazine"),q=document.querySelector(".addModal-backdrop"),x=document.querySelector(".addModal__close-button"),O=document.querySelector(".addModal__button"),w=document.querySelector(".addModal__img"),N=document.querySelector(".addModal__title"),J=document.querySelector(".addModal__text"),E=document.querySelector(".addModal__name");M.addEventListener("click",function(c){let r=c.target.parentNode;r.classList.contains("magazine__item")&&""!==r.id&&(w.src=r.getAttribute("data-img"),N.textContent=r.getAttribute("data-title"),J.textContent=r.getAttribute("data-description"),E.textContent=r.getAttribute("data-author"),t=r.getAttribute("data-img"),e=r.getAttribute("data-title"),o=r.getAttribute("data-description"),a=r.getAttribute("data-author"),n=r.id,l=r.getAttribute("data-type"),i=r.getAttribute("data-amazon"),s=r.getAttribute("data-aplle"),q.classList.remove("is-hidden"))}),x.addEventListener("click",function(){q.classList.add("is-hidden")}),O.addEventListener("click",function(){let c={id:n,imgUrl:t,title:e,text:o,type:l,authorName:a,amazonBuyLink:i,aplleBookBuyLink:s},r=JSON.parse(localStorage.getItem("account"));r.cards.push(c),localStorage.setItem("account",JSON.stringify(r)),L(JSON.parse(localStorage.getItem("account")),JSON.parse(localStorage.getItem("account")).id),q.classList.add("is-hidden")});const I=document.querySelector(".header__switch-input"),T=document.querySelector(".dark-style");localStorage.setItem("Theme",JSON.stringify(!1)),I.addEventListener("click",()=>{!0===JSON.parse(localStorage.getItem("Theme"))?(T.innerHTML="",localStorage.setItem("Theme",JSON.stringify(!1))):!1===JSON.parse(localStorage.getItem("Theme"))&&(localStorage.setItem("Theme",JSON.stringify(!0)),T.innerHTML=".header {background-color: #111; border: 2px solid #FFF;} .header__logo-span {    color: #F3F3F3;} .header__nav-item {background: none;} .active-nav-item {background: #EAC645}.header__nav-link {color: #FFF;} .header__nav-icon {fill: #ffffff;} .category__span {color: rgba(255, 255, 255, 0.60);} .active {color: #EAC645;} .shop_title {color: #FFF;} .magazine__book-name {color: #FFF;} .magazine__button {color: #FFF;} body {background-color: #202024;} .login-modal {border: 2px solid #F6F6F6;background: #202024;} .login-modal__close-icon {stroke: #FFF;} .login-modal__input {border: 2px solid #F6F6F6;background: transparent;} .login-modal__input::placeholder {color: #F6F6F6;} .login-modal__email-icon {stroke: #FFF;} .login-modal__password-icon {stroke: #FFF;} .login-modal__submit-button {color: #000;background: #F6F6F6;} .login-modal__type-button {color: rgba(246, 246, 246, 0.50);} .addModal {border: 2px solid #FFF;background: #202024;} .addModal__close-icon {stroke: #FFF;} .addModal__title {color: #FFF;} .addModal__name {color: #B4AFAF;} .addModal__text {color: #FFF;}.addModal__button {color: #FFF;}")});
//# sourceMappingURL=book-shop.e41b9909.js.map
