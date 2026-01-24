function getFoodCardsHtml(articlesIndex) {
    return `
        <div class="food-card">
            <img class="food-card-img" src="${articles[articlesIndex].img}" alt="${articles[articlesIndex].title}">
            <div class="food-card-info">
                <div class="food-card-title-with-description">
                    <h3>${articles[articlesIndex].title}</h3>
                    <p class="description">${articles[articlesIndex].description}</p>
                </div>
                <div class="food-card-buttons">
                    <p>${articles[articlesIndex].price.toFixed(2)}€</p>
                    <button class="add-to-basket-button" onclick="addToBasket(${articlesIndex})">Hinzufügen</button>
                </div>
            </div>
        </div>
    `;
}