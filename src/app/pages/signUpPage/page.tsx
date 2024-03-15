"use client";
/** @jsxImportSource @emotion/react */

import IndividualMemberSection from "@/app/components/signUpPageComponents/IndividualMemberSection";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import {
  flexCenterX2,
  widthHeighVhFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import SignUpPathBtnSection from "../../components/signUpPageComponents/SignUpPathBtnSection";
import ProjectTitle from "@/app/components/commonComponents/ProjectTitle";
import CorporateMemberSection from "../../components/signUpPageComponents/CorporateMemberSection";
import LinkToLogin from "../../components/signUpPageComponents/LinkToLogin";
import WelcomeMessage from "@/app/components/signUpPageComponents/WelcomeMessage";
import { mainStyle } from "@/app/styleComponents/signUpPageStyles/signUpPageStyles";

const SignUpPage = () => {
  const { isIndividual, isSignedUp } = useSignUpPageStore();

  return (
    <div css={[flexCenterX2, widthHeighVhFull]}>
      <main css={mainStyle}>
        {isSignedUp ? <WelcomeMessage /> : undefined}
        <ProjectTitle />
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
