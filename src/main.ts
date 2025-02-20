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
        element.classList.toggle('hidden')
    }
}
async function handleSidebar(menu :HTMLElement, menuButtons :NodeListOf<Element>) {
    if (!menu) {
        console.error('sidebar not found')
        return
    }else{
        menu.classList.remove('hidden')
        menuButtons.forEach(hiddenHandler)
        menu.classList.toggle('grid')
        menu.classList.toggle('w-[80vw]')
        menu.classList.toggle('mr-2')
        if (menu.classList.contains('hidden')) {
            await sleep(800);
            menu.classList.toggle('hidden')
        }
    }
}
document.addEventListener("DOMContentLoaded", () =>  {
    const sideMenuElements = document.querySelectorAll('.menuButton') as NodeListOf<Element>;
    const sideMenu = document.getElementById("sideMenu") as HTMLElement;
    const openSidebar = document.getElementById("open-sidebar") as HTMLElement;
    const closeSidebar = document.getElementById("close-sidebar") as HTMLElement;
    openSidebar.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
    })
    closeSidebar.addEventListener('click', () => {
        handleSidebar(sideMenu, sideMenuElements)
    })

})