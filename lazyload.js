const targets=document.querySelectorAll('img');const lazyLoad=target=>{const io=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){const img=entry.target;const src=img.getAttribute('data-lazy');img.setAttribute('src',src);img.onerror=()=>{img.src='path_to_fallback_image.jpg'};observer.disconnect()}})});io.observe(target)};targets.forEach(lazyLoad);