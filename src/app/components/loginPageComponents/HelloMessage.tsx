"use client";
/** @jsxImportSource @emotion/react */

import {
  flexCenterX2,
  widthHeighVhFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import { showUp } from "@/app/styleComponents/commonStyles/keyframes";
import { css } from "@emotion/react";
import { useCookies } from "react-cookie";

const HelloMessage = () => {
  const [cookies] = useCookies(["nickname"]);

  return (
    <div
      css={[
        widthHeighVhFull,
        flexCenterX2,
        css`
          position: absolute;
          top: 0;
          left: 0;
          background-color: white;
          z-index: 10;
        `,
      ]}
    >
      <p
        css={[
          css`
            font-size: 3em;
            font-weight: bold;
            animation: ${showUp} 1s;
          `,
        ]}
      >
        반가워요, {cookies.nickname} 님
      </p>
    </div>
  );
};

export default HelloMessage;
