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
import Image from "next/image";
import React, { RefObject, useRef, useState } from "react";
import visibility from "/public/svg/visibility.svg";
import visibility_off from "/public/svg/visibility_off.svg";
import VisibilityEyes from "@/app/commonComponents/VisibilityEyes";

const CorporateMemberSection = () => {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const companyNameRef: RefObject<HTMLInputElement> = useRef(null);
  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);

  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);

  const handleCorporateSignUp = () => {
    if (emailRef.current?.value === "")
      return setErrorMessage("아이디를 입력해 주세요.");
    if (companyNameRef.current?.value === "")
      return setErrorMessage("회사명을 입력해 주세요.");
    if (pwRef.current?.value === "")
      return setErrorMessage("비밀번호를 입력해주세요");
    if (pwRef.current?.value !== pwVerRef.current?.value)
      return setErrorMessage("위에서 비밀번호를 일치시켜주세요");
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
        ref={companyNameRef}
        type="text"
        placeholder="company name"
        css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
      />
      <div css={[flexCenterX2, `position: relative; width: 100%`]}>
        <input
          ref={pwRef}
          type={isPwVisible ? "text" : "password"}
          placeholder="password"
          css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
        />
        <VisibilityEyes
          isPwVisible={isPwVisible}
          setIsPwVisible={setIsPwVisible}
        />
      </div>
      <input
        ref={pwVerRef}
        onChange={() =>
          handlePwVerCheck({ pwRef, pwVerRef, setPwCheckMessage })
        }
        type={isPwVisible ? "text" : "password"}
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
      <button css={signInUpButtonStyle} onClick={handleCorporateSignUp}>
        회원가입
      </button>
    </section>
  );
};

export default CorporateMemberSection;
