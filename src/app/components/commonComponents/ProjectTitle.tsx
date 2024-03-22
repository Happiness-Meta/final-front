"use client";
/** @jsxImportSource @emotion/react */

import { homeLinkStyle } from "@/app/styleComponents/loginPageStyles/loginPageStyles";
import Link from "next/link";

const ProjectTitle = () => {
  return (
    <div css={homeLinkStyle}>
      <Link href={"/"} css={[`transition: 0.2s; &:hover {font-size: 45px}`]}>
        Palette*
      </Link>
    </div>
  );
};

export default ProjectTitle;
