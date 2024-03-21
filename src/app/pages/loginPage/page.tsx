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
import { signInUpMainStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import HelloMessage from "@/app/components/loginPageComponents/HelloMessage";
import useLoginPageStore from "@/app/store/loginPageStore/useLoginPageStore";
import { useCookies } from "react-cookie";

const LoginPage = () => {
  const { isLogined } = useLoginPageStore();
  const [cookies] = useCookies(["token"]);
  console.log(cookies);
  return (
    <div css={[widthHeighVhFull, flexCenterX2]}>
      <main
        css={[
          signInUpMainStyle,
          flexCenterX2,
          `flex-direction: column; user-select: none;`,
        ]}
      >
        {isLogined ? <HelloMessage /> : undefined}
        <ProjectTitle />
        <LoginSection />
        <OAuthSection />
        <SignUpBtnSection />
      </main>
    </div>
  );
};

export default LoginPage;
