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
          <div class="amountbtns-price">
            <div class="cost"><b>${article.title}</b></div>
            <button class="trash-btn" onclick="deleteFromBasket(${basketArticleIndex})">
              <img src="./assets/icons/delete.svg" alt="löschen">
            </button>
          </div>
          <div class="amountbtns-price">
            <div class="buttons">
              <button class="small-basket-button" onclick="changeAmount(${basketArticleIndex}, -1)">-</button>
              <span class="amount-display">${article.amount}</span>
              <button class="small-basket-button" onclick="changeAmount(${basketArticleIndex}, +1)">+</button>
            </div>
            <div class="price">${subtotal.toFixed(2)}€</div>
          </div>
        </div>
        `;
  }

  function getBasketTotalSumSectionHtml(finalTotal, deliveryCosts){
    return `
        <hr>    
        <div class="cost"
          <div class="cost">
            <span>Lieferungskosten:</span>
            <span>${deliveryCosts.toFixed(2)}€</span>
          </div>
          <div class="cost">
            <strong>Gesamtsumme:</strong>
            <strong>${finalTotal.toFixed(2)}€</strong>
        </div>
        <button class="buy-button" id="buyButton">Bestellen</button>
    `;
  }