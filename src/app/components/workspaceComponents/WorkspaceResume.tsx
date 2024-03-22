"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";

// css
import {
  resumeHeader,
  resumeHeaderColumn,
  resume,
  arrowImg,
  divider,
  ContentContainer,
  AddResumeButton,
  AddResumeButtonContainer,
  plus,
  text,
  text2,
} from "@/app/styleComponents/workspaceStyles/resumeStyles";

// img
import arrowRight from "@/app/assets/svg/arrow-right-small.svg";
import AddIcon from "@/app/assets/svg/addIcon.svg";

const WorkspaceResume = () => {
  return (
    <div
      css={[
        resumeHeaderColumn,
        `
        flex-direction: column;
        
    `,
      ]}
    >
      <div
        css={[
          resumeHeader,
          `
          flex-direction: row;
          
      `,
        ]}
      >
        <div css={resume}>이력서</div>
        <Image css={arrowImg} src={arrowRight} alt="화살표" />
      </div>
      <div css={divider}></div>
      <div
        css={[
          `
          display: flex;
          flex-wrap: wrap;
          width: 75vw;

        `,
        ]}
      >
        <div
          css={[
            ContentContainer,
            `
        
        flex-direction: column;  
    
      `,
          ]}
        >
          <span css={text}>도화지가 비어 있습니다.</span>
          <span css={text2}>당신의 미래를 그려주세요</span>
          <div
            css={[
              AddResumeButtonContainer,
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
                AddResumeButton,
                `
              &:hover {
                font-size: 1.5rem;
              }
          `,
              ]}
            >
              이력서
            </button>
            <Image
              css={[
                plus,
                `
            &:focus {
              width: 28px,
              height: 28px,
            }
          `,
              ]}
              src={AddIcon}
              alt="add"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceResume;
