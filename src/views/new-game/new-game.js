import React from "react";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "components/container-app";
import { Code } from "./new-game.styles";
import { Center } from "ui/layout";
import Link from "ui/link";
import * as S from "./new-game.styles";

function NewGame() {
  return (
    <ContainerApp>
      <Center>
        <S.StyledLink to="/">
          <BackButton />
        </S.StyledLink>
        <S.Body>
          <Code>ABDKNH</Code>
          <S.Message>
            Share this code with a friend to start the match
          </S.Message>
          <S.Actions>
            <Button type="secondary">Copy Code</Button>
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
