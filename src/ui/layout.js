import React from "react";
import styled from "styled-components";
import { color } from "variables";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.secondary};
`;

const View = styled.div`
  background-color: white;
  height: 667px;
  width: 375px;
  padding: 16px;
  box-sizing: border-box;
`;

function ContainerApp({ children }) {
  return (
    <Container>
      <View>{children}</View>
    </Container>
  );
}

export default ContainerApp;
