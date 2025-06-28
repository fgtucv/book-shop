const list = document.querySelector(".shoping-list__pagination-list");
const body = document.querySelector("body");

const ITEMS_PER_PAGE = 3;

export function buildPaginationList(totalItems, currentPage) {
    list.innerHTML = "";

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    let html = [];
    let maxVisibleNumericButtons;
    let showEllipsesMobile = false;

    if (body.offsetWidth < 768) {
        if (totalPages > 3) {
            maxVisibleNumericButtons = 2;
            showEllipsesMobile = true;
        } else {
            maxVisibleNumericButtons = 3;
        }
    } else {
        maxVisibleNumericButtons = 3;
    }

    html.push(
        `<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-back-too" ${currentPage === 1 ? 'disabled' : ''}>&#8249;&#8249;</button>
        </li>`
    );

    html.push(
        `<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-back" ${currentPage === 1 ? 'disabled' : ''}>&#8249;</button>
        </li>`
    );

    let startPage, endPage;

    if (totalPages <= maxVisibleNumericButtons && !showEllipsesMobile) {
        startPage = 1;
        endPage = totalPages;
    } else if (body.offsetWidth < 768 && showEllipsesMobile) {
        if (totalPages <= 3) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage === 1) {
                startPage = 1;
                endPage = 2;
            } else if (currentPage === totalPages) {
                startPage = totalPages - 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage;
            }

            if (startPage > 1) {
                html.push(
                    `<li class="shoping-list__pagination-item">
                        <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                    </li>`
                );
            }
        }
    }
    else {
        const half = Math.floor(maxVisibleNumericButtons / 2);
        startPage = currentPage - half;
        endPage = currentPage + half;

        if (startPage < 1) {
            startPage = 1;
            endPage = maxVisibleNumericButtons;
        }

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = totalPages - maxVisibleNumericButtons + 1;
        }

        if (startPage < 1) {
            startPage = 1;
        }

        if (startPage > 1) {
            html.push(
                `<li class="shoping-list__pagination-item">
                    <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                </li>`
            );
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        html.push(
            `<li class="shoping-list__pagination-item">
                <button id="page-${i}" type="button" class="shoping-list__pagination-button shoping-list__pagination-number ${i === currentPage ? 'active-number' : ''}">${i}</button>
            </li>`
        );
    }

    if (endPage < totalPages) {
        if (body.offsetWidth < 768 && showEllipsesMobile) {
            if (startPage === 1 && currentPage < totalPages) {
                html.push(
                    `<li class="shoping-list__pagination-item">
                        <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                    </li>`
                );
            } else if (currentPage !== totalPages && totalPages > 2 && startPage !== 1) {
                html.push(
                    `<li class="shoping-list__pagination-item">
                        <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                    </li>`
                );
            }
        } else if (body.offsetWidth >= 768) {
            html.push(
                `<li class="shoping-list__pagination-item">
                    <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                </li>`
            );
        }
    }

    html.push(
        `<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-forward" ${currentPage === totalPages ? 'disabled' : ''}>&#8250;</button>
        </li>`
    );

    html.push(
        `<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-forward-too" ${currentPage === totalPages ? 'disabled' : ''}>&#8250;&#8250;</button>
        </li>`
    );

    list.insertAdjacentHTML("beforeend", html.join(""));
}