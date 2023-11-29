// show hidden item
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// 切換頁面 filter news
const switchButton = document.querySelectorAll(".switch-page ul li a");
switchButton.forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        for (let i = 0; i < switchButton.length; i++) {
            switchButton[i].classList.remove("selected");
        }
        el.classList.add("selected");
        for (let i = 0; i < hiddenElements.length; i++) {
            if (el.dataset.name == hiddenElements[i].dataset.news) {
                hiddenElements[i].style.display = "";
            } else if (el.dataset.name == "all") {
                hiddenElements[i].style.display = "";
            } else {
                hiddenElements[i].style.display = "none";
            }
        }
    }
    )
});

// news popup
const news = document.querySelectorAll(".hidden a");
const popup = document.querySelector(".news-popup");
const close = document.querySelector(".close-btn");
close.addEventListener('click', () => {
    popup.style.display = "none"
});
news.forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        popup.style.display = "flex";
    });
});