let subtotal = 0;

function init() {
    renderCategoryNav();
    renderCategorySections();
    renderBasket();
    toggleBasketBySubtotal();
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
        setCategoryHeaderAside(categoryIndex);
    }
}

function setCategoryHeaderAside(categoryIndex) {
    const categoryRef = document.getElementById('category_headline_' + categoryIndex);
    categoryRef.innerHTML += donMenu[categoryIndex].aside ? ' <span>(' + donMenu[categoryIndex].aside + ')</span>' : '';
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

function getHasAmount() {
    return donMenu.flatMap((category) => category.items).filter((item) => item.amount > 0);
}

function renderBasketPricing() {
    subtotal = 0;
    const hasAmount = getHasAmount();
    for (let index = 0; index < hasAmount.length; index++) {
        subtotal += hasAmount[index].amount * hasAmount[index].price;
    }
    document.getElementById('payment_table_subtotal').innerHTML = subtotal.toFixed(2) + ' €';
    document.getElementById('payment_table_delivery').innerHTML = deliveryFee.toFixed(2) + ' €';
    document.getElementById('payment_table_total').innerHTML = (subtotal + deliveryFee).toFixed(2) + ' €';
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
    toggleBasketBySubtotal();
}

function increaseAmount(categoryIndex, itemIndex) {
    donMenu[categoryIndex].items[itemIndex].amount++;
    renderBasket();
    renderAddButton(categoryIndex, itemIndex);
}

function increaseAmountFromDesktop(categoryIndex, itemIndex) {
    donMenu[categoryIndex].items[itemIndex].amount++;
    renderBasket();
    renderAddButton(categoryIndex, itemIndex);
    toggleBasketBySubtotal();
}

function deleteItem(categoryIndex, itemIndex) {
    donMenu[categoryIndex].items[itemIndex].amount = 0;
    renderBasket();
    renderAddButton(categoryIndex, itemIndex);
    toggleBasketBySubtotal();
}

function completeOrder() {
    // TODO: show modal
    // TODO: reset amount and addbuttons
    // TODO: hide basket
}

function renderAddButton(categoryIndex, itemIndex) {
    const addButtonTextRefDesktop = document.getElementById('added_desktop_' + categoryIndex + '_' + itemIndex);
    const addButtonTextRefMobile = document.getElementById('added_mobile_' + categoryIndex + '_' + itemIndex);
    if (donMenu[categoryIndex].items[itemIndex].amount > 0) {
        addButtonTextRefDesktop.innerHTML = 'Added ' + donMenu[categoryIndex].items[itemIndex].amount;
        addButtonTextRefDesktop.setAttribute('style', 'color: var(--color-bg-shell);');
        addButtonTextRefMobile.innerHTML = 'Added ' + donMenu[categoryIndex].items[itemIndex].amount;
        addButtonTextRefMobile.setAttribute('style', 'color: var(--color-bg-shell);');
    } else {
        addButtonTextRefDesktop.innerHTML = 'Add to basket';
        addButtonTextRefDesktop.setAttribute('style', 'color: var(--color-font-dark);');
        addButtonTextRefMobile.innerHTML = 'Add to basket';
        addButtonTextRefMobile.setAttribute('style', 'color: var(--color-font-dark);');
    }
}

function renderBasketCount() {
    let totalAmount = 0;
    const hasAmount = getHasAmount();
    for (let index = 0; index < hasAmount.length; index++) {
        totalAmount += hasAmount[index].amount;
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

function toggleBasketBySubtotal() {
    subtotal > 0 ? showBasket() : hideBasket();
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
