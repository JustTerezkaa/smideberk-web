let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})



/*CAROUSEL SHIT*/

const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".carousel-card");
let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove("active");
    });

    const offset = -currentIndex * (25 + 2) + "rem";
    track.style.transform = `translateX(${offset})`;
    cards[currentIndex].classList.add("active");
}

function moveCarousel(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = cards.length - 1;
    if (currentIndex >= cards.length) currentIndex = 0;

    updateCarousel();
}

updateCarousel(); // Inicializace