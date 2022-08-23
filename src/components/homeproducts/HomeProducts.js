import React from 'react'
// import product from "../../images/hero-bcg.jpeg"
import { FaSearch } from "react-icons/fa"
import "./HomeProducts.css"
import { useProductContext } from '../../contexts/ProductsContext'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'
const HomeProducts = () => {
    const {allProducts, isLoading} = useProductContext()
    const sorted = allProducts.sort(() =>  0.5 - Math.random());
  return (
    <section className='home-products-container'>
        <div className='home-products'>
            <h2><span className='head'>Featured Products <span className='line'></span></span></h2>
            {!isLoading ? <div className="display">
                {sorted.slice(0, 3).map(({id, name, image, price}) =>{
                    return <div className='grid-format' key={id}>
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
                })}
            </div> : <Loader />}
        </div>
    </section>
  )
}

export default HomeProducts
