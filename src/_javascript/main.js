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

new Glider(document.querySelector('.js-most-requested'), {
  slidesToShow: 6,
  slidesToScroll: 2,
  draggable: bannerDraggable,
  arrows: {
    prev: '.js-most-requested-prev',
    next: '.js-most-requested-next'
  }
})