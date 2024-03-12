"use client";
/** @jsxImportSource @emotion/react */

import IndividualMemberSection from "@/app/components/signUpPageComponents/IndividualMemberSection";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import SignUpPathBtnSection from "../../components/signUpPageComponents/SignUpPathBtnSection";
import ProjectTitle from "@/app/components/commonComponents/ProjectTitle";
import CorporateMemberSection from "../../components/signUpPageComponents/CorporateMemberSection";
import LinkToLogin from "../../components/signUpPageComponents/LinkToLogin";

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
