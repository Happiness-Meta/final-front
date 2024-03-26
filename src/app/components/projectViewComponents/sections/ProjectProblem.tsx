"use client";
/** @jsxImportSource @emotion/react */

import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import {
  eachSpaceStyle,
  styleAboutProblem,
} from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { AboutProjectSections } from "@/app/types/aboutProjectView";
import { css } from "@emotion/react";

const ProjectProblem: React.FC<AboutProjectSections> = ({ data }) => {
  return (
    <div css={[eachSpaceStyle]}>
      <label htmlFor="problem" css={[labelStyles.style1]}>
        문제 해결
      </label>
      <hr />
      <div css={[styleAboutProblem.containersStyle]}>
        {data?.problemAndSolution.map((prob, index) => {
          return (
            <div key={index} css={[styleAboutProblem.pContainerStyle]}>
              {" "}
              <label htmlFor="definition" css={[labelStyles.style2]}>
                문제 상황 {index + 1}
              </label>
              <div id="definition" css={[styleAboutProblem.pTextStyle]}>
                {prob.definition}
              </div>
              <label htmlFor="reason" css={[labelStyles.style2]}>
                문제 이유
              </label>
              <div id="definition" css={[styleAboutProblem.pTextStyle]}>
                {prob.reason}
              </div>
              <label htmlFor="solution" css={[labelStyles.style2]}>
                해결 방안
              </label>
              <div id="definition" css={[styleAboutProblem.pTextStyle]}>
                {prob.solution}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectProblem;
