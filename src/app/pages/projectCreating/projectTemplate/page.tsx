"use client";
/** @jsxImportSource @emotion/react */

import {
  flexCenterX2,
  widthHeighVhFull,
  widthHeightFull,
} from "@/app/styleComponents/commonStyles/commonStyles";
import {
  createButtonStyle,
  pageStyle,
  sectionStyle,
  templateBottomStyle,
} from "@/app/styleComponents/projectTemplateStyles/templateStyle";
import PaintBackground from "@/app/components/ptpComponents/PaintBackground";
import ProjectColoringSpace from "@/app/components/commonComponents/ProjectColoringSpace";
import { RefObject, useEffect, useRef, useState } from "react";
import ProjectName from "@/app/components/ptpComponents/sections/ProjectName";
import ProjectPeriod from "@/app/components/ptpComponents/sections/ProjectPeriod";
import ProjectPersonnel from "@/app/components/ptpComponents/sections/ProjectPersonnel";
import ProjectDescription from "@/app/components/ptpComponents/sections/ProjectDescription";
import ProjectFunction from "@/app/components/ptpComponents/sections/ProjectFunction";
import ProjectProblem from "@/app/components/ptpComponents/sections/ProjectProblem";
import ProjectLink from "@/app/components/ptpComponents/sections/ProjectLink";
import ProjectTakeaway from "@/app/components/ptpComponents/sections/ProjectTakeaway";
import ProjectTechStack from "@/app/components/ptpComponents/sections/ProjectTechStack";
import useSignUpPageStore from "@/app/store/signUpPageStore/useSignUpPageStore";
import useProjectStore from "@/app/store/commonStore/useProjectStore";
import { useMutation } from "@tanstack/react-query";
import { CreatePortfolioDTO } from "@/app/types/portfolioDto";
import { useProjectFunctionStore } from "@/app/store/projectTemplateStore/useProjectFunctionStore";
import { useProjectProblemStore } from "@/app/store/projectTemplateStore/useProjectProblemStore";
import { useProjectLinkStore } from "@/app/store/projectTemplateStore/useProjectLinkStore";
import userAxiosWithAuth from "@/app/utils/useAxiosWithAuth";
import HeaderNo1 from "@/app/components/commonComponents/HeaderNo1";
import CongratsMessage from "@/app/components/ptpComponents/CongratsMessage";
import { useRouter } from "next/navigation";

const ProjectTemplate = () => {
  const router = useRouter();

  const nameRef: RefObject<HTMLInputElement> = useRef(null);
  const startDateRef: RefObject<HTMLInputElement> = useRef(null);
  const endDateRef: RefObject<HTMLInputElement> = useRef(null);
  const personnelRef: RefObject<HTMLInputElement> = useRef(null);
  const searchTechStackRef: RefObject<HTMLInputElement> = useRef(null);
  const descriptionRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const projectFuntionRef: RefObject<HTMLInputElement> = useRef(null);
  const projFuncContRef: RefObject<HTMLInputElement> = useRef(null);
  const pDefinitionRef: RefObject<HTMLInputElement> = useRef(null);
  const pReasonRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const pSolutionRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const linkNameRef: RefObject<HTMLInputElement> = useRef(null);
  const linkRef: RefObject<HTMLInputElement> = useRef(null);

  const [isSucceeded, setIsSucceeded] = useState(false);

  const { techStackContainer } = useSignUpPageStore();
  const { dynamicQuestionsContainer } = useProjectStore();
  const { projFuncs } = useProjectFunctionStore();
  const { projProblems } = useProjectProblemStore();
  const { links } = useProjectLinkStore();

  useEffect(() => {
    if (dynamicQuestionsContainer.name === "") {
      return nameRef.current?.focus();
    }
    if (startDateRef.current?.value === "") {
      return startDateRef.current.focus();
    }
    if (endDateRef.current?.value === "") {
      return endDateRef.current.focus();
    }
    if (personnelRef.current?.value === "") {
      return personnelRef.current.focus();
    }
    if (techStackContainer.length === 0) {
      return searchTechStackRef.current?.focus();
    }
    if (descriptionRef.current?.value === "") {
      return descriptionRef.current.focus();
    }
    if (projectFuntionRef.current?.value === "") {
      return projectFuntionRef.current.focus();
    }
    if (pDefinitionRef.current?.value === "") {
      return pDefinitionRef.current.focus();
    }
    if (pReasonRef.current?.value === "") {
      return pReasonRef.current.focus();
    }
    if (pSolutionRef.current?.value === "") {
      return pSolutionRef.current.focus();
    }
    if (linkNameRef.current?.value === "") {
      return linkNameRef.current.focus();
    }
    if (linkRef.current?.value === "") {
      return linkRef.current.focus();
    }
  }, []);

  const handleCreateProject = useMutation({
    mutationFn: async () => {
      const body: CreatePortfolioDTO = {
        isContained: false,
        themeColor: dynamicQuestionsContainer.color,
        projectName: dynamicQuestionsContainer.name,
        projectStartDate: dynamicQuestionsContainer.startDate,
        projectEndDate: dynamicQuestionsContainer.endDate,
        description: dynamicQuestionsContainer.description,
        personnel: dynamicQuestionsContainer.personnel,
        techStack: techStackContainer,
        projectFunction: projFuncs,
        problemAndSolution: projProblems,
        link: links,
        takeaway: dynamicQuestionsContainer.takeaway,
      };
      const response = await userAxiosWithAuth.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
        body
      );
      console.log(response);
      setIsSucceeded(true);
      setTimeout(() => {
        router.push(`/pages/workspacePage`);
      }, 3500);
    },
    onError: (e) => {
      console.error(e);
    },
  });

  return (
    <div css={[widthHeightFull, pageStyle]}>
      {isSucceeded && <CongratsMessage />}
      <HeaderNo1 />
      <PaintBackground />
      <section css={sectionStyle}>
        <ProjectColoringSpace />
        <ProjectName nameRef={nameRef} />
        <ProjectPeriod startDateRef={startDateRef} endDateRef={endDateRef} />
        <ProjectPersonnel personnelRef={personnelRef} />
        <ProjectTechStack searchTechStackRef={searchTechStackRef} />
        <ProjectDescription descriptionRef={descriptionRef} />
        <ProjectFunction
          projectFuntionRef={projectFuntionRef}
          projFuncContRef={projFuncContRef}
        />
        <ProjectProblem
          pDefinitionRef={pDefinitionRef}
          pReasonRef={pReasonRef}
          pSolutionRef={pSolutionRef}
        />
        <ProjectLink linkNameRef={linkNameRef} linkRef={linkRef} />
        <ProjectTakeaway />

        <div css={[flexCenterX2, templateBottomStyle]}>
          <button
            onClick={() => handleCreateProject.mutate()}
            css={[createButtonStyle]}
          >
            생성
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;
