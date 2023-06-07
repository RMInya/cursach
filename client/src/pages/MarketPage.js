import React from "react";
import "../index.css";

import instrument from "../images/instrument.jpg";
import material from "../images/materials.jpg";
import mebli from "../images/mebli.jpg";
import { NavLink } from "react-router-dom";

export const MarketPage = () => {
  return (
    <div class="items">
      <div class="card">
        <div class="imgBx">
          <img src={instrument}></img>
        </div>

        <div class="contentBx">
          <h2>Instruments</h2>
          <NavLink to="/instruments">Buy Now</NavLink>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={mebli}></img>
        </div>

        <div class="contentBx">
          <h2>Furniture</h2>
          <NavLink to="/furniture">Buy Now</NavLink>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={material}></img>
        </div>

        <div class="contentBx">
          <h2>Materials</h2>
          <NavLink to="/materials">Buy Now</NavLink>
        </div>
      </div>
    </div>
  );
};
