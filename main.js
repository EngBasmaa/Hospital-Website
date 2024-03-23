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

// close 'nav' menue when a 'menue item' is 'clicked'
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav_Items li a").forEach((navItem) => {
    navItem.addEventListener("click", () => {
      closeNavBtn();
    });
  });
}

// change 'navbar' styles on 'scroll'
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
