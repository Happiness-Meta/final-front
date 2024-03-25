"use client";
/** @jsxImportSource @emotion/react */

import Link from "next/link";
import React, { useEffect } from "react";
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
import {
  headerContainerStyle,
  homeButtonContainer,
  buttonStyle,
  mainBodyFlex,
  mainArticleLeftSide,
  mainArticleMiddle,
  mainArticle,
  wantedCss,
  mainArticleRightSide,
} from "./styleComponents/homePageStyles/HomePageStyles";
import ProjectMenu from "./components/commonComponents/Projectmenu";
import { useCookies } from "react-cookie";

function HomePage() {
  useEffect(() => console.log(cookies), []);
  const [cookies, , removeCookie] = useCookies([
    "email",
    "nickname",
    "accessToken",
    "refreshToken",
    "token",
  ]);
  const removeCookies = () => {
    removeCookie("email");
    removeCookie("nickname");
    removeCookie("accessToken");
    removeCookie("refreshToken");
    removeCookie("token");
    window.location.reload();
    console.log(cookies);
  };
  return (
    <>
      <header css={headerContainerStyle}>
        <ProjectMenu />
        <div css={homeButtonContainer}>
          {cookies.accessToken ? (
            <>
              <div
                css={buttonStyle("white", "black")}
                onClick={() => {
                  removeCookies();
                }}
              >
                로그아웃
              </div>
            </>
          ) : (
            <>
              <Link
                href={"pages/loginPage"}
                css={buttonStyle("white", "black")}
              >
                로그인
              </Link>
              <Link
                href={"pages/signUpPage"}
                css={buttonStyle(commonColor.mainYellow, "white")}
              >
                회원가입
              </Link>
            </>
          )}
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
