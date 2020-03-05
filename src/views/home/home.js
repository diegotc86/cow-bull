import React from "react";
import Button from "ui/button";
import cow from "assets/svg/big-cow.svg";
import bull from "assets/svg/big-bull.svg";
import { Container, Image, Actions, Brand } from "./home.styles";

function Home() {
  return (
    <Container>
      <Brand>
        <Image src={cow} />
        <Image src={bull} />
      </Brand>
      <Actions>
        <Button type={"secondary"}>New Game</Button>
        <Button type={"secondary"}>I have a codename</Button>
      </Actions>
    </Container>
  );
}

export default Home;
