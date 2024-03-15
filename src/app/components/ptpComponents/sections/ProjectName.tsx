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
  const { dynamicQuestionsContainer } = useProjectStore();
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
        id="name"
        type="text"
        defaultValue={dynamicQuestionsContainer[0]}
        css={[
          inputStyles.style1,
          `${
            nameRef.current?.value !== "" && undefined
              ? `border-color:green;`
              : ``
          }`,
        ]}
      />
    </>
  );
};

export default ProjectName;
