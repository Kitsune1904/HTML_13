document.querySelectorAll(".slide").forEach(element => {
    if(element.href === window.location.href) {
        element.classList.add("active")
    }

    element.classList.remove("active");
})