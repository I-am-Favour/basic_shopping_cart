import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
const Header = ({title}) => {
  return (
    <div className='header'>
      <div className="head">
        <h2><Link className='link' to="/">Home</Link> / {title}</h2>
      </div>
    </div>
  )
}

export default Header
