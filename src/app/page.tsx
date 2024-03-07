"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { commonColor, flexCenterX2, widthHeightFull } from "./styleComponents/commonStyles";
import Image from "next/image";
import mainHomeImage from "/public/svg/finalproject-main.svg";
import searchIcon from "/public/svg/search.svg";
import products from "/public/svg/products.svg";
import sclocationicon from "/public/svg/sc-location-icon.svg";
import happinessMetaNotion from "/public/svg/happinessMetaNotion.svg";
import useHomePageStore from "./store/homePageStore/useHomePageStore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
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

const mainBodyFlex = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const mainArticleLeftSide = css`
  background: white;
  width: 263px;
`;

const happinessMetaNotionClick = css`
  ${flexCenterX2}
  position: relative;
  top: 200px;
  left: 48px;
  height: 40px;
  width: 100px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-top: -25px;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
`;

const mainArticleRightSidechildren = css`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const mainArticleRightSideText = css`
  margin-top: 19px;
`;

const mainArticleRightSideDiv = css`
  margin-top: 20px;
  width: 193px;
  height: 255px;
  background: #efefef;
  border-radius: 17px;
`;

const mainArticleRightSideDivProfile = css`
  width: 39px;
  height: 39px;
  background: black;
  border-radius: 50%;
`;

const mainArticleProfileContainer = css`
  display: flex;
  width: 160px;
  height: 60px;
  margin-top: 20px;
  margin-left: 15px;
`;

const mainArticleProfilenameAndImage = css`
  display: flex;
  img {
    width: 39px;
    height: 39px;
    background-color: #ffffff;
    border-radius: 50%;
  }
`;

const mainArticleNameAndDescription = css`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
`;

const profileName = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const profileDescription = css`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
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

const sliderContainer = css`
  height: 400px;
  width: 1135px;
`;

const boxShadowContainer = css`
  overflow: hidden;
  border-radius: 17px;
  display: inline-block;
  width: 345px;
  height: 204px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const wantedCssText = css`
  margin-bottom: 40px;
`;

function HomePage() {
  const { profiles, pictures } = useHomePageStore();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

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
          </article>
          <div css={wantedCss}>
            <div css={wantedCssText}>구인공고</div>
            <div css={sliderContainer}>
              <Slider {...settings}>
                {Object.entries(pictures).map(([key, pictures], index) => (
                  <div key={key}>
                    <div css={boxShadowContainer}>
                      <Image
                        src={pictures}
                        alt={`Picture ${index + 1}`}
                        width={345}
                        height={204}
                      ></Image>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div css={wantedCss}>
            <div css={wantedCssText}>구인공고</div>
            <div css={sliderContainer}>
              <Slider {...settings}>
                {Object.entries(pictures).map(([key, pictures], index) => (
                  <div key={key}>
                    <div css={boxShadowContainer}>
                      <Image
                        src={pictures}
                        alt={`Picture ${index + 1}`}
                        width={345}
                        height={204}
                      ></Image>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <article css={mainArticleRightSide}>
          <div css={mainArticleRightSidechildren}>
            <p css={mainArticleRightSideText}>🍀행복메타</p>
            <div css={happinessMetaNotionClick}>노션 바로가기</div>
            <Image src={happinessMetaNotion} alt="happinessMetaNotion"></Image>
          </div>
          <div css={mainArticleRightSidechildren}>
            <p css={mainArticleRightSideText}>🔥 트렌딩 페인터</p>
            <div css={mainArticleRightSideDiv}>
              {Object.entries(profiles).map(([key, profile]) => (
                <div key={key} css={mainArticleProfileContainer}>
                  <div css={mainArticleProfilenameAndImage}>
                    <Image src={profile.image} alt={profile.name}></Image>
                    <div css={mainArticleNameAndDescription}>
                      <div css={profileName}>{profile.name}</div>
                      <div css={profileDescription}>{profile.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div css={mainArticleRightSidechildren}>
              <p css={mainArticleRightSideText}>🎨 새로 가입한 페인터</p>
              <div css={mainArticleRightSideDiv}>
                {Object.entries(profiles).map(([key, profile]) => (
                  <div key={key} css={mainArticleProfileContainer}>
                    <div css={mainArticleProfilenameAndImage}>
                      <Image src={profile.image} alt={profile.name}></Image>
                      <div css={mainArticleNameAndDescription}>
                        <div css={profileName}>{profile.name}</div>
                        <div css={profileDescription}>{profile.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default HomePage;
