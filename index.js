const burgur_btn = document.querySelector(".burgur");
const nav_menu = document.querySelector(".header");

const handleToggle = () => {
  nav_menu.classList.toggle("show");
};
burgur_btn.addEventListener("click", () => handleToggle());
