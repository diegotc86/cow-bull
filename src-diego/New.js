import React, { useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import SocketContext from "./SocketContext";

function New() {
  const socket = useContext(SocketContext);
  const [room, setRoom] = useState("");

  useEffect(() => {
    if (!socket) return;
    socket.emit("createRoom", null, room => setRoom(room.id));
  }, [socket]);

  const handleStart = () => {
    navigate(`/game/${room}`);
  };

  return (
    <section>
      <p>{room}</p>
      <p>Share this code with a friend to start the match</p>
      <button>Copy Code</button>
      <button onClick={handleStart}>Start</button>
    </section>
  );
}

export default New;
