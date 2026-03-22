// nav al hacer scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// hamburguesa
const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu');

hamburguesa.addEventListener('click', () => {
  hamburguesa.classList.toggle('abierto');
  menu.classList.toggle('abierto');
});

// cierra el menu al hacer click en un link
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburguesa.classList.remove('abierto');
    menu.classList.remove('abierto');
  });
});