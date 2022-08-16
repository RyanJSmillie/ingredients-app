import React, { useState } from "react";
import "../styles/addItem.css";

const initialInventory = {
  name: "",
  measures: "",
  unit: "",
};

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

    setInventory((current) => [...current, inputState]);
  }

  return (
    <div>
      <form className="addItem" onSubmit={handleAdd}>
        <div className="add-ingredient-entries">
          <label htmlFor="ingredient-name">
            <div className="ingredient-form">
              Item
              <input
                id="item"
                name="item"
                defaultValue={inputState.name}
                onChange={handleChange}
                placeholder="Milk, Peas, Rice..."
              />
            </div>
          </label>
          <label htmlFor="ingredient-measurement">
            <div className="ingredient-form">
              Measurement
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
              Unit
              <input
                id="unit"
                name="unit"
                defaultValue={inputState.unit}
                onChange={handleChange}
                placeholder="millilitres, grams..."
              />
            </div>
          </label>
          <button className="ingredient-form-button " type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
