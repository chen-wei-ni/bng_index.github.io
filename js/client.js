// PRODUCT ROADMAP swiper
const swiperMap = new Swiper('.swiper-container', {
    grabCursor: true,
    slidesPerView: 5,
    slidesPerGroup: 5,
    resistanceRatio: 0,
    slidesPerGroupSkip: 0,
    paginationClickable: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        280: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        320: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        520: {
            slidesPerGroup: 3,
            slidesPerView: 3,
        },
        760: {
            slidesPerGroup: 4,
            slidesPerView: 4,
        },
        960: {
            slidesPerGroup: 5,
            slidesPerView: 5,
            // slidesPerGroupSkip: 1,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        // hideOnClick: true,
    }
});

// POPUP
const swiperSlides = document.querySelectorAll(".swiper-slide");
swiperSlides.forEach((evt) => {
    let popup = document.querySelector(".product-popup");
    let closeBtn = document.querySelector(".close-btn");
    evt.addEventListener("click", function () {
        popup.style.display = "flex";
    });
    closeBtn.addEventListener("click", () => {
        popup.style.display = "";
    })
});

let allFiles = [
    {
        "_id": 1,
        "name": "3 Fruits Win 10 (Certificate)",
        "type": "Certificate"
    },
    {
        "_id": 2,
        "name": "3 Hot Chillies (Game promo pack)",
        "type": "gamePromoPack"
    },
    {
        "_id": 3,
        "name": "3 Hot Chillies (Game promo pack)",
        "type": "gamePromoPack"
    },
    {
        "_id": 4,
        "name": "3 Hot Chillies (Game guide)",
        "type": "gameGuide"
    },
    {
        "_id": 5,
        "name": "777 Coins (Game promo pack)",
        "type": "gamePromoPack"
    },
    {
        "_id": 6,
        "name": "777 Gems (Certificate)",
        "type": "Certificate"
    },
    {
        "_id": 7,
        "name": "88 Dragon (Certificate)",
        "type": "Certificate"
    },
    {
        "_id": 8,
        "name": "88 Dragon (License)",
        "type": "License"
    },
    {
        "_id": 9,
        "name": "xxx oooo",
        "type": "Other"
    },
    {
        "_id": 10,
        "name": "xxx oooo",
        "type": "Other"
    },
    {
        "_id": 11,
        "name": "新官網(Game guide)",
        "type": "gameGuide"
    },
    {
        "_id": 12,
        "name": "新官網(Game guide)",
        "type": "gameGuide"
    },
];
// filter
const rad = document.querySelectorAll(".select-option");
const filesArea = document.querySelector(".each-docs-download");
function onloadRad() {
    if (rad[0].classList.length == 2) {
        let show = "";
        allFiles.forEach((evt) => {
            show += `<li>
        <span class="docs-name">${evt.name}</span>
        <span class="dashed"></span>
        <span class="download-icon"></span>
        </li>
        `
        })
        filesArea.innerHTML = show;
    }
}
onloadRad();

function sortby(evt) {
    const files = allFiles;
    let show = [];
    rad.forEach((e) => {
        e.classList.remove("active");
    })
    this.classList.add("active");
    if (evt.target.dataset.file == "all") {
        onloadRad();
    } else {
        files.forEach((e) => {
            if (evt.target.dataset.file == e.type) {
                show += `<li>
                    <span class="docs-name">${e.name}</span>
                    <span class="dashed"></span>
                    <span class="download-icon"></span>
                    </li>`
            }
        });
        filesArea.innerHTML = show;
    }
}
rad.forEach((evt) => {
    evt.addEventListener("click", sortby);
});

// search input
// function filterFunction() {
//     const input = document.getElementById('search-file');
//     const filterItem = document.querySelectorAll('.docs-name');
//     var p = document.querySelectorAll('.each-docs-download li');
//     for (let i = 0; i < p.length; i++) {
//         if (filterItem[i].textContent.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
//             p[i].style.display = "";
//         } else {
//             p[i].style.display = "none";
//         }
//     }
// }

// download files
const downloadBtn = document.querySelectorAll(".download-icon");
downloadBtn.forEach((e) => {
    e.addEventListener('click', downloadFile);
});

function downloadFile() {
    //藉型別陣列建構的 blob 來建立 URL
    let fileName = "fileName.csv";
    const data = getRandomData();
    let blob = new Blob([data], {
        type: "application/octet-stream"
    });
    var href = URL.createObjectURL(blob);
    // 從 Blob 取出資料
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = href;
    link.download = fileName;
    link.click();
    this.style.filter = "grayscale(100%)";
};

//假資料 fake data
function getRandomData() {
    // var header = "RandomHeader";
    // var data = "";
    // for (let i = 0; i < 5; i++) {
    //     for (var j = 0; j < 2; j++) {
    //         if (j > 0) {
    //             data = data + ",";
    //         }
    //         data = data + "Item" + i + "_" + j;
    //     }
    // }
    // return header + data;
};