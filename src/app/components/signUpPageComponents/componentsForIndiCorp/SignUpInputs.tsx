"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import {
  errorMessageStyle,
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import VisibilityEyes from "../../commonComponents/VisibilityEyes";
import { handlePwVerCheck } from "@/app/hooks/signUpPageHooks/useHandlePwVerCheck";
import { AboutSignUpInputs } from "@/app/types/aboutSignInUp";
import { useState } from "react";

const SignUpInputs: React.FC<AboutSignUpInputs> = ({
  handlePutInfo,
  nicknameCompanyPlaceHolder,
  pwRef,
  pwVerRef,
}) => {
  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);

  return (
    <>
      <input
        autoFocus
        autoComplete="off"
        onChange={(e) => handlePutInfo("email", e.target.value)}
        type="email"
        placeholder="email"
        css={[signInUpinputStyle, signInUpInputStyleHover]}
      />
      <input
        autoComplete="off"
        onChange={(e) => handlePutInfo("name", e.target.value)}
        type="text"
        placeholder={nicknameCompanyPlaceHolder}
        css={[signInUpinputStyle, signInUpInputStyleHover]}
      />
      <div css={[flexCenterX2, `position: relative; width: 100%`]}>
        <input
          autoComplete="off"
          ref={pwRef}
          name="pw"
          onChange={(e) => {
            handlePwVerCheck({ pwRef, pwVerRef, setPwCheckMessage });
            handlePutInfo("password", e.target.value);
          }}
          type={isPwVisible ? "text" : "password"}
          placeholder="password : 9자 이상"
          css={[signInUpinputStyle, signInUpInputStyleHover]}
        />
        <VisibilityEyes
          isPwVisible={isPwVisible}
          setIsPwVisible={setIsPwVisible}
        />
      </div>
      <input
        autoComplete="off"
        ref={pwVerRef}
        onChange={() =>
          handlePwVerCheck({ pwRef, pwVerRef, setPwCheckMessage })
        }
        type={isPwVisible ? "text" : "password"}
        placeholder="verify password"
        css={[signInUpinputStyle, signInUpInputStyleHover]}
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
    </>
  );
};

export default SignUpInputs;
