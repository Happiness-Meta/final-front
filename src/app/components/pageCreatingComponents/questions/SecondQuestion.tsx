"use client";
/** @jsxImportSource @emotion/react */

import {
  paintStyle,
  questionStyle,
} from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import PreviousButton from "../PreviousButton";
import NextButton from "../NextButton";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { RefObject, useRef } from "react";
import { paintColors } from "@/app/constants/paintColors";

const SecondQuestion = () => {
  const paintColorRef: RefObject<HTMLDivElement> = useRef(null);
  const { addDynamicQuestions, clickedColor, setClickedColor } =
    useProjectStore();

  return (
    <>
      <h1 css={[questionStyle]}>프로젝트에 어울리는 색을 골라주세요.</h1>
      <div
        css={[
          `display: flex; justify-content: center; align-items: center; gap: 50px;
          width: 100%; 
          height: 50px; 
          `,
        ]}
      >
        {paintColors.map((color, index) => {
          return (
            <div
              ref={paintColorRef}
              key={index}
              onClick={() => {
                addDynamicQuestions(color, 1);
                setClickedColor(color);
              }}
              css={[
                paintStyle,
                `background-color: ${color}; 
                border: ${clickedColor === color && `3px solid #FF8A00`}`,
              ]}
            ></div>
          );
        })}
      </div>
      <section css={[`display: flex; gap: 20px;`]}>
        <PreviousButton />
        <NextButton />
      </section>
    </>
  );
};

export default SecondQuestion;
