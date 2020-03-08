import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import io from "socket.io-client";
import Home from "./Home";
import New from "./New";
import Join from "./Join";
import Game from "./Game";
import SocketContext from "./SocketContext";

function App() {
  const ENDPOINT = "localhost:8000";
  const [socket, setSocket] = useState("");

  useEffect(() => {
    setSocket(() => io(ENDPOINT));
  }, []);

  useEffect(() => {
    if (!socket) return;

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, socket]);

  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Home path="/" />
        <New path="/new" />
        <Join path="/join" />
        <Game path="/game/:roomId" />
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
