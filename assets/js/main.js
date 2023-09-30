/*=============== SHOW MENU ===============*/
const menu = document.getElementById("nav-menu")
const toggleButton = document.getElementById("nav-toggle")
const closeButton = document.getElementById("nav-close")

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        menu.classList.add("show-manu")
    })
}
if (closeButton) {
    closeButton.addEventListener("click", () => {
        menu.classList.remove("show-menu") 
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== GSAP ANIMATION ===============*/

