import { css } from "@emotion/react";
import { showUp } from "../commonStyles/keyframes";

export const questionStyle = css`
  margin-bottom: 30px;
  font-size: 2em;
  font-weight: bold;
  animation: ${showUp} 0.5s;
`;

export const templateLinkStyle = `
  margin-top: 30px;
  color: gray;
  font-size: 0.9em;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

export const paintStyle = `
width: 40px; 
height: 40px; 
border: 1px solid gray;
border-radius: 20px; 
transition:.4s; 
cursor: pointer; 
&:hover{
  box-shadow: 0px 5px 5px #b4b4b4;
  transform: translateY(-5px) scale(1.1);
}`;
