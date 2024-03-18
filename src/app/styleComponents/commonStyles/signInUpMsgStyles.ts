import { css } from "@emotion/react";
import { showUp, templateAni } from "./keyframes";
import { flexCenterX2 } from "./commonStyles";

export const msgContainerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  animation: ${showUp} 0.5s;
  z-index: 10;
`;

export const msgTextStyle = css`
  ${flexCenterX2}
  width: 100vh;
  font-size: 3em;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  animation: ${templateAni} 1s 0.5s forwards;
`;
