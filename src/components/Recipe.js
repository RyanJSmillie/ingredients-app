import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import "../styles/signup.css";

function Recipe() {
  const [token, setToken] = useState();

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

  return <div className="recipes">Recipes </div>;
}

export default Recipe;
