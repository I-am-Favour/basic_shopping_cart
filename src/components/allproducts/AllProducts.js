import React from 'react'
import "./AllProducts.css"
import { BsFillGridFill } from "react-icons/bs"
import { AiOutlineBars } from "react-icons/ai"
import { GridFormat } from '../gridformat/GridFormat'
import { useFilterContext } from '../../contexts/FilteredContext'
import LineFormat from '../lineFormat/LineFormat'
const AllProducts = () => {
  const { grid, setFormat, filteredProducts, sort, filterProduct} = useFilterContext()
  return (
    <div className='all-products'>
      <div className="products-top">
        <div className="format">
          <span onClick={()=> setFormat(grid)}>{grid ? <AiOutlineBars /> : <BsFillGridFill />}</span>
        </div>
        <div className="product-found">{filteredProducts.length} Products Found</div>
        <div className="line"><hr /></div>
        <div className="sort"><span>Sort By </span>
          <select name='sort' value={sort} onChange={(e) => filterProduct(e.target.name, e.target.value)}>
            <option value="p-low">Price (Lowest)</option>
            <option value="p-high">Price (Highest)</option>
            <option value="a-z">Name (A - Z)</option>
            <option value="z-a">Name (Z - A)</option>
          </select>
        </div>
      </div>
      {filteredProducts.length < 1 ? <h4 className='h4'>No product match your criteria</h4> : <div className={`all-products-${grid ? "grid" : "line"}`}>
        {grid ? <>
            {filteredProducts.map((items) =>{
              return <GridFormat key={items.id} {...items} />
            })}
          </> : 
          <>
            {filteredProducts.map((items) =>{
              return <LineFormat key={items.id} {...items} />
            })}
          </>
        }
      </div>}
    </div>
  )
}

export default AllProducts
