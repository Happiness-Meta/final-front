"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useHomePageStore from "../../store/homePageStore/useHomePageStore";
import Image from "next/image";

const wantedCssText = css`
  margin-bottom: 40px;
`;

const sliderContainer = css`
  max-height: 400px;
  max-width: 1135px;
  width: 100%;
  margin: auto;
`;

const boxShadowContainer = css`
  overflow: hidden;
  border-radius: 17px;
  display: inline-block;
  width: 30vw;
  height: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 345px;
  max-height: 204px;
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
