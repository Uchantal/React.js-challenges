import React from 'react'

const ProductInfo = () => {

    const product = {
        name: "Laptop",
      price  : 1200,
      availability :"In Stock",

    } ;
  return (
    <div>
        <h1> product Objects</h1>
        <p> name: {product.name}</p>
        <p> price: ${ product.price}</p>
        <p> availability: {product.availability }</p>
    </div>
  )
}

export default ProductInfo