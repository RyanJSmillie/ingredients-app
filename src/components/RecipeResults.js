import React from "react";
import PropTypes from "prop-types";
import "../styles/searchresults.css";
import getRecipe from "../requests/getRecipe";

function RecipeResults({ inventory }) {
  if (!inventory.length) {
    return <p>No recipes available, please update your inventory!</p>;
  }

  const recipes = getRecipe(inventory);

  return (
    <div className="ingredient-search-card">
      {/* {recipes.map((ingredient) => (
        <div key={ingredient.name} className="ingredient-search-results">
          <img
            className="ingredient-image"
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt="ingredient-img"
          />
          <i className="ingredient-name">{ingredient.name}</i>
          <input
            className="ingredient-input"
            type="radio"
            name="name"
            value={ingredient.name}
            // onChange={handleChange}
          />
        </div>
      ))} */}
    </div>
  );
}

export default RecipeResults;

RecipeResults.propTypes = {
  inventory: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
