"use client";
import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
/** @jsxImportSource @emotion/react */

import {
  signInUpInputStyleHover,
  signInUpinputStyle,
} from "@/app/styleComponents/commonStyles/inputAndButtonAndText";

interface AboutAddressAndPhoneNum {
  handlePutInfo: (sort: string, value: string) => void;
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
        onChange={(e) => handlePutInfo("phoneNumber", e.target.value)}
        type="number"
        placeholder="phone number"
        css={[signInUpinputStyle, signInUpInputStyleHover]}
      />
    </>
  );
};

export default AddressAndPhoneNum;
