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

