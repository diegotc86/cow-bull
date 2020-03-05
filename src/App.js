import React from "react";
import { Router, Link } from "@reach/router";
import Home from "views/home/home";
import NewGame from "views/new-game";

function App() {
  return (
    <Router>
      <Home path="/" />
      <NewGame path="/new-game" />
    </Router>
  );
}

export default App;
