'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
const desktop = window.matchMedia('(min-width: 801px)');
desktop.addEventListener('change', closeMenu);
const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = [...document.querySelectorAll('main > section')];
let pending = false;
function updateActiveSection() {
  let current = null;
  for (const section of sections) {
    if (section.getBoundingClientRect().top > 160) break;
    current = section.id;
  }
  sectionLinks.forEach(link => {
    if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  pending = false;
}
window.addEventListener('scroll', () => {
  if (!pending) { pending = true; requestAnimationFrame(updateActiveSection); }
}, { passive: true });
updateActiveSection();
document.querySelector('#year').textContent = new Date().getFullYear();
