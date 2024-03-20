"use client";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import {
  labelStyles,
  textareaStyle1,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";

const ProjectTakeaway = () => {
  const { setGuideMessage } = useProjectTemplateStore();
  const { setDynamicQuestions } = useProjectStore();

  return (
    <>
      <label htmlFor="takeaway" css={labelStyles.style1}>
        배운 점
      </label>
      <hr />
      <textarea
        onFocus={() => setGuideMessage("프로젝트를 통해 배운 점을 적어주세요.")}
        onChange={(e) => setDynamicQuestions("takeaway", e.target.value)}
        id="takeaway"
        rows={3}
        css={textareaStyle1}
      />
    </>
  );
};

export default ProjectTakeaway;
