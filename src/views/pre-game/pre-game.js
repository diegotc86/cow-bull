import React from "react";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "components/container-app";
import InputText from "ui/form/input-text";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { Center } from "ui/layout";
import * as S from "./pre-game.styles";

const ArroRightIcon = styled(FaArrowRight)`
  font-size: 14px;
  margin-left: 8px;
`;

function PreGame() {
  return (
    <ContainerApp>
      <Center>
        <S.StyledLink to="/new-game">
          <BackButton />
        </S.StyledLink>
        <InputText
          label="Put a number of 4 digits"
          center
          placeholder="# # # #"
        />
        <S.Message>[!] The numbers mustn't repeat</S.Message>
        <S.Actions>
          <Button type="primary">
            Next <ArroRightIcon />
          </Button>
        </S.Actions>
      </Center>
    </ContainerApp>
  );
}

export default PreGame;
