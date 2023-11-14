const bannerSwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    spaceBetween: 0,
    speed: 3000,
    autoplay: {
        reverseDirection: false,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

});