function toggleMenu() {
    const navRef = document.getElementById('nav-bar');
    if (navRef.classList.contains('nav-invisible')) {
        navRef.classList.remove('nav-invisible');
        navRef.classList.add('nav-visible');
    } else if (navRef.classList.contains('nav-visible')) {
        navRef.classList.remove('nav-visible');
        navRef.classList.add('nav-invisible');
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
