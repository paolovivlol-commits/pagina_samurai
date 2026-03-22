// carrusel de katanas con glow de color
let actual = 0;
const slides = document.querySelectorAll('.slide');
const puntos = document.querySelectorAll('.punto');

function mostrar(n) {
  slides[actual].classList.remove('activo');
  puntos[actual].classList.remove('activo');

  actual = (n + slides.length) % slides.length;

  slides[actual].classList.add('activo');
  puntos[actual].classList.add('activo');
}

function moverCarrusel(dir) {
  mostrar(actual + dir);
}

function irA(n) {
  mostrar(n);
}

// auto avance cada 3.5 segundos
setInterval(() => moverCarrusel(1), 3500);