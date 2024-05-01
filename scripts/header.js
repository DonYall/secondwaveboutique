const navTabs = document.querySelector("nav ul").children;
const navUnderline = document.getElementById("nav-underline");

for (let i = 0; i < navTabs.length; i++) {
    navTabs[i].addEventListener("mouseover", function () {
        navUnderline.style.left = `${i * 200}px`;
    });
    navTabs[i].addEventListener("mouseout", function () {
        navUnderline.style.left = `${navIndex * 200}px`;
    });
}
