"use client";
/** @jsxImportSource @emotion/react */

import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { eachSpaceStyle } from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { AboutProjectSections } from "@/app/types/aboutProjectView";

const ProjectTakeAway: React.FC<AboutProjectSections> = ({ data }) => {
  return (
    <div css={[eachSpaceStyle]}>
      <label htmlFor="takeaway" css={[labelStyles.style1]}>
        배운 점
      </label>
      <hr />
      <div>{data?.takeaway}</div>
    </div>
  );
};

export default ProjectTakeAway;
