a = document.getElementById("navbarToggler991");
b = document.getElementById("responsive-menu");

a.addEventListener("click", function () {
  if (b.classList.contains("d-flex-on-991")) {
    b.classList.remove("d-flex-on-991");
  } else {
    b.classList.add("d-flex-on-991");
  }
});
