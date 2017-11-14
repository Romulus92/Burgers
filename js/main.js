var burgerMenu = document.getElementById('hamburger-menu--active')
var buttonBurger = document.getElementById('hamburger-menu-link--onclick')
var closeBurger = document.getElementById('hamburger__close')

buttonBurger.addEventListener('click', function() {
    burgerMenu.classList.add('hamburger-menu__visible')
})

closeBurger.addEventListener('click', function() {
    burgerMenu.classList.remove('hamburger-menu__visible')
})