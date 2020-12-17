window.addEventListener('load', () => {
  const $modal = document.querySelector('.modal')
  const $modalClose = document.querySelector('.modal-close-button')

  $modal.style.display = 'block'
  $modalClose.addEventListener('click', () => {
    $modal.style.display = 'none'
  })
})