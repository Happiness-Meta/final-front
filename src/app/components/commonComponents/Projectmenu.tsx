"use client";
/** @jsxImportSource @emotion/react */

import {
  titleAndMenuStyle,
  titleAndMenuStylePalette,
  homeTitleStyle,
  homeMenuStyle,
} from "@/app/styleComponents/homePageStyles/HomePageStyles";
import Link from "next/link";
import React from "react";

const ProjectMenu = () => {
  return (
    <div css={titleAndMenuStyle}>
      <div css={titleAndMenuStylePalette}>
        <Link href={"/"}>
          <p css={homeTitleStyle}>Palette*</p>
        </Link>
      </div>
      <nav css={homeMenuStyle}>
        <span>
          <Link href={"/pages/workspacePage"}>MY커리어</Link>
        </span>
        <span>허브</span>
        <span>채용</span>
      </nav>
    </div>
  );
};

export default ProjectMenu;
