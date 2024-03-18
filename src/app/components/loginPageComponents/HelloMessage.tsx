"use client";
/** @jsxImportSource @emotion/react */

import {
  flexCenterX2,
  widthHeighVhFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import {
  msgContainerStyle,
  msgTextStyle,
} from "@/app/styleComponents/commonStyles/signInUpMsgStyles";
import { useCookies } from "react-cookie";

const HelloMessage = () => {
  const [cookies] = useCookies(["nickname"]);

  return (
    <div css={[widthHeighVhFull, flexCenterX2, msgContainerStyle]}>
      <p css={[msgTextStyle]}>반가워요, {cookies.nickname} 님</p>
    </div>
  );
};

export default HelloMessage;
