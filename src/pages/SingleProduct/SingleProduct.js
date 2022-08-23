import React, { useEffect, useState } from 'react'
import "./singleProduct.css"
import { Link, useParams } from 'react-router-dom'
import SingleProductImage from '../../components/singleProductImage/SingleProductImage'
import Header from '../../components/header/Header'
import { useProductContext } from "../../contexts/ProductsContext"
import { SingleProducts } from '../../utils'
import SingleProductContent from '../../components/singleProductContent/SingleProductContent'
import Loader from '../../components/loader/Loader'
const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const fetchSingleProducts = async (url) =>{
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)
      setSingleProduct(data)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log(error)
    }
  }
  useEffect(() =>{
    fetchSingleProducts(`${SingleProducts}${id}`)
  }, [id])
  console.log({singleProduct, amount: 1})
  const singleItem = {singleProduct, amount: 1}
  const {images} = singleItem.singleProduct
  if (loading) {
    return <Loader />
  }
  if (error){
    return <h1>Error...</h1>
  }
  return (
    <section className='single-product-page'>
      <Header title={<span><Link className='link' to="/products">Products</Link> / {singleProduct.name}</span>} />
      <div className='single-products-body'>
        <button className='back-btn'>ALL PRODUCTS</button>
        <div className='single-products-content'>
          <SingleProductImage images={images} />
          <SingleProductContent data={singleItem} />
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
