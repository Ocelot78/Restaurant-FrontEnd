"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const hiddenElements = document.querySelectorAll('.hidden-alt');
const hiddenElements2 = document.querySelectorAll('.hidden-alt-2');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
function hiddenHandler(item) {
    const element = item;
    if (!element) {
        console.error("Element not found");
    }
    else {
        element.classList.toggle("animate-fade-left");
        element.classList.toggle("animate-once");
        element.classList.toggle("animate-duration-1000");
        element.classList.toggle("animate-delay-[350ms]");
        element.classList.toggle("animate-ease-out");
        element.classList.toggle("animate-normal");
        element.classList.toggle("animate-fill-forwards");
    }
}
function handleSidebar(menu, menuButtons) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!menu) {
            console.error('sidebar not found');
            return;
        }
        else {
            menu.classList.toggle('right-[-100vw]');
            menu.classList.toggle('right-0');
            menuButtons.forEach(hiddenHandler);
        }
    });
}
function scrollHandler(scrollElement) {
    var _a;
    const navbarHeight = (_a = document.getElementById("navbar")) === null || _a === void 0 ? void 0 : _a.offsetHeight;
    if (!scrollElement) {
        console.error('element not found');
        return;
    }
    else {
        const targetPosition = scrollElement.offsetTop - navbarHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const sideMenuElements = document.querySelectorAll('.menuButton');
    const sideMenu = document.getElementById("sideMenu");
    const openSidebar = document.getElementById("open-sidebar");
    const closeSidebar = document.getElementById("close-sidebar");
    const openingHours = document.getElementById("openHoursScroll");
    const location = document.getElementById("location");
    const menuScroll = document.getElementById("menuScroll");
    const reservationScroll = document.getElementById("reservationScroll");
    const contact = document.getElementById("contact");
    const hours = document.getElementById("hours");
    const map = document.getElementById("map");
    const menuToScroll = document.getElementById("menu");
    const reservation = document.getElementById("reservation");
    const contactInfo = document.getElementById("contactInfo");
    openSidebar.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements);
    });
    closeSidebar.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements);
    });
    openingHours.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements);
        scrollHandler(hours);
    });
    location.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements);
        scrollHandler(map);
    });
    menuScroll.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements);
        scrollHandler(menuToScroll);
    });
    reservationScroll.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements);
        scrollHandler(reservation);
    });
    contact.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements);
        scrollHandler(contactInfo);
    });
});
