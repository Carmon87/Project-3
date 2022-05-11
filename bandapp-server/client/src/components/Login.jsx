import React, { useState } from "react";
import { login } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { currentUser, storedUser } from "../features/auth/authSlice";

const Login = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, sePassword] = useState("");

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => sePassword(event.target.value);

  const handleSubmit = (event) => {
      event.preventDefault();
    login(email, password)
      .then((user) => {
        // props.setLoggedInUser(user)
        dispatch(currentUser(user));
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "Error when trying to send login request");
      });
  };

  return (
  
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={handleEmail}
          value={email}
        />
        <br />
        <input 
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
        <br />
        <button className="raise" type="submit">
          Login
        </button>
      </form>
    </div>
   
  );
};

export default Login;
