import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

const initialInventory = {
  name: "",
  measures: "",
  unit: "",
};

function AddItem() {
  const [inputState, setInputState] = useState(initialInventory);
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
      <form onSubmit={handleAdd}>
        <div className="add-ingredient-entries">
          <label htmlFor="ingredient-name">
            Item
            <input
              id="item"
              name="item"
              defaultValue={inputState.name}
              onChange={handleChange}
              placeholder="Milk"
            />
          </label>
          <label htmlFor="ingredient-measurement">
            Measurement
            <input
              id="measures"
              name="measures"
              defaultValue={inputState.measures}
              onChange={handleChange}
              placeholder="50"
            />
          </label>
          <label htmlFor="ingredient-unit">
            Unit
            <input
              id="unit"
              name="unit"
              defaultValue={inputState.unit}
              onChange={handleChange}
              placeholder="ml"
            />
          </label>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddItem;
