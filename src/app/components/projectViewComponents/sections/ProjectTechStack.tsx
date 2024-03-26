"use client";
/** @jsxImportSource @emotion/react */

import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { eachSpaceStyle } from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { stackInContainerStyle } from "@/app/styleComponents/signUpPageStyles/techStackStyles";
import { AboutProjectSections } from "@/app/types/aboutProjectView";
import { css } from "@emotion/react";

const ProjectTechStack: React.FC<AboutProjectSections> = ({ data }) => {
  return (
    <div css={[eachSpaceStyle]}>
      <label htmlFor="techStacks" css={[labelStyles.style1]}>
        사용한 기술 스택 : {data?.techStack.length}개
      </label>
      <hr />
      <div
        css={[
          css`
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            row-gap: 5px;
          `,
        ]}
      >
        {data?.techStack.map((stack, index) => {
          return (
            <div key={index} css={[stackInContainerStyle]}>
              {stack}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTechStack;
