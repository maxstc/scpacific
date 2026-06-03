const header = document.querySelector('header');

//navbar background changes on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// rotating translations for hero subline
const sublineValues = [
  "Certified product. Direct sourcing. California ready.",
  "Producto certificado. Abastecimiento directo. Listo para California.",
  "认证产品 直接采购 符合加州标准",
];

let sublineIndex = 0;
const sublineEl = document.querySelector('.hero-subline');

setInterval(() => {
  // slide out upward
  sublineEl.style.transform = 'translateY(-20px)';
  sublineEl.style.opacity = '0';

  setTimeout(() => {
    sublineIndex = (sublineIndex + 1) % sublineValues.length;
    sublineEl.textContent = sublineValues[sublineIndex];

    // reset position below
    sublineEl.style.transition = 'none';
    sublineEl.style.transform = 'translateY(20px)';
    sublineEl.style.opacity = '0';

    // slide in upward
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sublineEl.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        sublineEl.style.transform = 'translateY(0)';
        sublineEl.style.opacity = '1';
      });
    });
  }, 500);
}, 3000);