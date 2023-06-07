import React, { useState } from "react";

import materials1 from "../images/materials1.jpg";
import materials2 from "../images/materials2.jpg";
import materials3 from "../images/materials3.jpg";
import materials4 from "../images/materials4.jpg";

import Main from "../components/Main";
import Basket from "../components/Basket";
// import data from "../data";
// import { useState } from "react";
const data = {
  products: [
    {
      id: "10",
      name: "mortar",
      price: 14,
      image: materials1,
    },
    {
      id: "11",
      name: "bricks",
      price: 24,
      image: materials2,
    },
    {
      id: "12",
      name: "slate",
      price: 10,
      image: materials3,
    },
    {
      id: "13",
      name: "parquet",
      price: 10,
      image: materials4,
    },
  ],
};
export const MaterialsMarketPage = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    console.log(products);
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
