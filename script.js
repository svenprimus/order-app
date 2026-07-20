function toggleMenu() {
    const navRef = document.getElementById('nav_bar');
    if (navRef.classList.contains('nav_desk_invisible')) {
        navRef.classList.remove('nav_desk_invisible');
        navRef.classList.add('nav-desk-visible');
    } else if (navRef.classList.contains('nav-desk-visible')) {
        navRef.classList.remove('nav-desk-visible');
        navRef.classList.add('nav_desk_invisible');
    }
}

function toggleBasket() {
    const basketRef = document.getElementById('basket_wrapper');
    if (basketRef.classList.contains('fade_in')) {
        basketRef.classList.remove('fade_in');
        basketRef.classList.add('fade_out');
        document.getElementById('body').classList.remove('scroll_none');
    } else if (basketRef.classList.contains('fade_out')) {
        basketRef.classList.remove('fade_out');
        basketRef.classList.add('fade_in');
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
