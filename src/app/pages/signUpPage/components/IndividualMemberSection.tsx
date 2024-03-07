"use client";
/** @jsxImportSource @emotion/react */

import { commonColor, flexCenterX2 } from "@/app/styleComponents/commonStyles";
import {
  errorMessageStyle,
  signInUpButtonStyle,
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/inputAndButtonAndText";
import { handlePwVerCheck } from "@/app/utils/signInUpFuncs";
import Image from "next/image";
import search from "/public/svg/search.svg";
import React, { RefObject, useEffect, useRef, useState } from "react";
import VisibilityEyes from "@/app/commonComponents/VisibilityEyes";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";

const IndividualMembetSection = () => {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const nicknameRef: RefObject<HTMLInputElement> = useRef(null);
  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);
  const positionRef: RefObject<HTMLSelectElement> = useRef(null);
  const techStackRef: RefObject<HTMLInputElement> = useRef(null);

  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isTechStacksVisible, setIsTechStacksVisible] = useState(false);

  const { techStackContainer, addTechStack, removeTechStack } = useSignUpPageStore();

  const handleIndividualSignUp = () => {
    console.log(positionRef.current?.value);
    if (emailRef.current?.value === "") return setErrorMessage("이메일을 입력해 주세요.");
    if (nicknameRef.current?.value === "") return setErrorMessage("닉네임을 입력해 주세요.");
    if (pwRef.current?.value === "") return setErrorMessage("비밀번호를 입력해주세요");
    if (pwRef.current?.value !== pwVerRef.current?.value)
      return setErrorMessage("위에서 비밀번호를 일치시켜주세요");
    if (positionRef.current?.value === "" || positionRef.current?.value === "null")
      return setErrorMessage("희망 포지션을 선택해주세요");
  };

  const techStacks = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Nextjs",
    "Redux",
    "Zustand",
    "SCSS",
    "Emotion",
    "StyledComponent",
    "C",
    "C+",
    "C++",
    "C#",
    "Java",
    "Python",
    "Swift",
    "PHP",
    "Ruby",
    "Go",
  ];

  return (
    <section css={[flexCenterX2, `flex-direction: column; row-gap: 5px; user-select: none;`]}>
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
        placeholder="nickname"
        css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
      />
      <div css={[flexCenterX2, `position: relative; width: 100%`]}>
        <input
          ref={pwRef}
          type={isPwVisible ? "text" : "password"}
          placeholder="password"
          css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
        />
        <VisibilityEyes isPwVisible={isPwVisible} setIsPwVisible={setIsPwVisible} />
      </div>
      <input
        ref={pwVerRef}
        onChange={() => handlePwVerCheck({ pwRef, pwVerRef, setPwCheckMessage })}
        type={isPwVisible ? "text" : "password"}
        placeholder="verify password"
        css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
      />
      <p
        css={[
          errorMessageStyle,
          `margin: 0; color: ${
            pwCheckMessage === "✅ 비밀번호가 일치합니다." ? `#00bf00 !important` : ``
          }`,
        ]}
      >
        {pwCheckMessage}
      </p>
      <select ref={positionRef} name="희망 포지션" css={[signInUpinputStyle, `height: 40px;`]}>
        <option value="null">희망 포지션</option>
        <option value="풀스택">풀스택</option>
        <option value="프론트엔드">프론트엔드</option>
        <option value="백엔드">백엔드</option>
        <option value="클라우드 아키텍트">클라우드 아키텍트</option>
        <option value="소프트웨어 엔지니어">소프트웨어 엔지니어</option>
      </select>
      <div css={[flexCenterX2, `position: relative; width:100%;`]}>
        <Image
          src={search}
          alt="search"
          width={15}
          height={15}
          css={[`position: absolute; top:50%; left: 30px; transform: translateY(-50%);`]}
        />
        <input
          placeholder="기술 스택 : 최대 15개"
          onFocus={() => setIsTechStacksVisible(true)}
          onBlur={() => setTimeout(() => setIsTechStacksVisible(false), 200)}
          css={[signInUpinputStyle, `${signInUpInputStyleHover}; height: 40px; padding-left: 30px`]}
        />
        <div
          css={[
            `position: absolute; top: 102%;
            display: ${isTechStacksVisible ? `flex` : `none`};
            flex-direction: column;
            width: 90%; 
            min-height:30px; height: fit-content; max-height: 200px; 
            border: 1px solid gray; border-radius: 7px; 
            background-color: white;
            overflow-y: scroll;
            z-index:1;`,
          ]}
        >
          {techStacks.map((tech, index) => {
            return (
              <div
                key={index}
                onClick={() => addTechStack(tech)}
                css={[
                  `display: flex;
                  align-items: center;
                  width: 100%; 
                  height: 30px; 
                  padding: 10px;
                  padding-left: 25px;
                  border-radius: 5px;
                  &:hover{background-color: #ff8a001a;};`,
                ]}
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
      <div
        css={[
          signInUpinputStyle,
          `${signInUpInputStyleHover}; 
          display:flex; align-items: center; gap: 3px;
          height: 35px; padding-left: 3px; overflow-x: scroll;`,
        ]}
      >
        {techStackContainer.map((tech, index) => {
          return (
            <div
              key={index}
              onClick={() => removeTechStack(tech)}
              css={[
                `
                position: relative;
                width: fit-content; 
                padding: 1px 8px; 
                border: 1px solid ${commonColor.representative};
                border-radius: 5px;
                background-color: #ff8a003b;
                font-size: 14px;
                font-weight: 500;
                white-space: nowrap;
                transition: .3s;
                &:hover {
                  background-color: black;
                }
                &:hover::before {
                  content: "삭제";
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  color: orange;
                }
                `,
              ]}
            >
              {tech}
            </div>
          );
        })}
      </div>

      <p css={errorMessageStyle}>{errorMessage}</p>
      <button onClick={handleIndividualSignUp} css={signInUpButtonStyle}>
        회원가입
      </button>
    </section>
  );
};

export default IndividualMembetSection;
