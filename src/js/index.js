new Swiper('.swiper', {  
  initialSlide: 0,
  slidesPerView: "auto",
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 15,
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper"
  },
  watchOverflow: true,
  initialSlide: 1,
  breakpoints: {
    360: {
      sliderPerView: 1,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    480: {
      sliderPerView: 2,
    },
    768: {
      sliderPerView: 3,
    },
    1024: {
      sliderPerView: 4,

      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      mousewheel: {
        sensitivity: 4,
        eventsTarget: ".swiper"
      },
    }
  }
})
    

