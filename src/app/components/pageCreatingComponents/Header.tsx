"use client";
/** @jsxImportSource @emotion/react */

import { commonColor } from "@/app/styleComponents/commonStyles/commonStyles";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      css={[
        `position: absolute; top:0; left: 0; 
          display: flex; justify-content: space-between; align-items: center; 
          width: 100%; height: 80px; 
          padding: 10px 30px;`,
      ]}
    >
      <Link
        href={"/"}
        css={[
          `font-size: 1.3em; font-weight: bold; transition: .2s; &:hover{transform: scale(1.1);}`,
        ]}
      >
        Palette*
      </Link>
      <button
        css={[
          `width: 100px; height: 30px; 
            border: 1px solid ${commonColor.representative}; border-radius: 20px; 
            background-color: transparent; color:${commonColor.representative};
            transition: .2s; cursor: pointer;
            &:hover{width: 110px; background-color: ${commonColor.representative}; color: white;}`,
        ]}
      >
        workspace
      </button>
    </header>
  );
};

export default Header;
