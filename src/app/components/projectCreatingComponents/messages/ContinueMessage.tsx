"use client";
/** @jsxImportSource @emotion/react */

import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import { css, keyframes } from "@emotion/react";

const ContinueMessage = () => {
  const fadeOut = keyframes`
    0%, 70% { opacity:1 }
    100% { opacity:0; display: none; }
  `;

  const showUp = keyframes`
  0%{ opacity:0; transform: translateY(10px);}
  30%,60%{ opacity:1; transform: translateY(0px);}
  100%{ opacity:0; transform: translateY(-10px);}
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
          // animation: ${fadeOut} 3s forwards;
        `,
      ]}
    >
      <h1
        css={css`
          animation: ${showUp} 2s forwards;
        `}
      >
        이제 나머지들을 채워봅시다!
      </h1>
    </div>
  );
};

export default ContinueMessage;
