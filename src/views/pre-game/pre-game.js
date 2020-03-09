import React, { useState } from "react";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "components/container-app";
import { Center } from "ui/layout";
import * as S from "./pre-game.styles";

function PreGame() {
  const [number, setNumber] = useState();
  const handleClick = () => {};
  const handleChangeNumber = event => {};

  return (
    <ContainerApp>
      <Center>
        <S.StyledLink to="/new-game">
          <BackButton />
        </S.StyledLink>
        <S.StyledInputText
          label="Put a number of 4 digits"
          center
          placeholder="# # # #"
          value={number}
          onChange={handleChangeNumber}
        />
        <S.Message>[!] The numbers mustn't repeat</S.Message>
        <S.Actions>
          <Button type="primary" onClick={handleClick}>
            Next <S.ArroRightIcon />
          </Button>
        </S.Actions>
      </Center>
    </ContainerApp>
  );
}

export default PreGame;
