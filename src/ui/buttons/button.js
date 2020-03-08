/*
Define the button styles with `type` prop:
- primary / by default
- secondary
- tertiary
*/

import React from "react";
import styled from "styled-components";
import { color, radius } from "variables";

const BaseButton = styled.button`
  padding: 0;
  height: 56px;
  border: 2px solid ${color.dark};
  box-sizing: border-box;
  box-shadow: 0px 4px 0px ${color.dark};
  border-radius: ${radius.normal};
  font-size: 18px;
  padding-right: 24px;
  padding-left: 24px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PrimaryStyles = styled(BaseButton)`
  background: ${color.primary};
  color: white;
`;

const SecondaryStyles = styled(BaseButton)`
  background: ${color.grayHard};
  color: ${color.dark};
`;

const TertiaryStyles = styled(BaseButton)`
  padding-left: 16px;
  padding-right: 16px;
  height: 40px;
  line-height: 40px;
  background: ${color.grayHard};
  font-size: 14px;
  border: 0;
  box-shadow: none;
`;

function Button({ type = "primary", className, children, as }) {
  switch (type) {
    case "primary":
      return (
        <PrimaryStyles className={className} as={as}>
          {children}
        </PrimaryStyles>
      );
    case "secondary":
      return (
        <SecondaryStyles className={className} as={as}>
          {children}
        </SecondaryStyles>
      );
    case "tertiary":
      return (
        <TertiaryStyles className={className} as={as}>
          {children}
        </TertiaryStyles>
      );
    default:
      return (
        <PrimaryStyles className={className} as={as}>
          {children}
        </PrimaryStyles>
      );
  }
}

export default Button;
