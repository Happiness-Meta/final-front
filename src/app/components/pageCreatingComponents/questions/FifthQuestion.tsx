"use client";
/** @jsxImportSource @emotion/react */

import React, { RefObject, useRef } from "react";
import PreviousButton from "../PreviousButton";
import { questionStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { projectNnDInputStyle } from "@/app/styleComponents/projectCreatingStyles/inputStyles";
import { nextButtonStyle } from "@/app/styleComponents/projectCreatingStyles/buttonStyles";

const FifthQuestion = () => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const { dynamicQuestionsContainer, addDynamicQuestions, addOrder } =
    useProjectStore();

  return (
    <>
      <h1 css={[questionStyle]}>프로젝트에 대해서 간단히 설명해 주세요.</h1>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        defaultValue={dynamicQuestionsContainer[5]}
        onChange={() => addDynamicQuestions(inputRef.current!.value, 5)}
        css={[projectNnDInputStyle]}
      />

      <section css={[`display: flex; gap: 20px;`]}>
        <PreviousButton />
        <button onClick={() => addOrder()} css={[nextButtonStyle]}>
          기록 완성하러 가기 ▶
        </button>
      </section>
    </>
  );
};

export default FifthQuestion;
