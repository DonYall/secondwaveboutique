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

function applyTheme(light) {
    const r = document.querySelector(":root");
    r.style.setProperty("--color-background", light ? "#fff" : "#1a1a1a");
    r.style.setProperty("--color-text", light ? "#000" : "#fff");
    r.style.setProperty("--color-text-brighter", light ? "#434343" : "#d9d9d9");
    r.style.setProperty("--button-background", light ? "#202020" : "#fde9ed");
    r.style.setProperty("--button-text", light ? "#fff" : "#000");
    r.style.setProperty("--button-hover", light ? "#fde9ed" : "#202020");
    r.style.setProperty("--header-background", light ? "#fde9ed" : "#3e3a3a");
    const logo = document.getElementById("hero-logo");
    if (logo) {
        logo.src = light ? logo.src.replace("logo-darkmode", "logo") : logo.src.replace("logo", "logo-darkmode");
    }
    const toggleButton = document.getElementById("toggle-theme");
    if (light) {
        toggleButton.classList.remove("active");
    } else {
        toggleButton.classList.add("active");
    }
}

function toggleTheme() {
    const light = document.getElementById("toggle-theme").classList.contains("active");
    applyTheme(!light);
    localStorage.setItem("theme", light ? "light" : "dark");
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const light = savedTheme === "light";
    applyTheme(light);
}

document.getElementById("toggle-theme").addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", loadTheme);
