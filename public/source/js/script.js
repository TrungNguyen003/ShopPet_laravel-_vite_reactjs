var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});