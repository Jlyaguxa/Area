document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('header-top--burger');
  const menu = document.getElementById('headerTopInner');
  const overlay = document.getElementById('headerOverlay');
  const links = menu.querySelectorAll('a');
  const elements = document.querySelectorAll('.component');

  function toggleMenu() {
    burgerBtn.classList.toggle('active');
    overlay.classList.toggle('active');

    if (menu.classList.contains('active')) {
      // Закрываем
      menu.classList.remove('active');
      menu.style.maxHeight = '50px';      // возвращаем закрытую высоту
    } else {
      // Открываем
      menu.classList.add('active');
      // Получаем полную высоту содержимого
      const fullHeight = menu.scrollHeight;
      menu.style.maxHeight = fullHeight + 'px';
    }
  }

  burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  overlay.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      toggleMenu();
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Intersection Observer для анимации появления
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});