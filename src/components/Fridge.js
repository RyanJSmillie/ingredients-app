import React from "react";
import "../styles/inventoryItems.css";

function Fridge() {
  return (
    <div>
      <p>Fridge</p>
      <ul className="items">
        <p>Milk</p>
        <p>Cheese</p>
        <p>Eggs</p>
      </ul>
    </div>
  );
}

export default Fridge;
