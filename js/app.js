const header = document.querySelector('.header')

window.addEventListener('scroll', function () {
  const top = window.scrollY
  if (top > 400) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
})
