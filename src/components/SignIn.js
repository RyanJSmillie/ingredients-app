/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function SignIn() {
  return (
    <div>
      <p>Sign-in here!</p>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignIn;
