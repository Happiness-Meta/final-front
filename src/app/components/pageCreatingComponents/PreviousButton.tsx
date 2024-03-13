"use client";
/** @jsxImportSource @emotion/react */
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { previousButtonStyle } from "@/app/styleComponents/projectCreatingStyles/buttonStyles";

const PreviousButton = () => {
  const { subtractOrder } = useProjectStore();
  return (
    <button onClick={() => subtractOrder()} css={[previousButtonStyle]}>
      ◀ 이전 질문
    </button>
  );
};

export default PreviousButton;
