import PropTypes from "prop-types";
import React, { useState } from "react";
import getIngredients from "../requests/getIngredients";

function ItemSearch({ setSearchResults }) {
  const [value, setValue] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getIngredients(value));
  };

  return (
    <label htmlFor="search">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </label>
  );
}

export default ItemSearch;

ItemSearch.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
