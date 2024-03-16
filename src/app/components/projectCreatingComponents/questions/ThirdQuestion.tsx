"use client";
/** @jsxImportSource @emotion/react */

import { periodInputStyle } from "@/app/styleComponents/projectCreatingStyles/inputStyles";
import { questionStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import PreviousButton from "../buttons/PreviousButton";
import NextButton from "../buttons/NextButton";
import { RefObject, useRef } from "react";
import useProjectStore from "@/app/store/commonStore/useProjectStore";

const ThirdQuestion = () => {
  const startDateRef: RefObject<HTMLInputElement> = useRef(null);
  const endDateRef: RefObject<HTMLInputElement> = useRef(null);

  const { dynamicQuestionsContainer, addDynamicQuestions, setOrder } =
    useProjectStore();

  return (
    <>
      <h1 css={[questionStyle]}>프로젝트를 했던 수행기간을 선택해 주세요.</h1>
      <section
        css={[`display: flex; gap: 10px; align-items:center; height: 50px;`]}
      >
        <div css={[`display: flex; gap: 10px;`]}>
          <input
            autoFocus
            ref={startDateRef}
            type="date"
            css={[periodInputStyle]}
            defaultValue={dynamicQuestionsContainer[2]}
            onChange={() => addDynamicQuestions(startDateRef.current!.value, 2)}
          />
        </div>
        <p css={[`text-align: center; font-size: 1.3em;`]}>~</p>
        <div css={[`display: flex; gap: 10px;`]}>
          <input
            ref={endDateRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setOrder(1);
              }
            }}
            type="date"
            css={[periodInputStyle]}
            defaultValue={dynamicQuestionsContainer[3]}
            onChange={() => addDynamicQuestions(endDateRef.current!.value, 3)}
          />
        </div>
      </section>
      <section css={[`display: flex; gap: 20px;`]}>
        <PreviousButton />
        <NextButton />
      </section>
    </>
  );
};

export default ThirdQuestion;
