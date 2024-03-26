"use client";
/** @jsxImportSource @emotion/react */

import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { eachSpaceStyle } from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { AboutProjectSections } from "@/app/types/aboutProjectView";

const ProjectPeriod: React.FC<AboutProjectSections> = ({ data }) => {
  return (
    <div css={[eachSpaceStyle]}>
      <label htmlFor="period" css={[labelStyles.style1]}>
        프로젝트 기간
      </label>
      <hr />
      <p>
        {data?.projectStartDate} ~ {data?.projectEndDate}
      </p>
    </div>
  );
};

export default ProjectPeriod;
