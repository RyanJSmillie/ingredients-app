import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/reciperesults.css";
import getRecipe from "../requests/getRecipe";

function RecipeResults({ inventory }) {
  const [recipeList, setRecipeList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRecipeList(await getRecipe(inventory));
  };

  recipeList.sort((a, b) => a.missedIngredientCount - b.missedIngredientCount);

  console.log(recipeList, "sorted");

  if (!inventory.length) {
    return <p>No recipes available, please update your inventory!</p>;
  }

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

RecipeResults.propTypes = {
  inventory: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
