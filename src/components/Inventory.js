import React from "react";
import "../styles/inventory.css";
import Fridge from "./Fridge";

function Inventory() {
  return (
    <div className="inventory">
      <div className="fridgeCard">
        <Fridge />
      </div>
      <div className="freezerCard">
        <p>Freezer</p>
      </div>
      <div className="cupboardCard">
        <p>Cupboard</p>
      </div>
      <div className="spiceRackCard">
        <p>Spice Rack</p>
      </div>
    </div>
  );
}

export default Inventory;
