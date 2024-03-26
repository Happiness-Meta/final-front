"use client";
/** @jsxImportSource @emotion/react */

import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { eachSpaceStyle } from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { AboutProjectSections } from "@/app/types/aboutProjectView";

const ProjectDescription: React.FC<AboutProjectSections> = ({ data }) => {
  return (
    <div css={[eachSpaceStyle]}>
      <label htmlFor="description" css={[labelStyles.style1]}>
        프로젝트 소개
      </label>
      <hr />
      <p>{data?.description}</p>
    </div>
  );
};

export default ProjectDescription;
