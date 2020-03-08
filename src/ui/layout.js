import React from "react";
import styled from "styled-components";
import { color } from "variables";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.grayHard};
`;

const View = styled.div`
  background-color: white;
  height: 667px;
  width: 375px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

function ContainerApp({ children }) {
  return (
    <Container>
      <View>{children}</View>
    </Container>
  );
}

export default ContainerApp;
