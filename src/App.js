import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { subscribeToTimer } from "./api";

function App() {
  const [timestamp, setTimestamp] = useState("no tiner yet");

  useEffect(() => {
    subscribeToTimer(1000, (err, timestamp) => setTimestamp(timestamp));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>This is the timer value: {timestamp}</p>
      </header>
    </div>
  );
}

export default App;
