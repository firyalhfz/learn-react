import './App.css'
import NameList from './components2/NameList'
import Greet from './components2/Greet'
import Welcome from './components2/Welcome'
import Hello from './components2/Hello'
import Message from './components2/Message'
import Counter from './components2/Counter'

function App() {
  return (
    <div className="App">
      <Counter />
      <Message />
      <Greet name="firyal" heroName="armin">
        {' '}
        <div>this is children props</div>
      </Greet>
      <Greet name="ilyas" heroName="eren">
        <button> action </button>
      </Greet>
      <Greet name="salwa" heroName="mikasa" />
      <Welcome name="firyal" heroName="armin" />
      <Welcome name="ilyas" heroName="eren" />
      <Welcome name="salwa" heroName="mikasa" />
      {/* <Hello /> */}
      {/* <NameList></NameList> */}
    </div>
  )
}

export default App
