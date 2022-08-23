import React, { useState } from 'react'
import { useEffect } from 'react'
import "./singleProductImage.css"
const SingleProductImage = ({images}) => {
    const [image, setImage] = useState()
    useEffect(() =>{
        setImage(images && images[0].url)
    }, [images])
  return (
    <div className="single-product-image">
        <img className='displayed-image' src={image} alt={image} />
        <div className="thumbnails">
            {images?.map(item =>{
                return <div key={item.url} className={`thumbnail-image ${item.url === image ? "active" : ""}`} onClick={()=> setImage(item.url)}>
                    <img src={item.url} alt={item.url} loading={"lazy"} />
                </div>
            })}
        </div>
    </div>
  )
}

export default SingleProductImage
