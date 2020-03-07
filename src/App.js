import React from "react";
import { Router } from "@reach/router";
// views
import Library from "views/library";
import NewGame from "views/new-game/new-game";
import Home from "views/home/home";

function App() {
  return (
    <Router>
      <Library path="/" />
      <Home path="/home" />
      <NewGame path="/new-game" />
    </Router>
  );
}

export default App;
