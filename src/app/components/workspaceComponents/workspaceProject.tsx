"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import { useEffect, useState } from "react";

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
  projectAdd,
  trashHeader,
  projectContainer,
  projectContent,
  emptyContainer,
  projectPeriod,
  projectTitle,
  projectOutline,
  projectPersonnel,
  projectDivider,
  techStackImg,
  techStackContainer,
} from "@/app/styleComponents/workspaceStyles/projectStyles";
import arrowRight from "@/app/assets/svg/arrow-right-small.svg";

// libraries

// img
import AddIcon from "@/app/assets/svg/addIcon.svg";
import Trash from "@/app/assets/svg/Trash.svg";

//types
import {
  workspaceRemoveData,
  portPoliosThumbnailData,
} from "@/app/types/aboutWorkspace";
import Link from "next/link";

interface AboutWorkspaceProject {
  projectData: portPoliosThumbnailData[];
  removeData: (T: portPoliosThumbnailData) => void;
}

const WorkspaceProject: React.FC<AboutWorkspaceProject> = ({
  projectData,
  removeData,
}) => {
  console.log(projectData);
  return (
    <div
      css={[
        projectHeaderColumn,
        `
      flex-direction: column;

    `,
      ]}
    >
      <div
        css={[
          projectHeader,
          `margin-top: 7rem; display: flex; justify-content: space-between; `,
        ]}
      >
        <div
          css={[
            `
            display: flex;
            flex-direction: row;
          `,
          ]}
        >
          <div css={project}>프로젝트</div>
          <Image css={arrowImg} src={arrowRight} alt="화살표" />
        </div>
        <div
          css={[
            `
          width: 80px;
        `,
          ]}
        >
          <Link
            css={[
              projectAdd,
              `
            justify-content: center;
          `,
            ]}
            href={"/pages/projectCreating"}
          >
            추가
          </Link>
        </div>
      </div>
      <div css={divider}></div>
      <div
        css={[
          `
        display: flex;
        flex-wrap: wrap;
        width: 75vw;
        margin-left: 9rem;
      `,
        ]}
      >
        {projectData.length > 0 ? (
          projectData.map((item: portPoliosThumbnailData, i: number) => (
            <div css={projectContent} key={i}>
              <div
                css={[
                  projectContainer,
                  `
                flex-direction: column;
              `,
                ]}
              >
                <div css={trashHeader}>
                  <Image
                    src={Trash}
                    alt="쓰레기통"
                    onClick={() => removeData(item)}
                    width={17}
                    height={17}
                  />
                </div>
                <div>
                  <span css={projectTitle}>{item.projectName}</span>
                  <div css={projectPeriod}>
                    {item.projectStartDate.toString()} ~
                    {item.projectEndDate.toString()}
                  </div>
                  <div css={projectPersonnel}>
                    프로젝트 인원: {item.projectPersonnel}
                  </div>
                </div>
                <div
                  css={[
                    techStackContainer,
                    `
                  flex-wrap: wrap;
                `,
                  ]}
                >
                  {item.techStack.slice(0, 5).map((item, i) => (
                    <Image
                      css={techStackImg}
                      key={i}
                      src={require(`@/app/assets/svg/techStack/${item.toLowerCase()}.svg`)}
                      alt="기술스택"
                      width={28}
                      height={28}
                    />
                  ))}
                </div>
                <div css={projectDivider} />
                {/* 줄을 더 내리고 생성 날짜 */}
                <div css={projectOutline}>
                  {item.projectOutline.length > 30
                    ? `${item.projectOutline.slice(0, 30)}...`
                    : item.projectOutline}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            css={[
              ContentContainer,
              `
        flex-direction: column;
        margin-left: -1.8rem;
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
          &:hover {
            width: 150px;
            height: 50px;
          }
          
        `,
              ]}
            >
              <button
                css={[
                  AddProjectButton,
                  `
            &:hover {
                font-size: 1.5rem;
              }
          `,
                ]}
              >
                프로젝트
              </button>
              <Image css={plus} src={AddIcon} alt="add" />
            </div>
          </div>
        )}
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
