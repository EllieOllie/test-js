import renderCards from "./render";

function initFilter() {
  const filterLinks = Array.from(document.querySelectorAll('[data-filter="link"]'))

  function filter(hash) {
    filterLinks.map((item) =>
      hash === item.hash ? item.classList.add("is-active") : item.classList.remove("is-active")
    );
    renderCards(hash)
  }

  filterLinks.map(item => item.addEventListener("click", (e) => {
    e.target.dataset["filter"] ? filter(e.currentTarget.hash) : false
  }))

  window.addEventListener("hashchange", () => {
    document.querySelector('[data-project="parent"]').classList.remove("is-active")
    setTimeout(() => {
      filter(location.hash)
    }, 100)
  })

  renderCards("#all")
}

export default initFilter