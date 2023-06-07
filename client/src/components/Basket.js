import React, { useState } from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePayment = () => {
    alert("Payment success!");
  };

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <div>
                <button onClick={openModal}>Cheakout</button>
                {isModalOpen && (
                  <div className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={closeModal}>
                        &times;
                      </span>
                      <h2>Payment</h2>
                      <section class="component">
                        <div class="credit-card">
                          <h2>Credit card</h2>
                          <form>
                            <input type="text" placeholder="NAME" />
                            <div class="line">
                              <input type="text" placeholder="CARD" />{" "}
                              <input type="text" placeholder="NUMBER" />{" "}
                              <input type="text" /> <input type="text" />
                            </div>
                            <div class="line">
                              <input
                                class="litle"
                                type="text"
                                placeholder="EXPIRY"
                              />
                              <input
                                class="tall"
                                type="text"
                                placeholder="CCV"
                              />
                            </div>
                            <button
                              type="submit"
                              class="valid-button"
                              onClick={handlePayment}
                            >
                              PROCEED TO CHECKOUT
                            </button>
                          </form>
                        </div>
                      </section>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
