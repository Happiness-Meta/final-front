"use client";
/** @jsxImportSource @emotion/react */

import VisibilityEyes from "@/app/components/commonComponents/VisibilityEyes";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import { signInUpButtonStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import React, { RefObject, useEffect, useRef, useState } from "react";
import SignUpErrorMessage from "../commonComponents/SignInUpErrorMessage";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useCookies } from "react-cookie";
import useLoginPageStore from "@/app/store/loginPageStore/useLoginPageStore";
import { useRouter } from "next/navigation";
import { inputStyles } from "@/app/styleComponents/loginPageStyles/loginPageStyles";
import { css } from "@emotion/react";

const LoginSection = () => {
  const router = useRouter();

  const [cookies, setCookie] = useCookies([
    "email",
    "nickname",
    "accessToken",
    "refreshToken",
  ]);

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
      const expiration = new Date(Date.now() + 1000 * 60 * 60 * 24);

      const body = {
        email: emailRef.current!.value,
        password: pwRef.current!.value,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        body
      );
      console.log(response.data.data.accessToken);

      setCookie("email", response.data.data.email, {
        path: "/",
        expires: expiration,
      });
      setCookie("nickname", response.data.data.name, {
        path: "/",
        expires: expiration,
      });
      setCookie("accessToken", response.data.data.accessToken, {
        path: "/",
        expires: expiration,
      });
      setCookie("refreshToken", response.data.data.refreshToken, {
        path: "/",
        expires: expiration,
      });

      setIsLogined(true);
      setTimeout(() => {
        router.push("/");
      }, 2500);
    },
    onError: (error: any) => {
      setErrorMessage(error.response?.data.message);
      activateErrorMessageAni();
    },
  });

  return (
    <section
      css={[
        flexCenterX2,
        css`
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
        css={[inputStyles.inputStyle1]}
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
          css={[inputStyles.inputStyle2]}
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
