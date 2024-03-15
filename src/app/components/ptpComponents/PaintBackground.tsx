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
        background: linear-gradient(
          45deg,
          ${dynamicQuestionsContainer[1] !== `#FFFFFF`
            ? `${dynamicQuestionsContainer[1]}`
            : `#808080`},
          ${commonColor.representative}
        );
        transition: 1s;
        animation: ${paintAni} 2s forwards;
      `}
    ></div>
  );
};

export default PaintBackground;
