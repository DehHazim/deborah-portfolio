const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.16,
  });

  reveals.forEach((section, index) => {
    section.style.transitionDelay = `${index * 80}ms`;
    observer.observe(section);
  });
} else {
  reveals.forEach((section) => {
    section.classList.add('is-visible');
  });
}
