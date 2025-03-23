import {makeReviewCard} from './render-functions.js'
import axios from 'axios';
import Swiper from 'swiper'
import iziToast from 'izitoast';



const refs ={
  swiperWrapper: document.querySelector('.swiper-wrapper'),
  buttonNext:document.querySelector('.button-next-js'),
  buttonPrev:document.querySelector('.button-prev-js'),
  buttons: document.querySelector('.buttons-wrapper'),
}

const renderReviewCards = async ()=> {
  try{
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews')
    const data = response.data;

    refs.swiperWrapper.innerHTML = makeReviewCard(data);

    initSwiper();

  }catch(error){
    iziToast.error({message: error.message});
    refs.swiperWrapper.innerHTML = 'NOT FOUND'
    refs.buttons.classList.add('hidden')
  }
}

renderReviewCards()

const initSwiper = ()=>{
  const swiper = new Swiper('.swiper', {slidesPerView: 1, breakpoints: {1280: {slidesPerView: 2, spaceBetween: 32}}});

  refs.buttonNext.addEventListener('click', () => {
    swiper.slideNext();

    if(swiper.activeIndex === 1){
      refs.buttonPrev.classList.add('active')
      refs.buttonPrev.classList.remove('disableHoverFocus');
    }
    if(swiper.isEnd){
      refs.buttonNext.classList.remove('active')
      refs.buttonNext.classList.add('disableHoverFocus');
    }
  });

  refs.buttonPrev.addEventListener('click', () => {
    swiper.slidePrev();

    if(swiper.activeIndex === 0){
      refs.buttonPrev.classList.remove('active')
      refs.buttonPrev.classList.add('disableHoverFocus');
    }
    if(!swiper.isEnd){
      refs.buttonNext.classList.add('active')
      refs.buttonNext.classList.remove('disableHoverFocus')
    }
  });

}



