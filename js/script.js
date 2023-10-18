var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper_2", {
    slidesPerView: 3,
    spaceBetween: 100,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
    },
});

