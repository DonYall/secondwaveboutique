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

document.getElementById("toggle-theme").addEventListener("click", function () {
    const r = document.querySelector(":root");
    this.classList.toggle("active");
    const light = !this.classList.contains("active");
    r.style.setProperty("--color-background", light ? "#fff" : "#1a1a1a");
    r.style.setProperty("--color-text", light ? "#000" : "#fff");
    r.style.setProperty("--color-text-brighter", light ? "#434343" : "#d9d9d9");
    r.style.setProperty("--button-background", light ? "#202020" : "#fde9ed");
    r.style.setProperty("--button-text", light ? "#fff" : "#000");
    r.style.setProperty("--button-hover", light ? "#fde9ed" : "#202020");
    r.style.setProperty("--header-background", light ? "#fde9ed" : "#3e3a3a");
    const logo = document.getElementById("hero-logo");
    console.log(logo);
    console.log(logo.src);
    if (logo) {
        if (light) {
            logo.src = logo.src.replace("logo-darkmode", "logo");
        } else {
            logo.src = logo.src.replace("logo", "logo-darkmode");
        }
    }
});
