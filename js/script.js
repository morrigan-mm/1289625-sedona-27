var button = document.querySelector(".button-big.button-brown");
var formWrapper = document.querySelector(".search-form-wrapper");
var form = formWrapper.querySelector(".search-form");

var adultAmount = form.querySelector("[name=amount_adult]");
var childrenAmount = form.querySelector("[name=amount_children]");

var isStorageSupport = true;
var storageAdult = "";
var storageChildren = "";


formWrapper.classList.add("search-form-hide");

try {
  storageAdult = localStorage.getItem("adultAmount");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageChildren = localStorage.getItem("childrenAmount");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (storageAdult) {
    adultAmount.value = storageAdult;
  }
  if (storageChildren) {
    childrenAmount.value = storageChildren;
  }

  formWrapper.classList.toggle("search-form-hide");
});

form.addEventListener("submit", function(evt) {
  if (isStorageSupport) {
    localStorage.setItem("adultAmount", adultAmount.value);
    localStorage.setItem("childrenAmount", childrenAmount.value);
  }
});
