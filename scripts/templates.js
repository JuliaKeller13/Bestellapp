function getFoodCardsHtml(articlesIndex) {
    return `
        <div class="food-card">
            <img class="food-card-img" src="${articles[articlesIndex].img}" alt="${articles[articlesIndex].title}">
            <div class="food-card-text-container">
                <div class="food-card-title-with-price">
                    <h3>${articles[articlesIndex].title}</h3>
                    <p>${articles[articlesIndex].price.toFixed(2)}€</p>
                </div>
                <p>${articles[articlesIndex].description}</p>
                <div class="food-card-buttons">
                    <button class="add-to-basket-button">Hinzufügen</button>
                </div>
            </div>
        </div>
    `;
}