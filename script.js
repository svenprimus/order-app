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

// function renderBasketCount()
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
