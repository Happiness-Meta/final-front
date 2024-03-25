import { css, keyframes } from "@emotion/react";
import { showUp } from "../commonStyles/keyframes";

export const msgSectionStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  background-color: white;
  animation: ${showUp} 0.5s;
  z-index: 100;
`;

const paperAni = keyframes`
0% {
  width: 0; height: 0;
} 100% {
  width: 120px;
  height: 160px;
  padding: 10px;
  border: 2px solid orange;
  box-shadow: 0 0 30px orange;
}
`;

export const paperStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  width: 0px;
  height: 0px;
  padding: 0px;
  border-radius: 10px;
  animation: ${paperAni} 0.5s 1s forwards;
`;

const paperLineAni = keyframes`
  0% {width: 0;}
  100% {opacity:1;}
`;

export const paperLineStyle = css`
  opacity: 0;
  height: 2.5px;
  background-color: #454545;
  animation: ${paperLineAni} 1s 1.5s forwards;
`;

export const msgTextStyle = css`
  margin-top: 20px;
  font-size: 2em;
  font-weight: bold;
  opacity: 0;
  animation: ${showUp} 0.5s 2.5s forwards;
`;
