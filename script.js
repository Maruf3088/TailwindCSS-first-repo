const menuBar = document.querySelector(".menuBar");
const menuToggle = document.querySelector(".menuToggle");
let i = 0;
menuToggle.addEventListener("click", () => {
  if (i == 0) {
    menuBar.classList.remove("hidden");
    i = 1;
  } else if (i == 1) {
    menuBar.classList.add("hidden");
    i = 0;
  }
});
