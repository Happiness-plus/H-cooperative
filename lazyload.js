const targets = document.querySelectorAll('img[data-lazy]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const image = entry.target;
      image.src = image.dataset.lazy;
      image.onerror = () => {
        image.src = 'img/placeholder.jpg';
      };
      observer.unobserve(image);
    });
  }, { rootMargin: '200px 0px' });

  targets.forEach((image) => observer.observe(image));
} else {
  targets.forEach((image) => {
    image.src = image.dataset.lazy;
  });
}
