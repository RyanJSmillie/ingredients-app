import axios from "axios";
import React, { useState } from "react";

const initialSearch = {
  name: "",
};

function ItemSearch() {
  const [searchState, setSearchState] = useState(initialSearch);

  function handleChange(event) {
    setSearchState({
      ...searchState,
      [event.target.name]: event.target.value,
    });
  }

  function handleSearch(event) {
    event.preventDefault();

    const { name } = searchState;

    axios
      .get(
        `https://api.spoonacular.com/food/ingredients/search?apiKey=fec6a5d805ed462ab6b47e10443e4cb0&query=${name}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <label htmlFor="Search">
        <form className="searchItem" onSubmit={handleSearch}>
          <input
            className="item-search-input"
            type="text"
            id="name"
            name="name"
            defaultValue={searchState.name}
            onChange={handleChange}
            placeholder="Milk, Peas, Rice..."
          />
          <button className="item-search-button" type="submit">
            Search!
          </button>
        </form>
      </label>
    </div>
  );
}

export default ItemSearch;
