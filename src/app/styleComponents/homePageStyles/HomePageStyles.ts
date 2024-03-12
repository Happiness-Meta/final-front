import { css } from "@emotion/react";
import { flexCenterX2 } from "../commonStyles/commonStyles";

export const headerContainerStyle = css`
  margin-top: 20px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 10px 20px;
`;

export const buttonStyle = (backgroundColor: string, color: string) => css`
  ${flexCenterX2};
  width: 78px;
  height: 41px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  text-decoration: none;
  border: none;
  background-color: ${backgroundColor};
  color: ${color};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-right: 10px;
`;

export const homeTitleStyle = () => css`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #242424;
`;

export const homeMenuStyle = () => css`
  display: flex;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  justify-content: flex-start;
  margin-left: 80px;
  span {
    margin-right: 20px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 1023px) {
    font-size: 20px;
    margin-left: 40px;
    span {
      margin-right: 15px;
    }
  }

  @media (max-width: 767px) {
    font-size: 16px;
    margin-left: 20px;
    span {
      margin-right: 10px;
    }
  }
`;

export const homeButtonContainer = () => css`
  ${flexCenterX2};
  margin-left: 20px;
  button {
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const titleAndMenuStyle = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const titleAndMenuStylePalette = css`
  ${flexCenterX2};
  margin-left: 20px;
`;

export const mainArticle = css`
  ${flexCenterX2};
  margin-top: 30px;
  flex: 1;
  flex-direction: column;
`;

export const mainArticleRightSide = css`
  ${flexCenterX2};
  margin-left: 20px;
  margin-top: 10px;
  flex: 1 1 0px;
  max-width: 50%;
  width: 200px;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const mainBodyFlex = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const mainArticleLeftSide = css`
  background: white;
  width: 263px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const mainArticleMiddle = css`
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    align-items: center;
  }
`;

export const wantedCss = css`
  margin-top: 87px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  border-bottom: 1px solid #efefef;
  height: 40px;
  margin-bottom: 190px;
`;
