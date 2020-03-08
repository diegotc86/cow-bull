import React from "react";
import { Router } from "@reach/router";
// views
import Library from "views/library";
import Home from "views/home/home";
import NewGame from "views/new-game/new-game";
import JoinGame from "views/join-game/join-game";
import PreGame from "views/pre-game/pre-game";
import Lobby from "views/lobby/lobby";
import Game from "views/game/game";
import Gameover from "views/gameover/gameover";

function App() {
  return (
    <Router>
      <Library path="/" />
      <Home path="/home" />
      <NewGame path="/new-game" />
      <JoinGame path="/join-game" />
      <PreGame path="/pre-game" />
      <Lobby path="/lobby" />
      <Game path="/game" />
      <Gameover path="/gameover" />
    </Router>
  );
}

export default App;
