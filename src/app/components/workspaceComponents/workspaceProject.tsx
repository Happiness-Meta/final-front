"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";

// css
import {
  projectHeader,
  projectHeaderColumn,
  arrowImg,
  project,
  divider,
  ContentContainer,
  AddProjectButtonContainer,
  AddProjectButton,
  text,
  text2,
  plus,
  emptyContainer,
} from "@/app/styleComponents/workspaceStyles/projectStyles";
import arrowRight from "@/app/assets/svg/arrow-right-small.svg";

// img
import AddIcon from "@/app/assets/svg/addIcon.svg";

const WorkspaceProject = () => {
  return (
    <div
      css={[
        projectHeaderColumn,
        `
      flex-direction: column;

    `,
      ]}
    >
      <div css={[projectHeader, `margin-top: 7rem;`]}>
        <div css={project}>프로젝트</div>
        <Image css={arrowImg} src={arrowRight} alt="화살표" />
      </div>
      <div css={divider}></div>
      <div
        css={[
          ContentContainer,
          `
        flex-direction: column;
    
      `,
        ]}
      >
        <span css={text}>팔레트가 비어 있습니다.</span>
        <span css={text2}>당신의 미래를 그려주세요</span>
        <div
          css={[
            AddProjectButtonContainer,
            `
          flex-direction: row;
        `,
          ]}
        >
          <button css={AddProjectButton}>프로젝트</button>
          <Image css={plus} src={AddIcon} alt="add" />
        </div>
      </div>
      <div
        css={[
          emptyContainer,
          `
        
      `,
        ]}
      ></div>
    </div>
  );
};

export default WorkspaceProject;
