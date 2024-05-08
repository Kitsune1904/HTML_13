const showBtn = document.getElementById("showBtn");
const description = document.getElementById("description")

showBtn.addEventListener("click", () => {
    if(showBtn.classList.contains("active")) {
        showBtn.classList.remove("active")
        description.style.display = "none"
    } else {
        showBtn.classList.add("active")
        description.classList.add("active")
        description.style.display = "block"
    }
})

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