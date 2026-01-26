const basket = [];

function init() {
  getFromLocalStorage()
  renderFoodCards();
  renderBasket();
  showBasketAmount();
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

function renderBasket() {
  let subtotal = 0;
  const deliveryCosts = 5.0;

  const basketContent = document.getElementById("basketContent");
  const basketTotal = document.getElementById("basketTotal");
  basketContent.innerHTML = "";
  basketTotal.innerHTML = "";

  if (basket.length === 0) {
    basketContent.innerHTML += getEmptyBasketHtml();
    return;
  }

  for (
    let basketArticleIndex = 0;
    basketArticleIndex < basket.length;
    basketArticleIndex++
  ) {
    const article = basket[basketArticleIndex];
    subtotal += article.price * article.amount;

    basketContent.innerHTML += getBasketArticleCardHtml(
      article,
      basketArticleIndex,
    );
  }

  const finalTotal = subtotal + deliveryCosts;
  basketTotal.innerHTML += getBasketTotalSumSectionHtml(
    finalTotal,
    deliveryCosts,
    subtotal
  );
}

function addToBasket(articleIndex) {
  const article = articles[articleIndex];
  const button = document.getElementById(`btn${articleIndex}`);
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

  if (button) {
    const originalText = button.innerText;
    button.innerText = "Hinzugefügt";
    button.classList.add("pressed-button");
    button.disabled = true;
  
  setTimeout(function() {
      button.innerText = originalText;
      button.classList.remove("pressed-button");
      button.disabled = false;
    }, 1500);
}
  renderBasket();
  showBasketAmount();
  saveToLocalStorage();
}

function changeAmount(basketArticleIndex, change) {
  basket[basketArticleIndex].amount += change;

  if (basket[basketArticleIndex].amount <= 0) {
    basket.splice(basketArticleIndex, 1);
  }

  renderBasket();
  showBasketAmount();
  saveToLocalStorage();
}

function deleteFromBasket(basketArticleIndex) {
  basket.splice(basketArticleIndex, 1);

  renderBasket();
  showBasketAmount();
  saveToLocalStorage();
}

function getAmountBasketArticles() {
  let amount = 0;

  for (
    let indexBasketArticle = 0;
    indexBasketArticle < basket.length;
    indexBasketArticle++
  ) {
    amount += basket[indexBasketArticle].amount;
  }
  return amount;
}

function showBasketAmount() {
  let totalAmount = getAmountBasketArticles();
  const amountBasket = document.getElementById("basketArtAmount");

  if (amountBasket) {
    amountBasket.innerText = totalAmount;
    amountBasket.classList.toggle("d-none", totalAmount === 0);
  }
}

function showMobileBasket(){
  const basketWrapper = document.getElementById("basketWrapper");
  basketWrapper.classList.toggle("basket-mobile");
}

function saveToLocalStorage(){
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getFromLocalStorage(){
  let savedBasket = localStorage.getItem("basket");

  if (savedBasket) {
    const data = JSON.parse(savedBasket);
    basket.length = 0;
    basket.push(...data);
  } else {
    saveToLocalStorage();
  }

  renderBasket();
}