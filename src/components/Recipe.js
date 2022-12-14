import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SignIn from "./SignIn";
import RecipeResults from "./RecipeResults";

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

function Recipe({ user }) {
  console.log(user, "user");

  if (!user) {
    return (
      <div>
        <br />
        <SignIn className="signin-link" to="/signin" />
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

Recipe.propTypes = {
  user: PropTypes.objectOf(PropTypes.number).isRequired,
};
