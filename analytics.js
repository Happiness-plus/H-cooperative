(() => {
  let started = false;

  const startAnalytics = () => {
    if (started) return;
    started = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'G-4MTY05VZRY');

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4MTY05VZRY';
    document.head.appendChild(script);
  };

  ['pointerdown', 'keydown', 'touchstart'].forEach((eventName) => {
    window.addEventListener(eventName, startAnalytics, { once: true, passive: true });
  });

  window.setTimeout(startAnalytics, 30000);
})();
