import React from "react";
import ContainerApp from "components/container-app";
import cow from "assets/svg/big-cow.svg";
import bull from "assets/svg/big-bull.svg";
import * as S from "./lobby.styles";

function Lobby({ roomId }) {
  return (
    <ContainerApp>
      <S.Body>
        <S.Center>
          <S.Image src={cow} width="80" />
          <S.Image src={bull} width="80" />
          <S.TextCenter>Waiting oponent...</S.TextCenter>
        </S.Center>
        <S.StyledButton type="secondary">
          Copy code room: <S.Code>{roomId}</S.Code>
        </S.StyledButton>
      </S.Body>
    </ContainerApp>
  );
}

export default Lobby;
