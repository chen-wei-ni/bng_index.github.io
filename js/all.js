const lenis = new Lenis()
lenis.on('scroll', (e) => {
    // console.log(e)
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf);

// header sticky
window.addEventListener("scroll", headerStick);
function headerStick() {
    const topBtn = document.querySelector(".scroll-top");
    const header = document.querySelector("header");
    list.classList.remove("showUp");
    list.classList.remove("showUp-f");
    if (window.scrollY > 0) {
        topBtn.classList.add("show-up")
        header.classList.add("scroll-down");
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        header.classList.remove("scroll-down");
        topBtn.classList.remove("show-up");
    };
};


// login area
const loginBtn = document.querySelectorAll(".login");
loginBtn.forEach((target) => {
    target.addEventListener("click", function (e) {
        e.preventDefault();
        lenis.stop();
        let loginPop = document.querySelector(".login-popup");
        let forgotPop = document.querySelector(".forgot-password-popup");
        let respond = document.querySelector(".email-sent-popup");
        let closeBtn = document.querySelectorAll(".login-close-btn");
        let i = loginPop.querySelectorAll("input");
        i.forEach((e) => {
            e.value = "";
        });
        loginPop.style.display = "flex";
        let forgotLink = loginPop.querySelector(".forgot-password");
        forgotLink.addEventListener("click", (e) => {
            e.preventDefault();
            loginPop.style.display = "none";
            forgotPop.style.display = "flex";
            forgotPop.querySelector("input").value = "";
        });
        let okBtn = respond.querySelector(".ok-btn");
        forgotPop.addEventListener("submit", (e) => {
            loginPop.style.display = "none";
            e.preventDefault();
            forgotPop.style.display = "none";
            respond.style.display = "flex";
        });
        okBtn.addEventListener("click", () => {
            respond.style.display = "none";
            lenis.start();
        })
        closeBtn.forEach((d) => {
            d.addEventListener("click", () => {
                loginPop.style.display = "none";
                forgotPop.style.display = "none";
                respond.style.display = "none";
                lenis.start();
            });
        });
    });
});

// lang switch
let list = document.querySelector(".switch-lang-list");
function switchLang() {
    const langSwitchTop = document.querySelector(".lang-top");
    const langSwitchBottom = document.querySelector(".lang-footer");
    langSwitchTop.addEventListener("click", (e) => {
        e.preventDefault();
        list.classList.remove("showUp-f");
        setTimeout(() => {
            list.classList.toggle("showUp");
        }, 50)
    });
    langSwitchBottom.addEventListener("click", (e) => {
        e.preventDefault();
        list.classList.remove("showUp");
        setTimeout(() => {
            list.classList.toggle("showUp-f");
        }, 50)
    })
}
switchLang();

// mobile menu
let menu = document.querySelector("nav");
function menuShow() {
    let btn = document.querySelector(" nav .menu-mb-icon");
    btn.addEventListener("click", function () {
        menu.classList.toggle("openMenu");
        // console.log(menu.className)
    });
    let lang = document.querySelector(".mb-lang");
    lang.addEventListener("click", function (e) {
        e.preventDefault();
        $(".switch-lang-list-mb").slideToggle();
    });
}
menuShow();

// footer資料顯現
function footerShow() {
    let a = document.querySelectorAll(".footer-info .mb h6")
    let b = document.querySelectorAll(".footer-info .mb p")
    for (let i = 0; i < 2; i++) {
        a[i].addEventListener("click", function () {
            $(b[i]).slideToggle();
        });
    }
}
footerShow();

// sliding droplist
function slideUp(target, duration) {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.overflow = 'hidden';
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
let slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

let slideToggle = (target, duration) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}


