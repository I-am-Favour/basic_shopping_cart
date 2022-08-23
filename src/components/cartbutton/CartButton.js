import React from 'react'
import "./CartButton.css"
import {Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { useCartContext } from '../../contexts/CartContext'
const CartButton = ({side}) => {
  const {totalAmount} = useCartContext()
  return (
    <div className={side ? "cart-side" : ""}>
      <Link to="/cart" className='cart-button'>
          Cart<FaShoppingCart />
        <span>{totalAmount}</span>
      </Link>
    </div>
  )
}

export default CartButton
