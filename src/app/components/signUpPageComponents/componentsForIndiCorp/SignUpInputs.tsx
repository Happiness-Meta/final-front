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
import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";

const SignUpInputs: React.FC<AboutSignUpInputs> = ({
  handlePutInfo,
  nicknameCompanyPlaceHolder,
  textForGuide,
  pwRef,
  pwVerRef,
}) => {
  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);

  const { setGuideMessage } = useProjectTemplateStore();

  return (
    <>
      <input
        autoFocus
        autoComplete="off"
        onFocus={() => setGuideMessage("사용하실 이메일을 입력해 주세요.")}
        onChange={(e) => handlePutInfo("email", e.target.value)}
        type="email"
        placeholder="email"
        css={[signInUpinputStyle, signInUpInputStyleHover]}
      />
      <input
        autoComplete="off"
        onFocus={() => setGuideMessage(`${textForGuide}을 입력해 주세요.`)}
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
          onFocus={() => setGuideMessage("사용하실 비밀번호를 입력해 주세요.")}
          onChange={(e) => {
            handlePwVerCheck({ pwRef, pwVerRef, setPwCheckMessage });
            handlePutInfo("password", e.target.value);
          }}
          type={isPwVisible ? "text" : "password"}
          placeholder="password : 9자리 이상"
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
        onFocus={() => setGuideMessage("비밀번호을 한번 더 입력해 주세요.")}
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
