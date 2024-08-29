// Menu Toggle for Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        projectCards.forEach(card => {
            card.style.display = 'block';
            if (category !== 'all' && !card.classList.contains(category)) {
                card.style.display = 'none';
            }
        });
    });
});
