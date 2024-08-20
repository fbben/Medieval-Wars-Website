const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const crossIcon = document.querySelector(".cross-icon");
const mainContent = document.querySelector(".main-content");

hamburgerIcon.addEventListener("click", ()=>{
    mobileMenu.classList.add("active");
    hamburgerIcon.classList.add("active");
    crossIcon.classList.add("active");
    mainContent.classList.add("active");
});

crossIcon.addEventListener("click", ()=>{
    mobileMenu.classList.remove("active");
    hamburgerIcon.classList.remove("active");
    crossIcon.classList.remove("active");
    mainContent.classList.remove("active");
});