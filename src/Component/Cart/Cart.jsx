import React from 'react'
import useCartStore from '../../data/cartStore.js'
import "./Cart.css"

function Cart() {
  
  const {cart, removeFromCart, addToCart, totalPrice, foodDataList} = useCartStore()
  
  console.log(cart)
  
    return (
    <table className='cart'>
      <tr>
    <th>Antal</th>
    <th>Produkt</th>
    <th>Totalpris</th>
  </tr>
    {cart.length === 0 ? (
    <p>Din kundvagn är tom</p>
    ) : (
    foodDataList
      .filter((item) => cart.find(cartItem => cartItem.id === item.id))
      .map((item) => (
        <tr key={item.id}>
          <td>+ & -</td>
          <td> <img src={item.img} alt="" /> {item.name + item.price}</td>
          <td>totalt pris</td>
        </tr>
      ))
    )}
    </table>
  )
}

export default Cart;
