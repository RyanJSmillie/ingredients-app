import React from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/app.css";
import Navbar from "./Navbar";
import Recipe from "./Recipe";
import Inventory from "./Inventory";
import AccountInfo from "./AccountInfo";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="body">
        <Routes>
          <Route exact path="/" element={<Recipe />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/account-info" element={<AccountInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
