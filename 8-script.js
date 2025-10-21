// 8-script.js — Toggle hamburger menu visibility

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle Menu on click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Close menu when link clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('show');
  });
});
