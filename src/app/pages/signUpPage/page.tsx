"use client";
/** @jsxImportSource @emotion/react */

import IndividualMemberSection from "@/app/pages/signUpPage/components/IndividualMemberSection";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles";
import { signInUpMainStyle } from "@/app/styleComponents/inputAndButtonAndText";
import React from "react";
import SignUpPathBtnSection from "./components/SignUpPathBtnSection";
import ProjectTitle from "@/app/commonComponents/ProjectTitle";
import CorporateMemberSection from "./components/CorporateMemberSection";
import LinkToLogin from "./components/LinkToLogin";

const SignUpPage = () => {
  const { isIndividual } = useSignUpPageStore();
  return (
    <div css={[flexCenterX2, widthHeightFull]}>
      <main
        css={[
          `
            display: flex;
            flex-direction: column;
            justify-content: start;
            width: 400px;
            height: 650px;
          `,
        ]}
      >
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
