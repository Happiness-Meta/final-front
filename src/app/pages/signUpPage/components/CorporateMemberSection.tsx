"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles";
import {
  errorMessageStyle,
  signInUpButtonStyle,
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/inputAndButtonAndText";
import { handlePwVerCheck } from "@/app/utils/signInUpFuncs";
import React, { RefObject, useRef, useState } from "react";

const CorporateMemberSection = () => {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const nicknameRef: RefObject<HTMLInputElement> = useRef(null);
  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);

  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCorSignUp = () => {
    if (emailRef.current?.value === "") {
      return setErrorMessage("아이디를 입력해주세요.");
    }
  };

  return (
    <section css={[flexCenterX2, `flex-direction: column; row-gap: 5px `]}>
      <input
        autoFocus
        ref={emailRef}
        type="text"
        placeholder="email"
        css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
      />
      <input
        ref={nicknameRef}
        type="text"
        placeholder="company name"
        css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
      />
      <input
        ref={pwRef}
        type="password"
        placeholder="password"
        css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
      />
      <input
        ref={pwVerRef}
        onChange={() =>
          handlePwVerCheck({ pwRef, pwVerRef, setPwCheckMessage })
        }
        type="password"
        placeholder="verify password"
        css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
      />
      <p
        css={[
          errorMessageStyle,
          `margin: 0; color: ${
            pwCheckMessage === "✅ 비밀번호가 일치합니다."
              ? `#00bf00 !important`
              : ``
          }`,
        ]}
      >
        {pwCheckMessage}
      </p>
      <p css={errorMessageStyle}>{errorMessage}</p>
      <button css={signInUpButtonStyle} onClick={handleCorSignUp}>
        회원가입
      </button>
    </section>
  );
};

export default CorporateMemberSection;
