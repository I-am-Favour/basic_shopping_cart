import React from 'react'
import { Link } from "react-router-dom"
import "./GridFormat.css"
import { FaSearch } from "react-icons/fa"
export const GridFormat = ({id, name, image, price}) => {
  return (
    <div className='grid-format'>
        <div className="product-img">
            <img src={image} alt="product" />
            <div className="overlay">
                <Link to={`/products/${id}`} className="icon"><FaSearch fill='white' /></Link>
            </div>
        </div>
        <div className="details">
            <span>{name}</span>
            <span className='price'>${price / 100}</span>
        </div>
    </div>
  )
}
