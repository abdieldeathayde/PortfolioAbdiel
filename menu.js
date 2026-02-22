document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.getElementById('hamburguer');
    const menu = document.getElementById('menu');

    hamburguer.addEventListener('click', () => {
        menu.classList.toggle('ativa');
    });
});
