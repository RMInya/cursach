import React, { useState } from "react";
import furniture1 from "../images/furniture1.jpg";
import furniture2 from "../images/furniture2.jpg";
import furniture3 from "../images/furniture3.jpg";
import furniture4 from "../images/furniture4.jpg";

import Main from "../components/Main";
import Basket from "../components/Basket";

const data = {
  products: [
    {
      id: "6",
      name: "bed",
      price: 1400,
      image: furniture1,
    },
    {
      id: "7",
      name: "commode",
      price: 500,
      image: furniture2,
    },
    {
      id: "8",
      name: "chair",
      price: 400,
      image: furniture3,
    },
    {
      id: "9",
      name: "wardrobe",
      price: 1000,
      image: furniture4,
    },
  ],
};

export const FurnitureMarketPage = () => {
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
