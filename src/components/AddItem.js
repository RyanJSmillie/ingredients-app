import React, { useState } from "react";
import "../styles/addItem.css";
import axios from "axios";
import ItemSearch from "./ItemSearch";
import SearchResults from "./SearchResults";
import Alert from "./Alert";

const initialInventory = {
  name: "",
  measures: "",
  unit: "",
  storage: "",
};

const unitOptions = [
  { label: "-", value: "-" },
  { label: "Grams", value: "grams" },
  { label: "Kilograms", value: "kilograms" },
  { label: "Millilitres", value: "millilitres" },
  { label: "Litres", value: "litres" },
  { label: "Number", value: "number" },
];

const storageOptions = [
  { label: "-", value: "-" },
  { label: "Fridge", value: "fridge" },
  { label: "Freezer", value: "freezer" },
  { label: "Cupboard", value: "cupboard" },
  { label: "Spice Rack", value: "spice-rack" },
];

const initialState = {
  alert: {
    message: "",
    isSuccess: false,
  },
};

function AddItem() {
  const [inputState, setInputState] = useState(initialInventory);

  const [searchResults, setSearchResults] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  function handleChange(event) {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  }

  async function handleAdd(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5001/ingredients", inputState)
      .then(() =>
        setAlert({
          message: "Item Added",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  }

  return (
    <div>
      <div className="search-form">
        <ItemSearch setSearchResults={setSearchResults} />
        <SearchResults results={searchResults} setInputState={setInputState} />
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
      <form className="addItem" onSubmit={handleAdd}>
        <div className="add-ingredient-entries">
          <label htmlFor="ingredient-measurement">
            <div className="ingredient-form">
              Measurement:
              <input
                id="measures"
                name="measures"
                defaultValue={inputState.measures}
                onChange={handleChange}
                placeholder="50..."
              />
            </div>
          </label>
          <label htmlFor="ingredient-unit">
            <div className="ingredient-form">
              Unit:
              <select
                id="unit"
                name="unit"
                defaultValue={inputState.unit}
                onChange={handleChange}
              >
                {unitOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <label htmlFor="ingredient-storage">
            <div className="ingredient-form">
              Where do you store this item?
              <select
                id="storage"
                name="storage"
                defaultValue={inputState.storage}
                onChange={handleChange}
              >
                {storageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <button className="ingredient-form-button " type="submit">
            Add!
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
