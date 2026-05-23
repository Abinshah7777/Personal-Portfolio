/* ============================================================
   PORTFOLIO — script.js
   Clean, performant, accessible JS
   ============================================================ */

// ========== EMAILJS INIT ==========
// Note: Keep your service/template IDs in env variables or a config file
// for security — never commit real keys to public repos
document.addEventListener('DOMContentLoaded', () => {
  if (typeof emailjs !== 'undefined') {
    emailjs.init("bVnOK8nNnzAXCFOVF");
  }
});

// ========== UTILITY: DEBOUNCE ==========
function debounce(fn, ms = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// ========== NAVBAR ==========
const navbar   = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu  = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll state
window.addEventListener('scroll', debounce(() => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, 50));

// Mobile toggle
navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close on link click (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close on outside click (mobile)
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

// ========== SMOOTH SCROLL ==========
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href.startsWith('#')) return;
    e.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    const navH = navbar.offsetHeight;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH - 8;

    window.scrollTo({ top, behavior: 'smooth' });

    // Move focus for accessibility
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  });
});

// Footer "Back to Top" link
document.querySelectorAll('a[href="#home"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ========== ACTIVE NAV HIGHLIGHTING ==========
const sections = [...document.querySelectorAll('section[id]')];

function updateActiveNav() {
  const scrollY    = window.scrollY;
  const navHeight  = navbar.offsetHeight + 20;

  let current = '';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - navHeight) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${current}`);
  });
}

window.addEventListener('scroll', debounce(updateActiveNav, 80));
updateActiveNav();

// ========== INTERSECTION OBSERVER — SECTION REVEAL ==========
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      sectionObserver.unobserve(entry.target); // Fire once
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -60px 0px',
});

document.querySelectorAll('.section').forEach(s => sectionObserver.observe(s));

// ========== TIMELINE STAGGER ANIMATION ==========
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item').forEach((item, i) => {
  item.dataset.delay = i * 120;
  timelineObserver.observe(item);
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', debounce(() => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, 100));

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic validation
    const name    = contactForm.name.value.trim();
    const email   = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      showStatus('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('is-loading');
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';

    try {
      if (typeof emailjs === 'undefined') throw new Error('EmailJS not loaded');

      await emailjs.sendForm(
        'service_7ooqqfj',
        'template_lqe2pwp',
        contactForm
      );

      showStatus('✓ Message sent! I\'ll be in touch soon.', 'success');
      contactForm.reset();

    } catch (err) {
      console.error('EmailJS error:', err);
      showStatus('✗ Failed to send. Please email me directly at abinshapm3@gmail.com', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('is-loading');
    }
  });
}

function showStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = `form-status ${type}`;

  if (type === 'success') {
    setTimeout(() => {
      formStatus.className = 'form-status';
    }, 6000);
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ========== PROJECT CARD SUBTLE TILT ==========
// Uses CSS transform only — no DOM creation
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r   = card.getBoundingClientRect();
    const x   = (e.clientX - r.left) / r.width  - 0.5;  // -0.5 to 0.5
    const y   = (e.clientY - r.top)  / r.height - 0.5;

    card.style.transform = `
      translateY(-4px)
      rotateX(${-y * 4}deg)
      rotateY(${x * 4}deg)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ========== KEYBOARD TRAP — Mobile Menu ==========
navMenu.addEventListener('keydown', (e) => {
  if (!navMenu.classList.contains('open')) return;

  if (e.key === 'Escape') {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    navToggle.focus();
  }
});

// ========== CONSOLE SIGNATURE ==========
console.log(
  '%c Abinshah P M — Portfolio',
  'color: #f0c040; font-size: 16px; font-weight: bold; font-family: monospace;'
);
console.log(
  '%c github.com/Abinshah7777',
  'color: #8a8898; font-size: 12px; font-family: monospace;'
);
