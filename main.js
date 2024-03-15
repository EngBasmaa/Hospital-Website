const navItems = document.querySelector("#nav_items");
const openNavBtn = document.querySelector("#open_nav-btn");
const closeNavBtn = document.querySelector("#close_nav-btn");

openNavBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

closeNavBtn.addEventListener("click", () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "flex";
  closeNavBtn.style.display = "none";
});
