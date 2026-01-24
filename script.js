const basket = [];

function init() {
  renderFoodCards();
  renderBasket();
}

function renderFoodCards() {
  const menuCardsCakesSection = document.getElementById(
    "menuCardsCakesSection",
  );
  const menuCardsCheescakesSection = document.getElementById(
    "menuCardsCheescakesSection",
  );
  const menuCardsCupcakesSection = document.getElementById(
    "menuCardsCupcakesSection",
  );
  const menuCardsDonutsSection = document.getElementById(
    "menuCardsDonutsSection",
  );
  menuCardsCakesSection.innerHTML = "";
  menuCardsCheescakesSection.innerHTML = "";
  menuCardsCupcakesSection.innerHTML = "";
  menuCardsDonutsSection.innerHTML = "";

  for (
    let articleIndex = 0;
    articleIndex < articles.length;
    articleIndex++
  ) {
    if (articles[articleIndex].category === "Kuchen") {
      menuCardsCakesSection.innerHTML += getFoodCardsHtml(articleIndex);
    }
    if (articles[articleIndex].category === "Käsekuchen") {
      menuCardsCheescakesSection.innerHTML += getFoodCardsHtml(articleIndex);
    }
    if (articles[articleIndex].category === "Donuts") {
      menuCardsDonutsSection.innerHTML += getFoodCardsHtml(articleIndex);
    }
    if (articles[articleIndex].category === "Muffins") {
      menuCardsCupcakesSection.innerHTML += getFoodCardsHtml(articleIndex);
    }
  }
}

//ad to basket
function addToBasket(articleIndex) {
    const article = articles[articleIndex];
    
    let existingArticle = null;
    for (let basketArticleIndex = 0; basketArticleIndex < basket.length; basketArticleIndex++) {
        if (basket[basketArticleIndex].title === article.title) {
            existingArticle = basket[basketArticleIndex];
            break;
        }
    }

    if (existingArticle) {
        existingArticle.amount++;
    } else {
        basket.push({
            "title": article.title,
            "price": article.price,
            "amount": 1
        });
    }
    
    renderBasket();
}

function renderBasket() {
  let totalSum = 0;
  const basketContent = document.getElementById("basketContent");
  basketContent.innerHTML = "";

  if (basket.length === 0) {
    basketContent.innerHTML = `<div class="basket-empty">
                <div>
                  Füge einige leckere Gerichte aus der Speisekarte hinzu
                </div>
                <img
                  class="basket-empty-img"
                  src="./assets/icons/shopping-cart-basket.png"
                  alt="leerer Einkaufswagen"
                />
              </div>`;
    return;
  }

  for (let articleIndex = 0; articleIndex < basket.length; articleIndex++) {
    const article = basket[articleIndex];
    const subtotal = article.price * article.amount;
    totalSum += subtotal;

    basketContent.innerHTML += `
            <div class="basket-articles">
                <div class="basket-article-info">
                    <b>${article.title}</b><br>
                    ${article.price.toFixed(2)}€ x ${article.amount} = ${subtotal.toFixed(2)}€
                </div>
                <div class="basket-item-controls">
                    <button onclick="changeAmount(${articleIndex}, -1)">-</button>
                    <span>${article.amount}</span>
                    <button onclick="changeAmount(${articleIndex}, 1)">+</button>
                </div>
            </div>
            <hr>
        `;
  }

  basketContent.innerHTML += `
        <div class="basket-total">
            <strong>Gesamtsumme: ${totalSum.toFixed(2)}€</strong>
        </div>
    `;
}


//im Warenkorb Menge soll veränderbar sein, oder löschen bei 1