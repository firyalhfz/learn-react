import Header from './components/Header'
import { useState } from 'react'

function App() {
  // const title = 'welcome to my app'
  // const age = 10
  const link = 'http://github.com/firyaldev'

  const clickMe = (name) => {
    console.log('clicked: ' + name)
  }

  const [title, setTitle] = useState('')
  const [age, setAge] = useState(20)
  const changeTitle = () => {
    setTitle('title changed')
    setAge(40)
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <h1>{age * 2}</h1>
      <a href={link}>Go to github firyal </a>
      <Header />
      <button onClick={() => clickMe('firyal')}>Click me </button>
      <button onClick={changeTitle}>Change Title </button>
    </div>
  )
}

export default App
