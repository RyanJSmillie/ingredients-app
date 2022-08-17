/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function SignIn() {
  return (
    <div className="signin-wrapper">
      <h1>Sign-in here to see your personalised recipes!</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <div>
          <button type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
