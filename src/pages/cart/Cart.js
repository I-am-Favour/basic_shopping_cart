import React from 'react'
import CartBottom from '../../components/cartBottom/CartBottom'
import CartDisplay from '../../components/cartDisplay/CartDisplay'
import EmptyCart from '../../components/emptyCart/EmptyCart'
import Header from '../../components/header/Header'
import { useCartContext } from '../../contexts/CartContext'
const Cart = () => {
  const {cart} = useCartContext()
  return (
    <div className='cart-page'>
      <Header title="Cart" />
      {cart.length > 0 ? <>
        <CartDisplay />
        <CartBottom />
      </> : <EmptyCart />}
    </div>
  )
}

export default Cart
