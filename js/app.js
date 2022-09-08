const header = document.querySelector('.header-top')
const mobileHeader = document.querySelector('.mobile-header')

window.addEventListener('scroll', function () {
  const top = window.scrollY
  if (top > 400) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
})

window.addEventListener('scroll', function () {
  const top = window.scrollY
  if (top > 200) {
    mobileHeader.classList.add('active')
  } else {
    mobileHeader.classList.remove('active')
  }
})
