// cursor personalizado
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
});

// cursor mas grande al hover
document.querySelectorAll('a, button, .caja, .punto').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// parallax hero - imagen de fondo se mueve al hacer scroll
const fotofondo = document.querySelector('.foto-fondo');
window.addEventListener('scroll', () => {
  if (fotofondo) {
    const scroll = window.scrollY;
    fotofondo.style.transform = `scale(1.05) translateY(${scroll * 0.3}px)`;
  }
});

// parallax imagen galeria
const parallaxImg = document.querySelector('.parallax-img');
if (parallaxImg) {
  window.addEventListener('scroll', () => {
    const seccion = document.getElementById('galeria');
    const rect = seccion.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const progreso = -rect.top / window.innerHeight;
      parallaxImg.style.transform = `translateY(${progreso * 60}px)`;
    }
  });
}

// parallax imagen samurai
const imgSamurai = document.querySelector('.columna-foto img');
if (imgSamurai) {
  window.addEventListener('scroll', () => {
    const seccion = document.getElementById('sobre');
    const rect = seccion.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const progreso = -rect.top / window.innerHeight;
      imgSamurai.style.transform = `scale(1.06) translateY(${progreso * 30}px)`;
    }
  });
}

// reveal textos galeria
const revealTextos = document.querySelectorAll('.reveal-texto');
const obsTexto = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 150);
    }
  });
}, { threshold: 0.3 });

revealTextos.forEach(el => obsTexto.observe(el));

// contador animado de numeros
const numeros = document.querySelectorAll('.num');
const obsNum = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const span = el.querySelector('span');
      const numero = parseInt(el.textContent);
      if (!isNaN(numero)) {
        let cuenta = 0;
        const intervalo = setInterval(() => {
          cuenta += Math.ceil(numero / 30);
          if (cuenta >= numero) {
            cuenta = numero;
            clearInterval(intervalo);
          }
          el.textContent = cuenta;
          if (span) el.appendChild(span);
        }, 40);
      }
      obsNum.unobserve(el);
    }
  });
}, { threshold: 0.5 });

numeros.forEach(n => obsNum.observe(n));