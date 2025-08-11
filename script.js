```
// Global variables and functions
let navbarCollapse = document.getElementById('navbarCollapse');
let navbarToggler = document.getElementById('navbarToggler');
let mobileMenuOpen = false;

// Toggle mobile menu
navbarToggler.addEventListener('click', () => {
  if (!mobileMenuOpen) {
    navbarCollapse.classList.add('show');
    mobileMenuOpen = true;
  } else {
    navbarCollapse.classList.remove('show');
    mobileMenuOpen = false;
  }
});

// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target.href.split('#')[1];
    document.querySelector(`#${target}`).scrollIntoView({ behavior: 'smooth' });
  });
});

// Index.html specific script
if (document.title === 'Home') {
  // Initialize slider
  let slider = document.getElementById('slider');
  let slides = slider.children;
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  document.getElementById('next-btn').addEventListener('click', nextSlide);
  document.getElementById('prev-btn').addEventListener('click', prevSlide);

  // Initialize timer for automatic slide transition
  setInterval(nextSlide, 5000);
}

// About.html specific script
if (document.title === 'About Us') {
  // Initialize team member hover effect
  document.querySelectorAll('.team-member').forEach((member) => {
    member.addEventListener('mouseover', () => {
      member.classList.add('hover');
    });
    member.addEventListener('mouseout', () => {
      member.classList.remove('hover');
    });
  });
}

// Menu.html specific script
if (document.title === 'Menu') {
  // Initialize menu filter
  let menuItems = document.querySelectorAll('.menu-item');
  let menuFilters = document.querySelectorAll('.menu-filter');

  menuFilters.forEach((filter) => {
    filter.addEventListener('click', () => {
      let filterType = filter.dataset.filter;
      menuItems.forEach((item) => {
        if (item.dataset.type === filterType) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

// Location.html specific script
if (document.title === 'Location') {
  // Initialize Google Maps
  let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
    });
  }
}

// Events.html specific script
if (document.title === 'Events') {
  // Initialize event calendar
  let calendar = document.getElementById('calendar');
  let events = [
    { date: '2023-03-01', title: 'Coffee Tasting' },
    { date: '2023-03-15', title: 'Live Music Night' },
    { date: '2023-03-22', title: 'Coffee and Book Club' },
  ];

  events.forEach((event) => {
    let eventElement = document.createElement('div');
    eventElement.className = 'event';
    eventElement.textContent = `${event.date} - ${event.title}`;
    calendar.appendChild(eventElement);
  });
}

// Gallery.html specific script
if (document.title === 'Gallery') {
  // Initialize lightbox
  let lightbox = document.getElementById('lightbox');
  let images = document.querySelectorAll('.gallery-image');

  images.forEach((image) => {
    image.addEventListener('click', () => {
      let imgSrc = image.src;
      lightbox.innerHTML = `<img src="${imgSrc}" alt="Gallery Image">`;
      lightbox.classList.add('open');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });
}

// Contact.html specific script
if (document.title === 'Contact Us') {
  // Initialize form validation
  let form = document.getElementById('contact-form');
  let formFields = form.elements;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    formFields.forEach((field) => {
      if (field.value.trim() === '') {
        isValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });

    if (isValid) {
      // Submit form data
      console.log('Form submitted successfully!');
    }
  });
}
```
Note: This script assumes that you have already included the necessary libraries and frameworks (e.g. Google Maps, lightbox) in your HTML files. You may need to modify the script to fit your specific implementation.