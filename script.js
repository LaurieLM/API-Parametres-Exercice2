// DOM
const bodyElement = document.querySelector("body");
const titleSearch = document.querySelector("#search-title");
const inputSearch = document.querySelector("#search-input");
const btnSearch = document.querySelector("#search-btn");

async function getRecipes(road) {
  const res = await fetch(`https://dummyjson.com/recipes/tag/${road}`);
  const response = await res.json();

  console.log(response);
}

btnSearch.addEventListener("click", () => {
  let searchValue = inputSearch.value;
  console.log(searchValue);
  getRecipes(searchValue);
});
