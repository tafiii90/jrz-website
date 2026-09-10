
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
if (menu) {
  menu.addEventListener('click', () => {
    links.classList.toggle('open');
    menu.setAttribute('aria-expanded', links.classList.contains('open'));
  });
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => links?.classList.remove('open'));
});
const year = document.querySelector('#year');
if(year) year.textContent = new Date().getFullYear();
