import axios from "axios";

function getRecipe(inventory) {
  if (!inventory) {
    return Promise.resolve([]);
  }

  const searchNames = inventory.map((ingredient) => ingredient.name);

  const removeSpaces = searchNames.map((name) => name.replaceAll(" ", "-"));

  console.log(removeSpaces, "removeSpaces");

  const query = removeSpaces.join(",+");

  return axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=fec6a5d805ed462ab6b47e10443e4cb0&ingredients=${query}&number=2`
    )
    .then((response) => {
      const recipeResults = response.data;

      console.log(response);

      const recipes = recipeResults.map((recipe) => {
        const container = {};

        container.name = recipe.name;
        container.image = recipe.image;

        return container;
      });

      return recipes;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getRecipe;
