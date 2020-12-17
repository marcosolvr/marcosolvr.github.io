const bannerDraggable = screen.width < 1150 ? true : false

new Glider(document.querySelector('.js-most-requested'), {
  slidesToShow: 6,
  slidesToScroll: 2,
  draggable: bannerDraggable,
  arrows: {
    prev: '.js-most-requested-prev',
    next: '.js-most-requested-next'
  }
})