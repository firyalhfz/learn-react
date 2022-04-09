import React from 'react'

function ProductList({products, deleteProduct}) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
            <button onClick={() => deleteProduct(product.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList