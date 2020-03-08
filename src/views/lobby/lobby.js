import React from "react";
import Button from "ui/buttons/button";
import ContainerApp from "components/container-app";
import {} from "./lobby.styles";
import styled from "styled-components";
import { weight } from "variables";
import cow from "assets/svg/big-cow.svg";
import bull from "assets/svg/big-bull.svg";
import { Image } from "./lobby.styles";

const Body = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  margin-left: 8px;
  display: inline-block;
`;

const Code = styled.span`
  font-weight: ${weight.bold};
`;

const Center = styled.div``;
const TextCenter = styled.p`
  text-align: center;
`;

function PreGame() {
  return (
    <ContainerApp>
      <Body>
        <Center>
          <Image src={cow} width="80" />
          <Image src={bull} width="80" />
          <TextCenter>Waiting oponent...</TextCenter>
        </Center>
        <StyledButton type="secondary">
          Copy code room: <Code>ABDKNH</Code>
        </StyledButton>
      </Body>
    </ContainerApp>
  );
}

export default PreGame;
