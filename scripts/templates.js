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