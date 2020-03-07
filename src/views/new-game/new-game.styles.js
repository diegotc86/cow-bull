import styled from "styled-components";
import { color, weight, radius } from "variables";

const Code = styled.div`
  background-color: ${color.secondary};
  display: flex;
  padding: 16px 48px;
  font-size: 40px;
  font-weight: ${weight.medium};
  border-radius: ${radius.normal};
  width: fit-content;
`;
export { Code };
