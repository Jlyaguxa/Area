document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('header-top--burger');
  const nav = document.getElementById('headerTopInner');
  const overlay = document.getElementById('headerOverlay');
  const links = nav.querySelectorAll('a');
  const elements = document.querySelectorAll('.component');
  const box = Array.from(document.querySelector('.header-top--inner'))
  const headerBtn = document.querySelector('.header-top--btn')
  const navList = document.querySelector('.header-top--nav')
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
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  box.addEventListener('click', (e) => {
    e.preventDefault();
    box.classList.toggle('active');
    if(box.classList.contains('active')){
      headerBtn.style.maxHeight = headerBtn.scrollHeight + 'px';
      navList.style.maxHeight = headerBtn.scrollHeight + 'px';
    } else{
      headerBtn.style.maxHeight = 0;
      navList.style.maxHeight = 0;
    }
  })

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