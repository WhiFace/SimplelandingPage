const toggle = document.getElementById("toggle");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

// toggle nav bar
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// show modal

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// hide modal
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// hide model on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
