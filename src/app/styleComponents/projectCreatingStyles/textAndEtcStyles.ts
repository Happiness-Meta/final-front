import { css } from "@emotion/react";
import { showUp } from "../commonStyles/keyframes";

export const questionStyle = css`
  margin-bottom: 30px;
  font-size: 2em;
  font-weight: bold;
  animation: ${showUp} 0.5s;
`;

export const templateLinkStyle = css`
  margin-top: 30px;
  color: gray;
  font-size: 0.9em;
  cursor: pointer;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

export const paintStyle = css`
  width: 4vw;
  height: 4vw;
  min-width: 30px;
  min-height: 30px;
  max-width: 40px;
  max-height: 40px;
  border: 1px solid gray;
  border-radius: 20px;
  transition: transform 0.4s, box-shadow 0.4s;
  &:hover,
  &:focus {
    box-shadow: 0px 5px 5px #b4b4b4;
    transform: translateY(-5px) scale(1.1);
  }
`;
