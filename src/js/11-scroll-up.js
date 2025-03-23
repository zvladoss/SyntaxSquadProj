const scrollUp = document.querySelector('.scroll__up');
const scrollPath = document.querySelector('.scroll__up-svg-path');
const pathLength = scrollPath.getTotalLength(); //Загальна довжина
const offset = 200; //Зсув

// Шаблон штрихів для малювання контуру фігури
scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
// Зміщення під час прокручування тире з властивістю
scrollPath.style.transition = 'stroke-dashoffset 20ms';
// Визначаємо поточну вертикальну прокрутку сторінки у браузері
const getTop = () => window.scrollY || document.documentElement.scrollTop;

// Оновлення висоти прокрутки
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight; // Обчислення висоти прокрутки
  const dashoffset = pathLength - (getTop() * pathLength) / height; // Визначаємо пройдений шлях
  scrollPath.style.strokeDashoffset = dashoffset; // Застосування
};

// Прокручування сторінки
window.addEventListener('scroll', () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add('scroll__up-active');
  } else {
    scrollUp.classList.remove('scroll__up-active');
  }
});

// Прокручуваня сторінку вгору при кліку
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
