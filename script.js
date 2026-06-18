/* ============================================================
   PORTFÓLIO · MICRO-ORGANISMOS — script.js
   Tema: Protozoários e Fungos | Biologia
============================================================ */

/* ── FADE-IN COM INTERSECTION OBSERVER ──────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.06 });
fadeEls.forEach(el => io.observe(el));


/* ── MENU MOBILE (BURGER) ───────────────────────────────── */
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});


/* ── LIGHTBOX ────────────────────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbClose  = document.getElementById('lbClose');

// Abre o lightbox ao clicar em qualquer imagem nas seções .img-section
document.querySelectorAll('.img-section img').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lightbox.addEventListener('click', closeLightbox);
lbClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });


/* ── NAV ATIVO AO ROLAR ─────────────────────────────────── */
const sections  = document.querySelectorAll('[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = '';
        a.style.background = '';
      });
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) {
        active.style.color = 'var(--green)';
        active.style.background = 'var(--green-light)';
      }
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => activeObserver.observe(sec));