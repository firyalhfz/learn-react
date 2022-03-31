import { Box } from '@mui/material'
import './App.css'
import Card from './components/Card'
import CardItem from './components/CardItem'

function App() {
  return (
    <div className="App">
      <Box sx={{ maxWidth: { xs: 450, sm: 450 } }}>
        <CardItem sx={{ maxWidth: { xs: 450, sm: 450 } }} />
      </Box>
    </div>
  )
}

export default App
