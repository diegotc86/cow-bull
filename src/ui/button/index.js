import React from "react";
import styled, { css } from "styled-components";
import { colors, radius } from "variables";

const baseButton = `
  width: 200px;
  height: 56px;
  border: 2px solid ${colors.dark};
  box-sizing: border-box;
  box-shadow: 0px 4px 0px ${colors.dark};
  border-radius: ${radius.normal};
  font-size: 18px;
  `;

const primaryStyles = css`
  ${baseButton}
  background: ${colors.primary};
  color: white;
  `;
const secondaryStyles = css`
  ${baseButton}
  background: ${colors.secondary};
  color: ${colors.dark};
  `;
const terciaryStyles = css`
  padding-left: 16px;
  padding-right: 16px;
  height: 40px;
  border-radius: ${radius.normal};
  background: ${colors.secondary};
  font-size: 14px;
`;

const StyledButton = styled.button`
  ${props => {
    if (props.type === "primary") return primaryStyles;
    if (props.type === "secondary") return secondaryStyles;
    if (props.type === "terciary") return terciaryStyles;
  }}
`;

function Button({ type = "primary", children }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

export default Button;
