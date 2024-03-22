"use client";
import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
/** @jsxImportSource @emotion/react */

import {
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/commonStyles/inputAndButtonAndText";
import { AboutInfoForCorpSignUp } from "@/app/types/aboutSignInUp";

interface AboutAddressAndPhoneNum {
  handlePutInfo: (sort: keyof AboutInfoForCorpSignUp, value: string) => void;
}

const AddressAndPhoneNum: React.FC<AboutAddressAndPhoneNum> = ({
  handlePutInfo,
}) => {
  const { setGuideMessage } = useProjectTemplateStore();

  return (
    <>
      <input
        autoComplete="off"
        onFocus={() => setGuideMessage("회사의 주소를 입력해 주세요.")}
        onChange={(e) => handlePutInfo("address", e.target.value)}
        type="text"
        placeholder="address"
        css={[signInUpinputStyle, signInUpInputStyleHover]}
      />
      <input
        autoComplete="off"
        onFocus={() => setGuideMessage("대표번호를 입력해 주세요.")}
        onChange={(e) => handlePutInfo("telephone", e.target.value)}
        type="number"
        placeholder="TEL : 000-0000-0000"
        css={[signInUpinputStyle, signInUpInputStyleHover]}
      />
    </>
  );
};

export default AddressAndPhoneNum;
