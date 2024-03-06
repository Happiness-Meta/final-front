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

const IndividualMembetSection = () => {
  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const nicknameRef: RefObject<HTMLInputElement> = useRef(null);
  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);

  const [pwCheckMessage, setPwCheckMessage] = useState("");

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
        placeholder="nickname"
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
      <select name="희망 포지션" css={signInUpinputStyle}>
        <option value="null">희망 포지션</option>
        <option value="개발">개발</option>
        <option value="게임개발">게임개발</option>
        <option value="디자인">디자인</option>
        <option value="기획">기획</option>
        <option value="마케팅">마케팅</option>
      </select>
      <select name="기술스택" css={signInUpinputStyle}></select>
      <p css={errorMessageStyle}></p>
      <button css={signInUpButtonStyle}>회원가입</button>
    </section>
  );
};

export default IndividualMembetSection;
