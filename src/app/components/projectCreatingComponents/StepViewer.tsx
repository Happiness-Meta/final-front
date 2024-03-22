"use client";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const steps = [[], [], [], [], []];

const StepViewer = () => {
  const { order } = useProjectStore();

  return (
    <div
      css={[
        css`
          position: absolute;
          top: 30%;
          display: flex;
          justify-content: space-between;
          width: 10%;
        `,
      ]}
    >
      {steps.map((_, index) => {
        return (
          <div
            key={index}
            css={[
              css`
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: ${order === index ? `orange` : `#80808080`};
                transform: ${order === index && `translateY(-5px)`};
                transition: 0.5s;
              `,
            ]}
          ></div>
        );
      })}
    </div>
  );
};

export default StepViewer;
