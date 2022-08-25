/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import "../styles/signin.css";
import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";
import axios from "axios";
import AuthContext from "./AuthContext";

function SignIn() {
  const { setUser, user } = useContext(AuthContext);
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  const handleChange = ({ target: { value, name } }) => {
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(details, "details");

    axios
      .post(`http://localhost:5001/login`, details)
      .then(function (res) {
        console.log(JSON.stringify(res.data), "login response");
        if (res.error) {
          setError(res.error);
        } else {
          const currentUser = jwtDecode(res.data.token);
          setError(null);
          Cookie.set("token", res.data.token);
          setUser(currentUser);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required onChange={handleChange} />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );

  return (
    <div className="signin">
      <div className="login-form">
        <div className="title">Sign In</div>
        {user ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default SignIn;
