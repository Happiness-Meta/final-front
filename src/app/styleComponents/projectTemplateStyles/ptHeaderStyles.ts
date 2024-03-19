import { css } from "@emotion/react";
import { commonColor } from "../commonStyles/commonStyles";

export const headerStyle = css`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  background-color: #ffffff;
  box-shadow: 0 5px 10px gray;
  z-index: 10;
`;

export const sectionStyle = css`
  flex: 1;
  display: flex;
`;

export const workspaceBtnStyle = css`
  width: 100px;
  height: 30px;
  border: 1px solid ${commonColor.representative};
  border-radius: 20px;
  background-color: transparent;
  color: ${commonColor.representative};
  transition: 0.2s;
  &:hover {
    width: 110px;
    background-color: ${commonColor.representative};
    color: white;
  }
`;
