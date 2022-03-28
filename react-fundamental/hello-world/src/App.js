import logo from "./logo.svg";
import "./App.css";
import NameList from "./components/NameList";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Welcome> </Welcome>
      <Hello />
      {/* <NameList></NameList> */}
    </div>
  );
}

export default App;
