/* eslint-disable react/jsx-no-constructed-context-values */
import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import Cookie from "js-cookie";
import jwtDecode from "jwt-decode";
import Navbar from "./Navbar";
import Recipe from "./Recipe";
import Inventory from "./Inventory";
import AccountInfo from "./AccountInfo";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AuthContext from "./AuthContext";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      const currentUser = jwtDecode(token);
      setUser(currentUser);
    }
  }, []);
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <AuthContext.Provider value={{ user, setUser }}>
        <div className="body">
          <Routes>
            <Route exact path="/" element={<Recipe user={user} />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/inventory" element={<Inventory />} />
            <Route exact path="/account-info" element={<AccountInfo />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
