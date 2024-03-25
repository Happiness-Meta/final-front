"use client";
/** @jsxImportSource @emotion/react */

import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { eachSpaceStyle } from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { AboutProjectSections } from "@/app/types/aboutProjectView";

const ProjectPersonnel: React.FC<AboutProjectSections> = ({ data }) => {
  return (
    <div css={[eachSpaceStyle]}>
      <label htmlFor="personnel" css={[labelStyles.style1]}>
        프로젝트 인원
      </label>
      <hr />
      <p>{data?.personnel} 명</p>
    </div>
  );
};

export default ProjectPersonnel;
