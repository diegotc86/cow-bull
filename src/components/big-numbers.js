import React from "react";
import styled from "styled-components";
import { color, radius } from "variables";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 48px 48px 48px 48px;
  grid-template-rows: 48px;
  grid-column-gap: 8px;
  font-family: monospace;
  justify-content: center;
  color: ${props => (props.mode === "light" ? color.dark : "white")};
  & > * {
    background-color: ${props =>
      props.mode === "light" ? "white" : color.dark};
  }
`;

const Slot = styled.span`
  border: 2px solid ${color.dark};
  font-size: 24px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${radius.small};
`;

function BigNumbers({ number = "????", mode = "light", className }) {
  return (
    <Wrapper mode={mode} className={className}>
      <Slot>{number[0]}</Slot>
      <Slot>{number[1]}</Slot>
      <Slot>{number[2]}</Slot>
      <Slot>{number[3]}</Slot>
    </Wrapper>
  );
}

export default BigNumbers;
