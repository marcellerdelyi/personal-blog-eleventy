const menuToggle = document.getElementById("menu-toggle");
const navOverlay = document.getElementById("nav-overlay");
const navLinks = navOverlay.querySelectorAll("a");

function openMenu() {
  menuToggle.classList.add("is-open");
  navOverlay.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  menuToggle.classList.remove("is-open");
  navOverlay.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = navOverlay.classList.contains("is-open");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

menuToggle.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
  }
});