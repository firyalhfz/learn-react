import './App.css'
import NameList from './components/NameList'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
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
