import { css } from "@emotion/react";
import { commonColor } from "../commonStyles/commonStyles";

export const mainStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 400px;
  height: 700px;
  margin-top: 20vh;
`;

export const headerContainerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const headerSectionStyle = css`
  width: 50%;
  height: 100%;
  transition: 0.2s;
  cursor: pointer;
`;

export const pathStyles = {
  style1: css`
    border: 2px solid;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    color: ${commonColor.representative};
    font-weight: bold;
  `,
  style2: css`
    border-bottom: 2px solid ${commonColor.representative};
    color: gray;
    &:hover {
      color: black;
      font-size: 16px;
    }
  `,
};
