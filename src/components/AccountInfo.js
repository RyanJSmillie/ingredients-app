/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

function AccountInfo() {
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

  return (
    <div>
      <p>Account Info</p>
      <div className="form-content-right">
        <form className="form">
          <h1>Account Information</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="form-input"
              placeholder="Enter your address"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountInfo;
