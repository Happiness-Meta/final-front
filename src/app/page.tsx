"use client";
/** @jsxImportSource @emotion/react */

import Link from "next/link";
import React from "react";
import { commonColor, flexCenterX2 } from "./styleComponents/commonStyles/commonStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSearchBar from "./components/homePageComponents/HomeSearchBar";
import HomeWanted from "./components/homePageComponents/HomeWanted";
import MainArticleRightHappiness from "./components/homePageComponents/MainArticleRightHappiness";
import TrendingPainter from "./components/homePageComponents/TrendingPainter";
import NewPainter from "./components/homePageComponents/NewPainter";
import {
  headerContainerStyle,
  titleAndMenuStyle,
  titleAndMenuStylePalette,
  homeTitleStyle,
  homeMenuStyle,
  homeButtonContainer,
  buttonStyle,
  mainBodyFlex,
  mainArticleLeftSide,
  mainArticleMiddle,
  mainArticle,
  wantedCss,
  mainArticleRightSide,
} from "./styleComponents/homePageStyles/HomePageStyles";

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
          <Link href={"pages/signUpPage"} css={buttonStyle(commonColor.mainYellow, "white")}>
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
