"use client";
/** @jsxImportSource @emotion/react */

import Header from "@/app/components/projectViewComponents/Header";
import ProjectName from "@/app/components/projectViewComponents/sections/ProjectName";
import PaintBackground from "@/app/components/ptpComponents/PaintBackground";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import {
  flexCenterX2,
  widthHeighVhFull,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import {
  labelStyles,
  pageStyle,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import {
  eachSpaceStyle,
  pvSectionStyle,
  styleAboutLink,
} from "@/app/styleComponents/projectViewStyles.ts/projectViewStyles";
import { stackInContainerStyle } from "@/app/styleComponents/signUpPageStyles/techStackStyles";
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
      console.log(response.data.data);
      setDynamicQuestions("color", response.data.data.themeColor);
      return response;
    },
  });
  if (loadData.isLoading)
    return (
      <pre css={[flexCenterX2, widthHeighVhFull]}>
        Getting the data for you!
      </pre>
    );
  if (loadData.isError)
    return (
      <pre css={[flexCenterX2, widthHeighVhFull]}>
        {JSON.stringify(loadData.error)}
      </pre>
    );

  return (
    <div css={[widthHeightFull, flexCenterX2, pageStyle]}>
      <Header />
      <PaintBackground />
      <section css={[pvSectionStyle]}>
        {/* <ProjectName data={data} /> */}
        <div css={[eachSpaceStyle]}>
          <label htmlFor="period" css={[labelStyles.style1]}>
            프로젝트 기간
          </label>
          <hr />
          <p>
            {data?.projectStartDate} ~ {data?.projectEndDate}
          </p>
        </div>

        <div css={[eachSpaceStyle]}>
          <label htmlFor="personnel" css={[labelStyles.style1]}>
            프로젝트 인원
          </label>
          <hr />
          <p>{data?.personnel} 명</p>
        </div>

        <div css={[eachSpaceStyle]}>
          <label htmlFor="techStacks" css={[labelStyles.style1]}>
            사용한 기술 스택 : {data?.techStack.length}개
          </label>
          <hr />
          <div>
            {data?.techStack.map((stack, index) => {
              return (
                <div key={index} css={[stackInContainerStyle]}>
                  {stack}
                </div>
              );
            })}
          </div>
        </div>

        <div css={[eachSpaceStyle]}>
          <label htmlFor="description" css={[labelStyles.style1]}>
            프로젝트 소개
          </label>
          <hr />
          <p>{data?.description}</p>
        </div>

        <div css={[eachSpaceStyle]}>
          <label htmlFor="function" css={[labelStyles.style1]}>
            구현 기능
          </label>
          <hr />
          <div>
            {data?.projectFunction.map((func, index) => {
              return (
                <div key={index}>
                  <div>{func.description}</div>
                  <div>{func.contribution}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div css={[eachSpaceStyle]}>
          <label htmlFor="problem" css={[labelStyles.style1]}>
            문제 해결
          </label>
          <hr />
          <div>
            {data?.problemAndSolution.map((prob, index) => {
              return (
                <div key={index}>
                  <div>{prob.definition}</div>
                  <div>{prob.reason}</div>
                  <div>{prob.solution}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div css={[eachSpaceStyle]}>
          <label htmlFor="link" css={[labelStyles.style1]}>
            링크
          </label>
          <hr />
          {data?.link.map((link, index) => {
            return (
              <div key={index} css={[styleAboutLink.linkContainerStyle]}>
                <p css={[styleAboutLink.linkDescriptionStyle]}>
                  {link.description}
                </p>

                <a css={[styleAboutLink.linkStyle]} href={link.address}>
                  {link.address}
                </a>
              </div>
            );
          })}
        </div>

        <div css={[eachSpaceStyle]}>
          <label htmlFor="takeaway" css={[labelStyles.style1]}>
            배운 점
          </label>
          <hr />
          <div>{data?.takeaway}</div>
        </div>
      </section>
    </div>
  );
};

export default ProjectView;
