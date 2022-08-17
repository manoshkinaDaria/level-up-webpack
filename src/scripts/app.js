import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css'

new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});