document.getElementById("visit-button").addEventListener("click", function () {
    window.scrollTo({
        top: document.getElementById("buy-sell").offsetTop,
        behavior: "smooth",
    });
});
