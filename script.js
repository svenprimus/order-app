function toggleMenu() {
    const navRef = document.getElementById('nav-bar');
    if (navRef.classList.contains('nav-desk-invisible')) {
        navRef.classList.remove('nav-desk-invisible');
        navRef.classList.add('nav-desk-visible');
    } else if (navRef.classList.contains('nav-desk-visible')) {
        navRef.classList.remove('nav-desk-visible');
        navRef.classList.add('nav-desk-invisible');
    }
}

function toggleBasket() {
    const basketRef = document.getElementById('basket_wrapper');
    if (basketRef.classList.contains('fade_in')) {
        basketRef.classList.remove('fade_in');
        basketRef.classList.add('fade_out');
    } else if (basketRef.classList.contains('fade_out')) {
        basketRef.classList.remove('fade_out');
        basketRef.classList.add('fade_in');
    }
}

// function renderBasketCount()
// id="button-basket-overlay"  d_none
// id="button-basket-counter"

function toggleLike() {
    renderLikedButton();
    renderLikedCount();
}

function renderLikedButton() {
    const buttonRef = document.getElementById('button-star');
    if (buttonRef.classList.contains('button-star-liked')) {
        buttonRef.classList.add('button-star-default');
        buttonRef.classList.remove('button-star-liked');
    } else {
        buttonRef.classList.add('button-star-liked');
        buttonRef.classList.remove('button-star-default');
    }
}

function renderLikedCount() {
    const buttonRef = document.getElementById('button-star');
    const counterRef = document.getElementById('rating-counter');

    if (buttonRef.classList.contains('button-star-liked')) {
        counterRef.innerHTML = Number(counterRef.innerHTML) + 1;
    } else {
        counterRef.innerHTML = counterRef.innerHTML - 1;
    }
}
