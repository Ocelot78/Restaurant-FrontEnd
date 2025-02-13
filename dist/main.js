"use strict";
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-alt');
        }
        else {
            entry.target.classList.remove('show-alt');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden-alt');
const hiddenElements2 = document.querySelectorAll('.hidden-alt-2');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
document.addEventListener("DOMContentLoaded", () => {
    const sideMenu = document.getElementById("sideMenu");
    const openSidebar = document.getElementById("open-sidebar");
    const closeSidebar = document.getElementById("close-sidebar");
    openSidebar.addEventListener('click', () => {
        sideMenu.classList.toggle('grid');
        sideMenu.classList.toggle('hidden');
        closeSidebar.classList.toggle('mr-2');
    });
    closeSidebar.addEventListener('click', () => {
        sideMenu.classList.toggle('grid');
        sideMenu.classList.toggle('hidden');
        closeSidebar.classList.toggle('mr-2');
    });
});
