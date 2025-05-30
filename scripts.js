document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });

    document.addEventListener("click", function (event) {
        const isClickInside = hamburger.contains(event.target) || menu.contains(event.target);
        if (!isClickInside) {
            menu.style.display = "none";
        }
    });
});
