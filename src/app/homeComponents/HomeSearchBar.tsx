"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2, widthHeightFull } from "@/app/styleComponents/commonStyles";
import { css } from "@emotion/react";
import mainHomeImage from "/public/svg/finalproject-main.svg";
import searchIcon from "/public/svg/search.svg";
import products from "/public/svg/products.svg";
import sclocationicon from "/public/svg/sc-location-icon.svg";
import Image from "next/image";

const mainSearchBar = css`
  ${flexCenterX2}
  ${widthHeightFull}
  width: 1025px;
  height: 100px;
  background-color: #ffffff;
  position: absolute;
  border-radius: 10px;
  flex-direction: column;

  input:focus {
    outline: none;
  }
  input::placeholder {
  }
`;

const searchBarAndSearchIcon = css`
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

const searchBarAndSearchIcon2 = css`
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
  }
`;

const searchIconCss = css`
  ${flexCenterX2}
  position: relative;
`;

const searchButton = css`
  ${flexCenterX2}
  background-color: #353a40;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 12px;
`;

const HomeSearchBar = () => {
  return (
    <>
      <div css={mainSearchBar}>
        <div css={searchBarAndSearchIcon}>
          <Image src={searchIcon} alt="search-icon" css={searchIconCss}></Image>
          <input type="text" placeholder="회사/채용공고로 검색"></input>
          <div css={searchButton}>검색</div>
        </div>
        <div css={searchBarAndSearchIcon2}>
          <Image src={products} alt="product-icon" css={searchIconCss}></Image>

          <input type="text" placeholder="직군·직무"></input>
          <Image src={sclocationicon} alt="sclocationicon-icon" css={searchIconCss}></Image>
          <input type="text" placeholder="경력·지역"></input>
        </div>
      </div>
      <Image src={mainHomeImage} alt="검색창 배경 이미지" width={1200} height={300} />
    </>
  );
};

export default HomeSearchBar;
