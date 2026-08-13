(() => {
  const lettering = document.getElementById('my-svg');
  if (!lettering) return;

  const hero = lettering.closest('#hero');
  const revealHero = () => hero?.classList.add('is-handwriting-complete');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.Vivus) {
    revealHero();
    return;
  }

  // Match the 2025 build: each duplicate glyph path is traced in document
  // order, slowly enough to read as handwriting instead of a logo reveal.
  new window.Vivus(
    lettering,
    {
      type: 'oneByOne',
      duration: 230,
    },
    revealHero,
  );
})();
