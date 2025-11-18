// Slider principal del header
const swiper1 = new Swiper(".mySwiper-1", {
    loop: true,
    navigation: {
    nextEl: ".mySwiper-1 .swiper-button-next",
    prevEl: ".mySwiper-1 .swiper-button-prev",
    },
    pagination: {
    el: ".mySwiper-1 .swiper-pagination",
    clickable: true,
    },
});

// Slider de productos
const swiper2 = new Swiper(".mySwiper-2", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
    nextEl: ".mySwiper-2 .swiper-button-next",
    prevEl: ".mySwiper-2 .swiper-button-prev",
    },
    breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
    },
});

