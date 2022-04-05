import React from 'react'
import Header from './Header'
import Main from './Main'
import Basket from './Basket'
import data from './data'
import { Container } from '@mui/material'
import { useState } from 'react'

function Home() {
  // deconstructing assignment
  const { products } = data
  //TODO2
  const [cartItems, setCartItems] = useState([])
  const onAdd = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  // const onChange = product => {
  //   const { buy, setBuy } = useState(false)
  //   if (buy) {
  //     ;<>
  //       <button
  //         onClick={function () {
  //           setBuy(false)
  //         }}
  //       >
  //         -
  //       </button>
  //       <button>1</button>
  //       <button>+</button>
  //     </>
  //   }
  // }

  return (
    <Container maxWidth="lg">
      <div className="App">
        <Header countCartItems={cartItems.length} />
        <div className="row">
          <Main
            onAdd={onAdd}
            onRemove={onRemove}
            products={products}
            cartItems={cartItems}
          />
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </div>
      </div>
    </Container>
  )
}

export default Home
