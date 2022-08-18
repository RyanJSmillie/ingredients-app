import React, { useState } from "react";
import "../styles/addItem.css";
import axios from "axios";
import ItemSearch from "./ItemSearch";

const initialInventory = {
  name: "",
  measures: "",
  unit: "",
  storage: "",
};

const unitOptions = [
  { label: "Grams", value: "grams" },
  { label: "Kilograms", value: "kilograms" },
  { label: "Millilitres", value: "millilitres" },
  { label: "Litres", value: "litres" },
];

const storageOptions = [
  { label: "Fridge", value: "fridge" },
  { label: "Freezer", value: "freezer" },
  { label: "Cupboard", value: "cupboard" },
  { label: "Spice Rack", value: "spice-rack" },
];

function AddItem() {
  const [inputState, setInputState] = useState(initialInventory);
  // eslint-disable-next-line no-unused-vars
  const [inventory, setInventory] = useState([]);

  function handleChange(event) {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  }

  function handleAdd(event) {
    event.preventDefault();

    // setInventory((current) => [...current, inputState]);

    const { name, measures, unit } = inventory;

    axios.post("http://localhost:5000/ingredients", {
      name,
      measures,
      unit,
    });
    // .then(() =>
    //   setAlert({
    //     message: "Property Added",
    //     isSuccess: true,
    //   })
    // )
    // .catch(() =>
    //   setAlert({
    //     message: "Server error. Please try again later.",
    //     isSuccess: false,
    //   })
    // );
  }

  return (
    <div>
      <form className="addItem" onSubmit={handleAdd}>
        <div className="add-ingredient-entries">
          <div className="ingredient-form">
            Item:
            <ItemSearch />
          </div>
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
                  <option value={option.value}>{option.label}</option>
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
                  <option value={option.value}>{option.label}</option>
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
