"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useHomePageStore from "../store/homePageStore/useHomePageStore";
import Image from "next/image";

const wantedCssText = css`
  margin-bottom: 40px;
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

const HomeWanted = () => {
  const { pictures } = useHomePageStore();

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
      <div css={wantedCssText}>구인공고</div>
      <div css={sliderContainer}>
        <Slider {...settings}>
          {Object.entries(pictures).map(([key, pictures], index) => (
            <div key={key}>
              <div css={boxShadowContainer}>
                <Image src={pictures} alt={`Picture ${index + 1}`} width={345} height={204}></Image>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomeWanted;
