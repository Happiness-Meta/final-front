"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styleComponents/commonStyles/commonStyles";

const Footer = () => {
  return (
    <footer
      css={[
        flexCenterX2,
        `position: absolute; bottom: 0; left: 0; width: 100%; height: 60px;`,
      ]}
    >
      <span css={[`color: #dddddd; font-weight: 600;`]}>Happiness Meta©</span>
    </footer>
  );
};

export default Footer;
