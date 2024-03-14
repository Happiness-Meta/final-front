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
          animation: ${fadeOut} 2s forwards;
        `,
      ]}
    >
      <h1>같이 프로젝트를 기록해 보아요!</h1>
    </div>
  );
};

export default WelcomeMessage;
