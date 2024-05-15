const desckContact = document.getElementById("desckContact");
const phoneContact = document.getElementById("phoneContact");
const popUp = document.getElementById("popUp");
const popupClose = document.getElementById("popupClose");

desckContact.addEventListener("click", () => {
  popUp.style.display = "block";
});

phoneContact.addEventListener("click", () => {
  popUp.style.display = "block";
});

popupClose.addEventListener("click", () => {
  popUp.style.display = "none";
  nav.style.display = "none"
  window.innerWidth > 768 ? burgerOpen.style.display = "none" : burgerOpen.style.display = "block"
});

window.addEventListener("resize", () => {
  window.innerWidth > 768 ? burgerOpen.style.display = "none" : burgerOpen.style.display = "block"
})