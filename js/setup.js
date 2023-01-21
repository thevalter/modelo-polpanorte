var swiper = new Swiper(".scroll", {
    spaceBetween: 1,
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

swiper.navigation.nextEl.style.color = "#f8f9fa";
swiper.navigation.prevEl.style.color = "#f8f9fa";

var card = new Swiper(".card", {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 1
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 1
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 1
        }
    },
    spaceBetween: 2,
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination-card",
    },
    keyboard: true,
});

card.navigation.nextEl.style.color = "#f8f9fa";
card.navigation.prevEl.style.color = "#f8f9fa";