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
import React, { RefObject, useEffect, useRef, useState } from "react";
import VisibilityEyes from "@/app/components/commonComponents/VisibilityEyes";
import { techStackList } from "@/app/constants/techStacks";
import TechStackSpace from "./TechStackSpace";
import SignUpInputs from "./SignUpInputs";

const IndividualMembetSection = () => {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const nicknameRef: RefObject<HTMLInputElement> = useRef(null);
  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);
  const positionRef: RefObject<HTMLSelectElement> = useRef(null);
  const searchTechStackRef: RefObject<HTMLInputElement> = useRef(null);

  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);
  const [isTechStacksVisible, setIsTechStacksVisible] = useState(false);
  const [searchedList, setSearchedList] = useState<string[]>([]);

  const handleIndividualSignUp = () => {
    console.log(positionRef.current?.value);
    if (emailRef.current?.value === "")
      return setErrorMessage("이메일을 입력해 주세요.");
    if (nicknameRef.current?.value === "")
      return setErrorMessage("닉네임을 입력해 주세요.");
    if (pwRef.current?.value === "")
      return setErrorMessage("비밀번호를 입력해주세요");
    if (pwRef.current?.value !== pwVerRef.current?.value)
      return setErrorMessage("위에서 비밀번호를 일치시켜주세요");
    if (
      positionRef.current?.value === "" ||
      positionRef.current?.value === "null"
    )
      return setErrorMessage("희망 포지션을 선택해주세요");
  };

  useEffect(() => {
    setSearchedList(techStackList);
  }, []);

  const nicknamePlaceHolder = "nickname";

  return (
    <section
      css={[
        flexCenterX2,
        `flex-direction: column; row-gap: 5px; user-select: none;`,
      ]}
    >
      <SignUpInputs
        emailRef={emailRef}
        nicknameCompanyRef={nicknameRef}
        nicknameCompanyPlaceHolder={nicknamePlaceHolder}
        pwRef={pwRef}
        pwVerRef={pwVerRef}
        isPwVisible={isPwVisible}
        setIsPwVisible={setIsPwVisible}
        pwCheckMessage={pwCheckMessage}
        setPwCheckMessage={setPwCheckMessage}
      />
      <select
        ref={positionRef}
        name="희망 포지션"
        css={[signInUpinputStyle, `height: 40px;`]}
      >
        <option value="null">희망 포지션</option>
        <option value="풀스택">풀스택</option>
        <option value="프론트엔드">프론트엔드</option>
        <option value="백엔드">백엔드</option>
        <option value="클라우드 아키텍트">클라우드 아키텍트</option>
        <option value="소프트웨어 엔지니어">소프트웨어 엔지니어</option>
      </select>
      <TechStackSpace
        searchTechStackRef={searchTechStackRef}
        techStackList={techStackList}
        setSearchedList={setSearchedList}
        isTechStacksVisible={isTechStacksVisible}
        setIsTechStacksVisible={setIsTechStacksVisible}
        searchedList={searchedList}
      />

      <p css={errorMessageStyle}>{errorMessage}</p>
      <button onClick={handleIndividualSignUp} css={signInUpButtonStyle}>
        회원가입
      </button>
    </section>
  );
};

export default IndividualMembetSection;
