"use client";
/** @jsxImportSource @emotion/react */

import { questionStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import PreviousButton from "../buttons/PreviousButton";
import NextButton from "../buttons/NextButton";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { RefObject, useRef } from "react";
import { personnelInputStyle } from "@/app/styleComponents/projectCreatingStyles/inputStyles";

const FourthQuestion = () => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const { dynamicQuestionsContainer, setDynamicQuestions, setOrder } =
    useProjectStore();

  return (
    <>
      <h1 css={[questionStyle]}>
        (자신포함) 프로젝트 수행인원이 어떻게 되시나요?
      </h1>
      <input
        autoFocus
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setOrder(1);
          }
        }}
        type="number"
        min={1}
        max={99}
        value={dynamicQuestionsContainer.personnel}
        onChange={() =>
          setDynamicQuestions("personnel", inputRef.current!.value)
        }
        css={[personnelInputStyle]}
      />

      <section css={[`display: flex; gap: 20px;`]}>
        <PreviousButton />
        <NextButton />
      </section>
    </>
  );
};

export default FourthQuestion;
