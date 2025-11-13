async function getRecipes(road) {
  const res = await fetch(`https://dummyjson.com/recipes/tag/${road}`);
  const response = await res.json();

  console.log(response);
}
getRecipes("pizza");

// "Pizza",
//     "Italian",
//     "Vegetarian",
