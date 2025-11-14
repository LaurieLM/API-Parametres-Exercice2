DOM;
const bodyElement = document.querySelector("body");
const titleSearch = document.querySelector("#search-title");
const inputSearch = document.querySelector("#search-input");
const btnSearch = document.querySelector("#search-btn");

async function getRecipes(road) {
  const res = await fetch(`https://dummyjson.com/recipes/tag/${road}`);
  const response = await res.json();

  console.log(response);

  //   Display
  bodyElement.innerHTML = "";
  response.recipes.forEach((recipe) => {
    const newH2 = document.createElement("h2");
    const newUl = document.createElement("ul");
    const newP = document.createElement("p");

    newH2.textContent = recipe.name;
    newUl.textContent = `Ingrédients : `;
    newP.textContent = `Préparation : ${recipe.instructions}`;

    bodyElement.appendChild(newH2);
    bodyElement.appendChild(newUl);
    bodyElement.appendChild(newP);
    bodyElement.appendChild(newP);

    recipe.ingredients.forEach((ingredient) => {
      const newLi = document.createElement("li");
      newLi.textContent = ingredient;
      newUl.appendChild(newLi);
    });
  });
}

// Search
btnSearch.addEventListener("click", () => {
  let searchValue = inputSearch.value;
  console.log(searchValue);
  getRecipes(searchValue);
});

// Filtrage
//   const filteredRecipes = [];
//   for (const recipe of response) {
//     const { name, ingredients, preparation } = recipe;
//     filteredRecipes.push({ name, ingredients, preparation });
//   }

// Exemple
// for (const recipe of recipesApi) {
//   // je veux juste ces 4 champs
//   const {preparation, tempsPrep, tempsCui, difficulty} = recipe;
//   // je push un obj avec seulement ces 4 champs dans ma nouvelle array
//   filteredRecipes.push({preparation, tempsPrep, tempsCui, difficulty})
// }
