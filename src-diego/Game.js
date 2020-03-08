import React, { useState, useEffect, useContext } from "react";
import SocketContext from "./SocketContext";
import { useParams } from "@reach/router";

const StartGame = ({ setParent }) => {
  const [number, setNumber] = useState("");

  const handleChange = e => {
    setNumber(e.target.value);
  };

  const handleNext = () => {
    setParent(number);
  };
  return (
    <section>
      <p>Put a numer of 4 digits</p>
      <input type="text" value={number} onChange={e => handleChange(e)} />
      <p>[ ! ] The numbers mustn't repeat.</p>
      <button onClick={handleNext}>Next</button>
    </section>
  );
};

const Lobby = ({ room }) => {
  return (
    <section>
      <p>Waiting to oponent...</p>
      <button>Copy code room: {room}</button>
    </section>
  );
};

const Play = ({
  roomId,
  current,
  setCurrent,
  setMoves,
  guessList,
  setGuessList,
  setWinner
}) => {
  const socket = useContext(SocketContext);
  const [guess, setGuess] = useState("");

  useEffect(() => {
    if (!socket) return;
    socket.on("guessResult", ({ cows, bulls, guess }) => {
      setGuessList(currentList => [
        ...currentList,
        { guess: guess, result: { cows, bulls } }
      ]);
      if (bulls === 4) {
        setWinner(true);
      }
    });
  }, [socket]);

  const handleSubmit = () => {
    socket.emit("sendGuess", { roomId, id: socket.id, guess }, () => {
      setCurrent(false);
      setMoves(current => current + 1);
      setGuess("");
    });
  };

  return (
    <main>
      <section>
        <p>{current ? "Your turn" : "Opponent move"}</p>
        <p></p>
      </section>
      <section>
        <p>? ? ? ?</p>
        <p>Guess the number</p>
        <section>
          <ul>
            {guessList.map((guessItem, index) => (
              <li key={index}>
                {`${guessItem.guess}: cows:${guessItem.result.cows} bulls:${guessItem.result.bulls}`}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p>Move #</p>
          <input
            type="text"
            value={guess}
            onChange={e => setGuess(e.target.value)}
          />
          <button onClick={handleSubmit} disabled={!current}>
            ->
          </button>
        </section>
      </section>
    </main>
  );
};

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
    if (gameState != "end") return;
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
      {gameState === "pregame" && <StartGame setParent={setNumber} />}
      {gameState === "lobby" && <Lobby room={roomId} />}
      {gameState === "playing" && (
        <Play
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
