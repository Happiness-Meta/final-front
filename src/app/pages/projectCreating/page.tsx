"use client";
/** @jsxImportSource @emotion/react */

import FirstQuestion from "@/app/components/projectCreatingComponents/questions/FirstQuestion";
import Footer from "@/app/components/projectCreatingComponents/Footer";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import { templateLinkStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import SecondQuestion from "@/app/components/projectCreatingComponents/questions/SecondQuestion";
import ThirdQuestion from "@/app/components/projectCreatingComponents/questions/ThirdQuestion";
import FourthQuestion from "@/app/components/projectCreatingComponents/questions/FourthQuestion";
import FifthQuestion from "@/app/components/projectCreatingComponents/questions/FifthQuestion";
import WelcomeMessage from "@/app/components/projectCreatingComponents/messages/WelcomeMessage";
import ContinueMessage from "@/app/components/projectCreatingComponents/messages/ContinueMessage";
import Link from "next/link";

const ProjectCreating = () => {
  const { order, dynamicQuestionsContainer } = useProjectStore();
  return (
    <div
      css={[
        widthHeightFull,
        `transition: box-shadow .3s; 
        ${
          order !== 5
            ? `box-shadow: inset 0px 0px 20px 20px ${dynamicQuestionsContainer[1]}`
            : undefined
        }`,
      ]}
    >
      {order !== 4 && 5 ? <WelcomeMessage /> : undefined}
      <main
        css={[
          flexCenterX2,
          `flex-direction: column; width: 100%; height: 100vh; row-gap: 20px;`,
        ]}
      >
        {order === 0 ? (
          <FirstQuestion />
        ) : order === 1 ? (
          <SecondQuestion />
        ) : order === 2 ? (
          <ThirdQuestion />
        ) : order === 3 ? (
          <FourthQuestion />
        ) : order === 4 ? (
          <FifthQuestion />
        ) : (
          <ContinueMessage />
        )}

        {order !== 4 && 5 ? (
          <Link
            href={"./projectCreating/projectTemplate"}
            css={[templateLinkStyle]}
          >
            프로젝트 템플릿으로 바로 넘어가기
          </Link>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectCreating;
