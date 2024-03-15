import { css } from "@emotion/react";
import { commonColor } from "../commonStyles/commonStyles";

export const projectNnDInputStyle = css`
  width: 40%;
  min-width: 400px;
  height: 50px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
  font-size: 1.2em;
  transition: 0.2s;
  &:focus {
    width: 42%;
    border-color: ${commonColor.representative};
    border-radius: 25px;
  }
`;

export const periodInputStyle = css`
  width: 230px;
  height: 40px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  text-align: center;
  font-size: 1.1em;
  transition: 0.2s;
  &:focus {
    width: 250px;
    border-color: ${commonColor.representative};
    border-radius: 20px;
  }
`;

export const personnelInputStyle = css`
  width: 45px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 10px;
  text-align: center;
  font-size: 2em;
  transition: 0.2s;
  &:focus {
    width: 50px;
    border-color: ${commonColor.representative};
  }
`;
