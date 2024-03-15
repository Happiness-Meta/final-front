"use client";
/** @jsxImportSource @emotion/react */

import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import {
  labelStyles,
  textareaStyle1,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { AboutProjectDescription } from "@/app/types/aboutProjectTemplate";

const ProjectDescription: React.FC<AboutProjectDescription> = ({
  descriptionRef,
}) => {
  const { dynamicQuestionsContainer } = useProjectStore();
  const { setGuideMessage } = useProjectTemplateStore();

  return (
    <>
      <label htmlFor="description" css={labelStyles.style1}>
        프로젝트 소개
      </label>
      <hr />
      <textarea
        ref={descriptionRef}
        onFocus={() => setGuideMessage("프로젝트에 대해 간단히 설명해 주세요.")}
        defaultValue={dynamicQuestionsContainer[5]}
        id="description"
        rows={3}
        css={textareaStyle1}
      />
    </>
  );
};

export default ProjectDescription;
