import React from "react";
import "../styles/inventory.css";
import Fridge from "./Fridge";
import Freezer from "./Freezer";
import Cupboard from "./Cupboard";
import SpiceRack from "./SpiceRack";

function Inventory() {
  return (
    <div className="inventory">
      <div className="fridgeCard">
        <Fridge />
      </div>
      <div className="freezerCard">
        <Freezer />
      </div>
      <div className="cupboardCard">
        <Cupboard />
      </div>
      <div className="spiceRackCard">
        <SpiceRack />
      </div>
    </div>
  );
}

export default Inventory;
