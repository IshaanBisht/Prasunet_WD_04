// Show/hide menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Scroll header
function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 80) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

// Scroll up
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

// Contact form error message
const form = document.getElementById('contact-form'),
      errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        message = document.getElementById('message').value;

  if (!name || !email || !message) {
    errorMessage.textContent = 'All fields are required.';
    errorMessage.classList.add('color-first');
  } else {
    errorMessage.textContent = '';
    form.submit();
  }
});
