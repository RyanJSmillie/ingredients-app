import React, { useState } from "react";
import "../styles/inventoryItems.css";
import AddItem from "./AddItem";

function Fridge() {
  const initialState = {
    display: false,
  };

  const [formState, setFormState] = useState(initialState);

  function hideForm(event) {
    event.preventDefault();

    setFormState({ display: true });
  }

  return (
    <div>
      <h2>Fridge</h2>
      <button type="submit" onSubmit={hideForm}>
        Add Item
      </button>
      <div style={{ display: formState.display ? "block" : "none" }}>
        <AddItem />
      </div>
    </div>
  );
}

export default Fridge;
