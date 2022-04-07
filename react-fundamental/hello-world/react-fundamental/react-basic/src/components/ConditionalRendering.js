import React from 'react'

function ConditionalRendering() {
  const [login, setLogin] = React.useState(false)

  if (login) {
    return (
      <>
        <h1>Udah login, ges</h1>
        <button onClick={function(){
          setLogin(false)
        }}>logout</button>
      </>
    )
  }

  return (
    <div>
      <h1>Login dulu</h1>
      <button
        onClick={function () {
          setLogin(true)
        }}
      >
        Login
      </button>
    </div>
  )
}

export default ConditionalRendering
