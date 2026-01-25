function getFoodCardsHtml(articleIndex) {
    return `
        <div class="food-card">
            <img class="food-card-img" src="${articles[articleIndex].img}" alt="${articles[articleIndex].title}">
            <div class="food-card-info">
                <div class="food-card-title-with-description">
                    <h3>${articles[articleIndex].title}</h3>
                    <p class="description">${articles[articleIndex].description}</p>
                </div>
                <div class="food-card-buttons">
                    <p>${articles[articleIndex].price.toFixed(2)}€</p>
                    <button class="add-to-basket-button" onclick="addToBasket(${articleIndex})">Hinzufügen</button>
                </div>
            </div>
        </div>
    `;
}

  function getEmptyBasketHtml(){
    return `<div class="basket-empty">
                <p class="empty-basket">Füge etwas Leckeres hinzu</p>
                <img
                  class="basket-empty-img"
                  src="./assets/icons/shopping-cart-basket.png"
                  alt="leerer Einkaufswagen"
                />
              </div>`;
  }

  function getBasketArticleCardHtml(article, basketArticleIndex) {
    const subtotal = article.price * article.amount;
    return `
        <div class="basket-articles">
          <div class="article-title">${article.amount}x <b>${article.title}</b></div>
          <div class="amountbtns-price">
            <div class="buttons">
              <button class="amount-button" onclick="changeAmount(${basketArticleIndex}, -1)">-</button>
              <span class="amount-display">${article.amount}</span>
              <button class="amount-button" onclick="changeAmount(${basketArticleIndex}, +1)">+</button>
            </div>
            <div class="price">${subtotal.toFixed(2)}€</div>
          </div>
        </div>
        `;
  }