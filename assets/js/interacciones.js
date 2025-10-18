document.addEventListener('DOMContentLoaded', () => {
  // --- NAV SCROLL EFFECT ---
  const navRight = document.querySelector('.nav-right');
  const navbar = document.querySelector('#navbar');

  if (navRight && navbar) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 50;
      navRight.classList.toggle('scrolled', scrolled);
      navbar.classList.toggle('scrolled', scrolled);
    });
  }

  // --- PORTFOLIO ICON HOVER ---
  const wrapper = document.querySelector('.portfolio_icon-wrapper');
  if (wrapper) {
    const defaultImg = wrapper.querySelector('.default');
    const hoverImg = wrapper.querySelector('.hover');
    let isTouch = false;

    window.addEventListener('touchstart', () => {
      isTouch = true;
    }, { once: true });

    wrapper.addEventListener('click', (e) => {
      if (isTouch && defaultImg && hoverImg) {
        e.preventDefault();
        const showingDefault = defaultImg.style.opacity !== '0';
        defaultImg.style.opacity = showingDefault ? '0' : '1';
        hoverImg.style.opacity = showingDefault ? '1' : '0';
      }
    });
  }

  // --- BOOTSTRAP TOOLTIP INIT ---
  if (typeof bootstrap !== 'undefined') {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].forEach(el => new bootstrap.Tooltip(el));
  }
});