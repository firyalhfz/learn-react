// import Header from './components/Header'
import { useState } from 'react'
import ProductList from './components/ProductList'

function App() {
  // const title = 'welcome to my app'
  // const age = 10
  // const link = 'http://github.com/firyaldev'

  // const clickMe = name => {
  //   console.log('clicked: ' + name)
  // }

  // const [title, setTitle] = useState('')
  // const [age, setAge] = useState(20)
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 900 },
    { id: 2, title: 'Product 2', price: 500 },
    { id: 3, title: 'Product 3', price: 700 },
    { id: 4, title: 'Product 4', price: 300 },
    { id: 5, title: 'Product 5', price: 800 },
  ])

  // const changeTitle = () => {
  //   setTitle('title changed')
  //   setAge(40)
  // }

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId)
    setProducts(newProducts)
  }
  return (
    <div className="App">
      {/* <h1>{title}</h1>
      <h1>{age * 2}</h1>
      <a href={link}>Go to github firyal </a>
      <Header />
      <button onClick={() => clickMe('firyal')}>Click me </button>
      <button onClick={changeTitle}>Change Title </button> */}
      <ProductList products={products} deleteProduct={deleteProduct}/>
    </div>
  )
}

export default App

