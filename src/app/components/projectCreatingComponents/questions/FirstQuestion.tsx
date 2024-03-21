"use client";
/** @jsxImportSource @emotion/react */

import { projectNnDInputStyle } from "@/app/styleComponents/projectCreatingStyles/inputStyles";
import { questionStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import NextButton from "../buttons/NextButton";
import { RefObject, useRef } from "react";
import useProjectStore from "@/app/store/commonStore/useProjectStore";

const FirstQuestion = () => {
  const { dynamicQuestionsContainer, setDynamicQuestions, setOrder } =
    useProjectStore();

  return (
    <>
      <h1 css={[questionStyle]}>프로젝트의 이름이 무엇입니까?</h1>
      <input
        autoFocus
        onChange={(e) => setDynamicQuestions("name", e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setOrder(1);
          }
        }}
        value={dynamicQuestionsContainer.name}
        css={[projectNnDInputStyle]}
      />
      <NextButton />
    </>
  );
};

export default FirstQuestion;
