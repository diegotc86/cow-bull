import styled from "styled-components";
import { color, weight, radius } from "variables";

const Code = styled.div`
  background-color: ${color.grayHard};
  display: flex;
  padding: 8px 48px;
  font-size: 40px;
  font-weight: ${weight.medium};
  border-radius: ${radius.normal};
  width: fit-content;
  letter-spacing: 4px;
`;
export { Code };
