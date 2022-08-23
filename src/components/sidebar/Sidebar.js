import React from 'react'
import "./Sidebar.css"
import logo from "../../images/logo.svg"
import { Link } from "react-router-dom"
import { NavLinks } from '../../data'
import CartButton from '../cartbutton/CartButton'
import { useProductContext } from '../../contexts/ProductsContext'
const Sidebar = () => {
    const {sideBar, closeSideBar} = useProductContext()
  return (
    <section className={`sidebar ${sideBar ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <span onClick={closeSideBar}>x</span>
      </div>
      <div className="sidebar-links">
        {NavLinks.map(({id, link, url}) =>{
            return <Link onClick={closeSideBar} className='sidebar-link' key={id} to={url}>{link}</Link>
        })}
      </div>
      <div>
        <CartButton side={true} />
      </div>
    </section>
  )
}

export default Sidebar
