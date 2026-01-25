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

  for (let articleIndex = 0; articleIndex < articles.length; articleIndex++) {
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

function addToBasket(articleIndex) {
  const article = articles[articleIndex];

  let existingArticle = null;
  for (
    let basketArticleIndex = 0;
    basketArticleIndex < basket.length;
    basketArticleIndex++
  ) {
    if (basket[basketArticleIndex].title === article.title) {
      existingArticle = basket[basketArticleIndex];
      break;
    }
  }

  if (existingArticle) {
    existingArticle.amount++;
  } else {
    basket.push({
      title: article.title,
      price: article.price,
      amount: 1,
    });
  }

  renderBasket();
}

function renderBasket() {
  let totalSum = 0;
  const basketContent = document.getElementById("basketContent");
  basketContent.innerHTML = "";

  if (basket.length === 0) {
    basketContent.innerHTML += getEmptyBasketHtml();
    return;
  }

  for (let basketArticleIndex = 0;basketArticleIndex < basket.length; basketArticleIndex++) {
    const article = basket[basketArticleIndex];
    totalSum += article.price * article.amount;

    basketContent.innerHTML += getBasketArticleCardHtml(article, basketArticleIndex);
  }

  basketContent.innerHTML += `    
        <div class="basket-total">
          <hr>
          <div class="totalsum">
          <strong>Gesamtsumme:</strong>
          <strong>${totalSum.toFixed(2)}€</strong>
        </div>
        <button class="buy-button" id="buyButton">Bestellen</button>
    `;
}

//im Warenkorb Menge soll veränderbar sein, oder löschen bei 1

function changeAmount(basketArticleIndex, change) {
  basket[basketArticleIndex].amount += change;

  if (basket[basketArticleIndex].amount <= 0) {
    basket.splice(basketArticleIndex, 1);
  }

  renderBasket();
}
