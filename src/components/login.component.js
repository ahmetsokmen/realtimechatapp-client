import React, { useState } from "react";
import { login, logout } from "../services/identity.service";
import { getCookie } from "../services/cookie.service";
import { useNavigate,Navigate } from "react-router-dom";

export const LoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  if(getCookie("loggedin")){
    return <Navigate to="/home" />
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await login(e);
    if (getCookie("loggedin")) {setIsLoggedIn(true); navigate("/home");} 
    else {alert("There is no user with this username."); setIsLoggedIn(false);
}
  }

  return (
    <div
      className="loginContainer w-25 p-5 rounded"
      style={{ border: "1px solid lightgray" }}
    >
      <form id="loginForm" onSubmit={handleSubmit}>
        <h3>Real-Time Chat App</h3>
        <br/>
        <h4>Welcome back!</h4>
        <p>Login to your account</p>
        <div className="mb-3 d-block mx-auto">
          <label htmlFor="text" className="form-label">
            Username :
          </label>
          <input required minLength={3} maxLength={20} type="text" className="form-control" id="username" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
