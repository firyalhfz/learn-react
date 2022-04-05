import React from 'react'
import { useState } from 'react'

function Product(props) {
  const { product, onAdd } = props
  

  return (
    <div>
      <div>
        <img className="small" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div>${product.price} </div>
        <div>
          <button onClick={() => onAdd(product)  }>add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
