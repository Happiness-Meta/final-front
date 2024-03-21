"use client";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import { showUp, showUp2 } from "@/app/styleComponents/commonStyles/keyframes";
import {
  headerStyle,
  sectionStyle,
  workspaceBtnStyle,
} from "@/app/styleComponents/projectTemplateStyles/ptHeaderStyles";
import { css } from "@emotion/react";
import Link from "next/link";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const HeaderNo1 = () => {
  const [cookies] = useCookies(["token"]);

  const { guideMessage, guideMessageAni, setGuideMessageAni } =
    useProjectTemplateStore();
  const { resetTechStack } = useSignUpPageStore();

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
          onClick={() => resetTechStack()}
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
        {cookies.token ? (
          <button onClick={() => resetTechStack()} css={[workspaceBtnStyle]}>
            workspace
          </button>
        ) : null}
      </section>
    </header>
  );
};

export default HeaderNo1;
