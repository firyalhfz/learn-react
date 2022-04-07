import React from 'react'

function CartChange() {
  const [login, setLogin] = React.useState(false)

  if (login) {
    return (
      <>
        <button
          onClick={function () {
            setLogin(false)
          }}
        >
          ---
        </button>
        <button>1</button>
        <button>+</button>
      </>
    )
  }

  return (
    <div>
      <button
        onClick={function () {
          setLogin(true)
        }}
      >
        Beli
      </button>
    </div>
  )
}

export default CartChange
