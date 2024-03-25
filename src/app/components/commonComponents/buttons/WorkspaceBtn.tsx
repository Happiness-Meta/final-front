"use client";
/** @jsxImportSource @emotion/react */

import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import { workspaceBtnStyle } from "@/app/styleComponents/projectTemplateStyles/ptHeaderStyles";
import { useRouter } from "next/navigation";

const WorkspaceBtn = () => {
  const router = useRouter();

  const { resetTechStack } = useSignUpPageStore();

  return (
    <button
      onClick={() => {
        resetTechStack();
        router.push("/pages/workspacePage");
      }}
      css={[workspaceBtnStyle]}
    >
      workspace
    </button>
  );
};

export default WorkspaceBtn;
