"use client";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import { useTemplateInputStore } from "@/app/store/projectTemplateStore/useTemplateInputStore";
import {
  addButtonStyle,
  deleteButtonStyle,
  inputContainerStyles,
  inputStyles,
  labelStyles,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { RefObject } from "react";
import Delete from "@/app/assets/svg/delete.svg";
import Image from "next/image";
import { AboutProjectFunction } from "@/app/types/aboutProjectTemplate";

const ProjectFunction: React.FC<AboutProjectFunction> = ({
  projectFuntionRef,
  projFuncContRef,
}) => {
  const { setGuideMessage } = useProjectTemplateStore();
  const { projFuncs, addFunc, deleteFunc, putTextInFunc, putContInFunc } =
    useTemplateInputStore();

  return (
    <>
      <label htmlFor="myFunctions" css={labelStyles.style1}>
        구현 기능
      </label>
      <hr />
      {projFuncs.map((_, index) => {
        return (
          <div key={index} css={inputContainerStyles.style2}>
            <input
              ref={projectFuntionRef}
              autoFocus={projFuncs.length > 1 ? true : false}
              autoComplete="off"
              onFocus={() => setGuideMessage("구현 기능을 적어주세요.")}
              onChange={(e) => {
                putTextInFunc(e.target.value, index);
                console.log(projFuncs);
              }}
              id="myFunctions"
              type="text"
              css={inputStyles.style4}
            />
            <input
              ref={projFuncContRef}
              onFocus={() =>
                setGuideMessage("이 기능의 기여도는 얼마나 되나요?")
              }
              onChange={(e) => {
                putContInFunc(parseInt(e.target.value), index);
                console.log(projFuncs);
              }}
              type="number"
              step={10}
              min={0}
              max={100}
              defaultValue={100}
              css={inputStyles.style5}
            />
            {projFuncs.length > 1 ? (
              <button
                css={[deleteButtonStyle]}
                onClick={() => {
                  deleteFunc(index);
                }}
              >
                <Image src={Delete} alt="delete" width={20} height={20} />
              </button>
            ) : undefined}
          </div>
        );
      })}
      <button
        css={[addButtonStyle]}
        onClick={() => {
          addFunc();
        }}
      >
        +
      </button>
    </>
  );
};

export default ProjectFunction;
