import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialInventory = [
  {
    ingredients: {
      id: "",
      name: "",
      measures: "",
      unit: "",
    },
  },
];

function AddItem() {
  const [fridgeInventory, setFridgeInventory] = useState(initialInventory);

  function handleChange(event) {
    setFridgeInventory({
      ...fridgeInventory,
      [event.target.name]: event.target.value,
    });
  }

  function handleAdd(event) {
    event.preventDefault();

    const { name, measures, unit } = fridgeInventory;

    const newFridgeInventory = fridgeInventory.concat({
      ingredients: {
        name,
        measures,
        unit,
        id: uuidv4(),
      },
    });

    console.log(newFridgeInventory);

    setFridgeInventory(newFridgeInventory);
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
              defaultValue={fridgeInventory.name}
              onChange={handleChange}
              placeholder="Milk"
            />
          </label>
          <label htmlFor="ingredient-measurement">
            Measurement
            <input
              id="measures"
              name="measures"
              defaultValue={fridgeInventory.measures}
              onChange={handleChange}
              placeholder="50"
            />
          </label>
          <label htmlFor="ingredient-unit">
            Unit
            <input
              id="unit"
              name="unit"
              defaultValue={fridgeInventory.unit}
              onChange={handleChange}
              placeholder="ml"
            />
          </label>
          <button type="submit">Add</button>
        </div>
      </form>

      {/* <ul>
        {fridgeInventory.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default AddItem;
