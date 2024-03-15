"use client";
/** @jsxImportSource @emotion/react */

import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { nextButtonStyle } from "@/app/styleComponents/projectCreatingStyles/buttonStyles";

const NextButton = () => {
  const { setOrder } = useProjectStore();
  return (
    <button onClick={() => setOrder(1)} css={[nextButtonStyle]}>
      다음 질문 ▶
    </button>
  );
};

export default NextButton;
