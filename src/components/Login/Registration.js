import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const [details, setdetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/v1/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
        password: details.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.token);
      history("/");
    } else {
      alert("invalid credentials");
    }
  };

  const onchange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="container col-md-6 col-md-offset-6 d-flex flex-column"
      style={{ padding: "60px 15px 60px 15px" }}
    >
      <h3 className="text-center" style={{ marginBottom: "35px" }}>
        Welcome to{" "}
        <span className="text-success">
          <>SHOENIVERSE</>
        </span>
      </h3>
      <div className="mb-3 my-2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          htmlFor="firstName"
          name="firstName"
          type="text"
          className="form-control"
          id="firstName"
          aria-describedby="emailHelp"
          onChange={onchange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Last Name
        </label>
        <input
          htmlFor="lastName"
          name="lastName"
          type="text"
          className="form-control"
          id="lastName"
          onChange={onchange}
          required
        />
      </div>

      <div className="mb-3 my-2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          htmlFor="email"
          name="email"
          type="email"
          className="form-control"
          id="email"
          onChange={onchange}
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3 my-2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          htmlFor="password"
          name="password"
          type="password"
          className="form-control"
          id="password"
          onChange={onchange}
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div className="form-text">
        Already have an Account ?{" "}
        <Link to="/login" className="text-decoration-none">
          Sign In
        </Link>
      </div>
      <button type="submit" className="btn btn-dark my-3">
        Submit
      </button>
    </form>
  );
}
