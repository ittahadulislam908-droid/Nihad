const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('primaryNav');
const header = document.querySelector('.site-header');

navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('is-open');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});
