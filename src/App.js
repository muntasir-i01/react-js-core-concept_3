import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={handleIncrease} style={{margin:'10px'}}>Increase</button>
      <button onClick={handleDecrease} style={{margin:'10px'}}>Decrease</button>
    </div>
  )
}

export default App;
