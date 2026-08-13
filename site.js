(() => {
  const toggles = document.querySelectorAll('[data-nav-toggle]');

  const close = (button) => {
    const target = document.querySelector(button.dataset.navTarget);
    if (!target) return;
    target.hidden = true;
    button.setAttribute('aria-expanded', 'false');
  };

  toggles.forEach((button) => {
    const target = document.querySelector(button.dataset.navTarget);
    if (!target) return;

    target.hidden = true;
    button.addEventListener('click', () => {
      const willOpen = target.hidden;
      target.hidden = !willOpen;
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    toggles.forEach(close);
  });
})();
