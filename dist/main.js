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
        element.classList.toggle('hidden');
    }
}
function handleSidebar(menu, menuButtons) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!menu) {
            console.error('sidebar not found');
            return;
        }
        else {
            menu.classList.remove('hidden');
            menuButtons.forEach(hiddenHandler);
            menu.classList.toggle('grid');
            menu.classList.toggle('w-[80vw]');
            menu.classList.toggle('mr-2');
            if (menu.classList.contains('hidden')) {
                yield sleep(800);
                menu.classList.toggle('hidden');
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const sideMenuElements = document.querySelectorAll('.menuButton');
    const sideMenu = document.getElementById("sideMenu");
    const openSidebar = document.getElementById("open-sidebar");
    const closeSidebar = document.getElementById("close-sidebar");
    openSidebar.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements);
    });
    closeSidebar.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements);
    });
});
