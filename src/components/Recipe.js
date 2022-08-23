import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import "../styles/signinup.css";
import RecipeResults from "./RecipeResults";

// eslint-disable-next-line no-unused-vars
const dummyInventory = [
  {
    name: "pasta",
    measures: 250,
    unit: "grams",
    storage: "cupboard",
  },
  {
    name: "canned tomato sauce",
    measures: 400,
    unit: "grams",
    storage: "cupboard",
  },
  {
    name: "fresh basil",
    measures: 50,
    unit: "grams",
    storage: "cupboard",
  },
  {
    name: "cheese",
    measures: 50,
    unit: "grams",
    storage: "fridge",
  },
  {
    name: "milk",
    measures: 50,
    unit: "millilitres",
    storage: "fridge",
  },
  {
    name: "egg",
    measures: 3,
    unit: "number",
    storage: "fridge",
  },
  {
    name: "cheese",
    measures: 50,
    unit: "grams",
    storage: "fridge",
  },
];

function Recipe() {
  const [token, setToken] = useState(12345);

  if (!token) {
    return (
      <div>
        <br />
        <SignIn setToken={setToken} className="signin-link" to="/signin" />
        <br />
        <br />
        <Link className="signup-link" to="/signup">
          Not a member yet? Sign-up here!
        </Link>
      </div>
    );
  }

  return (
    <div>
      <RecipeResults inventory={dummyInventory} />
    </div>
  );
}

export default Recipe;
