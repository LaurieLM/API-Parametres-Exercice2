// DOM
const bodyElement = document.querySelector("body");
const titleSearch = document.querySelector("#search-title");
const inputSearch = document.querySelector("#search-input");
const btnSearch = document.querySelector("#search-btn");

async function getRecipes(road) {
  const res = await fetch(`https://dummyjson.com/recipes/tag/${road}`);
  const response = await res.json();

  console.log(response);

  // Display
  bodyElement.innerHTML = "";
  response.recipes.forEach((recipe) => {
    const newH2 = document.createElement("h2");
    const newUl = document.createElement("ul");
    const newP = document.createElement("p");

    newH2.textContent = recipe.name;
    newP.textContent = recipe.instructions;

    bodyElement.appendChild(newH2);
    bodyElement.appendChild(newUl);
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
