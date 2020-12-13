  new Glider(document.querySelector('.js-banner-carousel'), {
    slideToShow: 1,
    SlidesToScroll: 1,
    draggable: true,
    // dots: '.js-banner-carousel-dots',
    arrows: {
      prev: '.js-banner-carousel-prev',
      next: '.js-banner-carousel-next'
    }
  })

  new Glider(document.querySelector('.js-ordereds-list'), {
    slideToShow: 5,
    SlidesToScroll: 5,
    draggable: true,
  })