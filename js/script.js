document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
    } else {
        cookieConsent.style.display = 'none';
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });

    // Мобильное меню
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
    });

    mobileMenuOverlay.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    });
});
