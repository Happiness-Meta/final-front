"use client";
/** @jsxImportSource @emotion/react */
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import {
  oscillatingAni1,
  oscillatingAni2,
} from "@/app/styleComponents/commonStyles/keyframes";
import { css } from "@emotion/react";
import React from "react";

interface AboutSignUpErrorMessage {
  errorMessage: string;
}

const SignUpErrorMessage: React.FC<AboutSignUpErrorMessage> = ({
  errorMessage,
}) => {
  const { errorMessageAniStatus } = useSignUpPageStore();

  const errorMessageStyle = css`
    width: 90%;
    height: 17px;
    margin: 5px 0;
    color: red;
    font-size: 13px;
    font-weight: bold;
    animation: ${errorMessageAniStatus ? oscillatingAni1 : oscillatingAni2} 0.5s;
  `;

  return <p css={errorMessageStyle}>{errorMessage}</p>;
};

export default SignUpErrorMessage;
