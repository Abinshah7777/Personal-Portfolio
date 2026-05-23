/* =============================================
   PORTFOLIO JS
   ============================================= */

// ===== EmailJS Initializer =====
document.addEventListener('DOMContentLoaded', () => {
  if (typeof emailjs !== 'undefined') emailjs.init("bVnOK8nNnzAXCFOVF");
});

// ===== Debounce Wrapper =====
const debounce = (fn, ms = 100) => {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
};

// ===== Navigation Handling =====
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', debounce(() => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, 50), { passive: true });

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.forEach(l => l.addEventListener('click', () => {
  navMenu.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

navMenu.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    navToggle.focus();
  }
});

// ===== Smooth Scrolling =====
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  });
});

document.querySelectorAll('a[href="#home"]').forEach(a => {
  a.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
});

// ===== Navigation Item Activation =====
const sections = [...document.querySelectorAll('section[id]')];
function updateActiveNav() {
  const y = window.scrollY + navbar.offsetHeight + 20;
  let current = '';
  sections.forEach(s => { if (y >= s.offsetTop) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', debounce(updateActiveNav, 80), { passive: true });
updateActiveNav();

// ===== Presentation Animation Observers =====
const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); sectionObs.unobserve(e.target); } });
}, { threshold: 0.07, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.section').forEach(s => sectionObs.observe(s));

const timelineObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = parseInt(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('visible'), delay);
      timelineObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.timeline-item').forEach((item, i) => {
  item.dataset.delay = i * 130;
  timelineObs.observe(item);
});

// ===== Scroll Back To Top Button =====
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', debounce(() => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, 100), { passive: true });
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== Category Card Filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const categories = card.dataset.category || 'all';
      const show = filter === 'all' || categories.includes(filter);
      card.style.transition = 'opacity 0.3s, transform 0.3s';
      if (show) {
        card.style.opacity = '1'; card.style.transform = '';
        card.style.display = '';
      } else {
        card.style.opacity = '0'; card.style.transform = 'scale(0.97)';
        setTimeout(() => { if (!categories.includes(filter) && filter !== 'all') card.style.display = 'none'; }, 300);
      }
    });
  });
});

// ===== Project Card Subtle Movement Effect =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y*4}deg) rotateY(${x*4}deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// ===== Contact Email Handling =====
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name    = contactForm.name.value.trim();
    const email   = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) { showStatus('Please fill in all required fields.', 'error'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showStatus('Please enter a valid email address.', 'error'); return; }
    submitBtn.disabled = true;
    submitBtn.classList.add('is-loading');
    formStatus.className = 'form-status';
    try {
      if (typeof emailjs === 'undefined') throw new Error('EmailJS not loaded');
      await emailjs.sendForm('service_7ooqqfj', 'template_lqe2pwp', contactForm);
      showStatus('✓ Message sent! I\'ll be in touch soon.', 'success');
      contactForm.reset();
    } catch (err) {
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
  if (type === 'success') setTimeout(() => { formStatus.className = 'form-status'; }, 6000);
}