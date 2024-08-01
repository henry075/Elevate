const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
});


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


