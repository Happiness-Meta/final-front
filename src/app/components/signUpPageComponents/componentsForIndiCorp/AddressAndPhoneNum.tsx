"use client";
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
  return (
    <>
      <input
        autoComplete="off"
        onChange={(e) => handlePutInfo("address", e.target.value)}
        type="text"
        placeholder="address"
        css={[signInUpinputStyle, signInUpInputStyleHover]}
      />
      <input
        autoComplete="off"
        onChange={(e) => handlePutInfo("phoneNumber", e.target.value)}
        type="number"
        placeholder="phone number"
        css={[signInUpinputStyle, signInUpInputStyleHover]}
      />
    </>
  );
};

export default AddressAndPhoneNum;
