import { css } from "@emotion/react";
import { commonColor } from "../commonStyles/commonStyles";

export const searchedListStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 10px;
  padding-left: 30px;
  border-radius: 5px;
  &:hover {
    background-color: #ff8a001a;
  }
`;

export const stackInContainerStyle = css`
  position: relative;
  width: fit-content;
  padding: 1px 8px;
  border: 1px solid ${commonColor.representative};
  border-radius: 5px;
  background-color: #ff8a003b;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: 0.3s;
  &:hover {
    background-color: black;
  }
  &:hover::before {
    content: "삭제";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${commonColor.representative};
  }
`;
