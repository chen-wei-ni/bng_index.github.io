// show hidden item
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
let hiddenElements = document.querySelectorAll(".hidden");
const switchButton = document.querySelectorAll(".switch-page ul li a");
hiddenElements.forEach((el) => observer1.observe(el));
sortNews(hiddenElements);

// 切換頁面 filter news
function sortNews(hiddenElements) {
    switchButton.forEach((el) => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            for (let i = 0; i < switchButton.length; i++) {
                switchButton[i].classList.remove("selected");
            }
            el.classList.add("selected");
            for (let i = 0; i < hiddenElements.length; i++) {
                if (el.dataset.name === hiddenElements[i].dataset.news) {
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
}

