import React from "react";
import instrument1 from "../images/instrument1.jpg";
import instrument2 from "../images/instrument2.jpg";
import instrument3 from "../images/instrument3.jpg";
import instrument4 from "../images/instrument4.jpg";
import instrument5 from "../images/instrument5.jpg";
import instrument6 from "../images/instrument6.jpg";

// import Header from "../components/Header";
import Main from "../components/Main";
import Basket from "../components/Basket";
// import data from "../data";
import { useState } from "react";
const data = {
  products: [
    {
      id: "1",
      name: "showel",
      price: 1400,
      image: instrument1,
    },
    {
      id: "2",
      name: "sawe",
      price: 2400,
      image: instrument2,
    },
    {
      id: "3",
      name: "axe",
      price: 1000,
      image: instrument3,
    },
    {
      id: "4",
      name: "puncher",
      price: 1000,
      image: instrument4,
    },
    {
      id: "5",
      name: "pliers",
      price: 1000,
      image: instrument5,
    },
  ],
};
export const InstrumentMarketPage = () => {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    // <div class="ip-market-page">
    //   <div class="card">
    //     <figure>
    //       <img src={instrument1} alt="t-shirt"></img>
    //     </figure>
    //     <section class="details">
    //       <div class="min-details">
    //         <h1>Remera</h1>
    //         <h1 class="price">$45.99</h1>
    //       </div>
    //       <a href="#" class="btn">
    //         add to cart
    //       </a>
    //     </section>
    //   </div>
    //   <div class="card">
    //     <figure>
    //       <img src={instrument2} alt="t-shirt"></img>
    //     </figure>
    //     <section class="details">
    //       <div class="min-details">
    //         <h1>Remera</h1>
    //         <h1 class="price">$52</h1>
    //       </div>
    //       <a href="#" class="btn">
    //         add to cart
    //       </a>
    //     </section>
    //   </div>
    //   <div class="card">
    //     <figure>
    //       <img src={instrument3} alt="t-shirt"></img>
    //     </figure>
    //     <section class="details">
    //       <div class="min-details">
    //         <h1>Remera</h1>
    //         <h1 class="price">$35</h1>
    //       </div>
    //       <a href="#" class="btn">
    //         add to cart
    //       </a>
    //     </section>
    //   </div>
    //   <div class="card">
    //     <figure>
    //       <img src={instrument4} alt="t-shirt"></img>
    //     </figure>
    //     <section class="details">
    //       <div class="min-details">
    //         <h1>Remera</h1>
    //         <h1 class="price">$43</h1>
    //       </div>
    //       <a href="#" class="btn">
    //         add to cart
    //       </a>
    //     </section>
    //   </div>
    //   <div class="card">
    //     <figure>
    //       <img src={instrument5} alt="t-shirt"></img>
    //     </figure>
    //     <section class="details">
    //       <div class="min-details">
    //         <h1>Remera</h1>
    //         <h1 class="price">$15</h1>
    //       </div>
    //       <a href="#" class="btn">
    //         add to cart
    //       </a>
    //     </section>
    //   </div>
    //   <div class="card">
    //     <figure>
    //       <img src={instrument6} alt="t-shirt"></img>
    //     </figure>
    //     <section class="details">
    //       <div class="min-details">
    //         <h1>Remera</h1>
    //         <h1 class="price">$35</h1>
    //       </div>
    //       <a href="#" class="btn">
    //         add to cart
    //       </a>
    //     </section>
    //   </div>
    // </div>
    <div className="App">
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
};
