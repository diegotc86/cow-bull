import React from "react";
import ContainerApp from "components/container-app";
import Button from "ui/buttons/button";
import { Link } from "@reach/router";

import {
  Footer,
  Grid,
  Header,
  Body,
  Links,
  Moves,
  StyledMove,
  StyledBigNumbers,
  Heading3,
  Resume,
} from "./gameover.styles";

function NewGame({ number = "4325", myPlay = true, plays = 0 }) {
  return (
    <ContainerApp>
      <Grid>
        <Header>
          <Links>
            <Link to="/">
              <Button to="/" type="tertiary" as="Link">
                Home
              </Button>
            </Link>
            {myPlay ? (
              <Button type="tertiary">Adversary plays</Button>
            ) : (
              <Button type="tertiary">My plays</Button>
            )}
          </Links>
        </Header>
        <Body>
          <Resume>
            <Heading3>{myPlay ? "YOU WIN" : "Adversary plays"}</Heading3>
            <StyledBigNumbers mode="dark" number={number} />
            <p>{myPlay ? `You resolved it in ${plays} plays` : "gg wp"}</p>
          </Resume>
          <Moves>
            <StyledMove number={1234} result={[1, 2]} />
            <StyledMove number={7653} result={[2, 2]} />
            <StyledMove number={7452} result={[0, 2]} />
            <StyledMove number={4673} result={[1, 2]} />
            <StyledMove number={4673} result={[1, 1]} />
            <StyledMove number={4673} result={[1, 1]} />
            <StyledMove number={4673} result={[1, 3]} />
            <StyledMove number={4673} result={[3, 1]} />
            <StyledMove number={4673} result={[0, 2]} />
            <StyledMove number={4673} result={[0, 0]} />
            <StyledMove number={4673} result={[0, 4]} />
            <StyledMove number={4673} result={[4, 0]} />
          </Moves>
        </Body>
        <Footer>
          <Button type="primary">Rematch</Button>
        </Footer>
      </Grid>
    </ContainerApp>
  );
}

export default NewGame;
