const bannerDraggable = screen.width < 1150 ? true : false

new Glider(document.querySelector('.js-banner-carousel'), {
  slideToShow: 1,
  SlidesToScroll: 1,
  dots: '.dots',
  draggable: bannerDraggable,
  arrows: {
    prev: '.js-banner-carousel-prev',
    next: '.js-banner-carousel-next'
  }
})