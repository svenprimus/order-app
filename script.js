function init() {
    renderCategoryNav();
    renderCategorySections();
    renderBasket();
}

function renderCategoryNav() {
    const navRef = document.getElementById('content_main_nav_list');
    navRef.innerHTML = '';
    for (let i = 0; i < donMenu.length; i++) {
        navRef.innerHTML += getCategoryHeaderItem(i);
    }
}

function renderCategorySections() {
    const contentRef = document.getElementById('content_wrapper');
    contentRef.innerHTML = '';
    for (let categoryIndex = 0; categoryIndex < donMenu.length; categoryIndex++) {
        contentRef.innerHTML += getCategoryHeader(categoryIndex);
        contentRef.innerHTML += getCategoryContentWrapper(categoryIndex);
        const categoryRef = document.getElementById('category_content_' + categoryIndex);
        for (let itemIndex = 0; itemIndex < donMenu[categoryIndex].items.length; itemIndex++) {
            categoryRef.innerHTML += getCategoryContentItem(categoryIndex, itemIndex);
        }
    }
}

function renderBasket() {
    renderBasketItems();
    renderBasketPricing();
}

function renderBasketItems() {
    const basketListRef = document.getElementById('basket_list');
    basketListRef.innerHTML = '';
    for (let categoryIndex = 0; categoryIndex < donMenu.length; categoryIndex++) {
        for (let itemIndex = 0; itemIndex < donMenu[categoryIndex].items.length; itemIndex++) {
            if (donMenu[categoryIndex].items[itemIndex].amount > 0) {
                basketListRef.innerHTML += getBasketItem(categoryIndex, itemIndex);
                renderBasketDecreaseButton(categoryIndex, itemIndex);
            }
        }
    }
}

function renderBasketDecreaseButton(categoryIndex, itemIndex) {
    const buttonRef = document.getElementById('button_decrease_' + categoryIndex + '_' + itemIndex);
    if (donMenu[categoryIndex].items[itemIndex].amount > 1) {
        buttonRef.innerHTML = '';
        buttonRef.classList.add('button_trash');
    } else {
        buttonRef.innerHTML = '-';
        buttonRef.classList.remove('button_trash');
    }
}

// function renderBasketCount() {

// }
// id="button_basket_overlay"  d_none
// id="button_basket_counter"

function toggleLike() {
    renderLikedButton();
    renderLikedCount();
}

function renderLikedButton() {
    const buttonRef = document.getElementById('button_star');
    if (buttonRef.classList.contains('button_star_liked')) {
        buttonRef.classList.add('button_star-default');
        buttonRef.classList.remove('button_star_liked');
    } else {
        buttonRef.classList.add('button_star_liked');
        buttonRef.classList.remove('button_star-default');
    }
}

function renderLikedCount() {
    const buttonRef = document.getElementById('button_star');
    const counterRef = document.getElementById('rating_counter');

    if (buttonRef.classList.contains('button_star_liked')) {
        counterRef.innerHTML = Number(counterRef.innerHTML) + 1;
    } else {
        counterRef.innerHTML = counterRef.innerHTML - 1;
    }
}

function toggleMenu() {
    const navRef = document.getElementById('nav_bar');
    if (navRef.classList.contains('nav_desk_invisible')) {
        navRef.classList.remove('nav_desk_invisible');
        navRef.classList.add('nav_desk_visible');
    } else if (navRef.classList.contains('nav_desk_visible')) {
        navRef.classList.remove('nav_desk_visible');
        navRef.classList.add('nav_desk_invisible');
    }
}

function toggleBasket() {
    const basketRef = document.getElementById('basket_wrapper');
    if (basketRef.classList.contains('move_in_basket')) {
        basketRef.classList.remove('move_in_basket');
        basketRef.classList.add('move_out_basket');
        document.getElementById('body').classList.remove('scroll_none');
    } else if (basketRef.classList.contains('move_out_basket')) {
        basketRef.classList.remove('move_out_basket');
        basketRef.classList.add('move_in_basket');
        document.getElementById('body').classList.add('scroll_none');
    }
}

function toggleCategoryNavView() {
    const navRef = document.getElementById('content_main_nav_list');
    if (navRef.classList.contains('move_out_categories')) {
        navRef.classList.add('move_in_categories');
        navRef.classList.remove('move_out_categories');
    } else {
        navRef.classList.add('move_out_categories');
        navRef.classList.remove('move_in_categories');
    }
}
