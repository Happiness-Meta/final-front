import { css } from "@emotion/react";
import { commonColor } from "./commonStyles";

export const signInUpMainStyle = {
  width: "400px",
  height: "600px",
};

export const signInUpinputStyle = {
  width: "100%",
  height: "50px",
  padding: "10px",
  border: "1px solid gray",
  borderRadius: "5px",
  fontSize: "16px",
};

export const techStackinputStyle = {
  width: "100%",
  height: "30px",
  padding: "10px",
  border: "1px solid gray",
  borderRadius: "5px",
  fontSize: "16px",
  display: "Flex",
  alignItems: "center",
};

export const signInUpInputStyleHover = css`
  &:hover {
    border: 2px solid #ff8a0080 !important;
  }
  &:focus {
    border: 2px solid ${commonColor.representative} !important;
  }
`;

export const signInUpButtonStyle = css`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: ${commonColor.representative};
  color: white;
  font-size: 16px;
  transition: 0.2s;
  &:hover {
    width: 102%;
    font-weight: bold;
  }
`;

export const errorMessageStyle = css`
  width: 100%;
  height: 17px;
  margin: 5px 0;
  color: red;
  font-size: 13px;
  font-weight: bold;
`;
