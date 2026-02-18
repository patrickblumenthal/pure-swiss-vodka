/* ============================================
   AGE GATE
============================================ */
function enterSite() {
  document.getElementById('age-gate').classList.add('hidden');
  localStorage.setItem('psv_age', '1');
}

function denyEntry() {
  document.getElementById('age-gate').innerHTML =
    '<div class="ag-inner" style="margin-top:3rem;"><p class="ag-sub">We\'re sorry. You must be of legal drinking age to visit this site.</p></div>';
}

if (localStorage.getItem('psv_age') === '1') {
  document.getElementById('age-gate').classList.add('hidden');
}

/* ============================================
   NAV — add .scrolled class on scroll
============================================ */
const nav = document.getElementById('mainnav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 70);
}, { passive: true });

/* ============================================
   SMOOTH SCROLL
============================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ============================================
   SCROLL REVEAL
============================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('up');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
