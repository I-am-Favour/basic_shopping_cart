import React from 'react'
import "./Navbar.css"
import logo from "../../images/logo.svg"
import { FaBars } from 'react-icons/fa'
import { NavLinks } from '../../data'
import { Link } from 'react-router-dom'
import CartButton from '../cartbutton/CartButton'
import { useProductContext } from '../../contexts/ProductsContext'
const Navbar = () => {
    const {openSidebar} = useProductContext()
  return (
    <section className='navbar'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        {NavLinks.map(({link, url, id}) =>{
            return <Link className="link" key={id} to={url}>{link}</Link>
        })}
      </div>
      <div className="cart-icon">
        <CartButton side={false} />
      </div>
      <div className="togglebar" onClick={openSidebar}>
        <FaBars />
      </div>
    </section>
  )
}

export default Navbar
