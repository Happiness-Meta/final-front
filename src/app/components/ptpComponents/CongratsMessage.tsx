"use client";
/** @jsxImportSource @emotion/react */

import useProjectStore from "@/app/store/commonStore/useProjectStore";
import {
  flexCenterX2,
  widthHeighVhFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import {
  msgSectionStyle,
  msgTextStyle,
  paperLineStyle,
  paperStyle,
} from "@/app/styleComponents/projectTemplateStyles/congratsMessageStyle";

const CongratsMessage = () => {
  const { dynamicQuestionsContainer } = useProjectStore();

  return (
    <section css={[widthHeighVhFull, flexCenterX2, msgSectionStyle]}>
      <div
        css={[
          paperStyle,
          `border-color:${dynamicQuestionsContainer.color}; background-color: white;`,
        ]}
      >
        <div css={[paperLineStyle, `width: 50px; margin-bottom: 8px;`]}></div>
        <div css={[paperLineStyle, `width: 90px;`]}></div>
        <div css={[paperLineStyle, `width: 60px;`]}></div>
        <div css={[paperLineStyle, `width: 70px;`]}></div>
        <div css={[paperLineStyle, `width: 90px;`]}></div>
        <div css={[paperLineStyle, `width: 60px;`]}></div>
        <div css={[paperLineStyle, `width: 40px;`]}></div>
        <div css={[paperLineStyle, `width: 70px;`]}></div>
        <div css={[paperLineStyle, `width: 90px;`]}></div>
        <div css={[paperLineStyle, `width: 80px;`]}></div>
        <div css={[paperLineStyle, `width: 80px;`]}></div>
        <div css={[paperLineStyle, `width: 70px;`]}></div>
        <div css={[paperLineStyle, `width: 60px;`]}></div>
      </div>
      <p css={[msgTextStyle]}>프로젝트 기록 완성을 축하드려요!</p>
    </section>
  );
};

export default CongratsMessage;
