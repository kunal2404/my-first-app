import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="subcard">
          <button onClick={() => {
            if((count) == 0){
              alert("You can't count in minus")
            }
            else{
              setCount((count) => count - 1)
            }
          }}>-</button>
          <div className="countno"> Total Click is {count}</div>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        <button className="resetbtn" onClick={() => setCount(0)}>RESET</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
