"use client";
/** @jsxImportSource @emotion/react */

import IndividualMemberSection from "@/app/components/signUpPageComponents/IndividualMemberSection";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import {
  flexCenterX2,
  widthHeighVhFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import SignUpPathBtnSection from "../../components/signUpPageComponents/SignUpPathBtnSection";
import CorporateMemberSection from "../../components/signUpPageComponents/CorporateMemberSection";
import LinkToLogin from "../../components/signUpPageComponents/LinkToLogin";
import WelcomeMessage from "@/app/components/signUpPageComponents/WelcomeMessage";
import {
  headerContainerStyle,
  mainStyle,
} from "@/app/styleComponents/signUpPageStyles/signUpPageStyles";
import HeaderNo1 from "@/app/components/commonComponents/HeaderNo1";

const SignUpPage = () => {
  const { isIndividual, isSignedUp } = useSignUpPageStore();

  return (
    <div css={[flexCenterX2, widthHeighVhFull]}>
      <main css={mainStyle}>
        {isSignedUp && <WelcomeMessage />}
        <section css={headerContainerStyle}>
          <HeaderNo1 />
        </section>
        <SignUpPathBtnSection />
        {isIndividual ? (
          <IndividualMemberSection />
        ) : (
          <CorporateMemberSection />
        )}
        <LinkToLogin />
      </main>
    </div>
  );
};

export default SignUpPage;
