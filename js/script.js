const swiper = new Swiper('.main-block__slider', {
    loop: true,
    navigation: {
        nextEl: '.main-block__arrow.swiper-button-next',
        prevEl: '.main-block__arrow.swiper-button-prev',
    },
});
document.querySelector('.swiper-button-prev').addEventListener('click', function () {
    swiper.slidePrev(); // Go to the previous slide
});

document.querySelector('.swiper-button-next').addEventListener('click', function () {
    swiper.slideNext(); // Go to the next slide
});

$( function() {
    $( "#tabs" ).tabs();
} );

$(document).ready(function(){
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__list').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});

