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
            renderAddButton(categoryIndex, itemIndex);
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
    renderBasketCount();
}

function renderBasketPricing() {
    let subtotal = 0;
    for (let categoryIndex = 0; categoryIndex < donMenu.length; categoryIndex++) {
        for (let itemIndex = 0; itemIndex < donMenu[categoryIndex].items.length; itemIndex++) {
            subtotal += donMenu[categoryIndex].items[itemIndex].amount * donMenu[categoryIndex].items[itemIndex].price;
        }
    }
    document.getElementById('payment_table_subtotal').innerHTML = subtotal.toFixed(2) + ' €';
    document.getElementById('payment_table_delivery').innerHTML = deliveryFee.toFixed(2) + ' €';
    document.getElementById('payment_table_total').innerHTML = (subtotal + deliveryFee).toFixed(2) + ' €';

    if (subtotal > 0) {
        showBasket();
    } else {
        hideBasket();
    }
}

function renderBasketDecreaseButton(categoryIndex, itemIndex) {
    const buttonRef = document.getElementById('button_decrease_' + categoryIndex + '_' + itemIndex);
    const trashRef = document.getElementById('button_trash_' + categoryIndex + '_' + itemIndex);
    if (donMenu[categoryIndex].items[itemIndex].amount > 1) {
        buttonRef.innerHTML = '-';
        buttonRef.classList.remove('button_trash_img');
        trashRef.classList.remove('d_none');
    } else {
        buttonRef.innerHTML = '';
        buttonRef.classList.add('button_trash_img');
        trashRef.classList.add('d_none');
    }
}

function decreaseAmount(categoryIndex, itemIndex) {
    if (donMenu[categoryIndex].items[itemIndex].amount > 0) {
        donMenu[categoryIndex].items[itemIndex].amount--;
    }
    renderBasket();
    renderAddButton(categoryIndex, itemIndex);
}

function increaseAmount(categoryIndex, itemIndex) {
    donMenu[categoryIndex].items[itemIndex].amount++;
    renderBasket();
    renderAddButton(categoryIndex, itemIndex);
}

function deleteItem(categoryIndex, itemIndex) {
    donMenu[categoryIndex].items[itemIndex].amount = 0;
    renderBasket();
    renderAddButton(categoryIndex, itemIndex);
}

function completeOrder() {
    // TODO: show modal
    // TODO: reset amount and addbuttons
    // TODO: hide basket
}

function renderAddButton(categoryIndex, itemIndex) {
    const addButtonTextRef = document.getElementById('added_' + categoryIndex + '_' + itemIndex);
    if (donMenu[categoryIndex].items[itemIndex].amount > 0) {
        addButtonTextRef.innerHTML = 'Added ' + donMenu[categoryIndex].items[itemIndex].amount;
        addButtonTextRef.setAttribute('style', 'color: var(--color-bg-shell);');
    } else {
        addButtonTextRef.innerHTML = 'Add to basket';
        addButtonTextRef.setAttribute('style', 'color: var(--color-font-dark);');
    }
}

function renderBasketCount() {
    let totalAmount = 0;
    for (let categoryIndex = 0; categoryIndex < donMenu.length; categoryIndex++) {
        for (let itemIndex = 0; itemIndex < donMenu[categoryIndex].items.length; itemIndex++) {
            if (donMenu[categoryIndex].items[itemIndex].amount > 0) {
                totalAmount += donMenu[categoryIndex].items[itemIndex].amount;
            }
        }
    }
    if (totalAmount > 0) {
        document.getElementById('button_basket_overlay').classList.remove('d_none');
        document.getElementById('button_basket_counter').innerHTML = totalAmount;
    } else {
        document.getElementById('button_basket_overlay').classList.add('d_none');
    }
}

function renderLikedButton() {
    const buttonRef = document.getElementById('button_star');
    if (buttonRef.classList.contains('button_star_liked')) {
        buttonRef.classList.add('button_star_default');
        buttonRef.classList.remove('button_star_liked');
    } else {
        buttonRef.classList.add('button_star_liked');
        buttonRef.classList.remove('button_star_default');
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

function toggleLike() {
    renderLikedButton();
    renderLikedCount();
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
        hideBasket();
    } else if (basketRef.classList.contains('move_out_basket')) {
        showBasket();
    }
}

function hideBasket() {
    const basketRef = document.getElementById('basket_wrapper');
    basketRef.classList.remove('move_in_basket');
    basketRef.classList.add('move_out_basket');
    document.getElementById('body').classList.remove('scroll_none');
}

function showBasket() {
    const basketRef = document.getElementById('basket_wrapper');
    basketRef.classList.remove('move_out_basket');
    basketRef.classList.add('move_in_basket');
    document.getElementById('body').classList.add('scroll_none');
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
