import React from "react";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "components/container-app";
import InputText from "ui/form/input-text";
import { Center } from "ui/layout";
import * as S from "./join-game.styles";

function JoinGame() {
  return (
    <ContainerApp>
      <S.StyledLink to="/">
        <BackButton />
      </S.StyledLink>
      <Center>
        <InputText label="Code" center placeholder="Put your code here" />
        <S.Message>Put your code and start to play</S.Message>
        <S.Actions>
          <Button type="primary">Join</Button>
        </S.Actions>
      </Center>
    </ContainerApp>
  );
}

export default JoinGame;
