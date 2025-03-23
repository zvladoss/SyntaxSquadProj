export const markupReviewCard = ({author, avatar_url, review})=>{
    return `<li class="swiper-slide">
    <div class="paragraph-wrapper">
     <p class="review-paragraph">${review}</p>
  </div>
    <div class="review-person">
      <img class="review-img" alt="${author} photo" src="${avatar_url}"/>
      <p class="review-name">${author}</p></li> `
}

export const makeReviewCard = (reviews)=> reviews.map((review)=>markupReviewCard(review)).join('')

