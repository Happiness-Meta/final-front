"use client";
/** @jsxImportSource @emotion/react */

import VisibilityEyes from "@/app/components/commonComponents/VisibilityEyes";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import {
  signInUpButtonStyle,
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import React, { RefObject, useRef, useState } from "react";
import SignUpErrorMessage from "../commonComponents/SignUpErrorMessage";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { isErrored } from "stream";

const LoginSection = () => {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const pwRef: RefObject<HTMLInputElement> = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);

  const { activateErrorMessageAni } = useSignUpPageStore();

  const handleLogin = useMutation({
    mutationFn: async () => {
      if (emailRef.current!.value === "") {
        setErrorMessage("이메일를 입력해주세요.");
        activateErrorMessageAni();
        return;
      } else if (pwRef.current!.value === "") {
        setErrorMessage("비밀번호를 입력해주세요.");
        activateErrorMessageAni();
        return;
      }

      const body = {
        email: emailRef.current!.value,
        password: pwRef.current!.value,
      };

      const res = await axios.post(
        "http://processlogic.link/api/v1/auth/login",
        body
      );
    },
    onError: () => console.log("failed"),
  });

  return (
    <section
      css={[
        flexCenterX2,
        `
        flex-direction: column; 
        width: 100%;
        `,
      ]}
    >
      <input
        autoFocus
        ref={emailRef}
        type="text"
        placeholder="email"
        css={[
          signInUpinputStyle,
          `border-bottom-width: 0; 
          border-bottom-left-radius: 0; 
          border-bottom-right-radius: 0;
          &:focus{
            border-bottom-width: 1px;
          }
          ${signInUpInputStyleHover};`,
        ]}
      />
      <div css={[flexCenterX2, `position: relative; width: 100%`]}>
        <input
          ref={pwRef}
          type={isPwVisible ? "text" : "password"}
          placeholder="password"
          css={[
            signInUpinputStyle,
            ` border-top-width: 0; 
            border-top-left-radius: 0; 
            border-top-right-radius: 0;
            &:focus{
              border-top-width: 1px;
            }
            ${signInUpInputStyleHover};`,
          ]}
        />
        <VisibilityEyes
          isPwVisible={isPwVisible}
          setIsPwVisible={setIsPwVisible}
        />
      </div>
      <SignUpErrorMessage errorMessage={errorMessage} />
      <button
        onClick={() => {
          handleLogin.mutate();
        }}
        css={signInUpButtonStyle}
      >
        로그인
      </button>
    </section>
  );
};

export default LoginSection;
