let t;function e(t,e,i,o){Object.defineProperty(t,e,{get:i,set:o,enumerable:!0,configurable:!0})}var i,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=o.parcelRequireb734;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},o.parcelRequireb734=a);var l=a.register;l("gdWc9",function(t,i){let o,n;e(t.exports,"inicalization",function(){return c}),e(t.exports,"closeModal",function(){return d});let s=document.querySelector(".phone-bacdrop"),a=document.querySelector(".phoneLogin-bacdrop"),l=document.querySelector(".phoneLogin__account-name"),c=function(){o=document.querySelector(".header__menu-button"),n=document.querySelector(".phone__close-button"),(null!==o||null!==n)&&(o.addEventListener("click",r),n.addEventListener("click",d))};function r(){"no login"===JSON.parse(localStorage.getItem("status"))?s.classList.remove("is-hidden"):"login"===JSON.parse(localStorage.getItem("status"))&&(a.classList.remove("is-hidden"),l.textContent=JSON.parse(localStorage.getItem("account")).name),o.style.display="none",n.style.display="flex"}function d(){"no login"===JSON.parse(localStorage.getItem("status"))?s.classList.add("is-hidden"):"login"===JSON.parse(localStorage.getItem("status"))&&a.classList.add("is-hidden"),o.style.display="flex",n.style.display="none"}}),l("fXlgs",function(t,e){let i=document.querySelectorAll(".support__item"),o=document.querySelector(".support__scroll-button"),n=document.querySelector(".support__scroll-icon");o.addEventListener("click",function(){let t=0;i.forEach(e=>{t<=2?e.classList.toggle("no-showe"):t>5&&e.classList.toggle("no-showe"),t+=1}),i[0].classList.contains("no-showe")?n.style.transform="rotate(180deg)":n.style.transform="rotate(0deg)"})}),l("3QkRd",function(t,e){let i=document.querySelector(".header__exit-button"),o=document.querySelector(".phoneLogin__exit-button"),n=document.querySelector(".header__account-button");if("login"===JSON.parse(localStorage.getItem("status")))n.addEventListener("click",function(){i.classList.contains("is-hidden")?i.classList.remove("is-hidden"):i.classList.contains("is-hidden")||i.classList.add("is-hidden")}),"login"===JSON.parse(localStorage.getItem("status"))&&(i.addEventListener("click",s),o.addEventListener("click",s));function s(){localStorage.clear(),location.reload()}});const c=document.querySelector(".header"),r=document.querySelector(".shoping-list__list");function d(t){r.innerHTML=t.map(t=>`
    <li class="shoping-list__item">
                        <img src="${t.imgUrl}"
                            alt="${t.text}" class="shoping-list__img">
                        <div class="shoping-list__info-div">
                            <h2 class="shoping-list__info-title">${t.title}</h2>
                            <h3 class="shoping-list__info-type">${t.type}</h3>
                            <p class="shoping-list__info-text">${t.text}</p>
                            <h3 class="shoping-list__info-author">${t.authorName}</h3>
                        </div>
                        <button type="button" class="shoping-list__delet-button">
                            <svg class="shoping-list__delet-icon">
                                <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <a href="${t.amazonBuyLink}"
                            class="shoping-list__amazon">
                            <svg viewBox="0 0 106 32" class="shoping-list__amazon-icon">
                               <<path fill="#a7a7a7" style="fill: var(--color3, #a7a7a7)" d="M65.763 25c-6.154 4.536-15.073 6.956-22.753 6.956-10.768 0-20.462-3.983-27.796-10.607-0.576-0.521-0.060-1.231 0.631-0.825 7.915 4.605 17.701 7.375 27.809 7.375 6.818 0 14.317-1.411 21.213-4.338 1.042-0.443 1.913 0.682 0.894 1.438z"></path>
                                <path fill="#a7a7a7" style="fill: var(--color3, #a7a7a7)" d="M68.322 22.073c-0.784-1.005-5.2-0.475-7.182-0.24-0.604 0.074-0.696-0.452-0.152-0.83 3.517-2.475 9.288-1.761 9.961-0.931 0.673 0.834-0.175 6.619-3.48 9.38-0.507 0.424-0.991 0.198-0.765-0.364 0.742-1.853 2.406-6.006 1.618-7.016z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M61.278 3.529v-2.406c0-0.364 0.277-0.608 0.608-0.608h10.773c0.346 0 0.622 0.249 0.622 0.608v2.060c-0.005 0.346-0.295 0.797-0.811 1.512l-5.582 7.97c2.074-0.051 4.264 0.258 6.145 1.318 0.424 0.24 0.539 0.59 0.572 0.936v2.568c0 0.35-0.387 0.761-0.793 0.549-3.314-1.738-7.716-1.927-11.381 0.018-0.373 0.203-0.765-0.203-0.765-0.553v-2.438c0-0.392 0.005-1.060 0.396-1.655l6.467-9.274h-5.628c-0.346 0-0.622-0.244-0.622-0.604z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M21.982 18.542h-3.277c-0.313-0.023-0.562-0.258-0.585-0.558v-16.82c0-0.337 0.281-0.604 0.631-0.604h3.056c0.318 0.014 0.572 0.258 0.595 0.562v2.199h0.060c0.797-2.125 2.296-3.116 4.315-3.116 2.051 0 3.333 0.991 4.255 3.116 0.793-2.125 2.595-3.116 4.527-3.116 1.374 0 2.876 0.567 3.794 1.839 1.037 1.415 0.825 3.471 0.825 5.273l-0.005 10.616c0 0.337-0.281 0.608-0.632 0.608h-3.273c-0.327-0.023-0.59-0.286-0.59-0.608v-8.915c0-0.71 0.065-2.48-0.092-3.153-0.244-1.129-0.977-1.447-1.927-1.447-0.793 0-1.623 0.53-1.959 1.378s-0.304 2.268-0.304 3.222v8.915c0 0.337-0.281 0.608-0.631 0.608h-3.273c-0.332-0.023-0.59-0.286-0.59-0.608l-0.005-8.915c0-1.876 0.309-4.637-2.019-4.637-2.355 0-2.263 2.692-2.263 4.637v8.915c0 0.337-0.281 0.608-0.631 0.608z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M82.556 0.205c4.863 0 7.495 4.176 7.495 9.486 0 5.13-2.909 9.201-7.495 9.201-4.775 0-7.375-4.176-7.375-9.38 0-5.236 2.632-9.307 7.375-9.307zM82.584 3.639c-2.415 0-2.568 3.291-2.568 5.342 0 2.056-0.032 6.444 2.54 6.444 2.54 0 2.66-3.54 2.66-5.697 0-1.42-0.060-3.116-0.489-4.462-0.369-1.171-1.102-1.627-2.143-1.627z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M96.357 18.542h-3.264c-0.327-0.023-0.59-0.286-0.59-0.608l-0.005-16.825c0.028-0.309 0.3-0.549 0.632-0.549h3.038c0.286 0.014 0.521 0.207 0.585 0.47v2.572h0.060c0.917-2.3 2.203-3.397 4.467-3.397 1.47 0 2.904 0.53 3.826 1.982 0.857 1.346 0.857 3.609 0.857 5.236v10.588c-0.037 0.295-0.309 0.53-0.632 0.53h-3.287c-0.3-0.023-0.549-0.244-0.581-0.53v-9.136c0-1.839 0.212-4.531-2.051-4.531-0.797 0-1.53 0.535-1.895 1.346-0.461 1.028-0.521 2.051-0.521 3.185v9.058c-0.005 0.337-0.29 0.608-0.641 0.608z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M52.691 10.508v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM55.996 18.496c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.757 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M9.725 10.508v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM13.030 18.496c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.756 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>
                            </svg>
                        </a>
                        <a href="${t.aplleBookBuyLink}" class="shoping-list__aplle-book">
                            <svg viewBox="0 0 32 32" class="addModal__apple-books-icon">
                                <path fill="#a7a7a7" style="fill: var(--color1, #a7a7a7)" d="M20.352 1.6c2.88 0 4.352 0 5.888 0.48 1.696 0.608 3.040 1.952 3.648 3.648 0.512 1.568 0.512 3.008 0.512 5.92v8.704c0 2.88 0 4.352-0.48 5.888-0.608 1.696-1.952 3.040-3.648 3.648-1.568 0.512-3.008 0.512-5.92 0.512h-8.704c-2.88 0-4.352 0-5.888-0.48-1.696-0.64-3.040-1.984-3.68-3.68-0.48-1.536-0.48-2.976-0.48-5.888v-8.704c0-2.88 0-4.352 0.48-5.888 0.64-1.696 1.984-3.040 3.68-3.68 1.536-0.48 2.976-0.48 5.888-0.48h8.704z"></path>
                                <path fill="#ffffff" style="fill: var(--color2, #ffffff)" d="M6.4 10.496s0.928-2.4 4.672-2.4c3.712 0 4.704 3.136 4.704 3.136v13.44s-1.184-3.584-4.672-3.584c-2.528 0-4.32 1.632-4.32 1.632-0.192 0.16-0.384 0.064-0.384-0.192v-12.032zM25.6 10.496v12c0 0.256-0.16 0.352-0.384 0.192 0 0-1.792-1.632-4.32-1.632-3.456 0-4.64 3.584-4.64 3.584v-13.44s0.96-3.136 4.704-3.136c3.712 0 4.64 2.432 4.64 2.432z"></path>
                            </svg>
                        </a>
                    </li>`).join("")}const h=async t=>{try{return await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts?id=${t}&l=3`).then(t=>t.json())}catch(t){return t}},p=document.querySelector(".shoping-list__pagination-list"),u=document.querySelector("body");function g(t,e){let i,o,n;p.innerHTML="";let s=Math.ceil(t/3),a=[],l=!1;if(u.offsetWidth<768&&s>3?(i=2,l=!0):i=3,a.push(`<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-back-too" ${1===e?"disabled":""}>&#8249;&#8249;</button>
        </li>`),a.push(`<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-back" ${1===e?"disabled":""}>&#8249;</button>
        </li>`),s<=i&&!l)o=1,n=s;else if(u.offsetWidth<768&&l)s<=3?(o=1,n=s):(1===e?(o=1,n=2):e===s?(o=s-1,n=s):(o=e-1,n=e),o>1&&a.push(`<li class="shoping-list__pagination-item">
                        <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                    </li>`));else{let t=Math.floor(i/2);o=e-t,n=e+t,o<1&&(o=1,n=i),n>s&&(n=s,o=s-i+1),o<1&&(o=1),o>1&&a.push(`<li class="shoping-list__pagination-item">
                    <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                </li>`)}for(let t=o;t<=n;t++)a.push(`<li class="shoping-list__pagination-item">
                <button id="page-${t}" type="button" class="shoping-list__pagination-button shoping-list__pagination-number ${t===e?"active-number":""}">${t}</button>
            </li>`);n<s&&(u.offsetWidth<768&&l?1===o&&e<s?a.push(`<li class="shoping-list__pagination-item">
                        <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                    </li>`):e!==s&&s>2&&1!==o&&a.push(`<li class="shoping-list__pagination-item">
                        <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                    </li>`):u.offsetWidth>=768&&a.push(`<li class="shoping-list__pagination-item">
                    <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                </li>`)),a.push(`<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-forward" ${e===s?"disabled":""}>&#8250;</button>
        </li>`),a.push(`<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-forward-too" ${e===s?"disabled":""}>&#8250;&#8250;</button>
        </li>`),p.insertAdjacentHTML("beforeend",a.join(""))}var _=a("gdWc9");const f=document.querySelector(".shoping-list__pagination-div");document.querySelector("body");let v=1;async function b(){try{let t=JSON.parse(localStorage.getItem("account"));if(!t||!t.id)return void console.error("Account data not found in localStorage.");let e=await h(t.id),i=e[0]?.cards||[],o=i.length,n=Math.ceil(o/3);(v=Math.min(v,n))<1&&n>0?v=1:0===n&&(v=0);let s=(v-1)*3;d(i.slice(s,s+3)),g(o,v)}catch(t){console.error("Error initializing pagination and shopping list:",t)}}async function m(t){let e=t.target;if(e.classList.contains("shoping-list__pagination-button")&&!e.disabled){let t=JSON.parse(localStorage.getItem("account"));if(!t||!t.id)return void console.error("Account data not found in localStorage.");let i=await h(t.id),o=i[0]?.cards||[],n=Math.ceil(o.length/3);if(e.classList.contains("shoping-list__pagination-number"))v=Number(e.textContent);else if(e.classList.contains("shoping-list__pagination-back-too"))v=1;else if(e.classList.contains("shoping-list__pagination-back"))v=Math.max(1,v-1);else if(e.classList.contains("shoping-list__pagination-forward"))v=Math.min(n,v+1);else if(e.classList.contains("shoping-list__pagination-forward-too"))v=n;else if(e.classList.contains("shoping-list__pagination-ellipsis"))return;v=Math.max(1,Math.min(v,n>0?n:1)),0===n&&(v=0);let s=(v-1)*3;d(o.slice(s,s+3)),g(o.length,v)}}f.addEventListener("click",m),i=JSON.parse(localStorage.getItem("account")),c.innerHTML=`<div class="container">
            <div class="header__logo-div">
                <svg class="header__logo-icon">
                    <use href="./icon/symbol-defs.svg#icon-logo"></use>
                </svg>
                <span class="header__logo-span">Bookshelf</span>
            </div>
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <a href="./index.html" class="header__nav-link">Home</a>
                </li>
                <li class="header__nav-item active-nav-item">
                    <a class="header__nav-link  active-nav-link" href="./basket.html">Shopping list</a>
                    <svg class="header__nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.8333 5.83335H13.3333V5.00002C13.3333 4.11596 12.9821 3.26812 12.357 2.643C11.7319 2.01788 10.884 1.66669 9.99999 1.66669C9.11594 1.66669 8.26809 2.01788 7.64297 2.643C7.01785 3.26812 6.66666 4.11596 6.66666 5.00002V5.83335H4.16666C3.94565 5.83335 3.73369 5.92115 3.57741 6.07743C3.42113 6.23371 3.33333 6.44567 3.33333 6.66669V15.8334C3.33333 16.4964 3.59672 17.1323 4.06556 17.6011C4.5344 18.07 5.17029 18.3334 5.83333 18.3334H14.1667C14.8297 18.3334 15.4656 18.07 15.9344 17.6011C16.4033 17.1323 16.6667 16.4964 16.6667 15.8334V6.66669C16.6667 6.44567 16.5789 6.23371 16.4226 6.07743C16.2663 5.92115 16.0543 5.83335 15.8333 5.83335ZM8.33333 5.00002C8.33333 4.55799 8.50892 4.13407 8.82148 3.82151C9.13404 3.50895 9.55796 3.33335 9.99999 3.33335C10.442 3.33335 10.8659 3.50895 11.1785 3.82151C11.4911 4.13407 11.6667 4.55799 11.6667 5.00002V5.83335H8.33333V5.00002ZM15 15.8334C15 16.0544 14.9122 16.2663 14.7559 16.4226C14.5996 16.5789 14.3877 16.6667 14.1667 16.6667H5.83333C5.61231 16.6667 5.40035 16.5789 5.24407 16.4226C5.08779 16.2663 4.99999 16.0544 4.99999 15.8334V7.50002H6.66666V8.33335C6.66666 8.55437 6.75446 8.76633 6.91074 8.92261C7.06702 9.07889 7.27898 9.16669 7.49999 9.16669C7.72101 9.16669 7.93297 9.07889 8.08925 8.92261C8.24553 8.76633 8.33333 8.55437 8.33333 8.33335V7.50002H11.6667V8.33335C11.6667 8.55437 11.7545 8.76633 11.9107 8.92261C12.067 9.07889 12.279 9.16669 12.5 9.16669C12.721 9.16669 12.933 9.07889 13.0892 8.92261C13.2455 8.76633 13.3333 8.55437 13.3333 8.33335V7.50002H15V15.8334Z" fill="#111111"/>
                    </svg>
                </li>
            </ul>
            <label class="header__switch">
                <input class="header__switch-input" type="checkbox">
                <span class="header__slider header__round"></span>
            </label>
            <button class="header__menu-button" type="button">
                <svg class="header__menu-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M19.8333 11.6667H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 7H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 16.3333H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.8333 21H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="phone__close-button" type="button">   
                <svg class="phone__close-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="header__account-div">
                <div class="header__account-avatar-div">
                    <svg class="header__account-avatar" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M3.16663 17.4166C3.16663 15.7369 3.83389 14.126 5.02162 12.9383C6.20935 11.7506 7.82025 11.0833 9.49996 11.0833C11.1797 11.0833 12.7906 11.7506 13.9783 12.9383C15.166 14.126 15.8333 15.7369 15.8333 17.4166H3.16663ZM9.49996 10.2916C6.87558 10.2916 4.74996 8.166 4.74996 5.54163C4.74996 2.91725 6.87558 0.791626 9.49996 0.791626C12.1243 0.791626 14.25 2.91725 14.25 5.54163C14.25 8.166 12.1243 10.2916 9.49996 10.2916Z" fill="#4F2EE8"/>
                    </svg>
                </div>
                <span class="header__account-name">${i.name}</span>
                <button type="button" class="header__account-button">
                    <svg class="header__account-icon" xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                        <path d="M4.79175 9.75H18.2084L12.1776 16.5674C11.9979 16.7705 11.7542 16.8846 11.5001 16.8846C11.246 16.8846 11.0023 16.7705 10.8225 16.5674L4.79175 9.75Z" fill="white"/>
                    </svg>
                </button>
                <button class="header__exit-button is-hidden" type="button">
                Log out
                <svg class="header__exit-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.33325 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15" stroke="#EAC645" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            </div>
        </div>`,b(),window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{b()},250)}),(0,_.inicalization)(),a("fXlgs"),a("3QkRd"),a("gdWc9");const y=document.querySelector(".header__switch-input"),w=document.querySelector(".dark-style");localStorage.setItem("Theme",JSON.stringify(!1)),y.addEventListener("click",()=>{!0===JSON.parse(localStorage.getItem("Theme"))?(w.innerHTML="",localStorage.setItem("Theme",JSON.stringify(!1))):!1===JSON.parse(localStorage.getItem("Theme"))&&(localStorage.setItem("Theme",JSON.stringify(!0)),w.innerHTML=".header{background-color: #111; border: 2px solid #FFF;} .header__logo-span {color: #F3F3F3;} .header__nav-item {background: none;} .active-nav-item {background: #EAC645 } .header__nav-link {color:#FFF;} .header__nav-icon {stroke: #ffffff; fill: #ffffff;} body {background-color: #202024;}.shoping-list__main-title { color: #ffffff; } .shoping-list__item {background: #111;} .shoping-list__info-title {color: #FFF;} .shoping-list__info-text {color: #FFF;}")});
//# sourceMappingURL=basket.17f1fd8a.js.map
