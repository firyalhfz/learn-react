import logo from "./logo.svg";
import "./App.css";
import NameList from "./components/NameList";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Welcome> </Welcome>
      {/* <NameList></NameList> */}
    </div>
  );
}

export default App;
