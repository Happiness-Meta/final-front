"use client";
/** @jsxImportSource @emotion/react */

import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { commonColor } from "@/app/styleComponents/commonStyles/commonStyles";
import { paintAni } from "@/app/styleComponents/commonStyles/keyframes";
import { css } from "@emotion/react";

const PaintBackground = () => {
  const { dynamicQuestionsContainer } = useProjectStore();

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          45deg,
          ${dynamicQuestionsContainer.color},
          ${commonColor.representative}
        );
        animation: ${paintAni} 1s forwards;
      `}
    ></div>
  );
};

export default PaintBackground;
