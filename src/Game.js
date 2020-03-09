import React, { useState, useEffect, useContext } from "react";
import SocketContext from "./contexts/SocketContext";
import { useParams } from "@reach/router";
import Pregame from "./views/pre-game/pre-game";
import Lobby from "./views/lobby/lobby";
import Match from "./views/match/match";

const End = ({ guessList, moves, winner, oppData, number }) => {
  const socket = useContext(SocketContext);
  const [showYours, setShowYours] = useState(true);

  const handleRematch = () => {
    socket.emit("rematch", {}, () => {});
  };

  const handleViewSwitch = () => {
    setShowYours(!showYours);
  };

  const Moves = ({ list }) => {
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {`${item.guess}: cows:${item.result.cows} bulls:${item.result.bulls}`}
          </li>
        ))}
      </ul>
    );
  };

  const showMessage = () => {
    return winner ? `You resolved it on ${moves} moves` : "Your moves";
  };

  return (
    <main>
      <section>
        <a href="/">Home</a>
        <button onClick={handleViewSwitch}>
          {showYours ? "Opponent Moves" : "My Moves"}
        </button>
      </section>
      <section>
        <p>{`You ${winner ? "win" : "lose"}`}</p>
        <p>{showYours ? oppData.number : number}</p>
        <section>
          <p>{showYours ? showMessage() : "Opponent moves"}</p>
          <Moves list={showYours ? guessList : oppData.guessList} />
        </section>
        <section>
          <button onClick={handleRematch}>Rematch</button>
        </section>
      </section>
    </main>
  );
};

function Game() {
  const socket = useContext(SocketContext);
  const { roomId } = useParams();

  const [gameState, setGameState] = useState("pregame");
  const [number, setNumber] = useState("");
  const [oppNumber, setOppNumber] = useState("????");
  const [guessList, setGuessList] = useState([]);
  const [oppGuessList, SetOppGuessList] = useState([]);
  const [current, setCurrent] = useState(false);
  const [moves, setMoves] = useState(0);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    if (!number || !roomId) return;
    socket.emit("join", { number, roomId }, error => console.log(error));
    setGameState("lobby");
  }, [number, socket, roomId]);

  useEffect(() => {
    if (!socket) return;
    socket.on("ready", ({ current }) => {
      if (current === socket.id) {
        setCurrent(true);
      }
      setGameState("playing");
    });
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    socket.on("end", () => {
      setGameState("end");
    });
  }, [socket]);

  useEffect(() => {
    if (gameState !== "end") return;
    console.log("Mandar:", number, guessList, roomId);
    socket.emit("sendData", { number, guessList, roomId }, () => {});
  }, [gameState]);

  useEffect(() => {
    if (!socket) return;
    socket.on("opponentData", ({ number, guessList }) => {
      console.log("data received:", number, guessList);
      setOppNumber(number);
      SetOppGuessList(guessList);
    });
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    socket.on("changeTurn", () => setCurrent(!current));
  }, []);

  return (
    <section>
      {gameState === "pregame" && <Pregame setParent={setNumber} />}
      {gameState === "lobby" && <Lobby roomId={roomId} />}
      {gameState === "playing" && (
        <Match
          roomId={roomId}
          current={current}
          setCurrent={setCurrent}
          setMoves={setMoves}
          guessList={guessList}
          setGuessList={setGuessList}
          setWinner={setWinner}
        />
      )}
      {gameState === "end" && (
        <End
          moves={moves}
          guessList={guessList}
          winner={winner}
          oppData={{ number: oppNumber, guessList: oppGuessList }}
          number={number}
        />
      )}
    </section>
  );
}

export default Game;
