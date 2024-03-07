"use client";
/** @jsxImportSource @emotion/react */
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import { flexCenterX2 } from "@/app/styleComponents/commonStyles";
import { css } from "@emotion/react";
import React from "react";

const SignUpPathBtnSection = () => {
  const { isIndividual, setIsIndividual } = useSignUpPageStore();

  const headerSectionStyle = {
    ...flexCenterX2,
    width: "50%",
    height: "100%",
    cursor: "pointer",
  };

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
          headerSectionStyle,
          `transition: .2s;
          cursor: pointer; ${
            isIndividual
              ? `border: 2px solid;
                  border-bottom: none;
                  border-radius:  10px 10px 0 0; color: orange; font-weight: bold;`
              : `border-bottom: 2px solid orange; color: gray; &:hover{ color: black; font-size: 16px}`
          }`,
        ]}
      >
        개인회원
      </div>
      <div
        onClick={() => setIsIndividual(false)}
        css={[
          headerSectionStyle,
          `transition: .2s;
          cursor: pointer; ${
            isIndividual
              ? `border-bottom: 2px solid orange; color: gray; &:hover{ color: black; font-size: 16px}`
              : `border: 2px solid;
                  border-bottom: none;
                  border-radius:  10px 10px 0 0; color: orange; font-weight: bold;`
          }`,
        ]}
      >
        법인회원
      </div>
    </section>
  );
};

export default SignUpPathBtnSection;
