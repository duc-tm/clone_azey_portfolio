const navbar = document.getElementById('navbar');
const mobileMenuToggler = document.getElementById('mobile-menu-toggler');
const mobileMenuOverlay = document.querySelector('.menu__overlay');
let timeout;

mobileMenuToggler.addEventListener('change', (e) => {
  if (timeout) return;

  if (e.target.checked) {
    navbar.style.display = 'block';
    navbar.classList.add('mobile-menu--open');
  }
  else {
    mobileMenuToggler.disabled = true;
    navbar.classList.remove('mobile-menu--open');
    navbar.classList.add('mobile-menu--close');

    timeout = setTimeout(() => {
      navbar.style.display = 'none';
      navbar.classList.remove('mobile-menu--close');
      mobileMenuToggler.disabled = false;
      timeout = null;
    }, 350);
  }
});

mobileMenuOverlay.addEventListener('click', () => {
  mobileMenuToggler.checked = false;
  mobileMenuToggler.dispatchEvent(new Event('change'));
});