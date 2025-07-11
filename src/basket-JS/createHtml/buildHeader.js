const header = document.querySelector(".header");

export function buildHeader(object) {
    const html = `<div class="container">
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
                <li class="header__nav-item">
                    <a href="./index.html" class="header__nav-link">Home</a>
                </li>
                <li class="header__nav-item active-nav-item">
                    <a class="header__nav-link active-nav-link" href="./basket.html">Shopping list</a>
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
                <span class="header__account-name">${object.name}</span>
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
        </div>`

    header.innerHTML = html;
};