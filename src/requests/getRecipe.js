import axios from "axios";

function getRecipe(inventory) {
  if (!inventory) {
    return Promise.resolve([]);
  }

  const searchNames = inventory.map((ingredient) => ingredient.name);

  const removeNull = searchNames.filter((element) => {
    return element !== null;
  });

  const removeSpaces = removeNull.map((name) => name.replaceAll(" ", "-"));

  const query = removeSpaces.join(",+");

  return axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=fec6a5d805ed462ab6b47e10443e4cb0&ingredients=${query}&number=6`
    )
    .then((response) => {
      const recipeResults = response.data;

      console.log(response);

      const recipes = recipeResults.map((recipe) => {
        const container = {};

        const ID = async () => {
          try {
            await axios
              .get(
                `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=fec6a5d805ed462ab6b47e10443e4cb0&includeNutrition=false`
              )
              .then((secondResponse) => {
                container.url = secondResponse.data.sourceUrl;
              });
          } catch (err) {
            console.log(err);
          }
        };

        (async () => {
          await ID();
        })();

        container.name = recipe.title;
        container.image = recipe.image;
        container.missedIngredients = recipe.missedIngredients;
        container.missedIngredientCount = recipe.missedIngredientCount;
        container.id = recipe.id;

        return container;
      });

      return recipes;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getRecipe;
