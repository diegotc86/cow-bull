import React from "react";
import Button from "ui/buttons/button";
import cow from "assets/svg/big-cow.svg";
import bull from "assets/svg/big-bull.svg";
import { Image, Brand } from "./home.styles";
import ContainerApp from "ui/layout";

function Home() {
  return (
    <ContainerApp>
      <Brand>
        <Image src={cow} />
        <Image src={bull} />
      </Brand>
      <div>
        <Button type={"secondary"}>New game</Button>
        <Button type={"secondary"}>Join a game</Button>
      </div>
    </ContainerApp>
  );
}

export default Home;
