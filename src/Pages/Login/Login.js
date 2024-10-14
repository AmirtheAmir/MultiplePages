import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginStyle from "./Login.module.css";

function Login() {
  const [name, nameUpdate] = useState();
  const [password, passwordUpdate] = useState();

  const navigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/user/" + name)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          toast.success("You Have Logged Into Your Account");
          console.log(res);
          navigate("/homepage");
        })
        .catch((err) => {
          toast.warning("Login Failed Due To" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (name === null || name === "") {
      result = false;
      toast.warning("Please Enter A AcoountName");
    }
    if (password === null || password === "") {
      result = false;
      toast.warning("Please Enter Correct Password");
    }
    return result;
  };

  return (
    <div className={LoginStyle.loginContainer}>
      <div className={LoginStyle.loginCard}>
        <h2 className={LoginStyle.loginToptext}>Login</h2>
        <form onSubmit={proceedLogin}>
          <div className={LoginStyle.inputContainer}>
            <label className={LoginStyle.loginLabel}>Account Name</label>
            <input
              className={LoginStyle.loginInput}
              type="text"
              value={name}
              onChange={(e) => nameUpdate(e.target.value)}
            />
          </div>
          <div className={LoginStyle.inputContainer}>
            <label className={LoginStyle.loginLabel}>Password</label>
            <input
              className={LoginStyle.loginInput}
              type="password"
              value={password}
              onChange={(e) => passwordUpdate(e.target.value)}
            />
          </div>
          <button type="submit" className={LoginStyle.loginBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
