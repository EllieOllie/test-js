const getTemplate = (card) =>
  `
    <li class="courses__item" data-template="element">
      <div class="product-card ${card.classes}">
        <div class="product-card__inner">
          <div class="product-card__box">
            <span class="product-card__label">${card.label}</span>
            ${card.hit === true
    ?
    `<span class="product-card__hit">
                <svg width="12" height="12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path xmlns="http://www.w3.org/2000/svg" d="M10 5H7.149l.867-5L1 7h2.851l-.867 5L10 5z"
                    fill="currentColor" />
                </svg>
                <span class="product-card__hit-text">Хит продаж</span>
              </span>`
    : ``

  }
          </div>
          <h2 class="product-card__title">${card.title}</h2>
          <img class="product-card__img" src="${card.src}" height="${card.height}" width="${card.width}"
            alt="${card.alt}">
        </div>
        <span class="product-card__date">${card.date}</span>
        <a href="${card.href}" aria-label="узнать подробнее" class="product-card__shadow-link" target="_blank"></a>
      </div>
    </li>
  `

export default getTemplate