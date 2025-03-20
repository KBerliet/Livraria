document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".hamburger");
  var sidebar = document.getElementById("sidebar");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});
