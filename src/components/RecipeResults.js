import React, { useState } from "react";
// import PropTypes from "prop-types";
import "../styles/reciperesults.css";
import getRecipe from "../requests/getRecipe";
import retrieveIngredients from "../requests/retrieveingredients";

function RecipeResults() {
  const [recipeList, setRecipeList] = useState([]);
  const [inventory, setInventory] = useState();

  // const updateInventory = async (event) => {
  //   event.preventDefault();

  //   setInventory(await retrieveIngredients());
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInventory(await retrieveIngredients());

    console.log(inventory);

    setRecipeList(await getRecipe(inventory[4]));
  };

  recipeList.sort((a, b) => a.missedIngredientCount - b.missedIngredientCount);

  // if (!inventory.length) {
  //   return <p>No recipes available, please update your inventory!</p>;
  // }

  if (recipeList.length === 0) {
    <div className="recipe-search-card">
      <form className="searchForm" onSubmit={handleSubmit}>
        <button className="searchButton" type="submit">
          Show your recipes!
        </button>
      </form>
    </div>;
  }

  return (
    <div className="recipe-search-card">
      <form className="searchForm" onSubmit={handleSubmit}>
        <button className="searchButton" type="submit">
          Show your recipes!
        </button>
      </form>

      <div className="recipe-search-results">
        {recipeList.map((recipe) => (
          <div key={recipe.name} className="recipe-card">
            <div className="recipe-image-name">
              <a href={recipe.url}>
                <img
                  href={recipe.url}
                  className="recipe-image"
                  src={recipe.image}
                  alt="reicpe-img"
                />
              </a>
              <a href={recipe.url} className="ingredient-name">
                {recipe.name}
              </a>
            </div>
            <div className="recipe-ingredients">
              <b>You are missing {recipe.missedIngredientCount} ingredients:</b>
              {recipe.missedIngredients.map((ingredient) => (
                <small key={ingredient.name}>{ingredient.name}</small>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeResults;

// RecipeResults.propTypes = {
//   inventory: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
// };
