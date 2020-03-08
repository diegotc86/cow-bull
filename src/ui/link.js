import React from "react";
import { Link as RouterLink } from "@reach/router";
import styled from "styled-components";

const StyledLink = styled(RouterLink)`
  & > * {
    width: 100%;
  }
`;

function Linkd({ children, to, className }) {
  return (
    <StyledLink to={to} className={className}>
      {children}
    </StyledLink>
  );
}

export default Linkd;
