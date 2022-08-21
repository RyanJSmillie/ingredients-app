import axios from "axios";

function getIngredients(query) {
  if (!query) {
    return Promise.resolve([]);
  }

  return axios
    .get(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=fec6a5d805ed462ab6b47e10443e4cb0&query=${query}`
    )
    .then((response) => {
      const ingredientsResults = response.data.results;

      console.log(response);

      const ingredients = ingredientsResults.map((ingredient) => {
        const container = {};

        container.name = ingredient.name;
        container.image = ingredient.image;

        return container;
      });

      return ingredients;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getIngredients;
