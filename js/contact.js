const form = document.getElementById("form");
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const popup = document.querySelector(".submit-popup");
    const closeBtn = popup.querySelector(".close-btn");
    popup.style.display = "flex";
    closeBtn.addEventListener('click', () => {
        document.querySelectorAll(".all-inputs input").forEach((e) => {
            e.value = ""
        });
        document.querySelector(".all-inputs select").value = ""
        document.querySelector(".all-inputs textarea").value = ""
        popup.style.display = "none";
    })
});

