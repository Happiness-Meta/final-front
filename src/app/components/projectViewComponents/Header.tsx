"use client";
/** @jsxImportSource @emotion/react */

import {
  headerStyle,
  sectionStyle,
} from "@/app/styleComponents/projectTemplateStyles/ptHeaderStyles";
import Link from "next/link";
import WorkspaceBtn from "../commonComponents/buttons/WorkspaceBtn";

const Header = () => {
  return (
    <header css={[headerStyle]}>
      <section css={sectionStyle}>
        <Link
          href={"/"}
          css={[
            `font-size: 1.3em; font-weight: bold; transition: .2s; &:hover{transform: scale(1.1);}`,
          ]}
        >
          Palette*
        </Link>
      </section>
      <section css={[sectionStyle, `justify-content: end;`]}>
        <WorkspaceBtn />
      </section>
    </header>
  );
};

export default Header;
