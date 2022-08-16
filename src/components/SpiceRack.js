import React from "react";
import "../styles/inventoryItems.css";
import AddItem from "./AddItem";

function SpiceRack() {
  return (
    <div>
      <h2>Spice Rack</h2>
      <div className="add-item-spice-rack">
        <AddItem />
      </div>
    </div>
  );
}

export default SpiceRack;
