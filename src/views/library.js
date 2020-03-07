import React from "react";
import Button from "ui/buttons/button";
import styled from "styled-components";

const Container = styled.div`
  padding: 48px;
  & > * {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

function Library() {
  return (
    <Container>
      <h3>Buttons</h3>
      <Button type={"primary"}>Primary Button</Button>
      <Button type={"secondary"}>Secondary Button</Button>
      <Button type={"tertiary"}>Tertiary Button</Button>
      <br />
      <h3>Next...</h3>
      <br />
    </Container>
  );
}

export default Library;
