"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles";
import Link from "next/link";
import React from "react";

const LinkStyle = {
  ...flexCenterX2,
  width: "100%",
  height: "60px",
  marginBottom: "30px",
  fontSize: "40px",
  fontWeight: "bold",
};

const ProjectTitle = () => {
  return (
    <div css={LinkStyle}>
      <Link href={"/"} css={[`transition:.2s; &:hover {font-size: 45px}`]}>
        Palette*
      </Link>
    </div>
  );
};

export default ProjectTitle;
