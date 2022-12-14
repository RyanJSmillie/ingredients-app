/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Alert from "./Alert";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [preferences, setPreferences] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5001/register", {
          name,
          email,
          password,
          preferences,
        })
        .headers({ "Access-Control-Allow-Origin": "true" });
      navigate.push("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="addUser">
      <h2>Sign-up here!</h2>
      <form onSubmit={Register} className="box">
        <p className="has-text-centered">{msg}</p>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label htmlFor="preferences">
          Recipe Preferences
          <select
            id="preferences"
            name="preferences"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="Vegan"
          >
            <option value="Vegan">Vegan</option>
            <option value="Veggie">Veggie</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Pescatarian">Pescatarian</option>
            <option value="Dairy Free">Dairy Free</option>
          </select>
        </label>

        <button type="submit" className="Submit" onClick={Register}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
