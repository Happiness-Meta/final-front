"use client";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import { showUp, showUp2 } from "@/app/styleComponents/commonStyles/keyframes";
import {
  headerStyle,
  sectionStyle,
  workspaceBtnStyle,
} from "@/app/styleComponents/projectTemplateStyles/ptHeaderStyles";
import { css } from "@emotion/react";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const { guideMessage, guideMessageAni, setGuideMessageAni } =
    useProjectTemplateStore();

  useEffect(() => {
    setGuideMessageAni();
  }, [guideMessage, setGuideMessageAni]);

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
      <section css={[sectionStyle, `justify-content: center;`]}>
        <p
          css={[
            css`
              color: black;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 1.3em;
              font-weight: bold;
              transition: 0.5s;
              animation: ${guideMessageAni ? showUp : showUp2} 0.4s;
            `,
          ]}
        >
          {guideMessage}
        </p>
      </section>
      <section css={[sectionStyle, `justify-content: end;`]}>
        <button css={[workspaceBtnStyle]}>workspace</button>
      </section>
    </header>
  );
};

export default Header;
