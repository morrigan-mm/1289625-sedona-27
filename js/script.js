var button = document.querySelector(".button-big.button-brown");
var formWrapper = document.querySelector(".search-form-wrapper");
var form = formWrapper.querySelector(".search-form");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  formWrapper.classList.toggle("search-form-hide");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13 || evt.keyCode === 32) {
    evt.preventDefault();
    formWrapper.classList.toggle("search-form-hide");
  }
});
