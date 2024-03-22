import { css } from "@emotion/react";
import { flexCenterX2 } from "../commonStyles/commonStyles";
import {
  signInUpInputStyleHover,
  signInUpMainStyle,
  signInUpinputStyle,
} from "../commonStyles/inputAndButtonAndText";

export const mainStyle = [
  signInUpMainStyle,
  flexCenterX2,
  css`
    flex-direction: column;
    user-select: none;
  `,
];

export const homeLinkStyle = {
  ...flexCenterX2,
  width: "100%",
  height: "60px",
  marginBottom: "30px",
  fontSize: "40px",
  fontWeight: "bold",
};

export const inputStyles = {
  inputStyle1: [
    signInUpinputStyle,
    css`
      border-bottom-width: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      &:focus {
        border-bottom-width: 1px;
      }
      ${signInUpInputStyleHover};
    `,
  ],
  inputStyle2: [
    signInUpinputStyle,
    ` border-top-width: 0; 
    border-top-left-radius: 0; 
    border-top-right-radius: 0;
    &:focus{
      border-top-width: 1px;
    }
    ${signInUpInputStyleHover};`,
  ],
};
