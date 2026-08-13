(() => {
  const toggles = document.querySelectorAll('[data-nav-toggle]');

  const close = (button) => {
    const target = document.querySelector(button.dataset.navTarget);
    if (!target) return;
    target.classList.remove('is-open');
    button.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  };

  toggles.forEach((button) => {
    const target = document.querySelector(button.dataset.navTarget);
    if (!target) return;

    target.removeAttribute('hidden');
    button.addEventListener('click', () => {
      const willOpen = !target.classList.contains('is-open');
      target.classList.toggle('is-open', willOpen);
      button.classList.toggle('is-open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    toggles.forEach(close);
  });

  const animatedElements = document.querySelectorAll('[data-aos]');
  if (!animatedElements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    animatedElements.forEach((element) => element.classList.add('aos-animate'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('aos-animate');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  animatedElements.forEach((element) => observer.observe(element));
})();
