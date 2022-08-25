import React, { useState } from "react";
import "../styles/inventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import Fridge from "./Fridge";
import Freezer from "./Freezer";
import Cupboard from "./Cupboard";
import SpiceRack from "./SpiceRack";
import AddItem from "./AddItem";
import retrieveIngredients from "../requests/retrieveingredients";

function Inventory() {
  const initialState = {
    display: false,
  };

  const [formState, setFormState] = useState(initialState.display);
  const [ingredientList, setIngredientList] = useState([]);

  function hideForm(event) {
    event.preventDefault();

    setFormState((current) => !current);
  }

  const updateInventory = async (event) => {
    event.preventDefault();

    setIngredientList(await retrieveIngredients());
  };

  console.log(ingredientList, "inventory ingredients");

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
      <button
        className="inventory-button"
        type="submit"
        onClick={updateInventory}
      >
        Update Inventory!
      </button>
      <div className="inventory">
        <div className="fridgeCard">
          <Fridge inventory={ingredientList[0]} />
        </div>
        <div className="freezerCard">
          <Freezer inventory={ingredientList[1]} />
        </div>
        <div className="cupboardCard">
          <Cupboard inventory={ingredientList[2]} />
        </div>
        <div className="spiceRackCard">
          <SpiceRack inventory={ingredientList[3]} />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
