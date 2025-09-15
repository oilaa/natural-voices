// Odotetaan että sivu on ladattu
document.addEventListener("DOMContentLoaded", function () {
    // Haetaan elementit
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const sections = document.querySelectorAll(".content-section");

    // Hamburger-menu napin klikkaus näyttää/piilottaa menun
    hamburger.addEventListener("click", () => {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });

    // Klikkaus muualle piilottaa menun
    document.addEventListener("click", function (event) {
        const isClickInside = hamburger.contains(event.target) || menu.contains(event.target);
        if (!isClickInside) {
            menu.style.display = "none";
        }
    });

    // IntersectionObserver näyttää osiot kun ne tulevat näkyviin
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 }); // Kun 10% osiosta näkyy

    // Otetaan jokainen sisältöosio tarkkailuun
    sections.forEach(section => {
        observer.observe(section);
    });
});
