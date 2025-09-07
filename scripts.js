document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const sections = document.querySelectorAll(".content-section");

    hamburger.addEventListener("click", () => {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });

    document.addEventListener("click", function (event) {
        const isClickInside = hamburger.contains(event.target) || menu.contains(event.target);
        if (!isClickInside) {
            menu.style.display = "none";
        }
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
