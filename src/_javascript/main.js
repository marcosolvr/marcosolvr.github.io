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

window.addEventListener('load', () => {
  const $modal = document.querySelector('.modal')
  const $modalClose = document.querySelector('.modal-close-button')

  $modal.style.display = 'block'
  $modalClose.addEventListener('click', () => {
    $modal.style.display = 'none'
  })
})

const $footerNavDropdawn = document.querySelectorAll('.js-footer-nav-dropdawn-link')
const $headerMobileSearch = document.querySelector('.js-header-mobile-search')
const $headerInputSearch = document.querySelector('.js-header-input-search')

$footerNavDropdawn.forEach((el) => {
  el.addEventListener('click', () => {
    const $element = el.parentElement.closest('div').lastElementChild

    $element.classList.toggle('show')
  })
})

$headerMobileSearch.addEventListener('click', () => {
  console.log('clicou')
  $headerInputSearch.classList.toggle('show')
})



// console.log($footerNavDropdawn[0].parentElement.closest('div').lastElementChild)