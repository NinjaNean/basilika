import React, { useState } from "react";
import useCartStore from "../../data/cartStore.js";
import "./Order.css";
import minusImg from "../../assets/minus-icon-black.svg";
import plusImg from "../../assets/plus-icon-black.svg";

function Order() {
  const { cart, removeFromCart, addToCart, totalPrice, foodDataList } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  function findQuantity(id) {
    const quantity = cart.find((item) => item.id === id);
    return quantity.quantity;
  }

  return (
    <div className={`cart-wrapper ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <button className="toggle-button" onClick={(e) => { e.        stopPropagation(); setIsOpen(!isOpen); }}>
        {isOpen ? "Stäng" : "Se din beställning här!"}
      </button>
      <div className="cart" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <p className="cart-heading">Antal</p>
          <p className="cart-heading">Produkt</p>
          <p className="cart-heading">Pris</p>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-row">
              <p>Du har inte lagt till något ännu!</p>
            </div>
          ) : (
            foodDataList
              .filter((item) => cart.find((cartItem) => cartItem.id === item.id))
              .map((item) => (
                <div className="cart-row" key={item.id}>
                  <div className="cart-cell">
                    <button onClick={(e) => { e.stopPropagation(); removeFromCart(item); }}>
                      <img className="icon" src={minusImg} alt="minus icon" />
                    </button>
                    <span className="order-quantity">{findQuantity(item.id)}</span>
                    <button onClick={(e) => { e.stopPropagation(); addToCart(item); }}>
                      <img className="icon" src={plusImg} alt="plus icon" />
                    </button>
                  </div>
                  <div className="cart-item">
                    <img className="order-img" src={item.img} alt="" /> <span className="cart-info">{item.name} 
                      <p>{item.price}:-</p></span>
                  </div>
                  <div className="cart-cell">
                    <p>{findQuantity(item.id) * item.price}:-</p>
                  </div>
                </div>
              ))
          )}
        </div>

        <div className="cart-footer">
          <p className="cart-heading">Totalpris</p>
          <div className="total-price">{totalPrice}:-</div>
        </div>
      </div>
    </div>
  );
}

export default Order;
