"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import {
  errorMessageStyle,
  signInUpButtonStyle,
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import { handlePwVerCheck } from "@/app/hooks/signUpPageHooks/useHandlePwVerCheck";
import React, { RefObject, useRef, useState } from "react";
import VisibilityEyes from "@/app/components/commonComponents/VisibilityEyes";
import SignUpInputs from "./SignUpInputs";

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

  const companyPlaceHolder = "company name";

  return (
    <section css={[flexCenterX2, `flex-direction: column; row-gap: 5px `]}>
      <SignUpInputs
        emailRef={emailRef}
        nicknameCompanyRef={companyNameRef}
        nicknameCompanyPlaceHolder={companyPlaceHolder}
        pwRef={pwRef}
        pwVerRef={pwVerRef}
        isPwVisible={isPwVisible}
        setIsPwVisible={setIsPwVisible}
        pwCheckMessage={pwCheckMessage}
        setPwCheckMessage={setPwCheckMessage}
      />
      <p css={errorMessageStyle}>{errorMessage}</p>
      <button css={signInUpButtonStyle} onClick={handleCorporateSignUp}>
        회원가입
      </button>
    </section>
  );
};

export default CorporateMemberSection;
