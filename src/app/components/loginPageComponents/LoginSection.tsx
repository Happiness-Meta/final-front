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
import SignUpErrorMessage from "../commonComponents/SignInUpErrorMessage";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useCookies } from "react-cookie";
import useLoginPageStore from "@/app/store/loginPageStore/useLoginPageStore";
import { useRouter } from "next/navigation";

const LoginSection = () => {
  const router = useRouter();

  const [, setCookie] = useCookies(["email", "nickname", "token"]);

  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const pwRef: RefObject<HTMLInputElement> = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);

  const { activateErrorMessageAni } = useSignUpPageStore();
  const { setIsLogined } = useLoginPageStore();

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

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        body
      );
      console.log(response.data.data.token);
      setCookie("email", response.data.data.email);
      setCookie("nickname", response.data.data.name);
      setCookie("token", response.data.data.token);
      setIsLogined(true);
      setTimeout(() => {
        router.push("/");
      }, 2500);
    },
    onError: () => console.log("you have failed to login"),
  });

  return (
    <section
      css={[
        flexCenterX2,
        `
        flex-direction: column; 
        width: 90%;
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin.mutate();
            }
          }}
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
