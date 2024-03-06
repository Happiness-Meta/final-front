"use client";
/** @jsxImportSource @emotion/react */

import IndividualMemberSection from "@/app/pages/signUpPage/components/IndividualMemberSection";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles";
import {
  errorMessageStyle,
  signInUpButtonStyle,
  signInUpInputStyleHover,
  signInUpMainStyle,
  signInUpinputStyle,
} from "@/app/styleComponents/inputAndButtonAndText";
import { css } from "@emotion/react";
import React from "react";
import SignUpPathBtnSection from "./components/SignUpPathBtnSection";
import ProjectTitle from "@/app/commonComponents/ProjectTitle";
import CorporateMemberSection from "./components/CorporateMemberSection";

const SignUpPage = () => {
  const { isIndividual } = useSignUpPageStore();
  return (
    <div css={[flexCenterX2, widthHeightFull]}>
      <main
        css={[
          signInUpMainStyle,
          css`
            display: flex;
            flex-direction: column;
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
      </main>
    </div>
  );
};

export default SignUpPage;
