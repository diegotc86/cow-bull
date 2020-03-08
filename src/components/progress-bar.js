import React from "react";
import styled from "styled-components";
import { color } from "variables";

const Wrapper = styled.div`
  background-color: ${color.grayLight};
  height: 100%;
`;

const Content = styled.div`
  width: ${props => props.progress + "%"};
  height: 100%;
  background-color: ${color.grayHard};
  box-sizing: border-box;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

function ProgressBar({ progress = 0 }) {
  return (
    <Wrapper>
      <Content progress={progress} />
    </Wrapper>
  );
}

export default ProgressBar;
