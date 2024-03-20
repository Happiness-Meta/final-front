"use client";
/** @jsxImportSource @emotion/react */

import Link from "next/link";
import React from "react";

import { css } from "@emotion/react";

const LinkStyle = {
  display: "flex",
  alignItems: "center",
  height: "60px",
  marginBottom: "10px",
  fontSize: "40px",
  fontWeight: "bold",
  marginLeft: "4rem",
};

const workspaceButton = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  fontSize: "0.9em",
  marginRight: "4rem",
  marginTop: "1rem",
  justifyContent: "flex-end",
};

const ProjectTitle = () => {
  return (
    <div
      css={[
        `display: flex;
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
        <Link href={"/pages/workspacePage"}>
          <div
            css={css`
              width: 8vw;
              text-align: center;
              color: #ff8a00;
              border: 2px solid #ff8a00;
              padding: 0.7rem;
              border-radius: 0.5rem;
            `}
          >
            workspace
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTitle;
