import React from "react";
import "../styles/inventoryItems.css";
import PropTypes from "prop-types";

function SpiceRack({ inventory }) {
  if (!inventory) {
    return (
      <div className="cardHeading">
        <h2>Spice Rack</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="card-Heading">
        <h2>Spice Rack</h2>
        <ul className="inventory-list">
          {inventory.map((ingredient) => (
            <li key={ingredient.name}>
              {ingredient.name}, {ingredient.measures} {ingredient.unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SpiceRack;
SpiceRack.propTypes = {
  inventory: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
