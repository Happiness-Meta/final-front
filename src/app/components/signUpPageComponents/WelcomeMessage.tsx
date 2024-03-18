"use client";
/** @jsxImportSource @emotion/react */

import {
  commonColor,
  flexCenterX2,
  widthHeighVhFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import {
  msgContainerStyle,
  msgTextStyle,
} from "@/app/styleComponents/commonStyles/signInUpMsgStyles";
import { css } from "@emotion/react";
import { useCookies } from "react-cookie";

const WelcomeMessage = () => {
  const [cookies] = useCookies(["nickname"]);

  return (
    <div css={[widthHeighVhFull, flexCenterX2, msgContainerStyle]}>
      <p css={[msgTextStyle]}>
        <span css={[`color: ${commonColor.representative}; font-size: 2em;`]}>
          Palette
        </span>{" "}
        에 오신 것을 환영합니다!
      </p>
    </div>
  );
};

export default WelcomeMessage;
