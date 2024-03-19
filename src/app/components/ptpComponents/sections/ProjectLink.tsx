"use client";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import {
  addButtonStyle,
  inputContainerStyles,
  inputStyles,
  labelStyles,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { AboutProjectLink } from "@/app/types/aboutProjectTemplate";

const ProjectLink: React.FC<AboutProjectLink> = ({ linkNameRef, linkRef }) => {
  const { setGuideMessage } = useProjectTemplateStore();

  return (
    <>
      <label htmlFor="link" css={labelStyles.style1}>
        링크
      </label>
      <hr />
      <div css={inputContainerStyles.style2}>
        <input
          ref={linkNameRef}
          onFocus={() => setGuideMessage("어떤 링크인지 적어주세요.")}
          type="text"
          css={inputStyles.style6}
        />
        <input
          ref={linkRef}
          onFocus={() => setGuideMessage("링크를 넣어주세요.")}
          id="link"
          type="text"
          css={inputStyles.style7}
        />
      </div>
      <button css={[addButtonStyle]}>+</button>
    </>
  );
};

export default ProjectLink;
