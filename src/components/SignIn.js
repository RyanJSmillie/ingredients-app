/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import "../styles/signin.css";
import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";
import AuthContext from "./AuthContext";
import Login from "./Login";

function SignIn() {
  const { setUser } = useContext(AuthContext);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = ({ target: { value, id } }) => {
    setDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = Login(details);
    if (res.error) {
      setError(res.error);
    } else {
      const currentUser = jwtDecode(res.token);
      setError(null);
      Cookie.set("token", res.token);
      setUser(currentUser);
    }
  };

  const renderErrorMessage = (name) =>
    name === error.name && <div className="error">{error.message}</div>;

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required onChange={handleChange} />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required onChange={handleChange} />
          {renderErrorMessage("pass")}
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
        {setDetails ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default SignIn;
