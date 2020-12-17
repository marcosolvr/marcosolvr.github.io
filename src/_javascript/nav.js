const $footerNavDropdawn = document.querySelectorAll('.js-footer-nav-dropdawn-link')

$footerNavDropdawn.forEach((el) => {
  el.addEventListener('click', () => {
    const $element = el.parentElement.closest('div').lastElementChild

    $element.classList.toggle('show')
  })
})