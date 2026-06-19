document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('header-top--burger');
  const nav = document.getElementById('headerNav');
  const nav_list = document.querySelector('.header-top--nav-list')
  const overlay = document.getElementById('headerOverlay');

  // Функция открытия/закрытия
  function toggleMenu() {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    
  }

  // Клик по бургеру
  burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // чтобы клик не сработал на overlay
    toggleMenu();
  });

  // Клик по overlay (затемнению) – закрываем
  overlay.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      toggleMenu();
    }
  });

  // Закрытие при клике на любую ссылку внутри меню
  const links = nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  
  
});