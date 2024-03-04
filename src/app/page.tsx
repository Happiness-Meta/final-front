"use client";
/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { commonColor, flexCenterX2 } from "./styleComponents/commonStyles";

//css 스타일 그냥 예시

export const linkButtonStyle = css`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(0 0 0 / 70%);
  color: white;
  text-decoration: none;
  transition: 0.2s;
  &: hover {
    background-color: black;
  }
`;

const emotionAni = keyframes`
0%,80% {
} 100% {
  color: black;
}`;

export default function Home() {
  return (
    <div
      css={[
        { backgroundColor: commonColor.color.pastelPink },
        `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 5px
      `,
      ]}
    >
      <p>The Final Project</p>

      <Link href={"/pages/loginPage"} css={[flexCenterX2, linkButtonStyle]}>
        LoginPage
      </Link>
      <Link href={"/pages/myPage"} css={[flexCenterX2, linkButtonStyle]}>
        MyPage
      </Link>
      <p>
        This is styled by{" "}
        <span
          css={css`
            color: hotpink;
            animation: ${emotionAni} 0.5s infinite alternate;
          `}
        >
          Emotion
        </span>
      </p>
    </div>
  );
}
