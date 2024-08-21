import React, { useContext, useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`http://localhost:4000/api/v1/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      console.log(result.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return <>
    <div className="main-body">
    <section className="content-login">

<div className="login-form">
  <div className="login-heading">Login</div>

  <form className="form" onSubmit={handleClick}>
    <input
      className="input"
      type="email"
      placeholder="Email"
      id="email"
      onChange={handleChange}
      required
    />

    <input
      className="input"
      type="password"
      placeholder="Password"
      id="password"
      onChange={handleChange}
      required
    />
    <div className="btn1">
      <button className="btnl" type="submit">
        Login
      </button>
    </div>
  </form>
  <p>
    Don't have an account? <Link to="/register">Create</Link>
  </p>
</div>
</section>
    </div>
  
  </>;
};

export default Login;
