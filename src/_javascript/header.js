const $headerMobileSearch = document.querySelector('.js-header-mobile-search')
const $headerInputSearch = document.querySelector('.js-header-input-search')
const $headerNavSearch = document.querySelector('.js-header-mobile-nav')
const $nav = document.querySelector('nav')

$headerMobileSearch.addEventListener('click', () => {
  $headerInputSearch.classList.toggle('show')
  $headerInputSearch.firstElementChild.focus()
})

if (screen.width >= 1150) {
  $nav.style.display = 'flex'
}
$headerNavSearch.addEventListener('click', () => {
  $nav.classList.toggle('show')
})