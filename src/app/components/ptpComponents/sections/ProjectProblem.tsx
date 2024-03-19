"use client";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import { aniForImportant } from "@/app/styleComponents/commonStyles/keyframes";
import {
  addButtonStyle,
  inputContainerStyles,
  inputStyles,
  labelStyles,
  textareaStyle1,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { AboutProjectProblem } from "@/app/types/aboutProjectTemplate";
import { css } from "@emotion/react";
import { useState } from "react";

const ProjectProblem: React.FC<AboutProjectProblem> = ({
  pDefinitionRef,
  pReasonRef,
  pSolutionRef,
}) => {
  const { setGuideMessage } = useProjectTemplateStore();

  const [important, setImportant] = useState(false);

  return (
    <>
      <label
        htmlFor="problem"
        css={[
          labelStyles.style1,
          css`
            position: relative;
          `,
        ]}
      >
        문제 해결
        <p
          css={[
            css`
              position: absolute;
              bottom: 0;
              left: 80px;
              width: 0;
              margin-left: 5px;
              font-size: 0.5em;
              color: #ff4b00;
              overflow: hidden;
              animation: ${important ? aniForImportant : undefined} 1s forwards
                ease-out;
            `,
          ]}
        >
          *이 부분이 중요해요! 잘 써주세요.
        </p>
      </label>
      <hr />
      <div
        css={[
          inputContainerStyles.style3,
          css`
            flex-direction: column;
            height: fit-content;
          `,
        ]}
      >
        <label htmlFor="problem" css={labelStyles.style2}>
          문제 상황
        </label>
        <input
          ref={pDefinitionRef}
          onFocus={() => {
            setGuideMessage("문제 상황을 적어주세요.");
            setImportant(true);
          }}
          id="problem"
          type="text"
          css={inputStyles.style1}
        />
        <label htmlFor="reason" css={labelStyles.style2}>
          문제 이유
        </label>
        <textarea
          ref={pReasonRef}
          onFocus={() => setGuideMessage("이 문제가 왜 생겨났나요?")}
          id="reason"
          rows={3}
          css={textareaStyle1}
        />
        <label htmlFor="solution" css={labelStyles.style2}>
          해결
        </label>
        <textarea
          ref={pSolutionRef}
          onFocus={() => setGuideMessage("어떻게 해결했는지 적어주세요.")}
          id="solution"
          rows={3}
          css={textareaStyle1}
        />
      </div>
      <button css={[addButtonStyle]}>+</button>
    </>
  );
};

export default ProjectProblem;
