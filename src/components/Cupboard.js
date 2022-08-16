import React, { useState } from "react";
import "../styles/inventoryItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import AddItem from "./AddItem";

function Cupboard() {
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
      <div className="cardHeading">
        <h2>Cupboard</h2>
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
  );
}

export default Cupboard;
