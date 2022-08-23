import React from 'react'
import { Link } from 'react-router-dom'
import "./LineFormat.css"
const LineFormat = ({id, name, price, image, description}) => {
  return (
    <div className='line-format'>
      <div className="line-format-image">
        <img src={image} alt="product" loading={"lazy"} />
      </div>
      <div className="line-format-details">
        <h4>{name}</h4>
        <p className='price'>${price / 100}</p>
        <p className='desc'>{description.slice(0, 200)}...</p>
        <Link to={`/products/${id}`} className='button'>DETAILS</Link>
      </div>
    </div>
  )
}

export default LineFormat
