"use client";
/** @jsxImportSource @emotion/react */

import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import {
  inputContainerStyles,
  inputStyles,
  labelStyles,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { AboutProjectPeriod } from "@/app/types/aboutProjectTemplate";

const ProjectPeriod: React.FC<AboutProjectPeriod> = ({
  startDateRef,
  endDateRef,
}) => {
  const { dynamicQuestionsContainer, addDynamicQuestions } = useProjectStore();
  const { setGuideMessage } = useProjectTemplateStore();

  return (
    <>
      <label htmlFor="period" css={labelStyles.style1}>
        프로젝트 기간
      </label>
      <hr />
      <div css={[inputContainerStyles.style1]}>
        <input
          ref={startDateRef}
          onFocus={() => setGuideMessage("프로젝트의 시작일은 언제인가요?")}
          onChange={(e) => addDynamicQuestions(e.target.value, 2)}
          id="period"
          type="date"
          defaultValue={dynamicQuestionsContainer[2]}
          css={inputStyles.style2}
        />
        <p css={[`height:40px; font-size: 1.5em;`]}>~</p>
        <input
          ref={endDateRef}
          onFocus={() => setGuideMessage("프로젝트의 종료일은 언제인가요?")}
          onChange={(e) => addDynamicQuestions(e.target.value, 3)}
          type="date"
          defaultValue={dynamicQuestionsContainer[3]}
          css={inputStyles.style2}
        />
      </div>
    </>
  );
};

export default ProjectPeriod;
