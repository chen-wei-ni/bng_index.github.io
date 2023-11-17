// game頁面 上方banner
const bannerSwiper = new Swiper('.swiper-container-pc', {
    slidesPerView: 1,
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    spaceBetween: 0,
    speed: 1500,
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

const gameFilter = document.games;
const filterHideBtn = document.querySelectorAll(".icon figure");
for (let i = 0; i < filterHideBtn.length; i++) {
    filterHideBtn[i].addEventListener('click', function () {
        let click = document.querySelectorAll(".icon figure div")
        click.forEach((e) => { e.style.display = "none" })
        const animate = [
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(180deg)' }
        ]
        const time = {
            duration: 500,
            iterations: 1
        }
        let s = window.getComputedStyle(gameFilter, null).getPropertyValue("display");
        if (s == "none") {
            filterHideBtn[i].animate(animate, time);
            slideDown(gameFilter, 200);
        }
        else {
            filterHideBtn[i].animate(animate, time);
            slideUp(gameFilter, 200);
        }
    })
}
//篩選遊戲

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function () {
        if (i != 0) {
            checkboxes[0].checked = false
        } else if (i == 0) {
            checkboxes[0].checked = true
            checkboxes[1].checked = false
            checkboxes[2].checked = false
            checkboxes[3].checked = false
            checkboxes[4].checked = false
            checkboxes[5].checked = false
            checkboxes[6].checked = false
        }
    })

}


const rad = document.games.Providers;
const rad2 = document.games.Theme;
let gs = document.querySelectorAll(".games-area a");
