import { Swiper } from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function initSlider() {

  const resizeSwiper = (breakpoint, swiperClass, swiperSettings) => {

    const slider = document.querySelector('[data-card-slider="parent"]')
    let swiper;

    breakpoint = window.matchMedia(breakpoint)

    const breakpointChecker = function () {
      if (slider) {
        breakpoint.matches
          ? swiper = new Swiper(swiperClass, swiperSettings)
          : swiper !== undefined ? swiper.destroy(true, true) : false
      }
    }

    breakpoint.addEventListener('change', breakpointChecker)
    breakpointChecker()
  }

  resizeSwiper(
    '(min-width: 768px)',
    '.swiper',
    {
      modules: [Navigation],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      navigation: {
        nextEl: '.products__nav-button--next',
        prevEl: '.products__nav-button--prev',
      },
      speed: 500,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
        1340: {
          slidesPerView: 3,
        },
      }
    }
  )
}

export default initSlider