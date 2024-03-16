"use client";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import { useTemplateInputStore } from "@/app/store/projectTemplateStore/useTemplateInputStore";
import {
  addButtonStyle,
  inputStyles,
  labelStyles,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { RefObject } from "react";

interface AboutProjectMainFunction {
  mainFunctionRef: RefObject<HTMLInputElement>;
}

const ProjectMainFunction: React.FC<AboutProjectMainFunction> = ({
  mainFunctionRef,
}) => {
  const { setGuideMessage } = useProjectTemplateStore();
  const { mainFuncs, addMainFunc, putTextInMainFunc } = useTemplateInputStore();

  return (
    <>
      <label htmlFor="mainFunctions" css={labelStyles.style1}>
        주요 기능
      </label>
      <hr />
      {mainFuncs.map((_, index) => {
        return (
          <input
            autoFocus
            key={index}
            ref={mainFunctionRef}
            onFocus={() =>
              setGuideMessage("이 프로젝트의 주요 기능은 무엇인가요?")
            }
            onChange={() =>
              putTextInMainFunc(mainFunctionRef.current!.value, index)
            }
            id="mainFunctions"
            type="text"
            css={inputStyles.style1}
          />
        );
      })}

      <button css={[addButtonStyle]} onClick={() => addMainFunc()}>
        +
      </button>
    </>
  );
};

export default ProjectMainFunction;
