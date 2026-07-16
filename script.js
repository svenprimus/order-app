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