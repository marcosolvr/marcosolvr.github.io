const draggable = screen.width < 1550 ? true : false

new Glider(document.querySelector('.js-banner-carousel'), {
  slideToShow: 1,
  SlidesToScroll: 1,
  dots: '.dots',
  draggable: draggable,
  arrows: {
    prev: '.js-banner-carousel-prev',
    next: '.js-banner-carousel-next'
  }
})

  new Glider(document.querySelector('.js-reasons-to-buy-boxes'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: draggable,
  })