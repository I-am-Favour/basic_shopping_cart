import React from 'react'
import {FaTrash} from "react-icons/fa"
import "./cartDisplay.css"
import { useCartContext } from '../../contexts/CartContext'
const CartDisplay = () => {
  const {cart, toggleAmount, removeItem} = useCartContext()
  return (
    <section className='cart-display'>
      <div className="cart-display-head ">
        <div className="cart-item">Item</div>
        <div className="cart-price">Price</div>
        <div className="cart-quantity">Quantity</div>
        <div className="cart-subtotal">Subtotal</div>
        <div className="empty">.....</div>
      </div>
      <hr className="top-line" />
      {cart.map(item =>{
        const {id, name, images, color, price, amount} = item
        return <div key={id} className="cart-display-content">
          <div className="cart-item content">
            <div className="cart-item-image">
              <img src={images} alt={name} />
            </div>
            <div className="cart-item-desc">
              <h4>{name}</h4>
              <p className='color-small'><span>Color:</span> <button style={{backgroundColor: color}}></button></p>
              <p className="price-small">${price / 100}</p>
            </div>
          </div>
          <div className="cart-price">
            <span>${price / 100}</span>
          </div>
          <div className="cart-quantity">
            <div className="increment-quantity">
              <button onClick={() => toggleAmount("dec", id)}>-</button>
              <span>{amount}</span>
              <button onClick={() => toggleAmount("inc", id)}>+</button>
            </div>
          </div>
          <div className="cart-subtotal">
            <span>${((price / 100) * amount).toFixed(2)}</span>
          </div>
          <div onClick={()=> removeItem(id)} className="display-right">
            <span><FaTrash fill="#fff" /></span>
          </div>
        </div>
      })}
      <hr className='bottom-line' />
    </section>
  )
}

export default CartDisplay
