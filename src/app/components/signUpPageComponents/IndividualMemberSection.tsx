"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import { signInUpButtonStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import { RefObject, useRef, useState } from "react";
import SignUpInputs from "./componentsForIndiCorp/SignUpInputs";
import TechStackSpace from "../commonComponents/TechStackSpace";
import { preferedPositionList } from "@/app/constants/industryOptions";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import SignUpErrorMessage from "../commonComponents/SignInUpErrorMessage";
import PositionSpace from "../commonComponents/PositionSpace";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { IndividualUserSignUpDTO } from "@/app/types/userDto";
import { AboutInfoForIndiSignUp } from "@/app/types/aboutSignInUp";

const IndividualMembetSection = () => {
  const router = useRouter();

  const [, setCookie] = useCookies([
    "email",
    "nickname",
    "accessToken",
    "refreshToken",
  ]);

  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);
  const searchTechStackRef: RefObject<HTMLInputElement> = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [infoForSignUp, setInfoForSignUp] = useState<AboutInfoForIndiSignUp>({
    email: "",
    name: "",
    password: "",
    position: "희망포지션",
  });

  const { techStackContainer, activateErrorMessageAni, setIsSignedUp } =
    useSignUpPageStore();

  const { email, name, password, position } = infoForSignUp;

  const handlePutInfo = (sort: string, value: string) => {
    setInfoForSignUp((prev) => ({
      ...prev,
      [sort]: value,
    }));
  };

  const handleIndividualSignUp = useMutation({
    mutationFn: async () => {
      if (email === "") {
        activateErrorMessageAni();
        return setErrorMessage("이메일을 입력해 주세요.");
      }
      if (!email.includes("@") || !email.includes(".")) {
        activateErrorMessageAni();
        return setErrorMessage("이메일 형식으로 입력해 주세요.");
      }
      if (name === "") {
        activateErrorMessageAni();
        return setErrorMessage("닉네임을 입력해 주세요.");
      }
      if (password === "") {
        activateErrorMessageAni();
        return setErrorMessage("비밀번호를 입력해주세요");
      }
      if (password.length < 8) {
        activateErrorMessageAni();
        return setErrorMessage("비밀번호를 9자리 이상 입력해주세요");
      }
      if (password !== pwVerRef.current?.value) {
        activateErrorMessageAni();
        return setErrorMessage("위에서 비밀번호를 일치시켜주세요");
      }
      if (position === "희망 포지션") {
        activateErrorMessageAni();
        return setErrorMessage("희망 포지션을 선택해주세요");
      }
      const body: IndividualUserSignUpDTO = {
        email: email, // =>email, 이라고 쓰면 email = email이라고 인식함
        nickname: name,
        password: password,
        preferedPosition: position,
        techStack: techStackContainer,
      };
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/basic/register`,
        body
      );
      const response2 = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        body
      );
      setCookie("email", response2.data.data.email);
      setCookie("nickname", response2.data.data.name);
      setCookie("accessToken", response2.data.data.accessToken);
      setCookie("refreshToken", response2.data.data.refreshToken);

      setIsSignedUp(true);
      setTimeout(() => {
        router.push("/");
      }, 2500);
    },
    onError: (error: any) => {
      setErrorMessage(error.response?.data.message);
      activateErrorMessageAni();
    },
  });

  const nicknamePlaceHolder = "nickname";
  const guideForNickname = "사용하실 닉네임";
  const guideForPosition = "희망하시는 포지션을";

  return (
    <section
      css={[
        flexCenterX2,
        `flex-direction: column; row-gap: 5px; width: 90%; user-select: none;`,
      ]}
    >
      <SignUpInputs
        handlePutInfo={handlePutInfo}
        nicknameCompanyPlaceHolder={nicknamePlaceHolder}
        textForGuide={guideForNickname}
        pwRef={pwRef}
        pwVerRef={pwVerRef}
      />
      <PositionSpace
        handlePutInfo={handlePutInfo}
        positionList={preferedPositionList}
        textForGuide={guideForPosition}
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
