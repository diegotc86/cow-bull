import React from "react";
import cow from "assets/svg/mini-cow.svg";
import bull from "assets/svg/mini-bull.svg";
import {
  Wrapper,
  Numbers,
  Results,
  ResultSlot,
  Image,
  Data,
} from "./move.style";

function Move({
  number = "----",
  result = [2, 2],
  size = "default",
  className,
}) {
  return (
    <Wrapper size={size} className={className}>
      <Numbers size={size}>
        <Data>{number}</Data>
      </Numbers>
      <Results size={size}>
        <ResultSlot>
          {result[0]}
          <Image size={size} src={cow} />
        </ResultSlot>
        <ResultSlot>
          {result[1]}
          <Image size={size} src={bull} />
        </ResultSlot>
      </Results>
    </Wrapper>
  );
}

export default Move;
