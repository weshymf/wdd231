document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    if (menuToggle) { // Only add functionality if the toggle exists (for mobile view)
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }
});
