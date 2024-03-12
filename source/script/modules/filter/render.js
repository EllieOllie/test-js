import projects from "/public/projects.json";
import getTemplate from "./template";

function arrayToHtml(array) {
  return array.map((item) => getTemplate(item)).join("")
}

function renderCards(hash) {
  const cardsList = document.querySelector('[data-project="parent"]')
  if (cardsList) {
    cardsList.classList.add("is-active")

    hash === "#all"
      ? cardsList.innerHTML = arrayToHtml(projects)
      : cardsList.innerHTML = arrayToHtml(projects.filter((item) => item.tags.toString() === hash))
  } else {
    return false
  }
}

export default renderCards