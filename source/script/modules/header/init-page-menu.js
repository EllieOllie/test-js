function initMenu() {

  const body = document.body
  const burger = document.querySelector('[data-sandwich]')
  const menu = document.querySelector('[data-main-nav]')
  const menuItems = Array.from(document.querySelectorAll('[data-nav-item]'))
  const logo = document.querySelector('[data-header-logo]')

  function mobileMenu(lock) {
    burger.classList.toggle('is-active', lock)
    menu.classList.toggle('is-active', lock)
    body.classList.toggle('scroll-lock', lock)
    logo.classList.toggle('is-menu', lock)
  }

  burger.addEventListener('click', () => {
    mobileMenu(body.classList.contains('scroll-lock') ? false : true)

    menuItems.map((item, i) => item.style.transitionDelay = `${i * 150}ms`)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") mobileMenu(false)
  })

  window.matchMedia('(max-width: 1024px)').addEventListener('change', (e) => {
    e.matches === false ? mobileMenu(e.matches) : false
  })
}

export default initMenu