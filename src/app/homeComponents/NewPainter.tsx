"use client";
/** @jsxImportSource @emotion/react */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import useHomePageStore from "../store/homePageStore/useHomePageStore";
import {
  mainArticleRightSidechildren,
  mainArticleRightSideText,
  mainArticleRightSideDiv,
  mainArticleProfileContainer,
  mainArticleProfilenameAndImage,
  mainArticleNameAndDescription,
  profileName,
  profileDescription,
} from "@/app/styleComponents/HomeRightSide";

const TrendingPainter = () => {
  const { profiles } = useHomePageStore();

  return (
    <>
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
    </>
  );
};

export default TrendingPainter;
