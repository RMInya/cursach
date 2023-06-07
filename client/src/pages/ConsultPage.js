import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import builderimg from "../images/builder.jpg";
import "../index.css";

export const ConsultPage = () => {
  const { request } = useHttp();
  const [form, setForm] = useState({ number: "", problems: "" });
  const [buttonText, setButtonText] = useState("Submit");
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const changeBtnText = (event) => {
    setButtonText("Confirmed");
    setTimeout(() => {
      setButtonText("Submit");
    }, 1500);
  };

  const sendProblemHandler = async (event) => {
    try {
      const data = await request("/api/consult/problem", "POST", { ...form });
    } catch (e) {}
  };
  const toDo = async () => {
    changeBtnText();
    sendProblemHandler();
  };

  return (
    <div className="cont contain">
      <section id="contact">
        <div class="contact-container container">
          <div class="contact-img">
            <img src={builderimg} />
          </div>

          <div class="form-container">
            <h2>Get a consultation</h2>
            <textarea
              placeholder="Enter your phone number"
              id="number"
              type="text"
              name="number"
              value={form.number}
              onChange={changeHandler}
            ></textarea>
            <textarea
              id="problems"
              name="problems"
              type="text"
              cols="30"
              rows="6"
              placeholder="describe the problem which you need help with and our expert will contact you!"
              value={form.problems}
              onChange={changeHandler}
            ></textarea>
            <input
              type="button"
              class="button"
              value={buttonText}
              onClick={toDo}
            ></input>
          </div>
        </div>
      </section>
    </div>
  );
};
