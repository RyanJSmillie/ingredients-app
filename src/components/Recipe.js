import React from "react";
import { Link } from "react-router-dom";
import "../styles/signinup.css";

function Recipe() {
  return (
    <div>
      <br />
      <Link className="signin-link" to="/signin">
        Already a member? Sign-in here!
      </Link>
      <br />
      <br />
      <Link className="signup-link" to="/signup">
        Not a member yet? Sign-up here!
      </Link>
      <p>Recipes</p>
    </div>
  );
}

export default Recipe;
