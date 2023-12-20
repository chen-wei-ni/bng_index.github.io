// game頁面 上方banner swiper
const bannerSwiper = new Swiper('.swiper-container-pc', {
    slidesPerView: 'auto',
    resistanceRatio: 0,
    slidesPerGroup: 1,
    paginationClickable: true,
    loop: true,
    spaceBetween: 0,
    speed: 1500,
    autoplay: {
        delay: 3000,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }

});
const bannerSwiperMb = new Swiper('.swiper-container-mb', {
    slidesPerView: 'auto',
    resistanceRatio: 0,
    slidesPerGroup: 1,
    paginationClickable: true,
    loop: true,
    spaceBetween: 0,
    speed: 1500,
    autoplay: {
        delay: 500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

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
        "theme": ["Buy Feature", "New", "High Volatility"],
        "image": "./images/game/games-icon/game-ex1.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 2,
        "name": "Olaf Viking",
        "provider": "BNG",
        "theme": ["Hot", "New", "Medium Volatility", "Hold and Win"],
        "image": "./images/game/games-icon/game-ex2.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 3,
        "name": "African Spirit",
        "provider": "BNG",
        "theme": ["Hot", "High Volatility"],
        "image": "./images/game/games-icon/game-ex3.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 4,
        "name": "3 Hot Chillies",
        "provider": "BNG",
        "theme": ["Hot", "New", "Medium Volatility", "Hold and Win"],
        "image": "./images/game/games-icon/game-ex4.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 5,
        "name": "777 Coins",
        "provider": "BNG",
        "theme": ["New", "Medium Volatility", "Hold and Win"],
        "image": "./images/game/games-icon/game-ex5.jpg",
        "url": "./gamedemo.html"
    },

    {
        "_id": 6,
        "name": "Energy Coins",
        "provider": "Playson",
        "theme": ["Buy Feature", "New"],
        "image": "./images/game/games-icon/game-ex6_300x300.png",
        "url": "./gamedemo.html"
    },
    {
        "_id": 7,
        "name": "Energy Coins",
        "provider": "BNG",
        "theme": ["Buy Feature", "Medium Volatility", "Hold and Win"],
        "image": "./images/game/games-icon/game-ex1.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 8,
        "name": "Olaf Viking",
        "provider": "BNG",
        "theme": ["Hot", "New", "High Volatility", "Hold and Win"],
        "image": "./images/game/games-icon/game-ex2.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 9,
        "name": "African Spirit",
        "provider": "BNG",
        "theme": ["Hot", "Medium Volatility"],
        "image": "./images/game/games-icon/game-ex3.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 10,
        "name": "3 Hot Chillies",
        "provider": "BNG",
        "theme": ["Hot", "New", "Medium Volatility", "Hold and Win"],
        "image": "./images/game/games-icon/game-ex4.jpg",
        "url": "./gamedemo.html"
    },
    {
        "_id": 11,
        "name": "777 Coins",
        "provider": "BNG",
        "theme": ["High Volatility", "Hold and Win"],
        "image": "./images/game/games-icon/game-ex5.jpg",
        "url": "./gamedemo.html"
    },

    {
        "_id": 12,
        "name": "Energy Coins",
        "provider": "Playson",
        "theme": ["Buy Feature", "Hot", "Hold and Win"],
        "image": "./images/game/games-icon/game-ex6_300x300.png",
        "url": "./gamedemo.html"
    },
];

// 使用 map 遍歷 querySelectorAll
const rad = document.querySelectorAll(".rad");
const rad2 = document.querySelectorAll(".rad2");
const allRad = document.games.querySelectorAll(".filter-element");
const gameArea = document.querySelector(".games-area");
const gameQuantity = document.querySelector(".game-quantity");
function showGames() {
    gameQuantity.textContent = gamesData.length;
    let show = "";
    for (let i = 0; i < gamesData.length; i++) {
        if (rad[0].classList.length == 4) {
            show += `<a href="${gamesData[i].url}" data-game="${gamesData[i].name}"><img src="${gamesData[i].image}"  alt="${gamesData[i].name}" class="hidden" /></a>`
        }
    }
    gameArea.innerHTML = show
}
showGames();

function filterItems(arr, query) {
    return arr.filter((el) => el.provider.toLowerCase().includes(query.toLowerCase()));
}
function filterItems2(arr, query) {
    return arr.filter((el) => el.theme.includes(query));
}
rad.forEach((e) => {
    e.addEventListener("click", () => {
        for (let i = 0; i < rad.length; i++) {
            rad[i].classList.remove("active");
        }
        e.classList.add("active");
    });
});
rad2.forEach((e) => {
    e.addEventListener("click", () => {
        for (let i = 0; i < rad2.length; i++) {
            rad2[i].classList.remove("active");
        }
        e.classList.add("active");
    });
});
function sortFun(e) {
    let show = [];
    if (rad[0].classList.length == 4) {
        if (rad2[0].classList.length == 4) {
            gamesData.forEach((e) => {
                show += `<a href="${e.url}"  data-game="${e.name}"><img src="${e.image}" alt="${e.name}" /></a>`
            })
            gameArea.innerHTML = show;
            gameQuantity.textContent = gamesData.length;
        } else {
            for (let i = 1; i < rad2.length; i++) {
                if (rad2[i].classList.length == 4) {
                    arr = filterItems2(gamesData, rad2[i].innerText);
                    arr.forEach((e) => {
                        show += `<a href="${e.url}"  data-game="${e.name}"><img src="${e.image}" alt="${e.name}" /></a>`
                    });
                    gameArea.innerHTML = show;
                    gameQuantity.textContent = arr.length
                }
            }
        }
    } else {
        for (let i = 1; i < rad.length; i++) {
            if (rad[i].classList.length == 4) {
                arr = filterItems(gamesData, rad[i].innerText);
                if (rad2[0].classList.length !== 4) {
                    for (let j = 1; j < rad2.length; j++) {
                        if (rad2[j].classList.length == 4) {
                            arr2 = filterItems2(arr, rad2[j].innerText);
                            arr2.forEach((e) => {
                                show += `<a href="${e.url}"  data-game="${e.name}"><img src="${e.image}" alt="${e.name}" /></a>`
                            });
                            gameArea.innerHTML = show;
                            gameQuantity.textContent = arr2.length
                        }
                    }
                } else {
                    arr.forEach((e) => {
                        show += `<a href="${e.url}"  data-game="${e.name}"><img src="${e.image}" alt="${e.name}" /></a>`
                    });
                    gameArea.innerHTML = show;
                    gameQuantity.textContent = arr.length
                }
            }
        }
    }
};
allRad.forEach(function (e) {
    e.addEventListener("click", sortFun);
});


// search input  
// function filterFunction() {
//     const input = document.getElementById('search-game');
//     const filterItem = document.querySelectorAll('.games-area a');
//     let num = 0
//     for (let i = 0; i < filterItem.length; i++) {
//         if (filterItem[i].dataset.game.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
//             filterItem[i].style.display = "";
//             num += 1
//             gameQuantity.textContent = num;
//         } else {
//             filterItem[i].style.display = "none";
//         }
//     }
//     if (num == 0) {
//         gameQuantity.textContent = 0;
//     }
// }


