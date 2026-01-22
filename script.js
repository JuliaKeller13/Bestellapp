function init() {
    renderFoodCards();
}

function renderFoodCards() {
    const menuCardsCakesSection = document.getElementById("menuCardsCakesSection");
    const menuCardsCheescakesSection = document.getElementById("menuCardsCheescakesSection");
    const menuCardsCupcakesSection = document.getElementById("menuCardsCupcakesSection");
    const menuCardsDonutsSection = document.getElementById("menuCardsDonutsSection");
    menuCardsCakesSection.innerHTML = "";
    menuCardsCheescakesSection.innerHTML = "";
    menuCardsCupcakesSection.innerHTML = "";
    menuCardsDonutsSection.innerHTML = "";

    for (let articlesIndex = 0; articlesIndex < articles.length; articlesIndex++) {
    if (articles[articlesIndex].category === "Kuchen") {
        menuCardsCakesSection.innerHTML += getFoodCardsHtml(articlesIndex);
    } if (articles[articlesIndex].category === "Käsekuchen") {
        menuCardsCheescakesSection.innerHTML += getFoodCardsHtml(articlesIndex);
    } if (articles[articlesIndex].category === "Donuts") {
        menuCardsDonutsSection.innerHTML += getFoodCardsHtml(articlesIndex);
    } if (articles[articlesIndex].category === "Muffins") {
        menuCardsCupcakesSection.innerHTML += getFoodCardsHtml(articlesIndex);
    }
}
}