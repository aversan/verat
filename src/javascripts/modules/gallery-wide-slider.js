import Swiper from 'swiper';

export default class GalleryWideSlider {
  constructor(el) {
    this.el = el;

    $(this.el).each(function () {
      const $wrapper = $(this);
      const $swiperContainer = $wrapper.find('.js-swiper-container');
      const $prev = $wrapper.find('.js-swiper-prev');
      const $next = $wrapper.find('.js-swiper-next');
      const $pagination = $wrapper.find('.js-swiper-pagination');

      const options = {
        navigation: {
          prevEl: $prev,
          nextEl: $next,
        },
        slidesPerView: 'auto',
        spaceBetween: 1,
        slideToClickedSlide: false,
        initialSlide: 0,
        setWrapperSize: true,
        autoHeight: false,
        observer: true,
        observeParents: true,
        pagination: {
          el: $pagination,
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          }
        },
        onInit: function(swiper) {
          $(window).resize(viewport.changed(function(){
            let $wrapper = $(swiper.wrapper[0]);
            $wrapper.height('auto');
            var maxHeight = Math.max.apply(Math, $wrapper.find('.swiper-slide').map(function(){
              return $(this).height();
            }));
            $wrapper.css('min-height', maxHeight);
            swiper.update();
          }));
        }
      };

      new Swiper($swiperContainer, options);
    });
  }
}
