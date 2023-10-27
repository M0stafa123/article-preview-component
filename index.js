let media = window.matchMedia("(max-width: 800px)");
let share = document.querySelector(".share");
let tool = document.querySelector(".tool");
share.parentElement.addEventListener("click", function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    tool.style.display = "flex";
  } else {
    tool.style.display = "none";
  }
});
