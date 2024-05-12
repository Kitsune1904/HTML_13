const burgerOpen = document.getElementById("burgerOpen");
const burgerClose = document.getElementById("burgerClose");
const nav = document.getElementById("nav")

burgerOpen.addEventListener("click", ()=> {
    nav.style.display = "flex"
    burgerOpen.style.display = "none"
})

burgerClose.addEventListener("click", ()=> {
    nav.style.display = "none"
    burgerOpen.style.display = "block"
})