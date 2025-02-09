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
hiddenElements.forEach((el) => observer.observe(el));
