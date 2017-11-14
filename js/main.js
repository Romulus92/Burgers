var burgerMenu = document.getElementById('hamburger-menu--active')
var buttonBurger = document.getElementById('hamburger-menu-link--onclick')

buttonBurger.addEventListener('click', function() {
    burgerMenu.classList.add('hamburger-menu__visible')
})