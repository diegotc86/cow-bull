import React, { useContext, useEffect, useState, useRef } from "react";
import SocketContext from "../../contexts/SocketContext";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "components/container-app";
import { Center } from "ui/layout";
import Link from "ui/link";
import * as S from "./new-game.styles";

function NewGame() {
  const inputCode = useRef(null);
  const socket = useContext(SocketContext);
  const [room, setRoom] = useState("");

  useEffect(() => {
    if (!socket) return;
    socket.emit("createRoom", null, room => setRoom(room.id));
  }, [socket]);

  const copyCode = () => {
    inputCode.current.select();
    document.execCommand("copy");
  };

  return (
    <ContainerApp>
      <Center>
        <S.StyledLink to="/">
          <BackButton />
        </S.StyledLink>
        <S.Body>
          <S.Code ref={inputCode} type="text" readOnly value={room}></S.Code>
          <S.Message>
            Share this code with a friend to start the match
          </S.Message>
          <S.Actions>
            <Button onClick={copyCode} type="secondary">
              Copy Code
            </Button>
            <S.Space />
            <Link to={`/pre-game/${room}`}>
              <Button type="primary">Start</Button>
            </Link>
          </S.Actions>
        </S.Body>
      </Center>
    </ContainerApp>
  );
}

export default NewGame;
