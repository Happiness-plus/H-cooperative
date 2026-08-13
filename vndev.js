(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealElements = document.querySelectorAll('[data-reveal]');

  const revealAll = () => revealElements.forEach((element) => element.classList.add('is-visible'));

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -7% 0px', threshold: 0.08 });

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const header = document.querySelector('.vn-header');
  const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const navToggle = document.querySelector('[data-nav-toggle]');
  const syncNavLabel = () => {
    if (!navToggle) return;
    navToggle.setAttribute('aria-label', navToggle.getAttribute('aria-expanded') === 'true' ? 'Close navigation' : 'Open navigation');
  };
  navToggle?.addEventListener('click', syncNavLabel);

  document.querySelectorAll('.vn-header .collapse a').forEach((link) => {
    link.addEventListener('click', () => {
      const toggle = document.querySelector('[data-nav-toggle]');
      const nav = document.querySelector('#navbarToggleExternalContent');
      if (!toggle || !nav) return;
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      syncNavLabel();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') syncNavLabel();
  });

  reducedMotion.addEventListener?.('change', (event) => {
    if (event.matches) revealAll();
  });
})();
