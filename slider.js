const slider = document.querySelector("macro-carousel");
const goToFirstSlideBtn = document.querySelector("#go-to-first");

function onWCReady() {
  customElements.whenDefined("macro-carousel").then(() => {
    goToFirstSlideBtn.addEventListener("click", () => {
      slider.selected = 0;
    });
  });
}

// Initial setup.
if (window.WebComponents && window.WebComponents.ready === true) {
  onWCReady();
} else {
  window.addEventListener("WebComponentsReady", onWCReady);
}
