"use client";
/** @jsxImportSource @emotion/react */

import { RefObject, useRef } from "react";
import PreviousButton from "../buttons/PreviousButton";
import { questionStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { projectNnDInputStyle } from "@/app/styleComponents/projectCreatingStyles/inputStyles";
import { nextButtonStyle } from "@/app/styleComponents/projectCreatingStyles/buttonStyles";
import { useRouter } from "next/navigation";

const FifthQuestion = () => {
  const router = useRouter();

  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const { dynamicQuestionsContainer, addDynamicQuestions, setOrder } =
    useProjectStore();

  const handleBtnOnClick = () => {
    setOrder(1);
    setTimeout(() => {
      router.push("/pages/projectCreating/projectTemplate");
    }, 2000);
    setTimeout(() => {
      setOrder(-1);
    }, 2500);
  };

  return (
    <>
      <h1 css={[questionStyle]}>프로젝트에 대해서 간단히 설명해 주세요.</h1>
      <input
        autoFocus
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleBtnOnClick();
          }
        }}
        type="text"
        defaultValue={dynamicQuestionsContainer[5]}
        onChange={() => addDynamicQuestions(inputRef.current!.value, 5)}
        css={[projectNnDInputStyle]}
      />
      <section css={[`display: flex; gap: 20px;`]}>
        <PreviousButton />
        <button onClick={handleBtnOnClick} css={[nextButtonStyle]}>
          기록 완성하러 가기 ▶
        </button>
      </section>
    </>
  );
};

export default FifthQuestion;
