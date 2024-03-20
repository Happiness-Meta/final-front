"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import { signInUpButtonStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import { RefObject, useRef, useState } from "react";
import SignUpInputs from "./componentsForBoth/SignUpInputs";
import TechStackSpace from "../commonComponents/TechStackSpace";
import { preferedPositionList } from "@/app/constants/industryOptions";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import SignUpErrorMessage from "../commonComponents/SignInUpErrorMessage";
import PositionSpace from "../commonComponents/PositionSpace";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const IndividualMembetSection = () => {
  const router = useRouter();

  const [, setCookie] = useCookies(["email", "nickname", "token"]);

  const emailRef: RefObject<HTMLInputElement> = useRef(null);
  const nicknameRef: RefObject<HTMLInputElement> = useRef(null);
  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);
  const positionRef: RefObject<HTMLSelectElement> = useRef(null);
  const searchTechStackRef: RefObject<HTMLInputElement> = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

  const { techStackContainer, activateErrorMessageAni, setIsSignedUp } =
    useSignUpPageStore();

  const handleIndividualSignUp = useMutation({
    mutationFn: async () => {
      if (emailRef.current?.value === "") {
        activateErrorMessageAni();
        return setErrorMessage("이메일을 입력해 주세요.");
      }
      if (!emailRef.current?.value.includes("@")) {
        activateErrorMessageAni();
        return setErrorMessage("이메일 형식으로 입력해 주세요.");
      }
      if (nicknameRef.current?.value === "") {
        activateErrorMessageAni();
        return setErrorMessage("닉네임을 입력해 주세요.");
      }
      if (pwRef.current?.value === "") {
        activateErrorMessageAni();
        return setErrorMessage("비밀번호를 입력해주세요");
      }
      if (pwRef.current!.value.length < 8) {
        activateErrorMessageAni();
        return setErrorMessage("비밀번호를 9자리 이상 입력해주세요");
      }
      if (pwRef.current?.value !== pwVerRef.current?.value) {
        activateErrorMessageAni();
        return setErrorMessage("위에서 비밀번호를 일치시켜주세요");
      }
      if (positionRef.current?.value === "희망 포지션") {
        activateErrorMessageAni();
        return setErrorMessage("희망 포지션을 선택해주세요");
      }
      const body = {
        email: emailRef.current?.value,
        nickname: nicknameRef.current?.value,
        password: pwRef.current?.value,
        position: positionRef.current?.value,
        techStacks: techStackContainer,
      };
      await axios.post(
        "http://processlogic.link/api/v1/auth/basic/register",
        body
      );
      const response2 = await axios.post(
        "http://processlogic.link/api/v1/auth/login",
        body
      );
      setCookie("email", response2.data.data.email);
      setCookie("nickname", response2.data.data.name);
      setCookie("token", response2.data.data.token);
      setIsSignedUp(true);
      setTimeout(() => {
        router.push("/");
      }, 2500);
    },
    onError: () => {
      console.log("onError");
    },
  });

  const nicknamePlaceHolder = "nickname";

  return (
    <section
      css={[
        flexCenterX2,
        `flex-direction: column; row-gap: 5px; width: 90%; user-select: none;`,
      ]}
    >
      <SignUpInputs
        emailRef={emailRef}
        nicknameCompanyRef={nicknameRef}
        nicknameCompanyPlaceHolder={nicknamePlaceHolder}
        pwRef={pwRef}
        pwVerRef={pwVerRef}
      />
      <PositionSpace
        positionRef={positionRef}
        positionList={preferedPositionList}
      />
      <TechStackSpace searchTechStackRef={searchTechStackRef} />
      <SignUpErrorMessage errorMessage={errorMessage} />
      <button
        onClick={() => handleIndividualSignUp.mutate()}
        css={signInUpButtonStyle}
      >
        회원가입
      </button>
    </section>
  );
};

export default IndividualMembetSection;
