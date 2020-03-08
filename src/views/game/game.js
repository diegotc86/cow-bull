import React from "react";
import ContainerApp from "components/container-app";
import ProgressBar from "components/progress-bar";
import Move from "components/move/move";
import {
  Footer,
  ArroRightIcon,
  SendButton,
  StyledInputText,
  Grid,
  Header,
  Body,
  LiveMove,
  HeaderContent,
  Heading4,
  Moves,
  StyledMove,
  StyledBigNumbers,
} from "./game.styles";

function Game({ isMyMove = false, progress = 30, numbers = 4325 }) {
  return (
    <ContainerApp>
      <Grid>
        <Header>
          <ProgressBar progress={progress} />
          <HeaderContent>
            {isMyMove ? (
              <Heading4>Your move</Heading4>
            ) : (
              <LiveMove>
                <Heading4>Opponent move</Heading4>
                <Move number="????" result={["-", "-"]} size="small"></Move>
              </LiveMove>
            )}
          </HeaderContent>
        </Header>
        <Body>
          <StyledBigNumbers numbers={numbers} />
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
          <StyledInputText label="Move 1" placeholder="#" />
          <SendButton type="primary">
            <ArroRightIcon />
          </SendButton>
        </Footer>
      </Grid>
    </ContainerApp>
  );
}

export default Game;
