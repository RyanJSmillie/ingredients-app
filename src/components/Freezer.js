import React from "react";
import "../styles/inventoryItems.css";
import AddItem from "./AddItem";

function Freezer() {
  return (
    <div>
      <h2>Freezer</h2>
      <div className="add-item-freezer">
        <AddItem />
      </div>
    </div>
  );
}

export default Freezer;
