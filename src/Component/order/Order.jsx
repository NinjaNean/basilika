import React from "react";
import useCartStore from "../../data/cartStore.js";
import "./Order.css";

function Order() {
  const { cart, removeFromCart, addToCart, totalPrice, foodDataList } = useCartStore();

  function findQuantity(id) {
    const quantity = cart.find((item) => item.id === id);
    return quantity.quantity;
  }

  return (
    <table className="cart">
      <thead>
        <tr>
          <th>Antal</th>
          <th>Produkt</th>
          <th>Totalpris</th>
        </tr>
      </thead>
      <tbody>
        {cart.length === 0 ? (
          <tr>
            <td>Din kundvagn är tom</td>
          </tr>
        ) : (
          foodDataList
            .filter((item) => cart.find((cartItem) => cartItem.id === item.id))
            .map((item) => (
              <tr key={item.id}>
                <td>
                  <button onClick={() => removeFromCart(item)}>-</button>
                  {findQuantity(item.id)}
                  <button onClick={() => addToCart(item)}>+</button>
                </td>
                <td>
                  <img src={item.img} alt="" /> {item.name + item.price}
                </td>
                <td>{item.price}:-</td>
                <td>{findQuantity(item.id) * item.price}:-</td>
              </tr>
            ))
        )}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="3"></th>
          <td>{totalPrice}:-</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Order;
