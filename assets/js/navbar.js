window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header");

    // hauteur du header
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight - 50) {
        // tu as quitté le header
        navbar.style.backgroundColor = "white";
    } else {
        // tu es dans le header
        navbar.style.backgroundColor = "transparent";
    }
});
