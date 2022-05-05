// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

if (document.querySelector('.filter-catalog__title')) {
  document.querySelector('.filter-catalog__title').addEventListener('click', () => {
    if (window.innerWidth < 992) {
      document.querySelector('.filter-catalog__items').classList.toggle('_active');
    }
  });
}
