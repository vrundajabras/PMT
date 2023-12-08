import React, { useState } from "react";

class Register extends React.Component {

    registerUser() {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const emailid = document.getElementById('emailid').value;
        const userid = document.getElementById('userid').value;
        const org_name = document.getElementById('org_name').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('message');
    
        
    }

  render() {
    return (
      <>
        <form>
            {/* firstname */}
          <div className="row mb-3">
            <label htmlFor="firstname" className="col-sm-2 col-form-label">
            FirstName
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="firstname" />
            </div>
          </div>

          {/* lastname */}
          <div className="row mb-3">
            <label htmlFor="lastname" className="col-sm-2 col-form-label">
            LastName
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="lastname" />
            </div>
          </div>

          {/* emailid */}
          <div className="row mb-3">
            <label htmlFor="emailid" className="col-sm-2 col-form-label">
            Email Id
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="emailid" />
            </div>
          </div>

          {/* userid */}
          <div className="row mb-3">
            <label htmlFor="userid" className="col-sm-2 col-form-label">
            User Id
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="userid" />
            </div>
          </div>

          {/* org_name */}
          <div className="row mb-3">
            <label htmlFor="org_name" className="col-sm-2 col-form-label">
            Organization Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="org_name" />
            </div>
          </div>

          {/* password */}
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.registerUser} >
            Sign in
          </button>
        </form>

        <p id="message"></p>
      </>
    );
  }
}
