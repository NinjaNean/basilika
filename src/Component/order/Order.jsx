import React from 'react'
import useCartStore from '../../data/cartStore.js'
import "./Order.css"

function Order() {
  
  const {cart, removeFromCart, addToCart, totalPrice, foodDataList} = useCartStore()


  
    return (
    <table className='cart'>
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
      .filter((item) => cart.find(cartItem => cartItem.id === item.id))
      .map((item) => (
        <tr key={item.id}>
          <td>
            <button onClick={() => removeFromCart(item)}>-</button>
            Här ska antal visas
            <button onClick={() => addToCart(item)}>+</button>
          </td>
          <td> <img src={item.img} alt="" /> {item.name + item.price}</td>
          <td>totalt pris</td>
        </tr>
      ))
    )}
    </tbody>
    </table>
  )
}

export default Order;
