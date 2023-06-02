import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";

export const AuthPage = () => {
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: "", password: "" });
  // const changeHandler = (event) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // };

  const registerHandler = async (event) => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      // message(data.message);
      console.log("Data", data);
    } catch (e) {}
  };

  return (
    <div class="container">
      {/* <input type="checkbox" id="check"></input>
      <div class="login form">
        <header>Login</header>
        <form action="#">
          <input type="text" placeholder="Enter your email"></input>
          <input type="password" placeholder="Enter your password"></input>
          <a href="#">Forgot password?</a>
          <input
            type="button"
            class="button"
            value="Login"
            onClick={registerHandler}
          ></input>
        </form>
        <div class="signup">
          <span class="signup">
            Don't have an account?
            <label for="check">Signup</label>
          </span>
        </div>
      </div>
      <div class="registration form">
        <header>Signup</header>
        <form action="#">
          <input type="text" placeholder="Enter your email"></input>
          <input type="password" placeholder="Create a password"></input>
          <input type="password" placeholder="Confirm your password"></input>
          <input type="button" class="button" value="Signup"></input>
        </form>
        <div class="signup">
          <span class="signup">
            Already have an account?
            <label for="check">Login</label>
          </span>
        </div>
      </div> */}
    </div>
  );
};
