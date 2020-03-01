import React from "react";
import Button from "ui/button";
import cow from "assets/svg/big-cow.svg";
import bull from "assets/svg/big-bull.svg";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cow = styled.img`
  margin-right: 32px;
`;

function Home() {
  return (
    <Container>
      <div>
        <Cow src={cow}></Cow>
        <img src={bull}></img>
      </div>
      <div>
        <Button type={"secondary"}>New Game</Button>
        <Button type={"secondary"}>I have a codename</Button>
      </div>
    </Container>
  );
}

export default Home;
