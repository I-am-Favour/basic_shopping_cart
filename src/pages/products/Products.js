import React from 'react'
import "./Products.css"
import Header from '../../components/header/Header'
import ProductFilter from '../../components/productfilter/ProductFilter'
import AllProducts from '../../components/allproducts/AllProducts'
import { useProductContext } from '../../contexts/ProductsContext'
import Loader from '../../components/loader/Loader'

const Products = () => {
  const {isLoading} = useProductContext()
  return (
    <div>
      <Header title="Products" />
      <div className="products-section">
        {!isLoading ? <>
          <div className='sticker'><ProductFilter /></div>
          <AllProducts />
        </> : <Loader />}
      </div>
    </div>
  )
}

export default Products
