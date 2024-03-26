"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import { signInUpButtonStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import { RefObject, useRef, useState } from "react";
import SignUpInputs from "./componentsForIndiCorp/SignUpInputs";
import { industryList } from "@/app/constants/industryOptions";
import SignUpErrorMessage from "../commonComponents/SignInUpErrorMessage";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import PositionSpace from "../commonComponents/PositionSpace";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { CorporateUserSignUpDTO } from "@/app/types/userDto";
import AddressAndPhonNum from "./componentsForIndiCorp/AddressAndPhoneNum";
import { AboutInfoForCorpSignUp } from "@/app/types/aboutSignInUp";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const CorporateMemberSection = () => {
  const router = useRouter();

  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [infoForSignUp, setInfoForSignUp] = useState<AboutInfoForCorpSignUp>({
    email: "",
    name: "",
    password: "",
    address: "",
    telephone: "",
    position: "산업 분야",
  });

  const { email, name, password, address, telephone, position } = infoForSignUp;

  const [, setCookie] = useCookies([
    "email",
    "nickname",
    "accessToken",
    "refreshToken",
  ]);

  const handlePutInfo = (sort: keyof AboutInfoForCorpSignUp, value: string) => {
    setInfoForSignUp((prev) => ({
      ...prev,
      [sort]: value,
    }));
  };

  const { activateErrorMessageAni, setIsSignedUp } = useSignUpPageStore();

  const handleCorporateSignUp = useMutation({
    mutationFn: async () => {
      if (email === "") {
        activateErrorMessageAni();
        return setErrorMessage("아이디를 입력해 주세요.");
      }
      if (!email.includes("@") || !email.includes(".")) {
        activateErrorMessageAni();
        return setErrorMessage("이메일 형식으로 입력해 주세요.");
      }
      if (name === "") {
        activateErrorMessageAni();
        return setErrorMessage("회사명을 입력해 주세요.");
      }
      if (password === "") {
        activateErrorMessageAni();
        return setErrorMessage("비밀번호를 입력해주세요");
      }
      if (pwRef.current?.value !== pwVerRef.current?.value) {
        activateErrorMessageAni();
        return setErrorMessage("위에서 비밀번호를 일치시켜주세요");
      }
      if (position === "산업 분야") {
        activateErrorMessageAni();
        return setErrorMessage("산업분야을 선택해주세요");
      }
      const body: CorporateUserSignUpDTO = {
        email: email,
        name: name,
        password: password,
        address: address,
        telephone: telephone,
        industry: position,
      };
      console.log(body);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/company/register`,
        body
      );
      console.log(response);
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

  const companyPlaceHolder = "company name";
  const guideForCompany = "회사명";
  const guideForIndustry = "산업 분야를";

  return (
    <section
      css={[flexCenterX2, `flex-direction: column; row-gap: 5px; width: 90%`]}
    >
      <SignUpInputs
        handlePutInfo={handlePutInfo}
        nicknameCompanyPlaceHolder={companyPlaceHolder}
        textForGuide={guideForCompany}
        pwRef={pwRef}
        pwVerRef={pwVerRef}
      />
      <AddressAndPhonNum handlePutInfo={handlePutInfo} />
      <PositionSpace
        handlePutInfo={handlePutInfo}
        positionList={industryList}
        textForGuide={guideForIndustry}
      />
      <SignUpErrorMessage errorMessage={errorMessage} />
      <button
        css={signInUpButtonStyle}
        onClick={() => handleCorporateSignUp.mutate()}
      >
        회원가입
      </button>
    </section>
  );
};

export default CorporateMemberSection;
