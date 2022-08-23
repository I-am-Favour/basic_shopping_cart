import React from 'react'
import {useNavigate} from "react-router-dom"
import { FaCheck } from "react-icons/fa"
import { useEffect } from 'react'
import { useState } from 'react'
import Stars from '../stars/Stars'
import "./singleProductContent.css"
import { useCartContext } from '../../contexts/CartContext'
const SingleProductContent = ({data}) => {
    const navigate = useNavigate()
    const {id, name, company, stars, price, description, stock, colors} = data.singleProduct
    const {addToCart} = useCartContext()
    const [color, setColor] = useState(null)
    const [amount, setAmount] = useState(data.amount)
    const increase = () =>{
        if (amount < stock){
            setAmount((value)=> value + 1)
        }
    }
    const decrease = () =>{
        if (amount > 1){
            setAmount((value)=> value - 1)
        }
    }
    useEffect(()=>{
        setColor(colors && colors[0])
    }, [colors])
  return (
    <div className='single-product-content'>
      <h2>{name}</h2>
      <Stars star={stars} />
        <h4 className='single-price'>${price / 100}</h4>
        <p className='desc'>{description}</p>
        <div className="stock">
            <div className="stock-left">
                <h4>Available:</h4>
                <h4>SKU:</h4>
                <h4>Brand:</h4>
            </div>
            <div className="stock-right">
                <p>{stock > 1 ? `${stock} in stock` : "out of stock"}</p>
                <p>{id}</p>
                <p>{company}</p>
            </div>
        </div>
        <hr />
        {stock > 1 && <>
            <div className='more-desc'>
                <div className="stock">
                    <div className="stock-left">
                        <h4>{colors.length > 1 ? "Colors:" : "Color:"}</h4>
                    </div>
                    <div className="stock-right">
                        <div className='buttons'>{colors.map((item) =>{
                            return <button key={item} onClick={()=> setColor(item)} className={item === color ? "active" : ""} style={{backgroundColor: item}}><FaCheck className='color-icon' fill='white' /></button>
                        })}</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="add-to-section">
                    <div className="increment">
                        <button onClick={decrease}>-</button>
                        <span>{amount}</span>
                        <button onClick={increase}>+</button>
                    </div>
                    <button className='back-btn' onClick={()=> {
                        addToCart(data.singleProduct, amount, color)
                        navigate("/cart")
                    }}>ADD TO CART</button>
                </div>
            </div>
        </>}
    </div>
  )
}

export default SingleProductContent
