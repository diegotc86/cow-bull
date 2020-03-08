import React from "react";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "ui/layout";
import InputText from "ui/form/input-text";
import {} from "./join-game.styles";

function JoinGame() {
  return (
    <ContainerApp>
      <BackButton />
      <p>Put your code and start to play</p>
      <InputText label="Code" center placeholder="Put your code here" />
      <Button type="primary">Join</Button>
    </ContainerApp>
  );
}

export default JoinGame;
