"use client";
/** @jsxImportSource @emotion/react */

import { questionStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import PreviousButton from "../buttons/PreviousButton";
import NextButton from "../buttons/NextButton";
import { RefObject, useRef } from "react";
import ProjectColoringSpace from "../../commonComponents/ProjectColoringSpace";

const SecondQuestion = () => {
  const paintColorRef: RefObject<HTMLButtonElement> = useRef(null);

  return (
    <>
      <h1 css={[questionStyle]}>프로젝트에 어울리는 색을 골라주세요.</h1>
      <ProjectColoringSpace paintColorRef={paintColorRef} />
      <section css={[`display: flex; gap: 20px;`]}>
        <PreviousButton />
        <NextButton />
      </section>
    </>
  );
};

export default SecondQuestion;
