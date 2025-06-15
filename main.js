document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const target = mutation.target;
        if (target.classList.contains('visible')) {
          // Code jab section visible hoga
        }
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section, {
      attributes: true,
    });
  });

  // Scroll animation trigger karne ke liye
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach((section) => {
    intersectionObserver.observe(section);
  });
});