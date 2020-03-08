import React from "react";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "ui/layout";
import InputText from "ui/form/input-text";
import { FaArrowRight } from "react-icons/fa";
import {} from "./pre-game.styles";
import styled from "styled-components";

const ArroRightIcon = styled(FaArrowRight)`
  font-size: 14px;
  margin-left: 8px;
`;

function PreGame() {
  return (
    <ContainerApp>
      <BackButton />
      <InputText
        label="Put a number of 4 digits"
        center
        placeholder="# # # #"
      />
      <p>[!] The numbers mustn't repeat</p>
      <Button type="primary">
        Next <ArroRightIcon />
      </Button>
    </ContainerApp>
  );
}

export default PreGame;
