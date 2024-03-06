"use client";
/** @jsxImportSource @emotion/react */
import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles";
import React from "react";
import LoginSection from "./components/LoginSection";
import OAuthSection from "./components/OAuthSection";
import ProjectTitle from "@/app/commonComponents/ProjectTitle";
import SignUpBtnSection from "./components/SignUpBtnSection";
import { signInUpMainStyle } from "@/app/styleComponents/inputAndButtonAndText";

const LoginPage = () => {
  return (
    <div css={[widthHeightFull, flexCenterX2]}>
      <main
        css={[
          signInUpMainStyle,
          flexCenterX2,
          `flex-direction: column; user-select: none;`,
        ]}
      >
        <ProjectTitle />
        <LoginSection />
        <OAuthSection />
        <SignUpBtnSection />
      </main>
    </div>
  );
};

export default LoginPage;
