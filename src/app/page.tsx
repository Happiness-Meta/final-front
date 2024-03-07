"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import {
  commonColor,
  flexCenterX2,
} from "./styleComponents/commonStyles/commonStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSearchBar from "./components/homePageComponents/HomeSearchBar";
import HomeWanted from "./components/homePageComponents/HomeWanted";
import MainArticleRightHappiness from "./components/homePageComponents/MainArticleRightHappiness";
import TrendingPainter from "./components/homePageComponents/TrendingPainter";
import NewPainter from "./components/homePageComponents/NewPainter";

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

const buttonStyle = (backgroundColor: string, color: string) => css`
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

const homeTitleStyle = () => css`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #242424;
`;

const homeMenuStyle = () => css`
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

const homeButtonContainer = () => css`
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
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const titleAndMenuStylePalette = css`
  ${flexCenterX2};
  margin-left: 20px;
`;

const mainArticle = css`
  ${flexCenterX2};
  margin-top: 30px;
  flex: 1;
  flex-direction: column;
`;

const mainArticleRightSide = css`
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
`;

const mainBodyFlex = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const mainArticleLeftSide = css`
  background: white;
  width: 263px;
`;

const mainArticleMiddle = css`
  display: flex;
  flex-direction: column;
`;

const wantedCss = css`
  margin-top: 87px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  border-bottom: 1px solid #efefef;
  height: 40px;
  margin-bottom: 190px;
`;

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
          <Link href={"pages/loginPage"} css={buttonStyle("white", "black")}>
            로그인
          </Link>
          <Link
            href={"pages/signUpPage"}
            css={buttonStyle(commonColor.mainYellow, "white")}
          >
            회원가입
          </Link>
        </div>
      </header>

      <main css={mainBodyFlex}>
        <div css={mainArticleLeftSide}></div>
        <div css={mainArticleMiddle}>
          <article css={mainArticle}>
            <HomeSearchBar />
          </article>
          <div css={wantedCss}>
            <HomeWanted />
          </div>
          <div css={wantedCss}>
            <HomeWanted />
          </div>
        </div>
        <article css={mainArticleRightSide}>
          <MainArticleRightHappiness />
          <TrendingPainter />
          <NewPainter />
        </article>
      </main>
    </>
  );
}

export default HomePage;
