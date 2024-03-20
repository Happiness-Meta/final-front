import { css } from "@emotion/react";
import { signInUpInputStyleHover } from "./inputAndButtonAndText";

export const searchImageStyle = css`
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
`;

export const techStackExampleStyle = css`
  position: absolute;
  top: 102%;
  flex-direction: column;
  width: 100%;
  min-height: 30px;
  height: auto;
  max-height: 200px;
  border: 1px solid gray;
  border-radius: 7px;
  background-color: white;
  overflow-y: scroll;
  z-index: 1;
`;

export const techStackContainerStyle = css`
  ${signInUpInputStyleHover};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3px;
  row-gap: 3px;
  height: fit-content;
  min-height: 30px;
  padding: 3px;
  overflow-x: scroll;
  overflow-y: hidden;
  user-select: none;
`;
