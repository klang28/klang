  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId); // Find the target section
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
      }
    });
  });


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});