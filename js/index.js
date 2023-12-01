window.addEventListener("scroll", () => {
    scrollShowPrint();
    opacityFilm();
});
// top film
function opacityFilm() {
    const videoFrame = document.querySelector(".top_film");
    const hotGame = document.getElementById("hot-games");
    a = function (e, t) {
        return Math.round(e * t) / t
    }
    videoFrame.style.opacity = Math.min(1, Math.max(a(1 - window.scrollY / (.8 * videoFrame.offsetHeight), 100), 0));
    //     videoFrame.offsetHeight < window.scrollY && (hotGame.style.opacity = Math.min(1, a(Math.max(window.scrollY - .5 * videoFrame.offsetHeight, 0) / (.5 * videoFrame.offsetHeight), 100)))
    // console.log(hotGame.style.opacity = Math.min(1, a(Math.max(window.scrollY - .5 * videoFrame.offsetHeight, 0) / (.5 * videoFrame.offsetHeight), 100)))
}

// game 輪播
const gameSlider = document.querySelector(".slide");
const gameSlide = document.querySelectorAll(".swiper-slide");
let mySwiper = new Swiper(".swiper-container1", {
    direction: "horizontal",
    resistanceRatio: 0,
    loop: true,
    allowTouchMove: false,
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 20,
    speed: 2500,
    autoplay: {
        delay: 0,
        reverseDirection: true,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            allowTouchMove: true,
        },
        640: {
            slidesPerView: 4
        },
        800: {
            slidesPerView: 5
        },
        960: {
            slidesPerView: 6
        },
        1280: {
            slidesPerView: 7
        },

    },

});

//if mouseover the slide will stop
gameSlider.addEventListener("mouseover", loadingStop);
gameSlider.addEventListener("mouseleave", loadingStart);
function loadingStop() {
    // let a = Math.abs(Math.abs(this.swiper.getTranslate()) - Math.abs(this.swiper.translate)/ 170*2500)
    // this.swiper.translate为過渡结束的位移，this.swiper.getTranslate()为當前實時的位移，this.slideWidth為slide的寬度px
    // 計算之后平滑移动到this.swiper.translate需要的速度，並儲存下来
    this.swiper.setTranslate(this.swiper.getTranslate())
    this.swiper.autoplay.stop();
}
function loadingStart() {
    mySwiper.autoplay.start();
    let s = "";
    if (window.innerWidth < 1280) {
        s = Math.abs(Math.abs(this.swiper.getTranslate()) - Math.abs(this.swiper.translate) / 380 * 2500);
        console.log(s)
        this.swiper.slideTo(this.swiper.activeIndex, s);
    } else if (window.innerWidth < 960) {
        s = Math.abs(Math.abs(this.swiper.getTranslate()) - Math.abs(this.swiper.translate) / 150 * 2500);
        this.swiper.slideTo(this.swiper.activeIndex, s);
    } else {
        s = Math.abs(Math.abs(this.swiper.getTranslate()) - Math.abs(this.swiper.translate) / 170 * 2500)
        this.swiper.slideTo(this.swiper.activeIndex, s);
    }
    // 使用剛才計算出的速度，移動到當前slide，即將當前slide的移動到頭部的動畫完成，開啟autoplay
}

// run 0 to 100%
let value1 = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0
}
const everyValue = document.querySelectorAll(".eachValue strong");
const observer = new IntersectionObserver(items => {
    items.forEach((item) => {
        if (item.isIntersecting) {
            anime({
                targets: value1,
                a: 134,
                b: 100,
                c: 19,
                d: 24,
                e: 7,
                f: 26,
                round: 1,
                easing: 'linear',
                update: function () {
                    everyValue[0].innerHTML = JSON.stringify(value1.a) + "+";
                    everyValue[1].innerHTML = JSON.stringify(value1.b) + "+";
                    everyValue[2].innerHTML = JSON.stringify(value1.c) + "+";
                    everyValue[3].innerHTML = JSON.stringify(value1.d);
                    everyValue[4].innerHTML = JSON.stringify(value1.e);
                    everyValue[5].innerHTML = JSON.stringify(value1.f) + "+";
                }
            });
        }
    });
});
everyValue.forEach((el) => observer.observe(el));

// 切換our features
const featureButtons = document.querySelectorAll(".switch-icon");
function featureSwitch() {
    featureButtons.forEach((i) => {
        let updateTitle = document.querySelector(".feature-desc h4");
        let updateContent = document.querySelector(".feature-desc span");
        let pc = document.querySelectorAll(".switch-content-pc");
        let mb = document.querySelectorAll(".switch-content-mb");
        i.addEventListener("click", () => {
            for (let y = 0; y < featureButtons.length; y++) {
                featureButtons[y].classList.remove("feature-selected");
            }
            let f = i.dataset.feature;
            const slideAnimateMb = [
                {
                    transform: 'rotateY(0deg)',
                    filter: 'brightness(30%) blur(4px)',
                },
                { transform: 'rotateY(90deg)' },
                {
                    opacity: 1
                }
            ]
            const slideTiming = {
                duration: 550,
                iterations: 1,
            }
            // pc.animate(slideAnimate, slideTiming);
            // mb.animate(slideAnimate, slideTiming);
            for (let m = 0; m < mb.length; m++) {
                pc[m].classList.remove("gradually-dark");
                mb[m].classList.remove("gradually-dark");
                switch (f) {
                    case "Tournament":
                        i.classList.add("feature-selected");
                        updateTitle.textContent = "Tournament";
                        updateContent.innerHTML = "Tournament is a promotional mode in which players compete on leaderboards. Players can compete for rankings and attractive rewards through various competitive conditions. This can significantly increase revenue for operators in a short period and is one of the hot promotional tools in BNG"
                        // pc.innerHTML = `<img src="images/index_feature/Tournament/Screen/en/tournament_en_desktop.JPG" alt="" />`
                        pc[0].animate(slideAnimateMb, slideTiming);
                        pc[m].style.zIndex = "1";
                        pc[4].classList.add("gradually-dark");
                        pc[0].style.zIndex = "3";
                        // mb.innerHTML = `<img src="images/others/tour_mb.png" alt="" />`
                        mb[0].animate(slideAnimateMb, slideTiming);
                        mb[m].style.zIndex = "1";
                        mb[4].classList.add("gradually-dark");
                        mb[0].style.zIndex = "3";
                        break;
                    case "prize_drop":
                        i.classList.add("feature-selected");
                        updateTitle.textContent = "Prize Drop";
                        updateContent.innerHTML = " Prize Drop is a promotional tool that provide random rewards for players who meet the participation criteria and continue to bet in BNG games. It is undoubtedly one of the most effective promotion tools in BNG for increasing player engagement."
                        // pc.innerHTML = `<img src="images/index_feature/Prize Drops/Screen/en/prize drop_en_desktop.JPG" alt="" />`
                        pc[1].animate(slideAnimateMb, slideTiming);
                        pc[m].style.zIndex = "1";
                        pc[0].style.zIndex = "2";
                        pc[0].classList.add("gradually-dark");
                        pc[1].style.zIndex = "3";
                        // mb.innerHTML = `<img src="images/others/prize_mb.png" alt="" />`
                        mb[1].animate(slideAnimateMb, slideTiming);
                        mb[m].style.zIndex = "1";
                        mb[0].style.zIndex = "2";
                        mb[0].classList.add("gradually-dark");
                        mb[1].style.zIndex = "3";
                        break;
                    case "Flip_to_Win":
                        i.classList.add("feature-selected");
                        updateTitle.textContent = "Flip to Win";
                        updateContent.innerHTML = " Flip to Win is a task-based promotional tool.players upon meeting specific conditions can earn a chance to flip a card. Flipping the card can result in a high bonus multiplier, making it an irresistible guaranteed reward for players."
                        // pc.innerHTML = `<img src="images/index_feature/Flip to Win/screen/en/flip to win_en_desktop.JPG" alt="" />`
                        pc[2].animate(slideAnimateMb, slideTiming);
                        pc[m].style.zIndex = "1";
                        pc[1].style.zIndex = "2";
                        pc[1].classList.add("gradually-dark");
                        pc[2].style.zIndex = "3";
                        // mb.innerHTML = `<img src="images/others/flip_mb.png" alt="" />`
                        mb[2].animate(slideAnimateMb, slideTiming);
                        mb[m].style.zIndex = "1";
                        mb[1].style.zIndex = "2";
                        mb[1].classList.add("gradually-dark");
                        mb[2].style.zIndex = "3";
                        break;
                    case "FreeBet_Feature":
                        i.classList.add("feature-selected");
                        updateTitle.textContent = "FreeBet Feature";
                        updateContent.innerHTML = " You can reward your players through BNG’s free spins feature, which makes them more loyal to the game, and players will bring you unparalleled reciprocation."
                        // pc.innerHTML = `<img src="images/index_feature/Freebet_Flexible Freebet/screen/en/FREEBET_desktop_en.JPG" alt="" />`
                        pc[3].animate(slideAnimateMb, slideTiming);
                        pc[m].style.zIndex = "1";
                        pc[2].style.zIndex = "2";
                        pc[2].classList.add("gradually-dark");
                        pc[3].style.zIndex = "3";
                        // mb.innerHTML = `<img src="images/others/freebetmb.png" alt="" />`
                        mb[3].animate(slideAnimateMb, slideTiming);
                        mb[m].style.zIndex = "1";
                        mb[2].style.zIndex = "2";
                        mb[2].classList.add("gradually-dark");
                        mb[3].style.zIndex = "3";
                        break;
                    case "Feature_Trigger":
                        i.classList.add("feature-selected");
                        updateTitle.textContent = "Feature Trigger";
                        updateContent.innerHTML = " In addition to normal spin, we also offer more attractive feature triggers. Players who receive rewards will be able to directly play the main bonus/freespin functions of the game, allowing players to experience the most exciting part of the game."
                        // pc.innerHTML = `<img src="images/index_feature/Feature Triggers/screen/en/Feature trigger_desktop_en.JPG" alt="" />`
                        pc[4].animate(slideAnimateMb, slideTiming);
                        pc[m].style.zIndex = "1";
                        pc[3].style.zIndex = "2";
                        pc[3].classList.add("gradually-dark");
                        pc[4].style.zIndex = "3";
                        // mb.innerHTML = `<img src="images/others/feature_mb.png" alt="" />`
                        mb[4].animate(slideAnimateMb, slideTiming);
                        mb[m].style.zIndex = "1";
                        mb[3].style.zIndex = "2";
                        mb[3].classList.add("gradually-dark");
                        mb[4].style.zIndex = "3";
                        break;
                }
            }
        })
    })
}
featureSwitch();

// mobile 切換our features
const mbSwiper = new Swiper('.feature-slide-mb', {
    // loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

// news 輪播
let newsSwiper = new Swiper(".swiper-news-container", {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 1,
    slidesPerGroupSkip: 0,
    spaceBetween: 20,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
    },
    navigation: true,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        320: {
            spaceBetween: 10,
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        640: {
            slidesPerGroup: 3,
            slidesPerView: 3,
        },
        1000: {
            slidesPerGroup: 4,
            slidesPerView: 4,
        },
        1280: {
            slidesPerGroup: 5,
            slidesPerView: 5,
            // slidesPerGroupSkip: 1,
        },

    }
})
// logo 輪播
let partnerLogo = new Swiper(".swiper-container2", {
    direction: "horizontal",
    loop: true,
    noSwiping: true,
    noSwipingClass: "swiper-wrapper",
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2500,
    /* effect: "slide", */
    autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: false
    },
    breakpoints: {
        280: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 4
        },
        800: {
            slidesPerView: 5
        },
        960: {
            slidesPerView: 6
        },
        1280: {
            slidesPerView: 9,
        },

    }
})

// scroll to showUp
function scrollShowPrint() {
    const desc = document.querySelectorAll(".desc");
    const v = document.querySelector(".bng-introduce-desc");
    const featureIcon = document.querySelectorAll(".switch-icon");
    const man = document.querySelector("figure");
    let windowHeight = window.scrollY + window.innerHeight;
    desc.forEach((d) => {
        // 要吃到父組件的高度
        let h = d.offsetParent.offsetHeight / 2.2 + d.offsetParent.offsetTop;
        if (windowHeight > h) {
            d.classList.add("showUp");
        } else {
            return
        }
    });
    let vh = v.offsetParent.offsetHeight / 2.2 + v.offsetParent.offsetTop;
    if (windowHeight > vh) {
        v.classList.add("showUp");
    }
    let mh = man.offsetParent.offsetParent.offsetHeight + man.offsetParent.offsetParent.offsetTop;
    if (windowHeight > mh - 100) {
        man.classList.add("showUp");
    }
    if (window.innerWidth > 767) {
        featureIcon.forEach((f) => {
            let fh = f.offsetParent.offsetHeight / 2.2 + f.offsetParent.offsetTop;
            if (windowHeight > fh) {
                f.classList.add("showUp");
            } else {
                return
            }
        });
    } else {
        return
    }
}
