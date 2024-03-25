"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { eachSpaceStyle } from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { AboutProjectSections } from "@/app/types/aboutProjectView";
import { css } from "@emotion/react";

const ProjectFunction: React.FC<AboutProjectSections> = ({ data }) => {
  return (
    <div css={[eachSpaceStyle]}>
      <label htmlFor="function" css={[labelStyles.style1]}>
        구현 기능들
      </label>
      <hr />
      <div css={[`display: flex; flex-direction: column; row-gap: 5px;`]}>
        {data?.projectFunction.map((func, index) => {
          return (
            <div
              key={index}
              css={[
                flexCenterX2,
                css`
                  gap: 10px;
                  width: 100%;
                  height: 45px;
                  padding: 10px;
                  border-radius: 5px;
                  background-color: #e1e1e1;
                `,
              ]}
            >
              <div css={[flexCenterX2, `width: 10px; font-weight: bold;`]}>
                {index + 1}
              </div>
              <div
                css={[
                  css`
                    display: flex;
                    flex: 9;
                    padding: 5px;
                    border-radius: 5px;
                    background-color: white;
                  `,
                ]}
              >
                {func.description}
              </div>
              <div
                css={[
                  flexCenterX2,
                  css`
                    flex: 1;
                    padding: 5px;
                    border-radius: 5px;
                    background-color: white;
                  `,
                ]}
              >
                {func.contribution}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectFunction;
