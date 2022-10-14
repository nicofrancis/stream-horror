import { useState } from "react";
import "./App.css";
import { Movies } from "./components";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>

      <div className="movies">
        <Movies />
      </div>
      <h1>Horror-Stream</h1>
      <p>Feed your horror film lifestyle</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
