import React from "react";
import PropTypes from "prop-types";
import "../styles/searchresults.css";

function SearchResults({ results, setInputState }) {
  function handleChange(event) {
    setInputState({
      ...setInputState,
      [event.target.name]: event.target.value,
    });
  }

  if (!results.length) {
    return <p>No results</p>;
  }
  return (
    <div className="ingredient-search-card">
      {results.map((ingredient) => (
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
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  setInputState: PropTypes.func.isRequired,
};
