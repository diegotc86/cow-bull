import React, { useRef } from "react";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "components/container-app";
import { Center } from "ui/layout";
import Link from "ui/link";
import * as S from "./new-game.styles";

function NewGame({ codeNumber = "0000" }) {
  const inputCode = useRef(null);

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
          <S.Code
            ref={inputCode}
            type="text"
            readOnly
            value={codeNumber}
          ></S.Code>
          <S.Message>
            Share this code with a friend to start the match
          </S.Message>
          <S.Actions>
            <Button onClick={copyCode} type="secondary">
              Copy Code2
            </Button>
            <S.Space />
            <Link to="/pre-game">
              <Button type="primary">Start</Button>
            </Link>
          </S.Actions>
        </S.Body>
      </Center>
    </ContainerApp>
  );
}

export default NewGame;
