import { css } from "@emotion/react";
import { commonColor } from "./commonStyles";

export const signInUpMainStyle = {
  width: "400px",
  height: "600px",
};

export const signInUpinputStyle = {
  width: "90%",
  height: "50px",
  padding: "10px",
  border: "1px solid gray",
  borderRadius: "5px",
  fontSize: "16px",
};

export const signInUpInputStyleHover = `
  &:focus {
    border-color: orange !important;
  }
`;

export const signInUpButtonStyle = css`
  width: 90%;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: ${commonColor.representative};
  color: white;
  font-size: 16px;
  transition: 0.2s;
  &:hover {
    box-shadow: inset 0px 0px 10px black;
    font-weight: bold;
  }
`;

export const errorMessageStyle = css`
  width: 90%;
  height: 17px;
  margin: 5px 0;
  color: red;
  font-size: 13px;
  font-weight: bold;
`;
