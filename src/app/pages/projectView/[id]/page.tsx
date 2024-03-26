"use client";
/** @jsxImportSource @emotion/react */

import Header from "@/app/components/projectViewComponents/Header";
import ProjectDescription from "@/app/components/projectViewComponents/sections/ProjectDescription";
import ProjectFunction from "@/app/components/projectViewComponents/sections/ProjectFunction";
import ProjectLink from "@/app/components/projectViewComponents/sections/ProjectLink";
import ProjectName from "@/app/components/projectViewComponents/sections/ProjectName";
import ProjectPeriod from "@/app/components/projectViewComponents/sections/ProjectPeriod";
import ProjectPersonnel from "@/app/components/projectViewComponents/sections/ProjectPersonnel";
import ProjectProblem from "@/app/components/projectViewComponents/sections/ProjectProblem";
import ProjectTakeAway from "@/app/components/projectViewComponents/sections/ProjectTakeAway";
import ProjectTechStack from "@/app/components/projectViewComponents/sections/ProjectTechStack";
import PaintBackground from "@/app/components/ptpComponents/PaintBackground";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import {
  flexCenterX2,
  widthHeighVhFull,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import { pageStyle } from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import { pvSectionStyle } from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { AboutGetData } from "@/app/types/aboutProjectView";
import userAxiosWithAuth from "@/app/utils/useAxiosWithAuth";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProjectView = () => {
  const { id } = useParams();

  const [data, setData] = useState<AboutGetData>();

  const { setDynamicQuestions } = useProjectStore();

  const loadData = useQuery({
    queryKey: ["getPortfolio"],
    queryFn: async () => {
      const response = await userAxiosWithAuth.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/${id}`
      );
      setData(response.data.data);
      setDynamicQuestions("color", response.data.data.themeColor);
      return response;
    },
  });
  if (loadData.isLoading)
    return (
      <pre css={[flexCenterX2, widthHeighVhFull]}>
        불러오고 있습니다. 잠시만 기다려주세요.
      </pre>
    );
  if (loadData.isError)
    return (
      <pre css={[flexCenterX2, widthHeighVhFull, `flex-direction: column;`]}>
        <div>{JSON.stringify(loadData.error.message)}</div>
        <div>
          서버에러이거나, 이 프로젝트는 회원님의 프로젝트가 아니어서 엑세스 불가
          합니다.
        </div>
      </pre>
    );

  return (
    <div css={[widthHeightFull, flexCenterX2, pageStyle]}>
      <Header />
      <PaintBackground />
      <section css={[pvSectionStyle]}>
        <ProjectName data={data} />
        <ProjectPeriod data={data} />
        <ProjectPersonnel data={data} />
        <ProjectTechStack data={data} />
        <ProjectDescription data={data} />
        <ProjectFunction data={data} />
        <ProjectProblem data={data} />
        <ProjectLink data={data} />
        <ProjectTakeAway data={data} />
      </section>
    </div>
  );
};

export default ProjectView;
