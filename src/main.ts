const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show-alt');
        }else{
            entry.target.classList.remove('show-alt') 
        }
    });
});
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const hiddenElements = document.querySelectorAll('.hidden-alt');
const hiddenElements2 = document.querySelectorAll('.hidden-alt-2')
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
function hiddenHandler(item :Element) {
    const element = item as HTMLElement;
    if (!element) {
        console.error("Element not found")
    }else{
        element.classList.toggle("animate-fade-left")
        element.classList.toggle("animate-once")
        element.classList.toggle("animate-duration-1000")
        element.classList.toggle("animate-delay-[350ms]")
        element.classList.toggle("animate-ease-out")
        element.classList.toggle("animate-normal")
        element.classList.toggle("animate-fill-forwards")
    }
}
async function handleSidebar(menu :HTMLElement, menuButtons :NodeListOf<Element>) {
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (!menu) {
        console.error('sidebar not found')
        return
    
    }else if (!(viewportWidth >= 1024)){
        console.log("Shows ", viewportWidth)
        menu.classList.toggle('right-[-100vw]') 
        menu.classList.toggle('right-0')
        menuButtons.forEach(hiddenHandler)
    }
}
function scrollHandler(scrollElement :HTMLElement) {
    const navbarHeight = document.getElementById("navbar")?.offsetHeight as number;
    if (!scrollElement){
        console.error('element not found')
        return
    }else {
        const targetPosition = scrollElement.offsetTop - navbarHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        })
    }
}
document.addEventListener("DOMContentLoaded", () =>  {
    const sideMenuElements = document.querySelectorAll('.menuButton') as NodeListOf<Element>;
    const sideMenu = document.getElementById("sideMenu") as HTMLElement;
    const openSidebar = document.getElementById("open-sidebar") as HTMLElement;
    const closeSidebar = document.getElementById("close-sidebar") as HTMLElement;
    const openingHours = document.getElementById("openHoursScroll") as HTMLElement;
    const location = document.getElementById("location") as HTMLElement;
    const menuScroll = document.getElementById("menuScroll") as HTMLElement;
    const reservationScroll = document.getElementById("reservationScroll") as HTMLElement; 
    const contact = document.getElementById("contact") as HTMLElement;
    const hours = document.getElementById("hours") as HTMLElement;
    const map = document.getElementById("map") as HTMLElement;
    const menuToScroll = document.getElementById("menu") as HTMLElement;
    const reservation = document.getElementById("reservation") as HTMLElement;
    const contactInfo = document.getElementById("contactInfo") as HTMLElement;
    const openingHoursBtn = document.getElementById("openingHoursBtn") as HTMLElement;
    const locationBtn = document.getElementById("locationBtn") as HTMLElement;
    const menuBtn = document.getElementById("menuBtn") as HTMLElement;
    const reservationBtn = document.getElementById("reservationBtn") as HTMLElement;
    const contactBtn = document.getElementById("contactBtn") as HTMLElement;
    const backButton = document.getElementById("back") as HTMLElement;
    const Welcome = document.getElementById("welcome") as HTMLElement;
    const WelcomeLG = document.getElementById("welcomeLG") as HTMLElement;
    backButton.addEventListener('click', () => {
        handleSidebar(sideMenu,sideMenuElements)
        scrollHandler(Welcome)
    })
    openSidebar.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
    })
    closeSidebar.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
    })
    openingHours.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(hours)
    })
    location.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(map)
    })
    menuScroll.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(menuToScroll)
    })
    reservationScroll.addEventListener('click',() => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(reservation)
    })  
    contact.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(contactInfo)
    })
    openingHoursBtn.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(hours)
    })
    locationBtn.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(map)
    })
    menuBtn.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(menuToScroll)
    })
    reservationBtn.addEventListener('click',() => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(reservation)
    })
    contactBtn.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
        scrollHandler(contactInfo)
    })
})