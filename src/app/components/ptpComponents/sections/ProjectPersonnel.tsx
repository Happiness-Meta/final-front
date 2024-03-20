"use client";
/** @jsxImportSource @emotion/react */

import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import {
  inputStyles,
  labelStyles,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { AboutProjectPersonnel } from "@/app/types/aboutProjectTemplate";
import { css } from "@emotion/react";

const ProjectPersonnel: React.FC<AboutProjectPersonnel> = ({
  personnelRef,
}) => {
  const { dynamicQuestionsContainer, setDynamicQuestions } = useProjectStore();
  const { setGuideMessage } = useProjectTemplateStore();

  return (
    <>
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
          ref={personnelRef}
          onFocus={() => setGuideMessage("프로젝트의 인원은 몇명이었나요?")}
          onChange={(e) =>
            setDynamicQuestions("personnel", parseInt(e.target.value))
          }
          id="personnel"
          type="number"
          min={1}
          value={dynamicQuestionsContainer.personnel}
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
    </>
  );
};

export default ProjectPersonnel;
