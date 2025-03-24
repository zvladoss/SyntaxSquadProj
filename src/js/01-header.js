const refs = {
  btnBurger: document.querySelector('.burger-menu-btn'),
  btnClose: document.querySelector('.burger-menu-close-btn'),
  burgerModal: document.querySelector('.burger-menu-modal'),
  switcher: document.querySelector('.theme-checkbox'),
  burgerMenuList: document.querySelector('.burger-menu-list'),
};

refs.btnBurger.addEventListener('click', () => {
  refs.burgerModal.classList.add('is-open');

  refs.btnClose.addEventListener('click', onModalClose);
  // document.body.style.overflow = 'hidden';
});

const onModalClose = e => {
  refs.burgerModal.classList.remove('is-open');

  e.target.removeEventListaner('click', onModalClose);
  // document.body.style.overflow = 'visible';
};

refs.switcher.addEventListener('change', e => {
  if (e.target.checked) {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
    return;
  }

  document.body.classList.add('theme-dark');
  document.body.classList.remove('theme-light');
});

refs.burgerMenuList.addEventListener('click', e => {
  if (!e.target.classList.contains('burger-menu-list-link')) {
    return;
  }

  refs.burgerModal.classList.remove('is-open');
});
