"use client";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import {
  addButtonStyle,
  deleteButtonStyles,
  inputContainerStyles,
  inputStyles,
  labelStyles,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import Delete from "@/app/assets/svg/delete.svg";
import Image from "next/image";
import { AboutProjectFunction } from "@/app/types/aboutProjectTemplate";
import { useProjectFunctionStore } from "@/app/store/projectTemplateStore/useProjectFunctionStore";

const ProjectFunction: React.FC<AboutProjectFunction> = ({
  projectFuntionRef,
  projFuncContRef,
}) => {
  const { setGuideMessage } = useProjectTemplateStore();
  const { projFuncs, addFunc, deleteFunc, setFunc } = useProjectFunctionStore();

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
              autoComplete="off"
              ref={projectFuntionRef}
              autoFocus={projFuncs.length > 1 ? true : false}
              onFocus={() => setGuideMessage("구현 기능을 적어주세요.")}
              onChange={(e) => {
                setFunc("description", e.target.value, index);
              }}
              id="myFunctions"
              type="text"
              css={inputStyles.style4}
              value={_.description}
            />
            <input
              ref={projFuncContRef}
              onFocus={() =>
                setGuideMessage("이 기능의 기여도는 얼마나 되나요?")
              }
              onChange={(e) => {
                setFunc("contribution", parseInt(e.target.value), index);
              }}
              type="number"
              step={10}
              min={0}
              max={100}
              css={inputStyles.style5}
              value={_.contribution}
            />
            {projFuncs.length > 1 ? (
              <button
                css={[deleteButtonStyles.deleteButtonStyle1]}
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
