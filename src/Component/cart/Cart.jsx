import './Cart.css';

const Cart = () => {
    return (
        <div className="cart-container">
            <div className='cart-section'>
                <section className='cart-item-content'>vald item här
                    <div className='cart-item'>
                        <h3>{}</h3> 
                        <p>{}</p>
                        <p>{}</p>
                        <button className='increase-btn'>+</button>
                        <p>{}</p>
                        <button className='decrease-btn'>-</button>
                        <img>{}</img>
                        </div>
                    <div className='totalprice-box'>
                     <h3>Totalpris: {} SEK</h3>
                     </div>
                </section>    
            </div>

        </div>
    )}
    export default Cart;