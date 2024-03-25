import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import { css } from "@emotion/react";

export const pvSectionStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 60vw;
  min-width: 333px;
  height: fit-content;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 5px;
  margin: 15px 0;
  background-color: #ffffff99;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 0 0 10px gray;
  z-index: 1;
`;

export const eachSpaceStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const styleAboutLink = {
  linkContainerStyle: [
    flexCenterX2,
    css`
      gap: 10px;
      width: 100%;
      height: 50px;
      padding: 10px;
      border-radius: 5px;
      background-color: #e1e1e1;
    `,
  ],
  linkDescriptionStyle: [
    flexCenterX2,
    css`
      flex: 1;
      height: 100%;
      border-radius: 5px;
      background-color: white;
    `,
  ],
  linkStyle: [
    flexCenterX2,
    css`
      flex: 3;
      height: 100%;
      border-radius: 5px;
      background-color: white;
    `,
  ],
};
