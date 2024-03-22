"use client";
import { useProjectLinkStore } from "@/app/store/projectTemplateStore/useProjectLinkStore";
/** @jsxImportSource @emotion/react */

import { useProjectTemplateStore } from "@/app/store/projectTemplateStore/useProjectTemplateStore";
import {
  addButtonStyle,
  deleteButtonStyles,
  inputContainerStyles,
  inputStyles,
  labelStyles,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { AboutProjectLink } from "@/app/types/aboutProjectTemplate";
import Image from "next/image";
import Delete from "@/app/assets/svg/delete.svg";

const ProjectLink: React.FC<AboutProjectLink> = ({ linkNameRef, linkRef }) => {
  const { setGuideMessage } = useProjectTemplateStore();
  const { links, addLink, deleteLink, setLink } = useProjectLinkStore();

  return (
    <>
      <label htmlFor="link" css={labelStyles.style1}>
        링크
      </label>
      <hr />
      {links.map((_, index) => {
        return (
          <div key={index} css={inputContainerStyles.style2}>
            <input
              autoComplete="off"
              ref={linkNameRef}
              onFocus={() => setGuideMessage("어떤 링크인지 적어주세요.")}
              onChange={(e) => setLink("description", e.target.value, index)}
              value={_.description}
              type="text"
              css={inputStyles.style6}
            />
            <input
              autoComplete="off"
              ref={linkRef}
              onFocus={() => setGuideMessage("링크를 넣어주세요.")}
              onChange={(e) => setLink("address", e.target.value, index)}
              value={_.address}
              id="link"
              type="text"
              css={inputStyles.style7}
            />
            {links.length > 1 && (
              <button
                onClick={() => deleteLink(index)}
                css={[deleteButtonStyles.deleteButtonStyle1]}
              >
                <Image src={Delete} alt="delete" width={20} height={20} />
              </button>
            )}
          </div>
        );
      })}
      <button onClick={() => addLink()} css={[addButtonStyle]}>
        +
      </button>
    </>
  );
};

export default ProjectLink;
