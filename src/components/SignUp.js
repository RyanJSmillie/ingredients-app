/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function SignUp() {
  return (
    <div>
      <p>Sign-up here!</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Receipe Preferences
          <select multiple>
            <option value="Vegan">Vegan</option>
            <option value="Veggie">Veggie</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Pescatarian">Pescatarian</option>
            <option value="Dairy Free">Dairy Free</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUp;
