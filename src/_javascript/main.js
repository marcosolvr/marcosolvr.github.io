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