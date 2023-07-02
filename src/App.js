import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>React Docker Example</h1>
      <h3>Counter</h3>
      <div className="counter">
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
      <h3>{count}</h3>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
      </div>
      
    </div>
  );
}

export default App;
