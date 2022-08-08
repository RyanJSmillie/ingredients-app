import React from "react";

function AccountInfo() {
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
