// katana que cruza la pantalla al scrollear
const katana = document.getElementById('katana-scroll');
const slashTrail = katana.querySelector('.slash-trail');

let lastScroll = 0;
let lastSlashScroll = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progreso = scrollY / maxScroll;

      // mueve la katana de izquierda a derecha
      const startX = -300;
      const endX = window.innerWidth + 100;
      const posX = startX + (endX - startX) * progreso;

      // posicion vertical
      const posY = window.innerHeight * 0.3 + (window.innerHeight * 0.4 * progreso);

      katana.style.left = posX + 'px';
      katana.style.top = (posY - 140) + 'px';

      // dispara el efecto de corte cada cierto scroll
      const delta = Math.abs(scrollY - lastScroll);
      if (delta > 80 && scrollY - lastSlashScroll > 200) {
        hacerCorte(posY);
        lastSlashScroll = scrollY;
      }

      lastScroll = scrollY;
      ticking = false;
    });
    ticking = true;
  }
});

function hacerCorte(y) {
  slashTrail.style.top = (y / window.innerHeight * 100) + 'vh';
  slashTrail.classList.remove('active');
  void slashTrail.offsetWidth;
  slashTrail.classList.add('active');
  setTimeout(() => slashTrail.classList.remove('active'), 300);
}