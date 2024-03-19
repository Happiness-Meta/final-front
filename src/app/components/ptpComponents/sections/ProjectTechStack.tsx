"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";
import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import TechStackSpace from "../../commonComponents/TechStackSpace";
import { css } from "@emotion/react";
import { RefObject } from "react";

interface AboutProjectTechStack {
  searchTechStackRef: RefObject<HTMLInputElement>;
}

const ProjectTechStack: React.FC<AboutProjectTechStack> = ({
  searchTechStackRef,
}) => {
  return (
    <>
      <label css={labelStyles.style1}>기술 스택</label>
      <hr />
      <div
        css={[
          flexCenterX2,
          css`
            flex-direction: column;
            gap: 5px;
          `,
        ]}
      >
        <TechStackSpace searchTechStackRef={searchTechStackRef} />
      </div>
    </>
  );
};

export default ProjectTechStack;
