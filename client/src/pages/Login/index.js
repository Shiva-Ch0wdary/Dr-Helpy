import React, { useState } from "react";
import loginStyles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authactions";
import { Link } from "react-router-dom";

export default function Login() {
  const initialState = { email: "", password: "" };
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ ...form }, navigate));
  };
  return (
    <div id={loginStyles.login}>
      <form id={loginStyles.form} onSubmit={handleSubmit}>
        <div id={loginStyles.imgholder}>
          <img src="./images/ezgif.com-gif-maker.gif" alt="" />
          <div id={loginStyles.eyeband}></div>
        </div>
        <h2 id={loginStyles.heading}>Log In</h2>
        <div id={loginStyles.cont}>
          <input
            type="email"
            id={loginStyles.email}
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <div className={loginStyles["password-layout"]}>
            <input
              type={!showPassword ? "password" : "text"}
              id={loginStyles.pass}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
            <i
              className={`fa-solid ${
                !showPassword ? "fa-eye" : "fa-eye-slash"
              }`}
              id={loginStyles.passicon}
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            ></i>
          </div>
          <p id={loginStyles.errortext}>{/* <%= error %> */}</p>
          {/* <a href="./forgotpassword" id="forgotpassword">Forgot Password?</a> */}

          <br />

          <button type="submit" id={loginStyles.submit}>
            Submit
          </button>
          <br />
          <br />
          <span>Don't have any accoount? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
