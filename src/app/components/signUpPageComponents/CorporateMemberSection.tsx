"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import { signInUpButtonStyle } from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import { RefObject, useEffect, useRef, useState } from "react";
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

const CorporateMemberSection = () => {
  const pwRef: RefObject<HTMLInputElement> = useRef(null);
  const pwVerRef: RefObject<HTMLInputElement> = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [infoForSignUp, setInfoForSignUp] = useState<AboutInfoForCorpSignUp>({
    email: "",
    name: "",
    password: "",
    address: "",
    phoneNumber: "",
    industry: "산업 분야",
  });

  const { email, name, password, address, phoneNumber, industry } =
    infoForSignUp;

  const handlePutInfo = (sort: string, value: string) => {
    setInfoForSignUp((prev) => ({
      ...prev,
      [sort]: value,
    }));
  };

  const { activateErrorMessageAni } = useSignUpPageStore();

  const handleCorporateSignUp = useMutation({
    mutationFn: async () => {
      if (email === "") {
        activateErrorMessageAni();
        return setErrorMessage("아이디를 입력해 주세요.");
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
      if (industry === "산업 분야") {
        activateErrorMessageAni();
        return setErrorMessage("산업분야을 선택해주세요");
      }
      const body: CorporateUserSignUpDTO = {
        email: email,
        name: name,
        password: password,
        address: address,
        phoneNumber: phoneNumber,
        industry: industry,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/company/register`,
        body
      );
      console.log(response);
    },
    onError: () => {
      console.log("onError");
    },
  });

  const companyPlaceHolder = "company name";

  return (
    <section
      css={[flexCenterX2, `flex-direction: column; row-gap: 5px; width: 90%`]}
    >
      <SignUpInputs
        handlePutInfo={handlePutInfo}
        nicknameCompanyPlaceHolder={companyPlaceHolder}
        pwRef={pwRef}
        pwVerRef={pwVerRef}
      />
      <AddressAndPhonNum handlePutInfo={handlePutInfo} />
      <PositionSpace
        handlePutInfo={handlePutInfo}
        positionList={industryList}
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
