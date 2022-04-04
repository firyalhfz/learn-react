import React from 'react'
import { useState } from 'react'

function Product(props) {
  const { product, onAdd } = props

  //from basket
  // const { product, cartItems, onAdd, onRemove } = props
  // const itemsPrice = cartItems?.reduce((a, c) => a + c.price * c.qty, 0)
  // const taxPrice = itemsPrice * 0.14
  // const shippingPrice = itemsPrice > 2000 ? 0 : 50
  // const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <div>
      <div>
        <img className="small" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div>${product.price} </div>
        <div>
          <button onClick={() => onAdd(product)}>add to cart</button>
        </div>
      </div>
      {/* <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>{cartItems?.length === 0 && <div>the cart is empty</div>}</div>
        {cartItems?.map(item => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>
            <div className="col-2 text-right">
              {item.qty} x ${item.price?.toFixed(2)}
            </div>
          </div>
        ))}
        {/* todo3 */}
        {/* {cartItems?.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Item Price</div>
              <div className="col-1 text-right">{itemsPrice?.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">{taxPrice?.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping price</div>
              <div className="col-1 text-right">{shippingPrice?.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice?.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout')}>
                {' '}
                Checkout
              </button>
            </div>
          </>
        )} */} 
      {/* </aside> */}
    </div>
  )
}

export default Product
