/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

function AccountInfo() {
  const [accountDetails, setAccountDetails] = useState({
    username: "DanielleD8134",
    emailAddress: "test@test.com",
    password: "password",
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    // call API to update account details
  };
  const onChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

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
        <form className="form" onSubmit={onFormSubmit}>
          <h1>Account Information</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={accountDetails.username}
              onChange={onChange}
              className="form-input"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              type="text"
              name="EmailAddress"
              value={accountDetails.emailAddress}
              onChange={onChange}
              className="form-input"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={accountDetails.password}
              onChange={onChange}
              className="form-input"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default AccountInfo;
