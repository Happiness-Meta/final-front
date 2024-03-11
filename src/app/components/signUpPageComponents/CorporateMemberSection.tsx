"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import { signInUpButtonStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import React, { RefObject, useRef, useState } from "react";
import SignUpInputs from "./imsComponents/SignUpInputs";
import { industryList } from "@/app/constants/industryOptions";
import SignUpErrorMessage from "../commonComponents/SignUpErrorMessage";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import PositionSpace from "../commonComponents/PositionSpace";

const CorporateMemberSection = () => {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const companyNameRef: RefObject<HTMLInputElement> = useRef(null);
  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);
  const industryRef: RefObject<HTMLSelectElement> = useRef(null);

  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);

  const { activateErrorMessageAni } = useSignUpPageStore();

  const handleCorporateSignUp = () => {
    activateErrorMessageAni();
    if (emailRef.current?.value === "")
      return setErrorMessage("아이디를 입력해 주세요.");
    if (companyNameRef.current?.value === "")
      return setErrorMessage("회사명을 입력해 주세요.");
    if (pwRef.current?.value === "")
      return setErrorMessage("비밀번호를 입력해주세요");
    if (pwRef.current?.value !== pwVerRef.current?.value)
      return setErrorMessage("위에서 비밀번호를 일치시켜주세요");
    if (industryRef.current?.value === "산업 분야")
      return setErrorMessage("산업분야을 선택해주세요");
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
      <PositionSpace positionRef={industryRef} positionList={industryList} />
      <SignUpErrorMessage errorMessage={errorMessage} />
      <button css={signInUpButtonStyle} onClick={handleCorporateSignUp}>
        회원가입
      </button>
    </section>
  );
};

export default CorporateMemberSection;
