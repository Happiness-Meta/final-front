"use client";
/** @jsxImportSource @emotion/react */

import useProjectStore from "@/app/store/commonStore/useProjectStore";
import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import { css } from "@emotion/react";
import {
  addButtonStyle,
  createButtonStyle,
  inputContainerStyles,
  inputStyles,
  labelStyles,
  sectionStyle,
  textareaStyle1,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import PaintBackground from "@/app/components/ptpComponents/PaintBackground";
import Header from "@/app/components/ptpComponents/Header";
import ProjectColoringSpace from "@/app/components/commonComponents/ProjectColoringSpace";
import { RefObject, useRef } from "react";
import ProjectName from "@/app/components/ptpComponents/sections/ProjectName";
import ProjectPeriod from "@/app/components/ptpComponents/sections/ProjectPeriod";
import ProjectPersonnel from "@/app/components/ptpComponents/sections/ProjectPersonnel";
import ProjectDescription from "@/app/components/ptpComponents/sections/ProjectDescription";
import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";

const ProjectTemplate = () => {
  const paintColorRef: RefObject<HTMLButtonElement> = useRef(null);
  const nameRef: RefObject<HTMLInputElement> = useRef(null);
  const startDateRef: RefObject<HTMLInputElement> = useRef(null);
  const endDateRef: RefObject<HTMLInputElement> = useRef(null);
  const personnelRef: RefObject<HTMLInputElement> = useRef(null);
  const descriptionRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const mainFunctionsRef: RefObject<HTMLInputElement> = useRef(null);
  const myFunctionsRef: RefObject<HTMLInputElement> = useRef(null);
  const pDefinitionRef: RefObject<HTMLInputElement> = useRef(null);
  const pSolutionRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const pResolutionRef: RefObject<HTMLInputElement> = useRef(null);
  const linkNameRef: RefObject<HTMLInputElement> = useRef(null);
  const linkRef: RefObject<HTMLInputElement> = useRef(null);

  const { dynamicQuestionsContainer } = useProjectStore();
  const { setGuideMessage } = useProjectTemplateStore();

  return (
    <div
      css={[
        widthHeightFull,
        css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `,
      ]}
    >
      <Header />
      <PaintBackground />
      <section css={sectionStyle}>
        <ProjectColoringSpace paintColorRef={paintColorRef} />
        <ProjectName nameRef={nameRef} />
        <ProjectPeriod startDateRef={startDateRef} endDateRef={endDateRef} />
        <ProjectPersonnel personnelRef={personnelRef} />
        <ProjectDescription descriptionRef={descriptionRef} />

        <label htmlFor="mainFunctions" css={labelStyles.style1}>
          주요 기능
        </label>
        <hr />
        <input
          autoFocus
          ref={mainFunctionsRef}
          onFocus={() =>
            setGuideMessage("이 프로젝트의 주요 기능은 무엇인가요?")
          }
          id="mainFunctions"
          type="text"
          css={inputStyles.style1}
        />
        <button css={[addButtonStyle]}>+</button>

        <label htmlFor="myFunctions" css={labelStyles.style1}>
          내가 구현한 기능
        </label>
        <hr />
        <div css={inputContainerStyles.style2}>
          <input
            ref={myFunctionsRef}
            onFocus={() => setGuideMessage("구현한 기능을 적어주세요.")}
            id="myFunctions"
            type="text"
            css={inputStyles.style4}
          />
          <input
            onFocus={() => setGuideMessage("이 기능의 기여도는 얼마나 되나요?")}
            type="number"
            step={10}
            min={10}
            max={100}
            defaultValue={100}
            css={inputStyles.style5}
          />
        </div>
        <button css={[addButtonStyle]}>+</button>

        <label htmlFor="problem" css={labelStyles.style1}>
          문제 해결
          <span
            css={[
              css`
                margin-left: 5px;
                font-size: 0.5em;
                color: #ff4b00;
              `,
            ]}
          >
            *이 부분이 중요해요! 잘 써주세요.
          </span>
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
            문제 정의
          </label>
          <input
            onFocus={() => setGuideMessage("문제 상황을 적어주세요.")}
            id="problem"
            type="text"
            css={inputStyles.style1}
          />
          <label htmlFor="solution" css={labelStyles.style2}>
            해결 방안 도출
          </label>
          <textarea
            onFocus={() =>
              setGuideMessage("이 문제의 해결 방안을 어떻게 도출하셨나요?")
            }
            id="solution"
            rows={3}
            css={textareaStyle1}
          />
          <label htmlFor="resolution" css={labelStyles.style2}>
            적용 및 해결
          </label>
          <input
            onFocus={() =>
              setGuideMessage("도출한 방안으로 어떻게 해결했는지 적어주세요.")
            }
            id="resolution"
            type="text"
            css={inputStyles.style1}
          />
        </div>
        <button css={[addButtonStyle]}>+</button>

        <label htmlFor="link" css={labelStyles.style1}>
          링크
        </label>
        <hr />
        <div css={inputContainerStyles.style2}>
          <input
            onFocus={() => setGuideMessage("어떤 링크인지 적어주세요.")}
            type="text"
            css={inputStyles.style6}
          />
          <input
            onFocus={() => setGuideMessage("링크를 넣어주세요.")}
            id="link"
            type="text"
            css={inputStyles.style7}
          />
        </div>
        <button css={[addButtonStyle]}>+</button>
        <div
          css={[
            flexCenterX2,
            css`
              width: 100%;
              height: 50px;
              margin-top: 30px;
            `,
          ]}
        >
          <button css={[createButtonStyle]}>생성</button>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;
