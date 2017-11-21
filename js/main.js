//burger-menu functionality

$(function() {
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
})

//team-acco

$(function() {
    $('.team__name').on('click', e => {
        e.preventDefault()

        const $this = $(e.currentTarget);
        const container = $this.closest('.team__list')
        const item = $this.closest('.team__item')
        const items = $('.team__item', container)
        const desc = $('.team__description', item)
        const otherContent = $('.team__description', container)
        const textBlock = $('.team__about', item)
        const reqHeight = textBlock.height()

        if (!item.hasClass('team__item--active')) {
            items.removeClass("team__item--active")
            item.addClass('team__item--active')

            otherContent.css({
                'height': 0
            })
            desc.css({
                'height': reqHeight
            })

        } else {
            item.removeClass('team__item--active')

            desc.css({
                'height': 0
            })
        }
    })
})

//menu-acco

$(function() {
    $('.menu__title').on('click', e => {
        e.preventDefault();

        const $this = $(e.currentTarget);
        const container = $this.closest('.menu__content')
        const item = $this.closest('.menu__item')
        const items = $('.menu__item', container)
        const occupation = $('.menu__occupation', item)
        const otherContent = $('.menu__occupation', container)
        const reqWidth = "540px"
        const textBlock = $('.menu__text', item)
        const otherTextBlocks = $('.menu__text', container)



        if (!item.hasClass('menu__item--active')) {
            items.removeClass('menu__item--active')
            item.addClass('menu__item--active')

            otherContent.css({
                "width": 0
            })
            occupation.css({
                "width": reqWidth
            })

            otherTextBlocks.css({
                "display": "none"
            })

            textBlock.css({
                "display": "block"
            })


        } else {
            item.removeClass('menu__item--active')

            occupation.css({
                'width': 0
            })

            textBlock.css({
                "display": "none"
            })
        }
    })
})