"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import happinessMetaNotion from "/public/svg/happinessMetaNotion.svg";
import { flexCenterX2 } from "@/app/styleComponents/commonStyles";

const mainArticleRightSidechildren = css`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const mainArticleRightSideText = css`
  margin-top: 19px;
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

const MainArticleRightHappiness = () => {
  return (
    <>
      <div css={mainArticleRightSidechildren}>
        <p css={mainArticleRightSideText}>🍀행복메타</p>
        <div css={happinessMetaNotionClick}>노션 바로가기</div>
        <Image src={happinessMetaNotion} alt="happinessMetaNotion"></Image>
      </div>
    </>
  );
};

export default MainArticleRightHappiness;
