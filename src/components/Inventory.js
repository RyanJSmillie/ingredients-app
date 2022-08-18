import React, { useState } from "react";
import "../styles/inventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import Fridge from "./Fridge";
import Freezer from "./Freezer";
import Cupboard from "./Cupboard";
import SpiceRack from "./SpiceRack";
import AddItem from "./AddItem";

function Inventory() {
  const initialState = {
    display: false,
  };

  const [formState, setFormState] = useState(initialState.display);

  function hideForm(event) {
    event.preventDefault();

    setFormState((current) => !current);
  }
  return (
    <div>
      <div className="addItemCard">
        <div className="cardHeading">
          <h2>Add Items</h2>
          <button className="addButton" type="submit" onClick={hideForm}>
            <FontAwesomeIcon className="plusIcon" icon={faPlus} />
          </button>
        </div>

        <CSSTransition in={formState} timeout={300} classNames="item-form">
          <div style={{ display: formState ? "block" : "none" }}>
            <AddItem />
          </div>
        </CSSTransition>
      </div>
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
    </div>
  );
}

export default Inventory;
