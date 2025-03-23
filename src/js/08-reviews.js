import {markupReviewCard, makeReviewCard} from './render-functions.js'
import axios from 'axios';
import Swiper from 'swiper'



const refs ={
  swiperWrapper: document.querySelector('.swiper-wrapper'),
  buttonNext:document.querySelector('.button-next-js'),
  buttonPrev:document.querySelector('.button-prev-js')
}

const renderReviewCards = async ()=> {
  const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews')
  const data = response.data;

  refs.swiperWrapper.innerHTML = makeReviewCard(data);
  initSwiper();

}

renderReviewCards()

const initSwiper = ()=>{
  const swiper = new Swiper('.swiper', {slidesPerView: 1 });

  refs.buttonNext.addEventListener('click', () => {
    swiper.slideNext();

    if(swiper.activeIndex === 1){
      refs.buttonPrev.classList.add('active')
    }
    if(swiper.activeIndex === swiper.slides.length-1){
      refs.buttonNext.classList.remove('active')
    }
  });

  refs.buttonPrev.addEventListener('click', () => {
    swiper.slidePrev();

    if(swiper.activeIndex === 0){
      refs.buttonPrev.classList.remove('active')
    }
    if(swiper.activeIndex < swiper.slides.length-1){
      refs.buttonNext.classList.add('active')
    }
  });

}



