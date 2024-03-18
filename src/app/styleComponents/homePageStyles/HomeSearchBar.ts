import { css } from "@emotion/react";
import { flexCenterX2, widthHeightFull } from "../commonStyles/commonStyles";

export const mainSearchBar = css`
  ${flexCenterX2}
  ${widthHeightFull}
  max-width: 1025px;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  position: absolute;
  border-radius: 10px;
  flex-direction: column;

  input:focus {
    outline: none;
  }
`;

export const searchBarAndSearchIcon = css`
  ${flexCenterX2}
  ${widthHeightFull}
  input {
    width: 92%;
    height: 100%;
    border-radius: 10px;
    border: none;
    padding-left: 18px;
  }
`;

export const searchBarAndSearchIcon2 = css`
  ${flexCenterX2}
  width: 100%;
  height: 100%;
  padding: 10px;
  input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
    padding-left: 20px;
    background-color: #ffffff;
    display: flex;
    color: #757575;
  }
`;

export const searchIconCss = css`
  ${flexCenterX2}
  position: relative;
`;

export const searchButton = css`
  ${flexCenterX2}
  background-color: #353a40;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 12px;
`;

export const jobListUl = () => css`
  z-index: 2;
  position: absolute;
  top: 90px;
  left: 1vw;
  border-radius: 10px;
  width: 336.5px;
  height: 102px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    list-style: none;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const homeImageCss = css`
  max-width: 1200px;
  width: 100%;
  height: auto;
`;
