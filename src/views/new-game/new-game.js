import React from "react";
import BackButton from "ui/buttons/back-button";
import Button from "ui/buttons/button";
import ContainerApp from "ui/layout";
import { Code } from "./new-game.styles";

function NewGame() {
  return (
    <ContainerApp>
      <div>
        <BackButton />
      </div>
      <div>
        <div>
          <Code>ABDKNH</Code>
          <p>Share this code with a friend to start the match</p>
        </div>
        <div>
          <Button type="secondary">Copy Code</Button>
          <Button type="primary">Start</Button>
        </div>
      </div>
    </ContainerApp>
  );
}

export default NewGame;
