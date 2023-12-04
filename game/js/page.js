// game頁面 上方banner swiper
const bannerSwiper = new Swiper('.swiper-container-pc', {
    slidesPerView: 1,
    direction: "horizontal",
    centeredSlides: false,
    paginationClickable: true,
    loop: true,
    spaceBetween: 0,
    speed: 1500,
    autoplay: {
        delay: 3000,
        reverseDirection: false,
        disableOnInteraction: false,
        waitForTransition: true,
        // pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }

});
const bannerSwiperMb = new Swiper('.swiper-container-mb', {
    slidesPerView: 'auto',
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
})

// icon animate rotate
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
            checkboxes[0].checked = false;
        } else {
            checkboxes[1].checked = false;
            checkboxes[2].checked = false;
            checkboxes[3].checked = false;
            checkboxes[4].checked = false;
            checkboxes[5].checked = false;
            checkboxes[6].checked = false;
        }
    })

}

let gamesData = [
    {
        "_id": 1,
        "name": "Crystal scarabs",
        "provider": "BNG",
        "theme": ["BuyFeature", "New", "High"],
        "image": "./images/game-ex1.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 2,
        "name": "Olaf Viking",
        "provider": "BNG",
        "theme": ["Hot", "New", "Medium", "HoldandWin"],
        "image": "./images/game-ex2.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 3,
        "name": "African Spirit",
        "provider": "BNG",
        "theme": ["Hot", "High"],
        "image": "./images/game-ex3.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 4,
        "name": "3 Hot Chillies",
        "provider": "BNG",
        "theme": ["Hot", "New", "Medium", "HoldandWin"],
        "image": "./images/game-ex4.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 5,
        "name": "777 Coins",
        "provider": "BNG",
        "theme": ["New", "Medium", "HoldandWin"],
        "image": "./images/game-ex5.jpg",
        "url": "./gamedemo.html"
    },

    {
        "_id": 6,
        "name": "Energy Coins",
        "provider": "Playson",
        "theme": ["BuyFeature", "New"],
        "image": "./images/game-ex6_300x300.png",
        "url": "./gamedemo.html"
    }
];

// 使用 map 遍歷 querySelectorAll
const rad = document.games.Providers;
const rad2 = document.games.Theme;
const allRad = document.games.querySelectorAll("input");
const gameArea = document.querySelector(".games-area");
const gameQuantity = document.querySelector(".game-quantity");
function showGames() {
    gameQuantity.textContent = gamesData.length;
    let show = "";
    for (let i = 0; i < gamesData.length; i++) {
        if (rad[0].checked && rad2[0].checked) {
            show += `<a href="${gamesData[i].url}" data-game="${gamesData[i].name}"><img src="${gamesData[i].image}"  alt="${gamesData[i].name}" class="hidden" /></a>`
        }
    }
    gameArea.innerHTML = show
}
showGames();

function filterItems(arr, query) {
    return arr.filter((el) => el.provider.toLowerCase().includes(query.value.toLowerCase()));
}
function filterItems2(arr, query) {
    return arr.filter((el) => el.theme.includes(query.value));
}
function sortFun() {
    let arr = [];
    let show = [];
    if (rad[0].checked) {
        if (rad2[0].checked) {
            gamesData.forEach((e) => {
                show += `<a href="${e.url}" class="hidden" data-game="${e.name}"><img src="${e.image}" alt="${e.name}" /></a>`
            })
            gameArea.innerHTML = show;
            gameQuantity.textContent = gamesData.length
        } else {
            for (let i = 1; i < rad2.length; i++) {
                if (rad2[i].checked) {
                    let game = "";
                    arr = filterItems2(gamesData, rad2[i])
                    show = show.concat(arr);
                    show.sort(function (a, b) {
                        return a._id - b._id
                    });
                    let uniqueArr = [...new Set(show)];
                    uniqueArr.forEach((u) => {
                        game += `<a href="${u.url}" class="hidden" data-game="${u.name}"><img src="${u.image}"  alt="${u.name}" /></a>`
                    });
                    gameArea.innerHTML = game;
                    gameQuantity.textContent = uniqueArr.length
                }
            }
        }
    } else {
        for (let i = 1; i < rad.length; i++) {
            if (rad[i].checked) {
                arr = filterItems(gamesData, rad[i]);
                if (rad2[0].checked == false) {
                    for (let j = 1; j < rad2.length; j++) {
                        if (rad2[j].checked) {
                            let game = "";
                            arr2 = filterItems2(arr, rad2[j])
                            show = show.concat(arr2);
                            show.sort(function (a, b) {
                                return a._id - b._id
                            });
                            let uniqueArr = [...new Set(show)];
                            uniqueArr.forEach((u) => {
                                game += `<a href="${u.url}" class="hidden" data-game="${u.name}"><img src="${u.image}" alt="${u.name}" /></a>`
                            });
                            gameArea.innerHTML = game;
                            gameQuantity.textContent = uniqueArr.length
                        }
                    }
                } else {
                    let game = "";
                    arr.forEach((a) => {
                        game += `<a href="${a.url}" class="hidden" data-game="${a.name}"><img src="${a.image}"  alt="${a.name}" /></a>`
                    });
                    gameArea.innerHTML = game;
                    gameQuantity.textContent = arr.length
                }
            }
        }
    }
}

allRad.forEach((e) => {
    e.addEventListener("change", sortFun);
});

// search input  
function filterFunction() {
    const input = document.getElementById('search-game');
    const filterItem = document.querySelectorAll('.games-area a');
    let num = 0
    for (let i = 0; i < filterItem.length; i++) {
        if (filterItem[i].dataset.game.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
            filterItem[i].style.display = "";
            num += 1
            gameQuantity.textContent = num;
        } else {
            filterItem[i].style.display = "none";
        }
    }
    if (num == 0) {
        gameQuantity.textContent = 0;
    }
}


