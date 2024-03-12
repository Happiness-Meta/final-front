"use client";
/** @jsxImportSource @emotion/react */
import FirstQuestion from "@/app/components/pageCreatingComponents/questions/FirstQuestion";
import Footer from "@/app/components/pageCreatingComponents/Footer";
import Header from "@/app/components/pageCreatingComponents/Header";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import {
  flexCenterX2,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import { templateLinkStyle } from "@/app/styleComponents/projectCreatingStyles/textAndEtcStyles";
import Link from "next/link";
import SecondQuestion from "@/app/components/pageCreatingComponents/questions/SecondQuestion";
import ThirdQuestion from "@/app/components/pageCreatingComponents/questions/ThirdQuestion";
import FourthQuestion from "@/app/components/pageCreatingComponents/questions/FourthQuestion";
import FifthQuestion from "@/app/components/pageCreatingComponents/questions/FifthQuestion";

const ProjectCreating = () => {
  const { order, dynamicQuestionsContainer } = useProjectStore();

  return (
    <div
      css={[
        widthHeightFull,
        flexCenterX2,
        `box-shadow: inset 0px 0px 20px 20px ${dynamicQuestionsContainer[1]}`,
      ]}
    >
      <Header />
      <main
        css={[
          flexCenterX2,
          `flex-direction: column; width: 100%; row-gap: 20px;`,
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
          <></>
        )}

        {order !== 4 && order !== 5 ? (
          <Link href={"/"} css={[templateLinkStyle]}>
            프로젝트 템플릿으로 바로 넘어가기
          </Link>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectCreating;
