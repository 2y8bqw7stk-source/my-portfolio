const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// 1. Ouvrir/Fermer avec le bouton burger
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche la fermeture immédiate
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// 2. Fermer le menu dès qu'on clique n'importe où à l'intérieur
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
});