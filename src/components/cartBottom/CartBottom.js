import React from 'react'
import { useCartContext } from '../../contexts/CartContext'
import {Link} from "react-router-dom"
import "./cartBottom.css"
const CartBottom = () => {
  const {totalPrice, clearCart} = useCartContext()
  return (
    <div className='cart-bottom'>
      <div className="cart-buttons">
        <Link to="/products" className='cont-shopping button'>Continue Shopping</Link>
        <button className='clear-cart button' onClick={clearCart}>Clear Shopping Cart</button>
      </div>
      <div className="total-info">
        <div className="total-info-content">
            <div className="total-info-section">
                <div className="total-info-left">
                    <h4>Subtotal:</h4>
                    <p>Shipping Fee:</p>
                </div>
                <div className="total-info-right">
                    <h4>${totalPrice}</h4>
                    <p>$5.34</p>
                </div>
            </div>
            <hr />
            <div className="total-info-section">
                <div className="total-info-left">
                    <h3>Order Total:</h3>
                </div>
                <div className="total-info-right">
                    <h3>${(totalPrice + 5.45).toFixed(2)}</h3>
                </div>
            </div>
        </div>
      </div>
      <div className="total-info-button">
          <button>LOGIN</button>
      </div>
    </div>
  )
}

export default CartBottom
