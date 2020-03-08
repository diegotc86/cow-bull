import React from "react";
import styled from "styled-components";
import Button from "ui/buttons/button";
import InputText from "ui/form/input-text";

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
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button type="tertiary">Tertiary Button</Button>
      <Button type="tertiary" as="a">
        Link
      </Button>
      <br />
      <h3>Form</h3>
      <InputText
        label="Input text default"
        placeholder="Placeholder"
        name="name"
      />
      <InputText
        center
        label="Input text centered"
        placeholder="Placeholder"
        name="name"
      />
      <br />
    </Container>
  );
}

export default Library;
