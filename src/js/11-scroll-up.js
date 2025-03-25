const scrollUp = document.querySelector('.scroll__up');
const scrollPath = document.querySelector('.scroll__up-svg-path');
const pathLength = scrollPath.getTotalLength();
const offset = 200;

scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollPath.style.transition = 'stroke-dashoffset 20ms';
const getTop = () => window.scrollY || document.documentElement.scrollTop;

const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;
  scrollPath.style.strokeDashoffset = dashoffset;
};

window.addEventListener('scroll', () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add('scroll__up-active');
  } else {
    scrollUp.classList.remove('scroll__up-active');
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
