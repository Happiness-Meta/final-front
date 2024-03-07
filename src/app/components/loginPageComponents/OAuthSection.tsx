"use client";
/** @jsxImportSource @emotion/react */
import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import Kakao from "@/app/assets/svg/kakao.svg";
import Google from "@/app/assets/svg/google.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const oAuthIconStyle = {
  ...flexCenterX2,
  width: "40px",
  height: "40px",
  border: "1px solid #dedede",
  borderRadius: "50%",
  transition: ".3s",
};

const oAuthIconTransition = `
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 1px gray;
  }
`;

const OAuthSection = () => {
  return (
    <section
      css={[
        flexCenterX2,
        `flex-direction: column; width: 100%; height: 90px; margin-top: 50px;`,
      ]}
    >
      <div
        css={[
          `display: flex; justify-content: space-evenly; width: 90%; height: 45px`,
        ]}
      >
        <Link
          href={"/"}
          css={[
            oAuthIconStyle,
            `${oAuthIconTransition}; background-color: #ffe809`,
          ]}
        >
          <Image src={Kakao} alt="kakao" width={20} height={20} />
        </Link>
        <Link
          href={"/"}
          css={[
            oAuthIconStyle,
            `${oAuthIconTransition}; background-color: transparent`,
          ]}
        >
          <Image src={Google} alt="google" width={20} height={20} />
        </Link>
      </div>
      <p
        css={[
          `width: 90%; margin-top: 10px; text-align: center; font-size: 14px`,
        ]}
      >
        개인정보 보호를 위해 공용 PC에서 사용 시 SNS계정의 로그아웃 상태를 꼭
        확인해 주세요.
      </p>
    </section>
  );
};

export default OAuthSection;
