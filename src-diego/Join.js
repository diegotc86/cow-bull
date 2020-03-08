import React, { useState, useContext } from "react";
import SocketContext from "./SocketContext";
import { navigate } from "@reach/router";

function Join() {
  const socket = useContext(SocketContext);
  const [room, setRoom] = useState("");
  const [error, setError] = useState(false);

  const handleStart = () => {
    socket.emit("checkRoom", room, error => {
      console.log(error);
      if (error) {
        setError(error.error);
      } else {
        navigate(`/game/${room}`);
      }
    });
  };

  return (
    <section>
      <p>Put your code and start to play</p>
      <p>code</p>
      <input value={room} onChange={e => setRoom(e.target.value)} />
      {error && <p>{error}</p>}
      <button onClick={handleStart}>Start</button>
    </section>
  );
}

export default Join;
