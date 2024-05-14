import React, { useState } from "react";
import styles from "./EmployeeData.module.css";

const EmployeeData = () => {
  const [signup, setSignup] = useState({
    username: " ",
    email: " ",
    phone: " ",
    password: " ",
  });
  const [records, setRecords] = useState([]);
  // which input field we are targetting is done with the help of (e)

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name + value); //spread operator target each elemt of object
    setSignup({ ...signup, [name]: value }); //dynamic data
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...signup, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setSignup({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form action="" className={styles.head} onSubmit={handleSubmit}>
        <h3 className="p-3 text-center text-bg-info">Registration Form</h3>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            FullName
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="exampleInputName1"
            autoComplete="off"
            aria-describedby="nameHelp"
            required
            value={signup.username}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            autoComplete="off"
            aria-describedby="emailHelp"
            value={signup.email}
            onChange={handleInput}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            pattern="[789][0-9]{9}"
            name="phone"
            className="form-control"
            id="exampleInputPhone1"
            autoComplete="off"
            aria-describedby="phoneHelp"
            value={signup.phone}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="off"
            value={signup.password}
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      <div className={EmployeeData.chart}>
        <table className="table table-bordered table-hover table-responsive">
          <thead>
            <tr className="table-dark">
              <th>Name</th>
              <th>Email ID</th>
              <th>Phone No</th>
              <th>Password</th>
            </tr>
          </thead>

          <tbody>
            {records.map((curElem) => {
              const { id, username, email, phone, password } = curElem;
              return (
                <tr key={id}>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeData;
