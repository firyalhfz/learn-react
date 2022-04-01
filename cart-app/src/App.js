import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'
import data from './data'
import { Box, Container } from '@mui/material'

function App() {
  // deconstructing assignment
  const { products } = data
  return (
    <Container maxWidth="lg">
      <div className="App">
        <Header />
        <div className="row">
          <Main products={products} />
          <Basket />
        </div>
      </div>
    </Container>
  )
}

export default App
