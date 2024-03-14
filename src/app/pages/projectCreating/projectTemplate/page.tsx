"use client";
/** @jsxImportSource @emotion/react */

import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { widthHeightFull } from "@/app/styleComponents/commonStyles/commonStyles";
import { css } from "@emotion/react";
import {
  addButtonStyle,
  inputContainerStyles,
  inputStyles,
  labelStyles,
  sectionStyle,
  textareaStyle1,
} from "@/app/styleComponents/projectTemplateStyle/templateStyle";
import PaintBackground from "@/app/components/ptpComponents/PaintBackground";
import Header from "@/app/components/ptpComponents/Header";
import ProjectColoringSpace from "@/app/components/commonComponents/ProjectColoringSpace";
import { RefObject, useRef } from "react";

const ProjectTemplate = () => {
  const paintColorRef: RefObject<HTMLButtonElement> = useRef(null);
  const { dynamicQuestionsContainer } = useProjectStore();
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
        <label htmlFor="name" css={labelStyles.style1}>
          프로젝트 이름
        </label>
        <hr />
        <input
          required
          id="name"
          type="text"
          defaultValue={dynamicQuestionsContainer[0]}
          css={[inputStyles.style1]}
        />

        <label htmlFor="period" css={labelStyles.style1}>
          프로젝트 기간
        </label>
        <hr />
        <div css={[inputContainerStyles.style1]}>
          <input
            required
            id="period"
            type="date"
            defaultValue={dynamicQuestionsContainer[2]}
            css={inputStyles.style2}
          />
          <p css={[`height:40px; font-size: 1.5em;`]}>~</p>
          <input
            required
            id="period"
            type="date"
            defaultValue={dynamicQuestionsContainer[3]}
            css={inputStyles.style2}
          />
        </div>

        <label htmlFor="personnel" css={labelStyles.style1}>
          프로젝트 인원
        </label>
        <hr />
        <div
          css={[
            css`
              display: flex;
              align-items: center;
              gap: 5px;
              height: 40px;
            `,
          ]}
        >
          <input
            required
            id="personnel"
            type="number"
            min={1}
            defaultValue={dynamicQuestionsContainer[4]}
            css={inputStyles.style3}
          />
          <p
            css={[
              css`
                font-size: 1.2em;
                font-weight: 600;
              `,
            ]}
          >
            명
          </p>
        </div>

        <label htmlFor="description" css={labelStyles.style1}>
          프로젝트 소개
        </label>
        <hr />
        <textarea
          required
          defaultValue={dynamicQuestionsContainer[5]}
          id="description"
          rows={3}
          css={textareaStyle1}
        />

        <label htmlFor="mainFunctions" css={labelStyles.style1}>
          주요 기능
        </label>
        <hr />
        <input
          required
          autoFocus
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
            required
            id="myFunctions"
            type="text"
            css={inputStyles.style4}
          />
          <input
            required
            type="number"
            step={10}
            min={10}
            max={100}
            defaultValue={100}
            css={inputStyles.style5}
          />
        </div>
        <button css={[addButtonStyle]}>+</button>

        <label htmlFor="myFunctions" css={labelStyles.style1}>
          문제 해결
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
          <label htmlFor="" css={labelStyles.style2}>
            발생 문제
          </label>
          <input
            required
            id="myFunctions"
            type="text"
            css={inputStyles.style1}
          />
          <label htmlFor="" css={labelStyles.style2}>
            해결 방법
          </label>
          <textarea
            required
            defaultValue={dynamicQuestionsContainer[5]}
            id="description"
            rows={3}
            css={textareaStyle1}
          />
          <label htmlFor="" css={labelStyles.style2}>
            배운 점
          </label>
          <input
            required
            id="myFunctions"
            type="text"
            css={inputStyles.style1}
          />
        </div>
        <button css={[addButtonStyle]}>+</button>

        <label htmlFor="myFunctions" css={labelStyles.style1}>
          링크
        </label>
        <hr />
        <div css={inputContainerStyles.style2}>
          <input required type="text" css={inputStyles.style6} />
          <input
            required
            id="myFunctions"
            type="text"
            css={inputStyles.style7}
          />
        </div>
        <button css={[addButtonStyle]}>+</button>
      </section>
    </div>
  );
};

export default ProjectTemplate;
