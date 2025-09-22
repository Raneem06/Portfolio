window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar-default");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});