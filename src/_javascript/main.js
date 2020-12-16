new Glider(document.querySelector('.js-banner-carousel'), {
  slideToShow: 1,
  SlidesToScroll: 1,
  dots: '.dots',
  draggable: true,
  arrows: {
    prev: '.js-banner-carousel-prev',
    next: '.js-banner-carousel-next'
  }
})

if (screen.width < 1550) {
  new Glider(document.querySelector('.js-reasons-to-buy-boxes'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
  })

  new Glider(document.querySelector('.js-partner-brands'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
  })
}