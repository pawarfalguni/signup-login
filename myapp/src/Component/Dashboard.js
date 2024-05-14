import React, { useState } from "react";
import f from "../Image/f.jpg";
import styles from "../Component/Dashboard.module.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (uname.trim() !== "") {
      alert("Welcome " + uname);
    } else {
      alert("Invalid Data");
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="row border rounded-5 p-3 bg-white shadow box-area"
          id={styles.head}
        >
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
            <div className="featured-image mb-3 p-3 pt-5">
              <img src={f} className="img-fluid" />
            </div>
            <p className="text-white fs-2">Be Verified</p>
            <small className="text-white text-wrap text-center">
              Join experienced Designers on this platform.
            </small>
          </div>
          {/* -------------------- ------ Right Box ---------------------------- */}

          <div className="col-md-6 right-box mt-5 ">
            <form onSubmit={submitHandler} className="row align-items-center">
              <div className="header-text mb-4 pt-3">
                <h2>Welcome User</h2>
                <p>We are happy to have you back.</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={uname}
                  onChange={(e) => {
                    setUname(e.target.value);
                  }}
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Username"
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  value={pwd}
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    for="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Remember Me</small>
                  </label>
                </div>

                <div className={styles.register}>
                  <NavLink to="/register">
                    <li>Register here</li>
                  </NavLink>
                </div>
              </div>

              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
