// game頁面 上方banner
const bannerSwiper = new Swiper('.swiper-container-pc', {
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
const bannerSwiperMb = new Swiper('.swiper-container-mb', {
    slidesPerView: 1,
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    spaceBetween: 0,
    speed: 2000,
    autoplay: {
        reverseDirection: false,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
})

//篩選遊戲
const rad = document.games.Providers;
const rad2 = document.games.Theme;
let gs = document.querySelectorAll(".games-area a");
