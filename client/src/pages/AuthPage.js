import React, { useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/Auth.context";
import "../index.css";

export const AuthPage = () => {
  const { loading, request } = useHttp();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const auth = useContext(AuthContext);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async (event) => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
    } catch (e) {}
  };

  const loginHandler = async (event) => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div class="Authcontainer">
      <input type="checkbox" id="check"></input>
      <div class="login form">
        <header>Register</header>
        <form action="#">
          <input
            placeholder="Enter your name"
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={changeHandler}
          ></input>
          <input
            placeholder="Enter email"
            id="email"
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
          ></input>
          <input
            placeholder="Enter password"
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
          ></input>
          <input
            type="button"
            class="button"
            value="Register"
            onClick={registerHandler}
          ></input>
        </form>
        <div class="signup">
          <span class="signup">
            Already have an account?
            <label for="check"> Login</label>
          </span>
        </div>
      </div>
      <div class="registration form">
        <header>Login</header>
        <form action="#">
          <input
            placeholder="Enter email"
            id="email"
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
          ></input>
          <input
            placeholder="Enter password"
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
          ></input>
          <input
            type="button"
            class="button"
            value="Login"
            onClick={loginHandler}
          ></input>
        </form>
        <div class="signup">
          <span class="signup">
            Don't have an account?
            <label for="check"> Sign up</label>
          </span>
        </div>
      </div>
    </div>
  );
};
