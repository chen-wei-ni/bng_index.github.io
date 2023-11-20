// header sticky
window.addEventListener("scroll", () => {
    const topBtn = document.querySelector(".scroll-top");
    const header = document.querySelector("header");
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
    }
});

// login area
const loginBtn = document.querySelectorAll(".login");
loginBtn.forEach((target) => {
    target.addEventListener("click", function (e) {
        e.preventDefault();
        let a = document.querySelector(".login-popup");
        let b = document.querySelector(".forgot-password-popup");
        let r = document.querySelector(".email-sent-popup");
        let c = document.querySelectorAll(".login-close-btn");
        let i = a.querySelectorAll("input");
        i.forEach((e) => {
            e.value = "";
        })
        a.style.display = "flex";
        let f = a.querySelector(".forgot-password");
        let rb = b.querySelector(".reset-btn");
        f.addEventListener("click", (e) => {
            e.preventDefault();
            a.style.display = "none";
            b.style.display = "flex";
            b.querySelector("input").value = "";
        });
        let okBtn = r.querySelector(".ok-btn");
        rb.addEventListener("click", () => {
            a.style.display = "none";
            b.style.display = "none";
            r.style.display = "flex";
        });
        okBtn.addEventListener("click", () => {
            r.style.display = "none";
        })
        c.forEach((d) => {
            d.addEventListener("click", () => {
                a.style.display = "none";
                b.style.display = "none";
                r.style.display = "none";
            });
        });
    });
});

// lang switch
function switchLang() {
    const langSwitch = document.querySelectorAll(".lang");
    let list = document.querySelector(".switch-lang-list");
    langSwitch.forEach((e) => {
        e.addEventListener("click", (e) => {
            e.preventDefault();
            list.classList.toggle("showUp");
        });
    })

}
switchLang();

// mobile menu
let menu = document.querySelector("nav");
function menuShow() {
    let btn = document.querySelector(" nav .menu-mb-icon");
    btn.addEventListener("click", function () {
        menu.classList.toggle("openMenu");
        console.log(menu.className)
    });
    let lang = document.querySelector(".mb-lang");
    lang.addEventListener("click", function (e) {
        e.preventDefault();
        slideToggle(document.querySelector(".switch-lang-list-mb"), 200);
    });
}
menuShow();

// footer資料顯現
function footerShow() {
    let a = document.querySelectorAll(".footer-info .mb h6")
    let b = document.querySelectorAll(".footer-info .mb p")
    for (let i = 0; i < 2; i++) {
        a[i].addEventListener("click", function () {
            slideToggle(b[i], 200);
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