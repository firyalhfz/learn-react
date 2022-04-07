import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import CartChange from './components/CartChange';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <ConditionalRendering /> */}
      {/* <CartChange /> */}
      <DataFetching />
    </div>
  );
}

export default App;
