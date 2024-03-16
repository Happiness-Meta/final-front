"use client";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import { useTemplateInputStore } from "@/app/store/projectTemplateStore/useTemplateInputStore";
import {
  addButtonStyle,
  inputContainerStyles,
  inputStyles,
  labelStyles,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { RefObject } from "react";

interface AboutProjectMyFunction {
  myFunctionRef: RefObject<HTMLInputElement>;
  myFunctionContRef: RefObject<HTMLInputElement>;
}

const ProjectMyFunction: React.FC<AboutProjectMyFunction> = ({
  myFunctionRef,
  myFunctionContRef,
}) => {
  const { setGuideMessage } = useProjectTemplateStore();
  const { myFuncs, addMyFunc, putTextInMyFunc, putContInMyFunc } =
    useTemplateInputStore();

  return (
    <>
      <label htmlFor="myFunctions" css={labelStyles.style1}>
        내가 구현한 기능
      </label>
      <hr />
      {myFuncs.map((_, index) => {
        return (
          <div key={index} css={inputContainerStyles.style2}>
            <input
              ref={myFunctionRef}
              onFocus={() => setGuideMessage("구현한 기능을 적어주세요.")}
              onChange={() =>
                putTextInMyFunc(myFunctionRef.current!.value, index)
              }
              id="myFunctions"
              type="text"
              css={inputStyles.style4}
            />
            <input
              ref={myFunctionContRef}
              onFocus={() =>
                setGuideMessage("이 기능의 기여도는 얼마나 되나요?")
              }
              onChange={() =>
                putContInMyFunc(myFunctionContRef.current!.value, index)
              }
              type="number"
              step={10}
              min={10}
              max={100}
              defaultValue={0}
              css={inputStyles.style5}
            />
          </div>
        );
      })}
      <button css={[addButtonStyle]} onClick={() => addMyFunc()}>
        +
      </button>
    </>
  );
};

export default ProjectMyFunction;
