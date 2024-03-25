"use client";
/** @jsxImportSource @emotion/react */

import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import {
  headerSectionStyle,
  pathStyles,
} from "@/app/styleComponents/signUpPageStyles/signUpPageStyles";
import { css } from "@emotion/react";

const SignUpPathBtnSection = () => {
  const { isIndividual, setIsIndividual } = useSignUpPageStore();

  return (
    <section
      css={[
        flexCenterX2,
        css`
          width: 100%;
          height: 40px;
          margin-bottom: 20px;
        `,
      ]}
    >
      <div
        onClick={() => setIsIndividual(true)}
        css={[
          flexCenterX2,
          headerSectionStyle,
          isIndividual ? pathStyles.style1 : pathStyles.style2,
        ]}
      >
        개인회원
      </div>
      <div
        onClick={() => setIsIndividual(false)}
        css={[
          flexCenterX2,
          headerSectionStyle,
          isIndividual ? pathStyles.style2 : pathStyles.style1,
        ]}
      >
        법인회원
      </div>
    </section>
  );
};

export default SignUpPathBtnSection;
