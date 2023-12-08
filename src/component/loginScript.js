import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

class Login extends React.Component {
  //state = {};

  loginUser() {
    const users = [
      { username: "admin", password: "admin" },
      { username: "user2", password: "password2" },
    ];

    const userId = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    for (let i = 0; i < users.length; i++) {
      if (userId === users[i].username && password === users[i].password) {
        message.textContent = "Login successful!";
        console.log(message.textContent);
        return false; // Prevent form submission
      }
    }

    message.textContent = "Invalid username or password. Please try again.";
    console.log(message.textContent);
    return false; // Prevent form submission
  }

  render() {
    return (
      <>
        <form>
          <div className="row mb-3">
            <label htmlFor="userid" className="col-sm-2 col-form-label">
              UserId
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="userid" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.loginUser} >
            Sign in
          </button>


        </form>

        {/* <div>
          <Router>
            <Routes>
              <Route path="/registerScript.js">
                Don't have account Sign up
              </Route>
            </Routes>
          </Router>
        </div> */}

        <p id="message"></p>
      </>
    );
  }
}

export default Login;
