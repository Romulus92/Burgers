//fullpage scroll

$(document).ready(function() {
    $('.maincontent').fullpage({
        anchors: ['hero', 'best', 'burgers', 'team', 'menu', 'reviews', 'order', 'contacts'],
        menu: '#pagination',
        responsiveWidth: 768,
    });
});


//slick-slider

$(document).ready(function() {
    $('.burger-list').slick({
        draggable: false,
        fade: true,
        nextArrow: $('.slider--left'),
        prevArrow: $('.slider--right')
    });

});

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
        const occupations = $('.menu__occupation', container)
        const otherContent = $('.menu__occupation', container)
        const occupationActive = $('menu__occupation--active')
        const reqWidth = occupationActive.width();
        const textBlock = $('.menu__text', item)
        const otherTextBlocks = $('.menu__text', container)



        if (!item.hasClass('menu__item--active')) {
            items.removeClass('menu__item--active')
            occupations.removeClass('menu__occupation--active')
            item.addClass('menu__item--active')
            occupation.addClass('menu__occupation--active')



            otherTextBlocks.css({
                "display": "none"
            })

            textBlock.css({
                "display": "block"
            })


        } else {
            item.removeClass('menu__item--active')
            occupation.removeClass('menu__occupation--active')

            textBlock.css({
                "display": "none"
            })
        }
    })
})

//fancybox
$(function() {
    $("[data-fancybox]").fancybox({
        smallBtn: false
    })
})

$(function() {
    $('.send__button').on('click', e => {
        e.preventDefault()
        $.fancybox.close()
    })
})

$(function() {
    $('.full-review__close').on('click', e => {
        e.preventDefault()
        $.fancybox.close()
    })
})

//map
$(function() {
    ymaps.ready(init);
    var myMap
    myPlacemark1;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [54.73999391, 55.98245766],
            zoom: 16
        });

        myMap.behaviors.disable([
            'scrollZoom'
        ]);

        myPin = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-3, -42]
        });

        myPlacemark1 = new ymaps.Placemark([54.74089089, 55.99222626], {
            balloonContentHeader: 'Лучшая в Уфе бургерная',
            balloonContentBody: 'Ждем вас каждый день с 10.00 до 22.00',
            balloonContentFooter: 'ул.Бессонова',
            hintContent: 'Бургерная'
        });

        myPin.add(myPlacemark1);
        myMap.geoObjects.add(myPin);
    }
})