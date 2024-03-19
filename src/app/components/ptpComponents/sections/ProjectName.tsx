"use client";
/** @jsxImportSource @emotion/react */

import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import {
  inputStyles,
  labelStyles,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { AboutProjectName } from "@/app/types/aboutProjectTemplate";

const ProjectName: React.FC<AboutProjectName> = ({ nameRef }) => {
  const { dynamicQuestionsContainer, addDynamicQuestions } = useProjectStore();
  const { setGuideMessage } = useProjectTemplateStore();

  return (
    <>
      <label htmlFor="name" css={labelStyles.style1}>
        프로젝트 이름
      </label>
      <hr />
      <input
        autoComplete="off"
        ref={nameRef}
        onFocus={() => setGuideMessage("프로젝트 이름은 무엇인가요?")}
        onChange={(e) => addDynamicQuestions(e.target.value, 0)}
        id="name"
        type="text"
        defaultValue={dynamicQuestionsContainer[0]}
        css={[inputStyles.style1]}
      />
    </>
  );
};

export default ProjectName;
