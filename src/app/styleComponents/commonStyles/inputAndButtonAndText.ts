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
  transition: ".2s",
};

export const signInUpInputStyleHover = `
  &:focus {
    width: 92%;
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
  cursor: pointer;
  &:hover {
    width: 92%;
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