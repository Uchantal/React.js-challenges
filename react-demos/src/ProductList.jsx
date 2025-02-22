import React from 'react'

const ProductList = () => {

    const product =[
        {id: 1, name:"Computer", price : "$1200"},
        {id: 2, name:"Speaker", price : "$800"},
        {id: 3, name:"iPhone", price : "$1000"},

    ]


  return (
    <div> {product.map ((p => 
        <div key= {p.id}>

            <h1> name: {p.name}</h1>
            <h1> price: {p.price} </h1>
          
        </div>
        ))} </div>
  )
}

export default ProductList