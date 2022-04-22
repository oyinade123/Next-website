const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
navIcon = document.querySelectorAll(".navIcon");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});


