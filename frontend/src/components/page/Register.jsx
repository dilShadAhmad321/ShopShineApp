import React, { useState, useContext } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
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

    try {
      const res = await fetch(`http://localhost:4000/api/v1/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  
  return <>
    <div className="main-body">
    <section className="content-login">
      <div className="login-form">
        <div className="login-heading">
        Register
        </div>
        

        <form className="form" onSubmit={handleClick} >
   
            <input className="input"
              type="text"
              placeholder="Username"
            
              id="username"
              onChange={handleChange}
              required
            />

            <input className="input"
              type="email"
              placeholder="Email"
              
              id="email"
              onChange={handleChange}
              required
            />
    
            <input className="input"
              type="password"
              placeholder="Password"
             
              id="password"
              onChange={handleChange}
              required
            />
          <div className="btn1"><button className="btnl" type="submit">
            Create Account
          </button></div>
          
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
    </div>
  </>;
};

export default Register;
