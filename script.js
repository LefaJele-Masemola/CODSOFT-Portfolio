document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    // Check if elements exist before adding event listeners
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function () {
            navList.classList.toggle('show');
        });
    }
});
