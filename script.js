function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  let count = localStorage.getItem("viewCount");

  if (count === null) {
      count = 0;
  } else {
      count = parseInt(count);
  }

  count++;

  localStorage.setItem("viewCount", count);
  document.getElementById("viewCount").textContent = "Page Views: " + count;
});
