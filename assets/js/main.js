
/* ========================================
   1. MOBILE NAVIGATION
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const primaryMenu = document.querySelector("#primary-menu");

// Toggle mobile navigation
menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", !isExpanded);
    menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Öppna menyn" : "Stäng menyn"
    );

    primaryMenu.classList.toggle("is-open");
});

// Close menu when a navigation link is clicked
primaryMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        primaryMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Öppna menyn");
    });
});
