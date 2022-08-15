import React from "react";
import "../styles/inventoryItems.css";
import AddItem from "./AddItem";

function Cupboard() {
  return (
    <div>
      <h2>Cupboard</h2>
      <div className="add-item-cupboard">
        <AddItem />
      </div>
    </div>
  );
}

export default Cupboard;
