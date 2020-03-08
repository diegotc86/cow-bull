import React from "react";
import ContainerApp from "ui/layout";
import Button from "ui/buttons/button";
import {
  Footer,
  Grid,
  Header,
  Body,
  Links,
  Moves,
  StyledMove,
  StyledBigNumbers,
} from "./gameover.styles";

function NewGame({ number = "4325" }) {
  return (
    <ContainerApp>
      <Grid>
        <Header>
          <Links>
            <Button type="tertiary">Home</Button>
            <Button type="tertiary">Opponent move</Button>
          </Links>
        </Header>
        <Body>
          <StyledBigNumbers mode="dark" number={number} />
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
