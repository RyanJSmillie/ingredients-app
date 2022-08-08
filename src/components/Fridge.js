import React from "react";
import "../styles/inventoryItems.css";

// const fridgeInventory = [];

function Fridge() {
  return (
    <div>
      <h2>Fridge</h2>
      <ul className="items">
        <p>Milk</p>
        <p>Cheese</p>
        <p>Eggs</p>
      </ul>
    </div>
  );
}

export default Fridge;
