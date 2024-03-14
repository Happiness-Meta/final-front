"use client";
/** @jsxImportSource @emotion/react */
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { previousButtonStyle } from "@/app/styleComponents/projectCreatingStyles/buttonStyles";

const PreviousButton = () => {
  const { setOrder } = useProjectStore();
  return (
    <button onClick={() => setOrder(-1)} css={[previousButtonStyle]}>
      ◀ 이전 질문
    </button>
  );
};

export default PreviousButton;
