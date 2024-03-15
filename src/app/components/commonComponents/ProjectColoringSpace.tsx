"use client";
/** @jsxImportSource @emotion/react */

import { paintColors } from "@/app/constants/paintColors";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { paintStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import React, { RefObject } from "react";

interface AboutProjectColoringSpace {
  paintColorRef: RefObject<HTMLButtonElement>;
}

const ProjectColoringSpace: React.FC<AboutProjectColoringSpace> = ({
  paintColorRef,
}) => {
  const { addDynamicQuestions, clickedColor, setClickedColor } =
    useProjectStore();

  return (
    <div
      css={[
        `display: flex; justify-content: center; align-items: center; gap: 50px;
          width: 100%; 
          height: 50px; 
          `,
      ]}
    >
      {paintColors.map((color, index) => {
        return (
          <button
            ref={paintColorRef}
            key={index}
            onClick={() => {
              addDynamicQuestions(color, 1);
              setClickedColor(color);
            }}
            css={[
              paintStyle,
              `background-color: ${color}; 
                border: ${clickedColor === color && `3px solid #FF8A00`}`,
            ]}
          ></button>
        );
      })}
    </div>
  );
};

export default ProjectColoringSpace;
