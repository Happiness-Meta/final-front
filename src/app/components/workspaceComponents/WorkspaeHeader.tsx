"use client";
/** @jsxImportSource @emotion/react */

import Link from "next/link";

// libraries
import { css } from "@emotion/react";

// css
import {
  LinkStyle,
  workspaceButton,
  AddProjectButton,
} from "@/app/styleComponents/workspaceStyles/headerStyles";

const ProjectTitle = () => {
  return (
    <div
      css={[
        `
        width: 98vw;
        display: flex;
        flexDirection: row;
        justifyContent: space-between;
      `,
      ]}
    >
      <div css={LinkStyle}>
        <Link href={"/"} css={[`transition:.2s; &:hover {font-size: 45px}`]}>
          Palette*
        </Link>
      </div>
      <div css={workspaceButton}>
        <button css={AddProjectButton}>
          <div
            css={css`
              width: 8vw;
              text-align: center;
              color: white;
              background-color: #ff8a00;
              padding: 0.7rem;
              border-radius: 0.5rem;
              margin-right: 1rem;
              // hover 추가
              box-shadow: 0 1px 4px 2px gray;
            `}
          >
            이력서 추가
          </div>
        </button>
        <button css={AddProjectButton}>
          <div
            css={css`
              width: 8vw;
              text-align: center;
              color: #ff8a00;
              background-color: white;
              border: 2px solid #ff8a00;
              padding: 0.7rem;
              border-radius: 0.5rem;
              box-shadow: 0 1px 4px 2px gray;
            `}
          >
            프로젝트 추가
          </div>
        </button>
        <Link href={"/pages/myPage"} css={AddProjectButton}>
          <div
            css={css`
              width: 8vw;
              text-align: center;
              color: black;
              background-color: white;
              padding: 0.7rem;
              border-radius: 0.5rem;
              margin-left: 1rem;
              box-shadow: 0 1px 4px 1px;
            `}
          >
            마이 페이지
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTitle;
