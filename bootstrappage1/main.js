window.onscroll = function (e) { 
  const currentScroll = window.pageYOffset; 
  const header=document.querySelector('#header')
  header.classList.add("stickyHeader");
  if(currentScroll===0){
    header.classList.remove("stickyHeader");
  }
} 

//==== AOS js
AOS.init({
  easing: 'ease-out-back',
  duration: 1200
});

// === Swiper JS
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 599px
    599: {
        slidesPerView: 2,
    },
    // when window width is >= 799px
    1200: {
        slidesPerView: 3,
    },

}

});

