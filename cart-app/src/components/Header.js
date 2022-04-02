import React from 'react'

function Header(props) {
  const { countCartItems } = props
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          cart{' '}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ' '
          )}
        </a>{' '}
        <a href="#/signin">signin</a>
      </div>
    </header>
  )
}

export default Header
