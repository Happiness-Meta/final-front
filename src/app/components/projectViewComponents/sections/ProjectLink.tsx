"use client";
/** @jsxImportSource @emotion/react */

import { labelStyles } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import {
  eachSpaceStyle,
  styleAboutLink,
} from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { AboutProjectSections } from "@/app/types/aboutProjectView";

const ProjectLink: React.FC<AboutProjectSections> = ({ data }) => {
  return (
    <div css={[eachSpaceStyle]}>
      <label htmlFor="link" css={[labelStyles.style1]}>
        링크
      </label>
      <hr />
      {data?.link.map((link, index) => {
        return (
          <div key={index} css={[styleAboutLink.linkContainerStyle]}>
            <p css={[styleAboutLink.linkDescriptionStyle]}>
              {link.description}
            </p>

            <a css={[styleAboutLink.linkStyle]} href={link.address}>
              {link.address}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectLink;
