const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/* Theme toggling feature */
const themeToggle = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme');

themeToggle.addEventListener('click', function() {
    if (themeLink.getAttribute('href') === 'styles.css') {
        themeLink.setAttribute('href', 'dark-theme.css');
    } else {
        themeLink.setAttribute('href', 'styles.css');
    }
});