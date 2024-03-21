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
  const { dynamicQuestionsContainer, setDynamicQuestions } = useProjectStore();
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
        onChange={(e) => setDynamicQuestions("name", e.target.value)}
        id="name"
        type="text"
        value={dynamicQuestionsContainer.name}
        css={[inputStyles.style1]}
      />
    </>
  );
};

export default ProjectName;
