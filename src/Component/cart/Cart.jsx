import './Cart.css';

const Cart = () => {
   
    return (
    <div className='cart-container'>
        <div className='cart-section'>
            <section className='cart-item-content'>
              <div className='cart-item'>
              <img>{}</img>
                <h3>{}vald maträtt</h3>
                <p>{}ingredients</p>
            
                <div className='button-box'>
                
                <button className='increase-btn'>+</button>
                <p>{}</p>
                <button className='decrease-btn'>-</button>
                </div>
                
              </div>
            </section>
                <div className='totalprice-box'>
                  <h3>Totalpris: {} SEK</h3>
                  <button className='checkout-btn'>Buy</button>
                </div>
            </div>
        </div>
    )}
    export default Cart;