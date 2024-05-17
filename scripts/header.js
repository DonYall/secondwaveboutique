const navTabs = document.querySelector("nav ul").children;
const navUnderline = document.getElementById("nav-underline");

for (let i = 0; i < navTabs.length; i++) {
    navTabs[i].addEventListener("mouseover", function () {
        navUnderline.style.left = `${i * 150}px`;
    });
    navTabs[i].addEventListener("mouseout", function () {
        navUnderline.style.left = `${navIndex * 150}px`;
    });
}

function toggleNav() {
    document.querySelector("nav").classList.toggle("active");
    document.getElementById("hamburger").classList.toggle("active");
}
