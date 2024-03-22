"use client";
/** @jsxImportSource @emotion/react */

import {
  flexCenterX2,
  widthHeighVhFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import LoginSection from "@/app/components/loginPageComponents/LoginSection";
import OAuthSection from "@/app/components/loginPageComponents/OAuthSection";
import ProjectTitle from "@/app/components/commonComponents/ProjectTitle";
import SignUpBtnSection from "@/app/components/loginPageComponents/SignUpBtnSection";
import HelloMessage from "@/app/components/loginPageComponents/HelloMessage";
import useLoginPageStore from "@/app/store/loginPageStore/useLoginPageStore";
import { mainStyle } from "@/app/styleComponents/loginPageStyles/loginPageStyles";

const LoginPage = () => {
  const { isLogined } = useLoginPageStore();
  return (
    <div css={[widthHeighVhFull, flexCenterX2]}>
      <main css={[mainStyle]}>
        {isLogined && <HelloMessage />}
        <ProjectTitle />
        <LoginSection />
        <OAuthSection />
        <SignUpBtnSection />
      </main>
    </div>
  );
};

export default LoginPage;
