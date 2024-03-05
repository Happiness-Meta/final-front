"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { commonColor, flexCenterX2, widthHeightFull } from "./styleComponents/commonStyles";
import Image from "next/image";
import mainHomeImage from "/public/finalproject-main.svg";
import searchIcon from "/public/search.svg";
import products from "/public/products.svg";
import sclocationicon from "/public/sc-location-icon.svg";

const headerContainerStyle = css`
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
`;

export const homeButtonContainer = () => css`
  ${flexCenterX2};
  margin-left: 20px;
  button {
    margin-left: 10px;
    cursor: pointer;
  }
`;

const titleAndMenuStyle = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap; // 필요 시 내용을 다음 줄로 감싸기
  justify-content: flex-start;
`;

const titleAndMenuStylePalette = css`
  ${flexCenterX2};
  margin-left: 20px;
`;

const mainArticle = css`
  ${flexCenterX2};
  margin-top: 30px;
`;

const searchBarAndSearchIcon = css`
  ${flexCenterX2}
  ${widthHeightFull}
  input {
    width: 93%;
    height: 100%;
    border-radius: 10px;
    border: none;
    padding-left: 20px;
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

const mainSearchBar = css`
  ${flexCenterX2}
  ${widthHeightFull}
  width: 969px;
  height: 95px;
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

const searchIconCss = css`
  ${flexCenterX2}
  position: relative;
`;

const searchInput = css``;

const searchButton = css``;

function HomePage() {
  return (
    <>
      <header css={headerContainerStyle}>
        <div css={titleAndMenuStyle}>
          <div css={titleAndMenuStylePalette}>
            <p css={homeTitleStyle}>Palette*</p>
          </div>
          <nav css={homeMenuStyle}>
            <span>MY커리어</span>
            <span>허브</span>
            <span>채용</span>
            <span>커뮤니티</span>
          </nav>
        </div>
        <div css={homeButtonContainer}>
          <button css={buttonStyle("white", "black")}>로그인</button>
          <button css={buttonStyle(commonColor.color.mainYellow, "white")}>회원가입</button>
        </div>
      </header>
      <article css={mainArticle}>
        <div css={mainSearchBar}>
          <div css={searchBarAndSearchIcon}>
            <Image src={searchIcon} alt="search-icon" css={searchIconCss}></Image>
            <input type="text" placeholder="회사/채용공고로 검색"></input>
            <div css={searchButton}>검색</div>
          </div>
          <div css={searchBarAndSearchIcon2}>
            <Image src={products} alt="product-icon" css={searchIconCss}></Image>

            <input type="text" placeholder="직군·직무" css={searchInput}></input>
            <Image src={sclocationicon} alt="sclocationicon-icon" css={searchIconCss}></Image>
            <input type="text" placeholder="경력·지역"></input>
          </div>
        </div>
        <Image src={mainHomeImage} alt="검색창 배경 이미지" />
      </article>
    </>
  );
}

export default HomePage;
