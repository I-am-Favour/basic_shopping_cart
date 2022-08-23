import React from 'react'
import "./emptyCart.css"
import image from "../../images/noresult.svg"
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <div className='empty-cart'>
      <div className="empty-cart-text">
        <h3>No Item To Display</h3>
      </div>
      <div className="empty-cart-image">
        <img src={image} alt="no result" />
      </div>
      <Link to="/products" className='button'>Fill Cart</Link>
    </div>
  )
}

export default EmptyCart
