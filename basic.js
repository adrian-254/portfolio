
// NAVBAR
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector(".navbar"),
    navOpenBtn = document.querySelector("#bar-open"),
    navCloseBtn = document.querySelector("#x-closed");

  if (nav && navOpenBtn) {
    navOpenBtn.addEventListener("click", () => nav.classList.add("openNav"));
  }

  if (nav && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => nav.classList.remove("openNav"));
  }
});



// CONTACT INFO
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
// END OF CONTACT INFO

// Copyright
document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  const copyright = document.getElementById("copyright");

  if (copyright) {
    copyright.innerHTML = `&copy; ${year} Adrian.dev`;
  } else {
    console.error("Element with ID 'copyright' not found.");
  }
});

