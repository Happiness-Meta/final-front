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

const SignUpInputs: React.FC<AboutSignUpInputs> = ({
  emailRef,
  nicknameCompanyRef,
  nicknameCompanyPlaceHolder,
  pwRef,
  pwVerRef,
  isPwVisible,
  setIsPwVisible,
  pwCheckMessage,
  setPwCheckMessage,
}) => {
  return (
    <>
      <input
        autoFocus
        ref={emailRef}
        type="text"
        placeholder="email"
        css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
      />
      <input
        ref={nicknameCompanyRef}
        type="text"
        placeholder={nicknameCompanyPlaceHolder}
        css={[signInUpinputStyle, `${signInUpInputStyleHover}`]}
      />
      <div css={[flexCenterX2, `position: relative; width: 100%`]}>
        <input
          ref={pwRef}
          onChange={() =>
            handlePwVerCheck({ pwRef, pwVerRef, setPwCheckMessage })
          }
          type={isPwVisible ? "text" : "password"}
          placeholder="password : 9자 이상"
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
    </>
  );
};

export default SignUpInputs;
