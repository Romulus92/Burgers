var burgerMenu = document.getElementById('hamburger-menu--active')
var buttonBurger = document.getElementById('hamburger-menu-link--onclick')
var closeBurger = document.getElementById('hamburger__close')

buttonBurger.addEventListener('click', function() {
    burgerMenu.classList.add('hamburger-menu__visible')
})

closeBurger.addEventListener('click', function() {
    burgerMenu.classList.remove('hamburger-menu__visible')
})

$(document).mouseup(function(e) {
    if (!burgerMenu.hasAttribute(e.target).length) {
        burgerMenu.classList.remove('hamburger-menu__visible')
    }
});

$(document).keyup(function(e) {
    if (e.which == 27) {
        burgerMenu.classList.remove('hamburger-menu__visible')
    }
})