import React from "react";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "ui/layout";
import { Code } from "./new-game.styles";

function NewGame() {
  return (
    <ContainerApp>
      <BackButton />
      <Code>ABDKNH</Code>
      <p>Share this code with a friend to start the match</p>
      <Button type="secondary">Copy Code</Button>
      <Button type="primary">Start</Button>
    </ContainerApp>
  );
}

export default NewGame;
