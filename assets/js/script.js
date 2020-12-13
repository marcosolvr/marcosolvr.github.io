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

  window.addEventListener('load', () => {
    const $modal = document.querySelector('.modal')
    const $modalClose = document.querySelector('.modal-close-button')

    $modal.style.display = 'block';
    $modalClose.addEventListener('click', () => {
      $modal.style.display = 'none';
    })
  });