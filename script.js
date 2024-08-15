document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            event.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.classList.toggle("active");
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });
    });
});

let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);
