import React from 'react'
import "./ProductFilter.css"
import { FaCheck } from "react-icons/fa"
import { useProductContext } from '../../contexts/ProductsContext'
import { uniqueValues } from '../../utils'
import { useFilterContext } from '../../contexts/FilteredContext'
const ProductFilter = () => {
  const {allProducts} = useProductContext()
  const {filterProduct, category, color, search, priceRange, maxPrice, freeShipping, clearFilter} = useFilterContext()
  const btnCategories = uniqueValues(allProducts, "category")
  const companys = uniqueValues(allProducts, "company")
  const colors = uniqueValues(allProducts, "colors")
  return (
    <div className='product-filter'>
      <div className="input-section">
        <input type="search" name='search' value={search} onChange={(e)=> filterProduct(e.target.name, e.target.value)} className='search' placeholder='Search' />
      </div>
      <div className="category-section section">
        <h4>Category</h4>
        {btnCategories.map((item) =>{
          return <button key={item} name="category" onClick={(e) => filterProduct(e.target.name, item)} className={category === item ? "active" : ""}>{item}</button>
        })}
      </div>
      <div className='company-section section'>
        <h4>Company</h4>
        <select onChange={(e) => filterProduct(e.target.name, e.target.value)} name="company">
            {companys.map((item) =>{
              return <option key={item} value={item}>{item}</option>
            })}
        </select>
      </div>
      <div className="color-section section">
        <h4>Colors</h4>
        <div className="btns">
            {colors.map((item) =>{
              if (item === "all"){
                return <button key={item} name="color" onClick={(e) => filterProduct(e.target.name, "all")} className={`all ${color === "all" ? "active" : ""}`}>All</button>
              }
              return <button key={item} className={color === item ? "active" : ""} onClick={(e) => filterProduct(e.target.name, item)} name="color" style={{
                backgroundColor: item
              }}><FaCheck fontSize="8px" fill='white' className='btn-icon' /></button>
            })}
        </div>
      </div>
      <div className="price-section section">
        <h4>Price</h4>
        <p>${priceRange / 100}</p>
        <input type="range" value={priceRange} onChange={(e) => filterProduct(e.target.name, e.target.value)} name="priceRange" min="0" max={maxPrice} />
      </div>
      <div className="shipping-section section">
        <span>Free Shipping</span> <input type="checkbox" checked={freeShipping} onChange={(e) => filterProduct(e.target.name, e.target.checked)} name="freeShipping" />
      </div>
      <button className='clear-btn' onClick={clearFilter}>Clear Filters</button>
    </div>
  )
}

export default ProductFilter
