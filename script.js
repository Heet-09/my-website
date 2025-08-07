```
// Global variables
let currentPage = window.location.pathname;

// Navigation menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu-visible');
});

// Add event listeners to navigation menu items
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navMenu.classList.remove('nav-menu-visible');
    const targetPage = e.target.getAttribute('href').replace('#', '');
    currentPage = targetPage;
    updateActiveNavItem(targetPage);
  });
});

// Update active navigation item
function updateActiveNavItem(page) {
  navItems.forEach((item) => {
    item.classList.remove('active');
    if (item.getAttribute('href').replace('#', '') === page) {
      item.classList.add('active');
    }
  });
}

// Initialize active navigation item
updateActiveNavItem(currentPage);

// Scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// Smooth scrolling
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = anchor.getAttribute('href');
    const targetSection = document.querySelector(target);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Gallery page functionality
if (currentPage === 'gallery.html') {
  const galleryImages = document.querySelectorAll('.gallery-image');

  galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
      const imageModal = document.querySelector('.image-modal');
      imageModal.classList.add('visible');
      const modalImage = document.querySelector('.modal-image');
      modalImage.src = image.src;
    });
  });

  const closeModal = document.querySelector('.close-modal');

  closeModal.addEventListener('click', () => {
    const imageModal = document.querySelector('.image-modal');
    imageModal.classList.remove('visible');
  });
}

// Contact page functionality
if (currentPage === 'contact.html') {
  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Add validation and submission logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  });
}
```
This script provides basic functionality for the coffee shop website, including:

1. Navigation menu toggle and active state management
2. Smooth scrolling to anchor links
3. Gallery page image modal functionality
4. Contact page form submission handling

Note that you'll need to add validation and submission logic for the contact form, as well as any other features specific to your website.