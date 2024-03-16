"use client";
/** @jsxImportSource @emotion/react */

import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import { css, keyframes } from "@emotion/react";

const WelcomeMessage = () => {
  const fadeOut = keyframes`
    0%, 50% { opacity: 1;}
    100% { opacity:0; display:none;}
  `;

  const goneDown = keyframes`
  0%, 50%{ opacity:1; transform: translateY(0px);};
  100% { opacity:0; transform: translateY(20px);}
  `;

  return (
    <div
      css={[
        widthHeightFull,
        flexCenterX2,
        css`
          position: absolute;
          top: 0;
          left: 0;
          background-color: white;
          z-index: 10;
          animation: ${fadeOut} 3s forwards;
        `,
      ]}
    >
      <h1
        css={[
          css`
            animation: ${goneDown} 2s forwards;
          `,
        ]}
      >
        같이 프로젝트를 기록해 보아요!
      </h1>
    </div>
  );
};

export default WelcomeMessage;
