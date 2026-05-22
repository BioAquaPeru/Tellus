const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.site-nav a, .nav-actions a');
const revealItems = document.querySelectorAll('.reveal');
const contactForm = document.querySelector('.contact-form');
const carouselTracks = document.querySelectorAll('[data-carousel]');
const sectionLinks = document.querySelectorAll('.site-nav a[href^="#"]');

const syncHeader = () => {
  if (window.scrollY > 24) {
    header.classList.add('scrolled');
  } else if (!header.classList.contains('menu-open')) {
    header.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', syncHeader);

syncHeader();

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('menu-open');
    syncHeader();
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (header.classList.contains('menu-open')) {
      header.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
      syncHeader();
    }
  });
});

const scrollCarousel = (name, direction) => {
  const track = document.querySelector(`[data-carousel="${name}"]`);

  if (!track) {
    return;
  }

  const amount = track.clientWidth * 0.85 * direction;
  track.scrollBy({ left: amount, behavior: 'smooth' });
};

document.querySelectorAll('[data-carousel-prev]').forEach((button) => {
  button.addEventListener('click', () => {
    scrollCarousel(button.dataset.carouselPrev, -1);
  });
});

document.querySelectorAll('[data-carousel-next]').forEach((button) => {
  button.addEventListener('click', () => {
    scrollCarousel(button.dataset.carouselNext, 1);
  });
});

const updateActiveSection = () => {
  let currentId = '';

  sectionLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) {
      return;
    }

    const offsetTop = target.offsetTop - 140;
    const offsetBottom = offsetTop + target.offsetHeight;

    if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
      currentId = target.id;
    }
  });

  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('is-active', isActive);
  });
};

window.addEventListener('scroll', updateActiveSection);
updateActiveSection();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealItems.forEach((item) => observer.observe(item));

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('nombre') || '';
    const phone = formData.get('telefono') || '';
    const message = formData.get('mensaje') || '';
    const text = `Hola Tellus Industrias, soy ${name}. Mi telefono es ${phone}. ${message}`.trim();
    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  });
}
