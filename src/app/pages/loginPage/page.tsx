"use client";
/** @jsxImportSource @emotion/react */
import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import LoginSection from "@/app/components/loginPageComponents/LoginSection";
import OAuthSection from "@/app/components/loginPageComponents/OAuthSection";
import ProjectTitle from "@/app/components/commonComponents/ProjectTitle";
import SignUpBtnSection from "@/app/components/loginPageComponents/SignUpBtnSection";
import { signInUpMainStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";

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
