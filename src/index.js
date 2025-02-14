import './styles/scss/main.scss';
import './index.html';

document.querySelector('#mobile-nav-button').addEventListener('click', () => {
  document.querySelector('#mobile-nav-menu').classList.toggle('hide');
  document.querySelector('body').classList.toggle('no-scroll');
});

document.querySelectorAll('.mobile-nav__item').forEach((items) => {
  items.addEventListener('click', () => {
    document.querySelector('#mobile-nav-menu').classList.toggle('hide');
    document.querySelector('body').classList.toggle('no-scroll');
  });
});

document.querySelector('#mobile-nav-menu').addEventListener('click', (e) => {
  if (!e.target.classList.contains('mobile-nav__item')) {
    document.querySelector('#mobile-nav-menu').classList.add('hide');
    document.querySelector('body').classList.remove('no-scroll');
  }
});
