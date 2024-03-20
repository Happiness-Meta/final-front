"use client";
/** @jsxImportSource @emotion/react */

import { paintColors } from "@/app/constants/paintColors";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { paintStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import { AboutProjectColoringSpace } from "@/app/types/aboutCommonComponents";
import { css } from "@emotion/react";

const ProjectColoringSpace = () => {
  const { setDynamicQuestions, clickedColor, setClickedColor } =
    useProjectStore();

  return (
    <div
      css={[
        `display: flex; justify-content: center; align-items: center; gap: 4vw;
          width: 100%; 
          height: 50px; 
          `,
      ]}
    >
      {paintColors.map((color, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setDynamicQuestions("color", color);
              setClickedColor(color);
            }}
            css={[
              paintStyle,
              css`
                background-color: ${color};
                ${clickedColor === color && `border: 3px solid #FF8A00`}
              `,
            ]}
          ></button>
        );
      })}
    </div>
  );
};

export default ProjectColoringSpace;
